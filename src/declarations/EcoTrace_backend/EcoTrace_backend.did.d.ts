import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Evento {
  'ubicacion' : string,
  'categoria' : string,
  'hora' : string,
  'fecha' : string,
}
export type Identificador = bigint;
export interface _SERVICE {
  'consultEvento' : ActorMethod<[Identificador], [] | [Evento]>,
  'consultEventos' : ActorMethod<[], Array<[bigint, Evento]>>,
  'saveEvento' : ActorMethod<[Evento, Identificador], Evento>,
  'whoami' : ActorMethod<[], Principal>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
