require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note over coach inner arch metal ghost'; 
let testAccounts = [
"0x06970065dc0a678bc94e1135397c1ca05057c67cc9f8e6b5c871cee557673511",
"0xd958d88aa35e14174ad1a4c43a1889be6f5c6d38c1bf0d497094ac5f5d1c581e",
"0x65dc4cd771f66594a1b5ee423f5e17aa3b08de9b717e1bf360781a5613685f0d",
"0xd4cb17892b1fd5137749f18af9aca0c4b7c22445e7a6aee7cff7b8c7cc7a18c3",
"0x53053ade0bb27c582a88d022cd45608b436ebc0fd6347379dd7326d369f88248",
"0x8990f3252a1aad6fae96f1ab4479b4b466de160d66f4f154035958a29014d803",
"0x1e3d0d9c2fe147863c564cadc2ce114d875dae77f926712649a9639b6256d582",
"0xf02e0df3882ac5c0931a17bffc117259cbe7ccc9d38bfaf4f3bc9a9693b9f255",
"0x7d6ac7935780cd962fee82c02ec02568dd01f459f5dc7d72a8fb72036f04fba2",
"0xac9949cd2b42ff709e9655fc49cd23cf2e47c5d84b2aaa50d006781a17e7bd29"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


