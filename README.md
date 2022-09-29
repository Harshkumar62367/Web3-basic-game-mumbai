# Blockchain game
Build a play to earn blockchain runner game that rewards tokens and NFTs


### 1. Clone/Download the Repository

### 2. Install Dependencies:
```
$ cd contracts
```
```
$ npm install
```

### 3. Deploy NFT collection to Polygon Mumbai testnet
- Setup your env file with both private key and mumbai RPC 
```
$ $ npx hardhat run scripts/deployNFTCollection.js --network mumbai
```

### 4. Deploy Run token to Polygon Mumbai testnet
- Setup your env file with both private key and mumbai RPC 
```
$ $ npx hardhat run scripts/deployRunToken.js --network mumbai
```

### 5. Provide the smart contract addresses in blockchain.js file

