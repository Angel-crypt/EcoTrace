import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export type Arete = string;
export interface DatosCabeza {
  'destino' : string,
  'mejoramientoGenetico' : string,
  'raza' : string,
  'ascendencia' : string,
  'fechaNacimiento' : string,
  'dieta' : string,
  'registroEnfermedades' : string,
  'propietario' : string,
}
export interface _SERVICE {
  'consultCabeza' : ActorMethod<[Arete], [] | [DatosCabeza]>,
  'consultGanado' : ActorMethod<[], Array<[string, DatosCabeza]>>,
  'deleteCabeza' : ActorMethod<[Arete], string>,
  'saveCabeza' : ActorMethod<[DatosCabeza, Arete], DatosCabeza>,
  'updateDatosGanado' : ActorMethod<[Arete, DatosCabeza], string>,
  'whoami' : ActorMethod<[], Principal>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
