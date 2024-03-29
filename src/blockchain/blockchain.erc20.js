import abi from './abi.json';
import {web3TestBSC} from './basic';
import {TOKEN_ADDRESS, LAUNCHPAD_ADDRESS} from '@/constants/enviroments';
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
    .allowance(address, LAUNCHPAD_ADDRESS)
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

  const methods = erc20Contract.methods.approve(
    LAUNCHPAD_ADDRESS,
    TOKEN_APPROVE_AMOUNT,
  );
  const nonce = await web3TestBSC.eth.getTransactionCount(address);

  const gasEstimate = await methods.estimateGas({
    from: address,
  });

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
