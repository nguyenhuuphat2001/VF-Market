import abi from './abi.json';
import {web3TestBSC} from './basic';
import {TOKEN_ADDRESS} from '@/constants/enviroments';
import {useDispatch, useSelector} from 'react-redux';
import {useAppSelector} from '@/store';

export const useERC20Contract = () => {
  const contract = new web3TestBSC.eth.Contract(
    abi.erc20_contract,
    TOKEN_ADDRESS,
  );
  return contract;
};

export const getTokenBalance = async address => {
  let tokenBalance = 0;
  const erc20Contract = useERC20Contract();
  await erc20Contract.methods.balanceOf(address).call((err, data) => {
    if (err) {
      console.log('getTokenBalance error', err);
    }
    tokenBalance = Number(data) / 1e18;
    console.log('tokenBalance: ', tokenBalance);
  });
  return tokenBalance;
};

export const getAllowance = async address => {
  // try {
  //   const currentAccount = useSelector(state => state.wallet.currentAccount);
  //   console.log('currentAccount: ', currentAccount);
  // } catch (err) {
  //   console.log('err: ', err);
  // }
  let allowance = 0;
  const erc20Contract = useERC20Contract();
  await erc20Contract.methods
    .allowance(address, '0x120cEa583890807135F9270159C9e0865e3072Fe')
    .call((err, data) => {
      if (err) {
        console.log('getTokenBalance error', err);
      }
      allowance = Number(data) / 1e18;
      console.log('allowance: ', allowance);
    });
  return allowance;
};

export const useIncreaseAllowance = async address => {
  const erc20Contract = useERC20Contract();
  const TOKEN_APPROVE_AMOUNT = web3TestBSC.utils.toWei('100000000'); // 100M token

  // console.log(
  //   'store.walletReducer.currentAccount: ',
  //   store.walletReducer.currentAccount,
  // );
  // try {
  //   const currentAccount = useSelector(state => state.wallet.currentAccount);
  //   console.log('currentAccount: ', currentAccount);
  // } catch (err) {
  //   console.log('err: ', err);
  // }
  // const currentAccount = useSelector(state => state.wallet.currentAccount);
  // console.log('currentAccount: ', currentAccount);
  console.log('address: ', address);
  const methods = erc20Contract.methods.approve(
    '0x120cEa583890807135F9270159C9e0865e3072Fe',
    TOKEN_APPROVE_AMOUNT,
  );
  const nonce = await web3TestBSC.eth.getTransactionCount(address);
  console.log('nonce: ', nonce);

  const gasEstimate = await methods.estimateGas({
    from: address,
  });
  console.log('gasEstimate: ', gasEstimate);

  const gasPrice = await web3TestBSC.eth.getGasPrice();

  return (transactionConfig = {
    from: address,
    to: TOKEN_ADDRESS,
    data: methods.encodeABI(),
    gas: gasEstimate,
    gasPrice: gasPrice,
    nonce: nonce,
  });
};
