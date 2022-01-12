require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remind equip hidden ensure success solve'; 
let testAccounts = [
"0x6be1793da9117c592f2555804bd2024e98766237c437e27ad6d213832b73b3c8",
"0x5df54120b44ab87304b5fd82665f691d0c0a029d56caaaef34804989efc41266",
"0x62fa7c37d471d34eab32b7d30a022144cbd867fae6041d7fd75383734a11b241",
"0x63c4ef70faec630452517ad13f94b5ad88a30c61d219a65763cffc99181c601a",
"0x97a587c88293fd9ef38b41eb51f22f319690586214e383724b02ec5bd9eeb7eb",
"0xd9b85136f664cfab077625c28fe0c780fe0b3d772023a48735e1bd30076868c9",
"0xb0ec6c9da5a12b9859c24a302b27a7d97b02ba1eb5417c5998ccb639840f64ff",
"0xa3ba6087eabe48624643146038835781f37f1edec2214c7751f9dd137df9c9f6",
"0x696aff88fc0233f872db846ce95022f8391a5964f5186d91dadb6e86bec58f10",
"0x7fa983d59e0b3e459058300a596a30956ef29bc6946ddb43eedfda6f5ec67712"
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


