/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface HeroInterface extends ethers.utils.Interface {
  functions: {
    "createHero(uint8)": FunctionFragment;
    "generateRandom()": FunctionFragment;
    "getDex(uint256)": FunctionFragment;
    "getHealth(uint256)": FunctionFragment;
    "getHeroes()": FunctionFragment;
    "getIntellect(uint256)": FunctionFragment;
    "getMagic(uint256)": FunctionFragment;
    "getStrength(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "createHero",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "generateRandom",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getHealth",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getHeroes", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getIntellect",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getMagic",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getStrength",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "createHero", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "generateRandom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getDex", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getHealth", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getHeroes", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getIntellect",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getMagic", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getStrength",
    data: BytesLike
  ): Result;

  events: {};
}

export class Hero extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: HeroInterface;

  functions: {
    createHero(
      heroType: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    generateRandom(overrides?: CallOverrides): Promise<[BigNumber]>;

    getDex(hero: BigNumberish, overrides?: CallOverrides): Promise<[number]>;

    getHealth(hero: BigNumberish, overrides?: CallOverrides): Promise<[number]>;

    getHeroes(overrides?: CallOverrides): Promise<[BigNumber[]]>;

    getIntellect(
      hero: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    getMagic(hero: BigNumberish, overrides?: CallOverrides): Promise<[number]>;

    getStrength(
      hero: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;
  };

  createHero(
    heroType: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  generateRandom(overrides?: CallOverrides): Promise<BigNumber>;

  getDex(hero: BigNumberish, overrides?: CallOverrides): Promise<number>;

  getHealth(hero: BigNumberish, overrides?: CallOverrides): Promise<number>;

  getHeroes(overrides?: CallOverrides): Promise<BigNumber[]>;

  getIntellect(hero: BigNumberish, overrides?: CallOverrides): Promise<number>;

  getMagic(hero: BigNumberish, overrides?: CallOverrides): Promise<number>;

  getStrength(hero: BigNumberish, overrides?: CallOverrides): Promise<number>;

  callStatic: {
    createHero(
      heroType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    generateRandom(overrides?: CallOverrides): Promise<BigNumber>;

    getDex(hero: BigNumberish, overrides?: CallOverrides): Promise<number>;

    getHealth(hero: BigNumberish, overrides?: CallOverrides): Promise<number>;

    getHeroes(overrides?: CallOverrides): Promise<BigNumber[]>;

    getIntellect(
      hero: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    getMagic(hero: BigNumberish, overrides?: CallOverrides): Promise<number>;

    getStrength(hero: BigNumberish, overrides?: CallOverrides): Promise<number>;
  };

  filters: {};

  estimateGas: {
    createHero(
      heroType: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    generateRandom(overrides?: CallOverrides): Promise<BigNumber>;

    getDex(hero: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getHealth(
      hero: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getHeroes(overrides?: CallOverrides): Promise<BigNumber>;

    getIntellect(
      hero: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMagic(hero: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getStrength(
      hero: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createHero(
      heroType: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    generateRandom(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getDex(
      hero: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getHealth(
      hero: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getHeroes(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getIntellect(
      hero: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMagic(
      hero: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStrength(
      hero: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
