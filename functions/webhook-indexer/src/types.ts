import {
  DecodeType,
  IdlTypes,
  TypeDef,
} from '@project-serum/anchor/dist/cjs/program/namespace/types';
import {PublicKey, TransactionResponse} from '@solana/web3.js';
import {FoxyRaffleProgram, FOXY_RAFFLE_IDL} from './IDL';

type SubstituteType<T, A, B> = T extends A
  ? B
  : T extends {}
  ? {[K in keyof T]: SubstituteType<T[K], A, B>}
  : T;
type PubkeyToStringConverter<T> = SubstituteType<T, PublicKey, string>;
type FunctionToNeverConverter<T> = SubstituteType<T, Function, never>;

export type TransactionResponseJson = PubkeyToStringConverter<
  FunctionToNeverConverter<TransactionResponse>
>;

export type Raffle = TypeDef<
  (typeof FOXY_RAFFLE_IDL.accounts)[0],
  IdlTypes<FoxyRaffleProgram>
>;

export type Entrants = TypeDef<
  (typeof FOXY_RAFFLE_IDL.accounts)[1],
  IdlTypes<FoxyRaffleProgram>
>;

export type Entry = TypeDef<
  (typeof FOXY_RAFFLE_IDL.accounts)[2],
  IdlTypes<FoxyRaffleProgram>
>;

export type Raffler = TypeDef<
  (typeof FOXY_RAFFLE_IDL.accounts)[3],
  IdlTypes<FoxyRaffleProgram>
>;

type createRaffleIxArguments = (typeof FOXY_RAFFLE_IDL.instructions)[0]['args'];
export type createRaffleInstructionDecoded = {
  [K in createRaffleIxArguments[number] as K['name']]: DecodeType<
    K['type'],
    IdlTypes<FoxyRaffleProgram>
  >;
};

// type extendRaffleIxArguments = (typeof FOXY_RAFFLE_IDL.instructions)[1]['args'];
// type updateRaffleIxArguments = (typeof FOXY_RAFFLE_IDL.instructions)[2]['args'];

type buyTicketsIxArguments = (typeof FOXY_RAFFLE_IDL.instructions)[3]['args'];
export type buyTicketsInstructionDecoded = {
  [K in buyTicketsIxArguments[number] as K['name']]: DecodeType<
    K['type'],
    IdlTypes<FoxyRaffleProgram>
  >;
};

type revealWinnersIxArguments = (typeof FOXY_RAFFLE_IDL.instructions)[4]['args'];
export type revealWinnersInstructionDecoded = {
  [K in revealWinnersIxArguments[number] as K['name']]: DecodeType<
    K['type'],
    IdlTypes<FoxyRaffleProgram>
  >;
};

type closeEntrantsIxArguments = (typeof FOXY_RAFFLE_IDL.instructions)[5]['args'];
export type closeEntrantsInstructionDecoded = {
  [K in closeEntrantsIxArguments[number] as K['name']]: DecodeType<
    K['type'],
    IdlTypes<FoxyRaffleProgram>
  >;
};

type addPrizeV2IxArguments = (typeof FOXY_RAFFLE_IDL.instructions)[6]['args'];
export type addPrizeV2InstructionDecoded = {
  [K in addPrizeV2IxArguments[number] as K['name']]: DecodeType<
    K['type'],
    IdlTypes<FoxyRaffleProgram>
  >;
};


// type cancelRaffleV2IxArguments = (typeof FOXY_RAFFLE_IDL.instructions)[7]['args'];
// type claimPrizeV2IxArguments = (typeof FOXY_RAFFLE_IDL.instructions)[8]['args'];
// type collectProceedsV2IxArguments = (typeof FOXY_RAFFLE_IDL.instructions)[9]['args'];
