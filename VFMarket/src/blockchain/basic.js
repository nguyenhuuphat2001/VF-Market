import Web3 from 'web3';

export const web3TestBSC = new Web3(
  'https://bsc-testnet.nodereal.io/v1/d84c5781140b48468e16993b89a90a5f',
);

export const importWalletFromPK = async privateKey => {
  try {
    const account = await web3TestBSC.eth.accounts.privateKeyToAccount(
      privateKey,
    );
    return account;
  } catch (e) {
    console.log('e: ', e);
  }
};

export const createAccount = async () => {
  try {
    const account = await web3TestBSC.eth.accounts.create();
    return account;
  } catch (e) {
    console.log('e: ', e);
  }
};

export const getWalletBalance = async currentAccount => {
  let walletBalance = 0;
  await web3TestBSC.eth
    .getBalance(currentAccount)
    .then(b => {
      walletBalance = b / 1e18;
    })
    .catch(err => {
      console.log('getBalance error', err);
    });
  return walletBalance;
};

// export const sendToken = async (
//   erc20Contract,
//   fromPK,
//   fromAddress,
//   toAddress,
// ) => {
//   console.log('---Start');

//   const methods = erc20Contract.methods.transfer(
//     toAddress,
//     '100000000000000000000',
//   );

//   console.log('---methods: ', methods);
//   const nonce = await web3TestBSC.eth.getTransactionCount(
//     fromAddress,
//     'pending',
//   );
//   console.log('---nonce: ', nonce);

//   const gasEstimate = await methods.estimateGas({
//     from: fromAddress,
//   });
//   // console.log({ gasEstimate });

//   const tx = {
//     from: fromAddress,
//     to: '0xA25C76d4b51821667352EEc35dFB00472311267A',
//     data: methods.encodeABI(),
//     gas: gasEstimate,
//     nonce: nonce,
//   };
//   console.log('---tx: ', tx);
//   // Sign the transaction
//   console.log('---START signPromise---');
//   const signPromise = await web3TestBSC.eth.accounts.signTransaction(
//     tx,
//     fromPK,
//   );
//   console.log('---signPromise: ', signPromise);
//   // const res = await web3TestBSC.eth.sendSignedTransaction(
//   //   signPromise.rawTransaction,
//   // );
//   // console.log('---res: ', res);
//   signPromise
//     .then(signedTx => async () => {
//       console.log(
//         'The hash of your transaction is: ',
//         signedTx.transactionHash,
//       );
//       // signedTx.transactionHash
//       await web3TestBSC.eth.sendSignedTransaction(
//         signedTx.rawTransaction,
//         function (err, hash) {
//           if (!err) {
//             console.log('The hash of your transaction is: ', hash);
//           } else {
//             console.log(
//               'Something went wrong when submitting your transaction:',
//               err,
//             );
//           }
//         },
//       );
//     })
//     .catch(err => {
//       console.log('Promise failed:', err);
//     });
// };
