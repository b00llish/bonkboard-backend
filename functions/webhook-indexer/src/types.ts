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

type createRaffleIxArguments = (typeof FOXY_RAFFLE_IDL.instructions)[1]['args'];
export type createRaffleInstructionDecoded = {
  [K in createRaffleIxArguments[number] as K['name']]: DecodeType<
    K['type'],
    IdlTypes<FoxyRaffleProgram>
  >;
};
