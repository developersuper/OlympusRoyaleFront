import { getProvider } from ".";
import { Contract } from "ethers";
//import IERC721 from "@/web3/abi/IERC721.json";
import IERC721Metadata from "@/web3/abi/IERC721Metadata.json";
import IERC721Enumerable from "@/web3/abi/IERC721Enumerable.json";
import OlympusGods from "@/web3/abi/OlympusGods.json";
import OlympusCollecter from "@/web3/abi/OlympusCollecter.json";
import OlympusRoyaleStats from "@/web3/abi/OlympusRoyaleStats.json";
import OlympusBattle from "@/web3/abi/OlympusBattle.json";
import { getCurrentNetwork } from "@/web3/index";
import axios from 'axios';

const SERVER = "https://infinite-sierra-48462.herokuapp.com/nft";

const NFT_TESTNET = "0xfe5E9923152453e9bE792FFD01f8420b6728636F";
// const NFT_TESTNET = "0x5ad1963418A9E8803731e6feE12028b4e4170a99";
const NFT_ADDRESS = "0x301Fc2c79f14f49401274aFc43695845f4f9ccE2";
const Bounties_testnet = "0x055e58a396C50B5aE0467C2641aF0dC6Ae711451";
const Bounties_address = "0x818C8cf26B086F537500dEb01F73cF062B1BaB6E";
const STATS_ADDRESS = "0x09952Dbd56e2b59C2B27d51A5c07602c3edc5961";
const BATTLE_ADDRESS = "0x26A6d2880195FED4112513D0CfF0Ff1f8259a603";

export async function getNftMetadata(address, id) {
	const provider = getProvider();
	const contr = new Contract(address, IERC721Metadata, provider.getSigner());
	const metadata = await contr.tokenURI(id);

	return metadata;
}

export async function getTotalSupply(address) {
	const provider = getProvider();
	const contract = new Contract(address, IERC721Enumerable, provider);
	return await contract.totalSupply.call();
}

export async function getNfts(wallet, address) {
	const provider = getProvider();
	const contract = new Contract(address, IERC721Enumerable, provider);
	const count = await contract.balanceOfNFT(wallet);
	const result = [];
	for (let i = 0; i < count; i++) {
		const id = await contract.tokenOfOwnerByIndex(wallet, i);
		result.push(id);
	}

	return result;
}

export async function sendNft(wallet, receiver, address, id) {
	const provider = getProvider();
	const contract = new Contract(address, ["function safeTransferFrom(address from, address to, uint256 tokenId) external"], provider.getSigner());
	return contract.safeTransferFrom(wallet, receiver, id);
}

export async function getNftAddress() {
	const network = await getCurrentNetwork();
	if (network.chainId === 97) {
		return NFT_TESTNET;
	} else {
		return NFT_ADDRESS;
	}
}

export async function getBountiesAddress() {
	const network = await getCurrentNetwork();
	if (network.chainId === 97) {
		return Bounties_testnet;
	} else {
		return Bounties_address;
	}
}


export async function getNftContract() {
	const provider = getProvider();
	return new Contract(await getNftAddress(), OlympusGods, provider.getSigner());
}

export async function getBountiesContract() {
	const provider = getProvider();
	return new Contract(await getBountiesAddress(), OlympusCollecter, provider.getSigner());
}

export async function getStatsContract() {
	const provider = getProvider();
	return new Contract(STATS_ADDRESS, OlympusRoyaleStats, provider.getSigner());
}

export async function getWinLossContract() {
	const provider = getProvider();
	return new Contract(BATTLE_ADDRESS, OlympusBattle, provider.getSigner());
}

export async function totalNFTs() {
	const contract = await getBountiesContract();
	return await contract.totalNFT();
}

export async function mint(number, price) {
	const contract = await getNftContract();
	return contract.mintNFT(number, {value: price.mul(number)});
}

export async function mintTokens(number) {
	const contract = await getNftContract();
	return contract.mintNFTTokens(number);
}

export async function getCurrentPrice() {
	const contract = await getNftContract();
	return await contract.getCurrentPrice();
}

export async function getCurrentTokenPrice() {
	const contract = await getNftContract();
	return await contract.getCurrentTokenPrice();
}

export async function getMinted(wallet) {
	const contract = await getNftContract();
	return await contract.balanceOfNFT(wallet);
}

export async function getOwner(id) {
	const contract = await getNftContract();
	return await contract.ownerOf(id);
}

export async function getNftsOf(wallet) {
	const contract = await getNftContract();
	const count = await contract.balanceOf(wallet);
	const result = [];
	for (let i = 0; i < count; i++) {
		const id = await contract.tokenOfOwnerByIndex(wallet, i);
		result.push(id);
	}

	return result;
}

export async function getBountiesOf(wallet) {
	const contract = await getBountiesContract();
	const count = await contract.balanceOfNFT(wallet);
	const result = [];
	for (let i = 0; i < count; i++) {
		const id = await contract.tokenOfOwnerByIndex(wallet, i);
		result.push(id);
	}

	return result;
}

export async function getStatsRoyaleCards(i) {
	const contract = await getStatsContract();
	return await contract.tokenStatsByIndex(i);
}

export async function getPrevWIns(i) {
	const contract = await getWinLossContract();
	return await contract.pveWins(i);
}

export async function getPrevDefeats(i) {
	const contract = await getWinLossContract();
	return await contract.pveDefeats(i);
}

export async function getTotalGodsNFT() {
	const contract = await getNftContract();
	return await contract.totalSupply(); 
}

export async function getTotalBounties() {
	const contract = await getBountiesContract();
	return await contract.totalNFT(); 
}

export async function getJsonForGods(i) {
	return "https://bafybeicdeyogp3r4yuq4czmwv3yt422lb7vfr32bahprupydnpuirewnge.ipfs.dweb.link/" + i + ".json";
}

export async function getJsonForBounties(i) {
	return "https://bafybeigg7bvg2rlcxk3eh65uuku3zpd7qegssyu7dgv6djidlpe6jvzszy.ipfs.dweb.link/" + i + ".json";
}

export async function getGods() {
	try{
		const result = await axios.get(`${SERVER}/gods/all`);
		return result.data;
	}catch(e) {
		console.log('Error occured', e);
		return [];
	}
}

export async function getMyGods(wallet, gods) {
	try{
		const nfts = (await getNftsOf(wallet)).map((nft) => nft.toNumber());
		const myGods = gods.filter((god) => nfts.indexOf(parseInt(god.id)) >= 0);
		return myGods;
	}catch(e) {
		console.log('Error occured', e);
		return [];
	}
}

export async function getBounties() {
	try{
		const result = await axios.get(`${SERVER}/bounties/all`);
		return result.data;
	}catch(e) {
		console.log('Error occured', e);
		return [];
	}
}

export async function getMyBounties(wallet, bounties) {
	try{
		const nfts = (await getBountiesOf(wallet)).map((nft) => nft.toNumber());
		const myBounties = bounties.filter((bounty) => nfts.indexOf(parseInt(bounty.id)) >= 0);
		return myBounties;
	}catch(e) {
		console.log('Error occured', e);
		return [];
	}
}

export async function getSoldiers() {
	try{
		const result = await axios.get(`${SERVER}/soldiers/all`);
		return result.data;
	}catch(e) {
		console.log('Error occured', e);
		return [];
	}
}

export async function getMySoldiers() {
	return [];
}

