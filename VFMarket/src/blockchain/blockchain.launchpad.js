import abi from './abi.json';
import {web3TestBSC} from './basic';

export const useLaunchpadContract = () => {
  const contract = new web3TestBSC.eth.Contract(
    abi.launchpad_contract,
    '0x120cEa583890807135F9270159C9e0865e3072Fe',
  );
  return contract;
};

export const useBuyNFT = async ({launchId, address}) => {
  console.log('launchId: ', launchId);
  const launchpadContract = useLaunchpadContract();

  const methods = launchpadContract.methods.buyNFT(launchId);
  console.log('methods: ', methods);
  const nonce = await web3TestBSC.eth.getTransactionCount(address);
  console.log('nonce: ', nonce);
  const gasEstimate = await methods.estimateGas({
    from: address,
  });
  console.log('gasEstimate: ', gasEstimate);
  const gasPrice = await web3TestBSC.eth.getGasPrice();
  console.log('gasPrice: ', gasPrice);

  return (transactionConfig = {
    from: address,
    to: '0x120cEa583890807135F9270159C9e0865e3072Fe',
    data: methods.encodeABI(),
    gas: gasEstimate,
    gasPrice: gasPrice,
    nonce: nonce,
  });
};
