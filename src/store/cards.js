import { 
    getGods,
    getBounties,
    getMyGods,
    getMyBounties,
} from "@/web3/nft";

const stats = [
    [15, 15, 15, 3],
    [20, 20, 20, 5],
    [25, 25, 25, 7],
    [30, 30, 30, 9],
    [35, 35, 35, 11],
    [40, 40, 40, 13],
    [45, 45, 45, 15],
    [50, 50, 50, 17],
    [55, 55, 55, 19],
    [60, 60, 60, 21],
]

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
            state.bounties = bounties.map((bounty) => {
                return {
                    ...bounty,
                    tokenId: bounty.id,
                }
            });
        },
        setGods(state, gods) {
            state.gods = gods.map((god) => {
                let level = parseInt(god.attributes[2].value);
                return {
                    ...god,
                    level,
                    stats: [...stats[level - 1]],
                    power: (stats[level-1][0] + stats[level-1][1] + stats[level-1][2] + stats[level-1][3]) * 100,
                    tokenId: god.id,
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
        async loadCards({ commit }) {
            const gods = await getGods();
            commit('setGods', gods);

            const bounties = await getBounties();
            commit('setBounties', bounties);

            // const soldiers = await getSoldiers();
            // commit('setSoliders', soldiers);
        },
        async loadMyCards({ getters, commit, rootState }) {
            const wallet = rootState.wallet.address;

            const myGods = await getMyGods(wallet, getters.gods);
            commit('setMyGods', myGods);

            const myBounties = await getMyBounties(wallet, getters.bounties);
            commit('setMyBounties', myBounties);

            // const mySoldiers = await getMySoldiers(wallet, soldiers);
            // commit('setMySoldiers', mySoldiers);
        }
    }
}