import Web3 from 'web3';
import Erc20Abi from '../../Erc20Abi.json';

export const web3TestBSC = new Web3(
  'https://bsc-testnet.nodereal.io/v1/d84c5781140b48468e16993b89a90a5f',
);

export const getWalletBalance = async currentAccount => {
  console.log('currentAccount', currentAccount);
  let walletBalance = 0;
  await web3TestBSC.eth
    .getBalance(currentAccount)
    .then(b => {
      console.log('web3Instance getBalance res', b);
      walletBalance = b / 1e18;
    })
    .catch(err => {
      // Sentry.captureException(err);
      console.log('getBalance error', err);
    });
  return walletBalance;
};

export const useERC20Contract = () => {
  const contract = new web3TestBSC.eth.Contract(
    Erc20Abi,
    '0xA25C76d4b51821667352EEc35dFB00472311267A',
  );
  return contract;
};

export const getTokenBalance = async (erc20Contract, address) => {
  let tokenBalance = 0;
  console.log('erc20Contract', erc20Contract);
  await erc20Contract.methods.balanceOf(address).call((err, data) => {
    if (err) {
      console.log('getTokenBalance error', err);
    }
    tokenBalance = Number(data) / 1e18;
  });
  return tokenBalance;
};

export const sendToken = async (
  erc20Contract,
  fromPK,
  fromAddress,
  toAddress,
) => {
  console.log('---Start');

  const methods = erc20Contract.methods.transfer(
    toAddress,
    '100000000000000000000',
  );

  console.log('---methods: ', methods);
  const nonce = await web3TestBSC.eth.getTransactionCount(
    fromAddress,
    'pending',
  );
  console.log('---nonce: ', nonce);

  const gasEstimate = await methods.estimateGas({
    from: fromAddress,
  });
  // console.log({ gasEstimate });

  const tx = {
    from: fromAddress,
    to: '0xA25C76d4b51821667352EEc35dFB00472311267A',
    data: methods.encodeABI(),
    gas: gasEstimate,
    nonce: nonce,
  };
  console.log('---tx: ', tx);
  // Sign the transaction
  console.log('---START signPromise---');
  const signPromise = await web3TestBSC.eth.accounts.signTransaction(
    tx,
    fromPK,
  );
  console.log('---signPromise: ', signPromise);
  // const res = await web3TestBSC.eth.sendSignedTransaction(
  //   signPromise.rawTransaction,
  // );
  // console.log('---res: ', res);
  signPromise
    .then(signedTx => async () => {
      console.log(
        'The hash of your transaction is: ',
        signedTx.transactionHash,
      );
      // signedTx.transactionHash
      await web3TestBSC.eth.sendSignedTransaction(
        signedTx.rawTransaction,
        function (err, hash) {
          if (!err) {
            console.log('The hash of your transaction is: ', hash);
          } else {
            console.log(
              'Something went wrong when submitting your transaction:',
              err,
            );
          }
        },
      );
    })
    .catch(err => {
      console.log('Promise failed:', err);
    });
};
