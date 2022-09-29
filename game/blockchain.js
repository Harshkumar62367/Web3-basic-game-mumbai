let provider = new ethers.providers.Web3Provider(window.ethereum)
let signer

async function connectMetamask() {
    await provider.send("eth_requestAccounts", []);
    signer = await provider.getSigner();
    console.log("Account address:", await signer.getAddress());

    const balance = await signer.getBalance()
    const convertToEth = 1e18;
    console.log("account's balance in ether:", balance.toString() / convertToEth);
}

async function claimTokens() {
    const runTokenContractAddress = "0x2a5EbC4ac2aE7d558a6190cd903f786D537B3183";
    const runTokenContractAbi = [
        "function mintTokens(address account, uint256 amount) public",
    ];
    const runTokenContract = new ethers.Contract(runTokenContractAddress, runTokenContractAbi, provider);
    let convertToWei = 1000000000
    let amountToClaim = window.totalGweiScore * convertToWei
    await runTokenContract.connect(signer).mintTokens(signer.getAddress(), amountToClaim.toString())
}

async function claimNft() {
    const nftContractAddress = "0x964eCEE2c3e50d10cfB39fC7D8f12E892BE1eA3d";
    const mintContractAbi = [
        "function mint(uint256 amount) public",
    ];
    const nftContract = new ethers.Contract(nftContractAddress, mintContractAbi, provider);
    await nftContract.connect(signer).mint(window.totalNFTScore.toString())
}
