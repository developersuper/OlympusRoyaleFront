import { 
    getGods,
    getBounties,
    getMyGods,
    getMyBounties,
    getMySoldiers
  } from "@/web3/nft";
import { getSoldiers } from "../web3/nft";

export default {
    namespaced: true,
    state: () => ({
        bounties: [],
        gods: [],
        soldiers: [],
        myGods: [],
        myBounties: [],
        mySoldiers: [],
    }),
    mutations: {
        setBounties(state, bounties) {
            state.bounties = bounties;
        },
        setGods(state, gods) {
            state.gods = gods;
        },
        setSoliders(state, soldiers) {
            state.soldiers = soldiers;
        },
    },
    getters: {
        totalLength(state) {
            return state.bounties.length + state.gods.length + state.soliders.length;
        },
        bountiesLength(state) {
            return state.bounties.length;
        },
        godLength(state) {
            return state.gods.length;
        },
        soldierLength(state) {
            return state.soldier.length;
        },
        allNfts(state) {
            return [
                ...state.bounties,
                ...state.gods,
                ...state.soliders
            ];
        },
        bounties(state) {
            return state.bounties;
        },
        gods(state) {
            return state.gods;
        },
        soldiers(state) {
            return state.soldiers;
        },
        myLength(state) {
            return state.myGods.length + state.myBounties.length + state.mySoldiers.length;
        },
        myGodsLength(state) {
            return state.myGodsLength.length;
        },
        myBountiesLength(state) {
            return state.myBounties.length;
        },
        mySoldiersLength(state) {
            return state.mySoldiers.length;
        },
        myGods(state) {
            return state.myGods;
        },
        myBounties(state) {
            return state.myBounties;
        },
        mySoldiers(state) {
            return state.mySoldiers;
        },
    },
    actions: {
        async loadCards({ commit, rootState }) {
            console.log('loadCards');
            const wallet = rootState.wallet.address;
            const gods = await getGods();
            const myGods = await getMyGods(wallet, gods);
            commit('setGods', gods);
            commit('setMyGOds', myGods);
            const bounties = await getBounties();
            const myBounties = await getMyBounties(wallet, bounties);
            commit('setBounties', bounties);
            commit('setMyBounties', myBounties);
            const soldiers = await getSoldiers();
            const mySoldiers = await getMySoldiers(wallet, soldiers);
            commit('setSoliders', soldiers);
            commit('setMySoldiers', mySoldiers);
        }
    }
}