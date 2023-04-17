import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'DemoTarot',
  tokenName: 'Demo Tarot',
  tokenSymbol: 'DMT',
  hiddenMetadataUri: 'ipfs://bafybeigeyz5alv66tektmnpteo4lnbu3b6plwibudffc5kaxmvqeqe2ita/hidden.json',
  maxSupply: 7,
  whitelistSale: {
    price: 0.000005,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.000007,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.000009,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0xe675a8428eae5a84da8b83af94237b4addd8340a",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
