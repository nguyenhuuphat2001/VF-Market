import abi from './abi.json';
import {web3TestBSC} from './basic';
import {TOKEN_ADDRESS} from '@/constants/enviroments';

export const useERC20Contract = () => {
  console.log('TOKEN_ADDRESS: ', TOKEN_ADDRESS);
  const contract = new web3TestBSC.eth.Contract(
    abi.erc20_contract,
    '0xc88D7F08CE8bC7Ba6555B1fF2A623e09bb8B787E',
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
  let tokenBalance = 0;
  const erc20Contract = useERC20Contract();
  await erc20Contract.methods
    .allowance(address, '0x120cEa583890807135F9270159C9e0865e3072Fe')
    .call((err, data) => {
      if (err) {
        console.log('getTokenBalance error', err);
      }
      tokenBalance = Number(data) / 1e18;
      console.log('tokenBalance: ', tokenBalance);
    });
  return tokenBalance;
};
