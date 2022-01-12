import { 
    getGods,
    getBounties,
    getMyGods,
    getMyBounties,
  } from "@/web3/nft";

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
            state.gods = gods.map((god) => {
                return {
                    ...god,
                    image: 'https://bafybeig6iusafwgftccirnxffy32zw2cy6kmvmd6z4sqwpheiuc7e5yx6i.ipfs.dweb.link/' + god.image,
                }
            });
        },
        setSoliders(state, soldiers) {
            state.soldiers = soldiers;
        },
        setMyGods(state, myGods) {
            state.myGods = myGods;
        },
        setMyBounties(state, myBounties) {
            state.myBounties = myBounties;
        },
        setMySoldiers(state, mySoldiers) {
            state.mySoldiers = mySoldiers;
        }
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
        async loadCards({ getters, commit }) {
            const gods = await getGods();
            commit('setGods', gods);

            const bounties = await getBounties();
            commit('setBounties', bounties);

            // const soldiers = await getSoldiers();
            // commit('setSoliders', soldiers);

            console.log('loaded loadCards...', getters.gods, getters.bounties);

        },
        async loadMyCards({ getters, commit, rootState }) {
            const wallet = rootState.wallet.address;

            const myGods = await getMyGods(wallet, getters.gods);
            commit('setMyGods', myGods);

            const myBounties = await getMyBounties(wallet, getters.bounties);
            commit('setMyBounties', myBounties);

            // const mySoldiers = await getMySoldiers(wallet, soldiers);
            // commit('setMySoldiers', mySoldiers);

            console.log('loaded myCards...');
        }
    }
}