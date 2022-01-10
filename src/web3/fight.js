import { getProvider } from ".";
import { Contract } from "ethers";
import OlympusBattle from "@/web3/abi/OlympusBattle.json";
import OlympusRoyaleStats from "@/web3/abi/OlympusRoyaleStats.json";
import { OLYMPUS, getAccount, MAX_AMOUNT_HEX } from "@/web3/index";
import IBEP20 from "@/web3/abi/IBEP20.json";

export const BATTLE_ADDRESS = "0x26A6d2880195FED4112513D0CfF0Ff1f8259a603";
export const STATS_ADDRESS = "0x09952Dbd56e2b59C2B27d51A5c07602c3edc5961";
export const DAMAGE_CALC_ADDRESS = "0x910d495703e18C726D729E7fcC99d58b999734C3";

export async function getBattleContract() {
	const provider = getProvider();
	return new Contract(BATTLE_ADDRESS, OlympusBattle, provider.getSigner());
}

export async function isBattleApproved() {
	const provider = getProvider();
	const walletAddress = await getAccount();
	const addy = new Contract(OLYMPUS, IBEP20, provider.getSigner());
	const allowance = await addy.allowance(walletAddress, BATTLE_ADDRESS);
	return allowance.eq(MAX_AMOUNT_HEX);
}

export async function approveBattle() {
	const provider = getProvider();
	const contract = new Contract(OLYMPUS, IBEP20, provider.getSigner());
	return await contract.approve(BATTLE_ADDRESS, MAX_AMOUNT_HEX);
}

export async function lastFightResult() {
	const walletAddress = await getAccount();
	const contract = await getBattleContract();
	return await contract.lastFightResult(walletAddress);
}

export async function getTokenStatsByIndex(id) {
	const contract = await getStatsContract();
	return await contract.tokenStatsByIndex(id);
}

export async function getStatsContract() {
	const provider = getProvider();
	return new Contract(STATS_ADDRESS, OlympusRoyaleStats, provider.getSigner());
}
