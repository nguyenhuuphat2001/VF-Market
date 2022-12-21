import abi from './abi.json';
import {web3TestBSC} from './basic';
import {LAUNCHPAD_ADDRESS} from '@/constants/enviroments';

export const useLaunchpadContract = () => {
  const contract = new web3TestBSC.eth.Contract(
    abi.launchpad_contract,
    LAUNCHPAD_ADDRESS,
  );
  return contract;
};

export const useBuyNFT = async ({launchId, address}) => {
  const launchpadContract = useLaunchpadContract();

  const methods = launchpadContract.methods.buyNFT(launchId);
  const nonce = await web3TestBSC.eth.getTransactionCount(address);
  const gasEstimate = await methods.estimateGas({
    from: address,
  });
  const gasPrice = await web3TestBSC.eth.getGasPrice();

  return (transactionConfig = {
    from: address,
    to: LAUNCHPAD_ADDRESS,
    data: methods.encodeABI(),
    gas: gasEstimate,
    gasPrice: gasPrice,
    nonce: nonce,
  });
};
