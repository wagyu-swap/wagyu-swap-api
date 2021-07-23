import { getContract } from "../lib/contract";
import { TokenAddress } from "./tokens";

const bep20Abi = require("../contracts/BEP20");

export const WagyuVusdtPrice = async (): Promise<number> => {
  const vusdtContract = getContract(bep20Abi, TokenAddress.Vusdt);
  const wagyuContract = getContract(bep20Abi, TokenAddress.Wagyu);
  if (!vusdtContract || !wagyuContract) {
    return -1;
  }
  const vusdtAmount = await vusdtContract.methods.balanceOf(TokenAddress.VusdtWagyu).call();
  const wagyuAmount = await wagyuContract.methods.balanceOf(TokenAddress.VusdtWagyu).call();
  return wagyuAmount / vusdtAmount;
};
