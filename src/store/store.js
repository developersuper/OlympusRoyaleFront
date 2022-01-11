import { createStore } from "vuex";

import wallet from "@/store/wallet.js";
import cards from "@/store/cards.js";
import Web3 from "web3";
import {RPC} from "@/js/constants";
import {getBNBPrice} from "@/js/utilities";

export default createStore({
    modules: {
        wallet,
        cards,
    },
    state: {
        initialization: null,

        web3: null,
        bnbPrice: null,
    },
    mutations: {
        initialize(state, initialization){
            state.initialization = initialization;
        }
    },
    actions: {
        async initialize(context){
            let provider = new Web3.providers.HttpProvider(RPC);
            context.state.web3 = new Web3(provider);

            context.state.bnbPrice = await getBNBPrice(context.state.web3);
        }
    }
});
