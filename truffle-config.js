const path = require("path");
const HDWalletProvider = require('truffle-hdwallet-provider-privkey');
const privateKey = "004b02f76d36ce68b3fb06673061600b362d8d0d79ced044bddb58ce56e002f6";
const endpointUrl = "https://kovan.infura.io/v3/ae0c05a9374641a0b7bd3e14e5d70c1c";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "5777",
    },
    kovan: {
      provider: function() {
        return new HDWalletProvider(
          //private keys array
          [privateKey],
          //url to ethereum node
          endpointUrl
        )
      },
      gas: 5000000,
      gasPrice: 25000000000,
      network_id: 42
    }
  }
};



