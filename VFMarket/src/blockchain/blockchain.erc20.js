import abi from './abi.json';
import {web3TestBSC} from './basic';

export const useERC20Contract = () => {
  const contract = new web3TestBSC.eth.Contract(
    abi.erc20_contract,
    '0xA25C76d4b51821667352EEc35dFB00472311267A',
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
