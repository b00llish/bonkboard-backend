import {BorshCoder, Idl} from '@project-serum/anchor';
import {Connection, PublicKey} from '@solana/web3.js';
import {FOXY_RAFFLE_IDL} from './IDL';

export const FR_CODER = new BorshCoder(FOXY_RAFFLE_IDL);
export const CONNECTION = new Connection(
  process.env.SOLANA_RPC ?? 'https://solana-mainnet.rpc.extrnode.com'
);
export const FR_PROGRAM_ID = new PublicKey(
  '9ehXDD5bnhSpFVRf99veikjgq8VajtRH7e3D9aVPLqYd'
);

export function getAccountKey(
  idl: Idl,
  accountName: string,
  ixName: string,
  ixAccountKeys: number[],
  txAccountKeys: (PublicKey | string)[]
): PublicKey {
  for (let i = 0; i < idl.instructions.length; i++) {
    const idlIx = idl.instructions[i];

    if (idlIx.name === ixName) {
      const accountIndex = [...idlIx.accounts].findIndex(
        a => a.name === accountName
      );

      if (accountIndex >= 0) {
        return new PublicKey(txAccountKeys[ixAccountKeys[accountIndex]]);
      }
    }
  }

  throw new Error(`Account not found ${accountName}`);
}
