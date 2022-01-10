import { Contract, providers, utils } from 'ethers';
import Pair from "@/web3/abi/IDexV2Pair.json";
import IBEP20 from "@/web3/abi/IBEP20.json";

export const ENS_NETS = ['0x1', '0x3', '0x4'];
export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
export const BURN_ADDRESS = "0x000000000000000000000000000000000000dEaD";
export const OLYMPUS_TESTNET = "0xeC12d79597967aeBAf9b1bE75A8D51D29424DE15";
export const OLYMPUS = "0x18b426813731c144108c6d7faf5ede71a258fd9a";
export const MAX_AMOUNT_HEX = "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";

export function getEthereum() {
    return window.ethereum;
}

export function isConnected() {
    const em = getEthereum()
    return em && em.isConnected()
}

export function getNetName(chainId) {
    switch (chainId) {
        case 1:
            return 'Ethereum';
        case 137:
            return 'Polygon';
        case 3:
            return 'Ropsten Test Network';
        case 4:
            return 'Rinkeby Test Network';
        case 420:
            return 'Goerli Test Network';
        case 42:
            return 'Kovan Test Network';
		case 56:
			return 'Binance Smart Chain';
		case 97:
			return 'Binance Testnet';
		case 321:
			return 'Kucoin Community Chain';
        case 43114:
            return 'Avalanche Smart Chain';
        case 42161:
            return 'Arbitrum Smart Chain';
        case undefined:
        case null:
            return 'No Chain!';
        default:
            return 'Unknown';
    }
}

export function getNetCreationId(chainId) {
    switch (chainId) {
        case 56: // BSC Mainnet
            return '0x61012060'
        case 43114: // AVAX Mainnet
            return '0x60c06040';
        case 42161: // Arbitrum Mainnet
            return '0x60e06040';
        case undefined:
        case null:
            return 'No Chain!';
        default:
            return 'Unknown';
    }
}

export function getJsonRpcNodeName(chainId) {
    switch (chainId) {
		case 56:
			return 'https://bsc-dataseed3.binance.org';
        case 43114:
			return 'https://api.avax.network/ext/bc/C/rpc';
        case 42161:
            return 'https://arb1.arbitrum.io/rpc';
        case null:
            return 'No Chain!';
        default:
            return 'Unknown';
    }
}

export function hasEns(chainId) {
    return ENS_NETS.includes(chainId);
}

export function getProvider() {
    return new providers.Web3Provider(getEthereum(), "any");
}

export function getJsonRpcProvider(chainId) {
    return new providers.JsonRpcProvider(getJsonRpcNodeName(chainId));
}

export function getEtherPriceRounded(ether, digits) {
	if (!digits) digits = 2;
    const formatted = utils.formatEther(ether);
    const parts = formatted.split(".");

    return parts[0] + '.' + parts[1].substr(0, digits);
}

export async function getAccount() {
    const ethereum = getEthereum();
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    return accounts[0];
}

export async function getCurrentNetwork() {
    const provider = getProvider();
    return provider.getNetwork();
}

export function getPairContractByAddress(addy) {
    const provider = getProvider();
	return new Contract(addy, Pair, provider.getSigner());
}

export function getPairContractByAddressNoSigner(addy) {
    const provider = getProvider();
	return new Contract(addy, Pair, provider);
}

export async function getCurrentTicker() {
    const network = await getCurrentNetwork();
    if (network.chainId === 321) {
        return "KCS";
    }
    if (network.chainId === 56 || network.chainId === 97) {
        return "BNB";
    }
	if (network.chainId === 137 || network.chainId === 80001) {
		return "MATIC";
	}

    return "ETH";
}

export async function getCurrentBlock() {
	const provider = getProvider();
	return provider.getBlockNumber();
}

export function getIBEP20Contract(addy) {
	const provider = getProvider();
	return new Contract(addy, IBEP20, provider);
}

export function getIBEP20ContractWithSigner(addy) {
	const provider = getProvider();
	return new Contract(addy, IBEP20, provider.getSigner());
}

export async function getPairFriendlyName(addy) {
	const contract = getPairContractByAddressNoSigner(addy);
	const token1 = getIBEP20Contract(await contract.token0.call());
	const token2 = getIBEP20Contract(await contract.token1.call());

	return (await token1.symbol()) + "-" + (await token2.symbol());
}

export async function getTokensOwner(addy, wallet) {
	const contract = new Contract(addy, IBEP20, getProvider());
	return contract.balanceOf(wallet);
}

export async function getBalanceOf(tokenAddress) {
    const contract = await getIBEP20Contract(tokenAddress);
    const wallet = await getAccount();
    console.log(wallet);
    return await contract.balanceOf(wallet);
}

export async function approve(tokenAddress, tokenToApprove, value) {
    const contract = await getIBEP20ContractWithSigner(tokenAddress);
    return await contract.approve(tokenToApprove, value);
}

export async function isApproved(wallet, token, spender, quantity) {
    const t = getIBEP20Contract(token);
    const allowance = await t.allowance(wallet, spender);
	console.log(allowance.toString())
    return !allowance.isZero() && allowance.gte(quantity);
}

export async function getOlympusAddress() {
	const network = await getCurrentNetwork();
	if (network.chainId === 97) {
		return OLYMPUS_TESTNET;
	} else {
		return OLYMPUS;
	}
}
