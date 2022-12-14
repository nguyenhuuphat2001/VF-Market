import abi from './abi.json';
import {web3TestBSC} from './basic';

export const useLaunchpadContract = () => {
  const contract = new web3TestBSC.eth.Contract(
    abi.launchpad_contract,
    '0x120cEa583890807135F9270159C9e0865e3072Fe',
  );
  return contract;
};

// export const getAllowance = async address => {
//   let tokenBalance = 0;
//   const launchpadContract = useLaunchpadContract();
//   await launchpadContract.methods.balanceOf(address).call((err, data) => {
//     if (err) {
//       console.log('getTokenBalance error', err);
//     }
//     tokenBalance = Number(data) / 1e18;
//     console.log('tokenBalance: ', tokenBalance);
//   });
//   return tokenBalance;
// };
