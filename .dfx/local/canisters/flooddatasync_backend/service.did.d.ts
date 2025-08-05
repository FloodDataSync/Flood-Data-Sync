import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface FloodReport {
  'imageData' : Uint8Array | number[],
  'description' : string,
  'floodType' : string,
  'timestamp' : string,
  'location' : Location,
}
export interface Location {
  'latitude' : number,
  'longitude' : number,
  'accuracy' : number,
}
export interface _SERVICE {
  'getAllReports' : ActorMethod<[], Array<FloodReport>>,
  'submitReport' : ActorMethod<[FloodReport], string>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
