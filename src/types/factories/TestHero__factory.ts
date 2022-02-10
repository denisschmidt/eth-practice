/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestHero, TestHeroInterface } from "../TestHero";

const _abi = [
  {
    inputs: [
      {
        internalType: "enum Hero.Class",
        name: "heroType",
        type: "uint8",
      },
    ],
    name: "createHero",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "generateRandom",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "hero",
        type: "uint256",
      },
    ],
    name: "getDex",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "hero",
        type: "uint256",
      },
    ],
    name: "getHealth",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getHeroes",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "hero",
        type: "uint256",
      },
    ],
    name: "getIntellect",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "hero",
        type: "uint256",
      },
    ],
    name: "getMagic",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "hero",
        type: "uint256",
      },
    ],
    name: "getStrength",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "r",
        type: "uint256",
      },
    ],
    name: "setRandom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610b08806100206000396000f3fe6080604052600436106100865760003560e01c80635e7e236d116100595780635e7e236d1461016d578063729e7cf6146101895780639a8d2882146101b2578063b5f0f1b7146101dd578063e53fbda61461021a57610086565b806302e4af011461008b5780633acfcaa7146100b65780633fc70f2c146100f35780635bc0a62314610130575b600080fd5b34801561009757600080fd5b506100a0610257565b6040516100ad91906108d9565b60405180910390f35b3480156100c257600080fd5b506100dd60048036038101906100d891906107a8565b610261565b6040516100ea91906108f4565b60405180910390f35b3480156100ff57600080fd5b5061011a600480360381019061011591906107a8565b610272565b60405161012791906108f4565b60405180910390f35b34801561013c57600080fd5b50610157600480360381019061015291906107a8565b610283565b60405161016491906108f4565b60405180910390f35b6101876004803603810190610182919061077f565b610294565b005b34801561019557600080fd5b506101b060048036038101906101ab91906107a8565b610695565b005b3480156101be57600080fd5b506101c761069f565b6040516101d49190610897565b60405180910390f35b3480156101e957600080fd5b5061020460048036038101906101ff91906107a8565b610733565b60405161021191906108f4565b60405180910390f35b34801561022657600080fd5b50610241600480360381019061023c91906107a8565b610744565b60405161024e91906108f4565b60405180910390f35b6000600154905090565b6000601f601183901c169050919050565b6000601f600783901c169050919050565b6000601f601683901c169050919050565b66b1a2bc2ec500003410156102de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102d5906108b9565b60405180910390fd5b6000600567ffffffffffffffff811115610321577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405190808252806020026020018201604052801561034f5781602001602082028036833780820191505090505b50905060028160008151811061038e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010181815250506007816001815181106103d6577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001018181525050600c8160028151811061041e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001018181525050601181600381518110610466577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010181815250506016816004815181106104ae577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101818152505060008260028111156104f5577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b90506000600590505b600081610509610257565b61051391906109f3565b90506000600183600d6105269190610959565b61052e610257565b61053891906109f3565b6105429190610959565b905084828151811061057d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015181901b841793508280610597906109c9565b9350508483815181106105d3577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151858381518110610614577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010181815250505050600081116104fe576000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082908060018154018082558091505060019003906000526020600020016000909190919091505550505050565b8060018190555050565b60606000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548060200260200160405190810160405280929190818152602001828054801561072957602002820191906000526020600020905b815481526020019060010190808311610715575b5050505050905090565b6000601f600c83901c169050919050565b6000601f600283901c169050919050565b60008135905061076481610aab565b92915050565b60008135905061077981610abb565b92915050565b60006020828403121561079157600080fd5b600061079f84828501610755565b91505092915050565b6000602082840312156107ba57600080fd5b60006107c88482850161076a565b91505092915050565b60006107dd838361086a565b60208301905092915050565b60006107f48261091f565b6107fe8185610937565b93506108098361090f565b8060005b8381101561083a57815161082188826107d1565b975061082c8361092a565b92505060018101905061080d565b5085935050505092915050565b6000610854601683610948565b915061085f82610a82565b602082019050919050565b610873816109af565b82525050565b610882816109af565b82525050565b610891816109b9565b82525050565b600060208201905081810360008301526108b181846107e9565b905092915050565b600060208201905081810360008301526108d281610847565b9050919050565b60006020820190506108ee6000830184610879565b92915050565b60006020820190506109096000830184610888565b92915050565b6000819050602082019050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610964826109af565b915061096f836109af565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156109a4576109a3610a24565b5b828201905092915050565b6000819050919050565b600063ffffffff82169050919050565b60006109d4826109af565b915060008214156109e8576109e7610a24565b5b600182039050919050565b60006109fe826109af565b9150610a09836109af565b925082610a1957610a18610a53565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f506c656173652073656e64206d6f7265206d6f6e657900000000000000000000600082015250565b60038110610ab857600080fd5b50565b610ac4816109af565b8114610acf57600080fd5b5056fea26469706673582212200f7b2567924aff06a9692f56a3ba7c8203b1ae49f1ac5a8c51621c41b7d9538e64736f6c63430008040033";

export class TestHero__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestHero> {
    return super.deploy(overrides || {}) as Promise<TestHero>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestHero {
    return super.attach(address) as TestHero;
  }
  connect(signer: Signer): TestHero__factory {
    return super.connect(signer) as TestHero__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestHeroInterface {
    return new utils.Interface(_abi) as TestHeroInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestHero {
    return new Contract(address, _abi, signerOrProvider) as TestHero;
  }
}