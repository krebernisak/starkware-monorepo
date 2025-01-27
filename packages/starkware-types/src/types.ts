export interface AccountParams {
  layer: string;
  application: string;
  index: string;
}

export interface ETHTokenData {
  quantum: string;
}

export interface ERC20TokenData {
  quantum: string;
  tokenAddress: string;
}

export interface ERC721TokenData {
  tokenId: string;
  tokenAddress: string;
}

export type TokenTypes = 'ETH' | 'ERC20' | 'ERC721';

export type TokenData = ETHTokenData | ERC20TokenData | ERC721TokenData;

export interface Token {
  type: TokenTypes;
  data: TokenData;
}

export interface TransferParams {
  starkKey: string;
  vaultId: string;
}

export interface OrderParams {
  vaultId: string;
  token: Token;
  quantizedAmount: string;
}

export namespace MethodParams {
  export type StarkAccountParams = {
    layer: string;
    application: string;
    index: string;
  };
  export type StarkRegisterUserParams = {
    contractAddress: string;
    ethKey: string;
    starkKey: string;
    operatorSignature: string;
  };
  export type StarkDepositParams = {
    contractAddress: string;
    starkKey: string;
    quantizedAmount: string;
    token: Token;
    vaultId: string;
  };
  export type StarkDepositCancelParams = {
    contractAddress: string;
    starkKey: string;
    token: Token;
    vaultId: string;
  };
  export type StarkDepositReclaimParams = {
    contractAddress: string;
    starkKey: string;
    token: Token;
    vaultId: string;
  };
  export type StarkTransferParams = {
    from: TransferParams;
    to: TransferParams;
    token: Token;
    quantizedAmount: string;
    nonce: string;
    expirationTimestamp: string;
  };
  export type StarkCreateOrderParams = {
    starkKey: string;
    sell: OrderParams;
    buy: OrderParams;
    nonce: string;
    expirationTimestamp: string;
  };
  export type StarkWithdrawParams = {
    contractAddress: string;
    starkKey: string;
    token: Token;
  };
  export type StarkWithdrawToParams = {
    contractAddress: string;
    starkKey: string;
    token: Token;
    recipient: string;
  };
  export type StarkFullWithdrawalParams = {
    contractAddress: string;
    starkKey: string;
    vaultId: string;
  };
  export type StarkFreezeParams = {
    contractAddress: string;
    starkKey: string;
    vaultId: string;
  };
  export type StarkVerifyEscapeParams = {
    contractAddress: string;
    starkKey: string;
    proof: string[];
  };
  export type StarkEscapeParams = {
    contractAddress: string;
    starkKey: string;
    vaultId: string;
    token: Token;
    quantizedAmount: string;
  };
  export type StarkDepositNftParams = {
    contractAddress: string;
    starkKey: string;
    assetType: string;
    vaultId: string;
    token: Token;
  };
  export type StarkDepositNftReclaimParams = {
    contractAddress: string;
    starkKey: string;
    assetType: string;
    vaultId: string;
    token: Token;
  };
  export type StarkWithdrawAndMintParams = {
    contractAddress: string;
    starkKey: string;
    assetType: string;
    mintingBlob: string | Buffer;
  };
  export type StarkWithdrawNftParams = {
    contractAddress: string;
    starkKey: string;
    assetType: string;
    token: Token;
  };
  export type StarkWithdrawNftToParams = {
    contractAddress: string;
    starkKey: string;
    assetType: string;
    token: Token;
    recipient: string;
  };
}

export namespace MethodResults {
  export type StarkAccountResult = { starkKey: string };
  export type StarkRegisterUserResult = { txhash: string };
  export type StarkDepositResult = { txhash: string };
  export type StarkDepositCancelResult = { txhash: string };
  export type StarkDepositReclaimResult = { txhash: string };
  export type StarkTransferResult = { starkSignature: string };
  export type StarkCreateOrderResult = { starkSignature: string };
  export type StarkWithdrawResult = { txhash: string };
  export type StarkWithdrawToResult = { txhash: string };
  export type StarkFullWithdrawalRequestResult = { txhash: string };
  export type StarkFreezeRequestResult = { txhash: string };
  export type StarkEscapeResult = { txhash: string };
  export type StarkDepositNftResult = { txhash: string };
  export type StarkDepositNftReclaimResult = { txhash: string };
  export type StarkWithdrawAndMintResult = { txhash: string };
  export type StarkWithdrawNftResult = { txhash: string };
  export type StarkWithdrawNftToResult = { txhash: string };
}
