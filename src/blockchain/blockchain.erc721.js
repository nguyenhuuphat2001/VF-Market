import abi from './abi.json';
import {web3TestBSC} from './basic';
import {
  TOKEN_ADDRESS,
  LAUNCHPAD_ADDRESS,
  NFT_ADDRESS,
} from '@/constants/enviroments';
import {useDispatch, useSelector} from 'react-redux';
import {useAppSelector} from '@/store';

export const useERC721Contract = () => {
  const contract = new web3TestBSC.eth.Contract(
    abi.erc721_contract,
    NFT_ADDRESS,
  );
  return contract;
};

export const getTokenInfo = async tokenId => {
  let info;
  const erc721Contract = useERC721Contract();
  await erc721Contract.methods.getToken(tokenId).call((err, data) => {
    if (err) {
      console.log('getTokenInfo error', err);
    }
    console.log('data: ', data.nft);
    info = data;
  });
  return info;
};

export const getOwners = async tokenId => {
  let info;
  const erc721Contract = useERC721Contract();
  await erc721Contract.methods.getOwners(tokenId).call((err, data) => {
    if (err) {
      console.log('getOwners error', err);
    }
    console.log('getOwners data: ', data);
    info = data;
  });
  return info;
};

// export const useIncreaseAllowance = async address => {
//   const erc721Contract = useERC721Contract();
//   const TOKEN_APPROVE_AMOUNT = web3TestBSC.utils.toWei('100000000'); // 100M token

//   const methods = erc721Contract.methods.approve(
//     LAUNCHPAD_ADDRESS,
//     TOKEN_APPROVE_AMOUNT,
//   );
//   const nonce = await web3TestBSC.eth.getTransactionCount(address);

//   const gasEstimate = await methods.estimateGas({
//     from: address,
//   });

//   const gasPrice = await web3TestBSC.eth.getGasPrice();

//   return (transactionConfig = {
//     from: address,
//     to: TOKEN_ADDRESS,
//     data: methods.encodeABI(),
//     gas: gasEstimate,
//     gasPrice: gasPrice,
//     nonce: nonce,
//   });
// };
