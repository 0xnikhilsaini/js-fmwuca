// import { ethers } from 'ethers';
// import TransportWebHID from '@ledgerhq/hw-transport-webhid';
// import Eth from '@ledgerhq/hw-app-eth';
// const myCode = async () => {
//   //Infuria provider for Ropsten network
//   const provider = new ethers.providers.JsonRpcProvider(
//     'http://3.8.240.228:8545'
//   );

//   const chainId = 223;
//   let gasPrice;
//   let addressWallet;
//   let recipient = '0xc33619fAc2aE1235b5850822AF94c54C07BfE27b';
//   let value = 0.1;
//   let gasLimit = 1000000;
//   let nonce;
//   let _eth;

//   //Connecting to the Ledger Nano with HID protocol
//   const transport = await TransportWebHID.create();

//   //Getting an Ethereum instance and get the Ledger Nano ethereum account public key
//   _eth = new Eth(transport);
//   const { address } = await _eth.getAddress("44'/60'/0'/0/0", false);

//   //Get some properties from provider
//   addressWallet = address;
//   gasPrice = (await provider.getGasPrice())._hex;
//   gasPrice = parseInt(gasPrice, 16) * 1.15;
//   //Fill the inputs with the default value
//   document.getElementById('wallet').value = address;
//   gasPrice = parseInt(gasPrice) + ' wei';

//   //Getting information from the inputs

//   nonce = await provider.getTransactionCount(addressWallet, 'latest');

//   //Building transaction with the information gathered
//   const transaction = {
//     to: recipient,
//     gasPrice: '0x' + parseInt(gasPrice).toString(16),
//     gasLimit: ethers.utils.hexlify(gasLimit),
//     nonce: 2,
//     chainId: chainId,
//     data: '0x00',
//     value: ethers.utils.parseUnits(value, 'ether')._hex,
//   };
//   console.log(nonce);
//   //Serializing the transaction to pass it to Ledger Nano for signing
//   let unsignedTx = ethers.utils.serializeTransaction(transaction).substring(2);

//   //Sign with the Ledger Nano (Sign what you see)
//   const signature = await _eth.signTransaction("44'/60'/0'/0/0", unsignedTx);

//   //Parse the signature
//   signature.r = '0x' + signature.r;
//   signature.s = '0x' + signature.s;
//   signature.v = parseInt(signature.v);
//   signature.from = addressWallet;
//   //Serialize the same transaction as before, but adding the signature on it
//   let signedTx = ethers.utils.serializeTransaction(transaction, signature);
//   //Sending the transaction to the blockchain
//   const hash = (await provider.sendTransaction(signedTx)).hash;
//   alert(hash);
// };
