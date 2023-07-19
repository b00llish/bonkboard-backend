import {Request, Response} from '@google-cloud/functions-framework';
import {bs58} from '@project-serum/anchor/dist/cjs/utils/bytes';
import {firestore} from 'firebase-admin';
import {getFirestore} from 'firebase-admin/firestore';
import {app} from './firebase';
import {FOXY_RAFFLE_IDL} from './IDL';
import {
  TransactionResponseJson,
  createRaffleInstructionDecoded,
  buyTicketsInstructionDecoded,
  addPrizeV2InstructionDecoded,
  revealWinnersInstructionDecoded,
  closeEntrantsInstructionDecoded,
} from './types';
import {FR_CODER, FR_PROGRAM_ID, CONNECTION, getAccountKey} from './utils';

import axios from 'axios';
// This could be a UUID or any secret token.
const secretToken = 'your-secret-token-here';

// import './env';

export async function handleWebhookIndexer(req: Request, res: Response) {
  const txResponses: TransactionResponseJson[] = req.body;

  for (const txResponse of txResponses) {
    const signature = txResponse.transaction.signatures[0];
    // const slot = txResponse.slot;
    const createdTimestamp = txResponse.blockTime;

    if (txResponse.meta && txResponse.meta.err !== null) {
      continue;
    }

    console.log(`Processing tx: ${signature}`);

    const accountKeys = txResponse.transaction.message.accountKeys;
    const instructions = txResponse.transaction.message.instructions;

    for (const ix of instructions) {
      const ixProgram = accountKeys[ix.programIdIndex];

      if (ixProgram !== FR_PROGRAM_ID.toString()) {
        // console.log(`Program ID ${ixProgram} is not Foxy Raffle`);
        continue;
      }

      const decodedIx = FR_CODER.instruction.decode(bs58.decode(ix.data));


      if (!decodedIx) {
        console.log(`Failed to decode instruction for signature ${signature}`);
        continue;
      }

      if (decodedIx.name === 'createRaffle') {
        const createRaffleIx = decodedIx.data as createRaffleInstructionDecoded;
        console.log(`createRaffleIx: ${JSON.stringify(createRaffleIx)}`);

        const host_wallet = getAccountKey(
          FOXY_RAFFLE_IDL,
          'creator',
          'createRaffle',
          ix.accounts,
          accountKeys
        );

        console.log(`Host wallet: ${host_wallet.toString()}`);

        // unsure
        // const raffler = getAccountKey(
        //   FOXY_RAFFLE_IDL,
        //   'raffler',
        //   'createRaffle',
        //   ix.accounts,
        //   accountKeys
        // );

        // console.log(`raffler: ${raffler.toString()}`);

        const raffleAccount = getAccountKey(
          FOXY_RAFFLE_IDL,
          'raffle',
          'createRaffle',
          ix.accounts,
          accountKeys
        );

        console.log(`Raffle account: ${raffleAccount.toString()}`);

        const proceedsMint = getAccountKey(
          FOXY_RAFFLE_IDL,
          'proceedsMint',
          'createRaffle',
          ix.accounts,
          accountKeys
          );

        console.log(`Proceeds mint: ${proceedsMint.toString()}`);

        const endTimestamp = createRaffleIx.endTimestamp;
        console.log(`End timestamp: ${endTimestamp.toString()}`);

        const ticketPrice = createRaffleIx.ticketPrice;
        console.log(`Ticket price: ${ticketPrice.toString()}`);

        const maxEntrants = createRaffleIx.maxEntrants;
        console.log(`Max entrants: ${maxEntrants.toString()}`);

        // probably a limit on the number of tickets a user can buy
        // const limit = createRaffleIx.limit;
        // console.log(`Limit: ${limit.toString()}`);

        let raffle = {
          
          host_wallet: host_wallet.toString(),
          // creator: creator.toString(),
          account: raffleAccount.toString(),
          payment_mint: proceedsMint.toString(),
          end_epoch: endTimestamp.toString(),
          tix_price: ticketPrice.toString(),
          tix_total: maxEntrants.toString(),
          // limit: limit.toString(),
          tx_id: signature.toString(),
          // slot: slot.toString(),
          start_epoch: createdTimestamp ? createdTimestamp.toString() : undefined,
        };

        if (createdTimestamp != null) {
          raffle['start_epoch'] = createdTimestamp.toString();
          } else {
          console.log(`createdTimestamp is null or undefined for tx: ${signature}`);
        }

        axios.post(
          'https://raffflytics.ngrok.dev/rcv-raffles-gcp',
          {
            type: 'createRaffle',
            data: raffle,
          },
          {
            headers: {
                'Authorization': `Bearer ${secretToken}`,
            }
          }
          )
          .then((res) => {
              console.log(`Status: ${res.status}`);
              console.log('Body: ', res.data);
          }).catch((err) => {
              console.error(err);
          });

        // const proceedsMint = getAccountKey(
        //   FOXY_RAFFLE_IDL,
        //   'raffle',
        //   'proceedsMint',
        //   ix.accounts,
        //   accountKeys
        // );
        
        // console.log(`Proceeds mint: ${proceedsMint.toString()}`);


      }

      if (decodedIx.name === 'addPrizeV2') {
        const addPrizeIx = decodedIx.data as addPrizeV2InstructionDecoded;
        console.log(`buyTicketsIx: ${JSON.stringify(addPrizeIx)}`);

        const raffleAccount = getAccountKey(
          FOXY_RAFFLE_IDL,
          'raffle',
          'addPrizeV2',
          ix.accounts,
          accountKeys
        );

        console.log(`Added prize to raffle: ${raffleAccount.toString()}`);

        const prizeMint = getAccountKey(
          FOXY_RAFFLE_IDL,
          'prizeMint',
          'addPrizeV2',
          ix.accounts,
          accountKeys
        );

        console.log(`NFT mint: ${prizeMint.toString()}`);

        // does not appear to actually be metadata, e.g., Cc2ML8qu1AktwiFhvLPJQpy2AT4k2VpMWw3gggx1eTgr
        // const nftMetadata = getAccountKey(
        //   FOXY_RAFFLE_IDL,
        //   'nftMetadata',
        //   'addPrizeV2',
        //   ix.accounts,
        //   accountKeys
        // );

        // console.log(`NFT metadata: ${nftMetadata.toString()}`);

        // also not sure what this is, e.g., HWdrD3octHGH53R9F9WiNqVjai93C6dLuqdnXicxGWL6
        // const edition = getAccountKey(
        //   FOXY_RAFFLE_IDL,
        //   'edition',
        //   'addPrizeV2',
        //   ix.accounts,
        //   accountKeys
        // );

        // console.log(`NFT edition: ${edition.toString()}`);

        let nft = {
          account: raffleAccount.toString(),
          nft_mint: prizeMint.toString(),
          // metadata: nftMetadata.toString(),
          // tx_id: signature.toString(),
        };


        axios.post('https://raffflytics.ngrok.dev/rcv-raffles-gcp',
        {
          type: 'addPrize',
          data: nft,
        }, 
        {
        headers: {
            'Authorization': `Bearer ${secretToken}`,
        }
        })
        .then((res) => {
            console.log(`Status: ${res.status}`);
            console.log('Body: ', res.data);
        }).catch((err) => {
            console.error(err);
        }); 
      }
      
      if (decodedIx.name === 'buyTickets') {
        const buyTicketsIx = decodedIx.data as buyTicketsInstructionDecoded;
        // console.log(`buyTicketsIx: ${JSON.stringify(buyTicketsIx)}`);
    
        let pmt_mint: string | undefined = undefined;
        let pmt_decimals: string | undefined = undefined;

        const postTokenBalances = txResponse?.meta?.postTokenBalances;
        if (postTokenBalances && postTokenBalances.length > 0) {
            pmt_mint = postTokenBalances[0]?.mint?.toString();
            pmt_decimals = postTokenBalances[0]?.uiTokenAmount?.decimals?.toString();
    
            console.log(`Payment mint: ${pmt_mint}`);
            console.log(`Payment decimals: ${pmt_decimals}`);
        } else {
            console.log(`postTokenBalances is empty or doesn't exist.`);
        }

        const raffleAccount = getAccountKey(
          FOXY_RAFFLE_IDL,
          'raffle',
          'buyTickets',
          ix.accounts,
          accountKeys
        );

        // console.log(`Raffle purchased: ${raffleAccount.toString()}`);
        
        // buyer token account:
        // const entrants = getAccountKey(
        //   FOXY_RAFFLE_IDL,
        //   'entrants',
        //   'buyTickets',
        //   ix.accounts,
        //   accountKeys
        // );

        // console.log(`Entrants (buyTickets): ${entrants.toString()}`);

        // raffle token account:
        // const proceeds = getAccountKey(
        //   FOXY_RAFFLE_IDL,
        //   'proceeds',
        //   'buyTickets',
        //   ix.accounts,
        //   accountKeys
        // );

        // console.log(`Proceeds (buyTickets): ${proceeds.toString()}`);
        
        // ??? perhaps ticket account?
        // const entry = getAccountKey(
        //   FOXY_RAFFLE_IDL,
        //   'entry',
        //   'buyTickets',
        //   ix.accounts,
        //   accountKeys
        // );

        // console.log(`Entry (buyTickets): ${entry.toString()}`);

        // buyer token account:
        // const buyerTokenAccount = getAccountKey(
        //   FOXY_RAFFLE_IDL,
        //   'buyerTokenAccount',
        //   'buyTickets',
        //   ix.accounts,
        //   accountKeys
        // );

        // console.log(`Buyer token account (buyTickets): ${buyerTokenAccount.toString()}`);

        const buyerTransferAuthority = getAccountKey(
            FOXY_RAFFLE_IDL,
            'buyerTransferAuthority',
            'buyTickets',
            ix.accounts,
            accountKeys
          );

        // console.log(`Buyer transfer authority (buyTickets): ${buyerTransferAuthority.toString()}`);

        // literally the token program
        // const tokenProgram = getAccountKey(
        //   FOXY_RAFFLE_IDL,
        //   'tokenProgram',
        //   'buyTickets',
        //   ix.accounts,
        //   accountKeys
        // );

        // console.log(`Token program (buyTickets): ${tokenProgram.toString()}`);

        // number of tickets (pretty sure):
        const amount = buyTicketsIx.amount;
        // console.log(`Purchase amount: ${amount.toString()}`);

        // price per ticket:
        const price = buyTicketsIx.price;
        // console.log(`Purchase price: ${price.toString()}`);

        let buy = {
          //dt_buy: // calculated from epoch_time
          buyer_wallet: buyerTransferAuthority.toString(),
          account: raffleAccount.toString(),
          // amt_buy: // calculated from amount and price
          tx_id: signature.toString(),        
          epoch_time: createdTimestamp ? createdTimestamp.toString() : undefined,
          payment_mint: pmt_mint ? pmt_mint.toString() : undefined,
          payment_decimals: pmt_decimals ? pmt_decimals.toString() : undefined,
          tix_price: price.toString(),
          tix_buy: amount.toString(),
        };

        if (createdTimestamp != null) {
          buy['epoch_time'] = createdTimestamp.toString();
        } else {
          console.log(`createdTimestamp is null or undefined for tx: ${signature}`);
        }

        axios.post('https://raffflytics.ngrok.dev/rcv-buys-gcp', buy, {
        headers: {
            'Authorization': `Bearer ${secretToken}`,
        }
        })
        .then((res) => {
            console.log(`Status: ${res.status}`);
            console.log('Body: ', res.data);
        }).catch((err) => {
            console.error(err);
        });
    }
    
    if (decodedIx.name === 'revealWinners') {
      const revealWinnersIx = decodedIx.data as revealWinnersInstructionDecoded;
      console.log(`revealWinnersIx: ${JSON.stringify(revealWinnersIx)}`);
      
      const raffle = getAccountKey(
          FOXY_RAFFLE_IDL,
          'raffle',
          'revealWinners',
          ix.accounts,
          accountKeys
        );

      console.log(`Winner of: ${raffle.toString()}`);

      const entrants = getAccountKey(
        FOXY_RAFFLE_IDL,
        'entrants',
        'revealWinners',
        ix.accounts,
        accountKeys
      );

      console.log(`entrants (winner): ${entrants.toString()}`);

      const signer = getAccountKey(
        FOXY_RAFFLE_IDL,
        'signer',
        'revealWinners',
        ix.accounts,
        accountKeys
      );

      console.log(`signer (winner): ${signer.toString()}`);
    }
    
    if (decodedIx.name === 'closeEntrants') {
      const closeEntrantsIx = decodedIx.data as closeEntrantsInstructionDecoded;
      console.log(`closeEntrantsIx: ${JSON.stringify(closeEntrantsIx)}`);
      
      const raffle = getAccountKey(
          FOXY_RAFFLE_IDL,
          'raffle',
          'closeEntrants',
          ix.accounts,
          accountKeys
        );

      console.log(`Raffle (closeEntrants): ${raffle.toString()}`);

    // if not a category handled above, log the instruction data
    console.log(`Decoded instruction: ${JSON.stringify(decodedIx)}`);
    
      }
      // this code below was all within the create raffle end bracket
        // let lastSeenSlot = 0;
        // let encodedBoardState: string | undefined = undefined;
        // while (lastSeenSlot < slot) {
        //   const result = await CONNECTION.getAccountInfoAndContext(
        //     boardAccount,
        //     'confirmed'
        //   );

        //   encodedBoardState = bs58.encode(result.value!.data);
        //   lastSeenSlot = result.context.slot;

        //   if (lastSeenSlot >= slot) {
        //     break;
        //   } else {
        //     await new Promise(resolve => setTimeout(resolve, 250));
        //   }
        // }

        // const fs = getFirestore(app);
        // const userRef = fs.collection('users').doc(user.toString());
        // const statsRef = fs.collection('stats').doc('mainnet-beta');
        // const activitiesRef = fs.collection('activity').doc(signature);
        // const boardRef = fs.collection('board').doc('mainnet-beta');

        // const numOfPixelsPlaced = drawIx.pixels.length;
        // const bonkBurned = 0;
        // const bonkPaid = drawIx.pixels.length * 10_000;

        // for (const pixel of drawIx.pixels) {
        //   console.log(
        //     `User: ${user}, Pixel position: ${pixel.coord.x}, ${pixel.coord.y}, Pixel color: ${pixel.color.r} ${pixel.color.g} ${pixel.color.b}`
        //   );
        // }

        // await Promise.all([
        //   activitiesRef.set({
        //     slot: slot,
        //     signature: signature,
        //     timestamp: blocktime,
        //     user: user.toString(),
        //     activities: drawIx.pixels.map(pixel => ({
        //       x: pixel.coord.x,
        //       y: pixel.coord.y,
        //       rgb: `rgb(${pixel.color.r}, ${pixel.color.g}, ${pixel.color.b})`,
        //     })),
        //   }),
        //   userRef.set(
        //     {
        //       lastUpdatedSlot: slot,
        //       lastUpdatedSignature: signature,
        //       lastUpdated: blocktime,
        //       pixelsPlaced: firestore.FieldValue.increment(numOfPixelsPlaced),
        //       bonkBurned: firestore.FieldValue.increment(bonkBurned),
        //       bonkPaid: firestore.FieldValue.increment(bonkPaid),
        //     },
        //     {merge: true}
        //   ),
        //   statsRef.set(
        //     {
        //       pixelsPlaced: firestore.FieldValue.increment(numOfPixelsPlaced),
        //       bonkBurned: firestore.FieldValue.increment(bonkBurned),
        //       bonkPaid: firestore.FieldValue.increment(bonkPaid),
        //     },
        //     {merge: true}
        //   ),
        //   boardRef.set({
        //     lastUpdatedSlot: slot,
        //     lastUpdatedSignature: signature,
        //     lastUpdated: blocktime,
        //     boardState: encodedBoardState,
        //   }),
        // ]);
      
    }
  }

  res.send('OK');
}
