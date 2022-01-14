<template>
  <reward v-bind:currentPrize="currentPrize" v-bind:won="won" v-bind:battleReport="battleReport" @close="showReward = false" v-if="showReward" />
  <div v-if="!battle">
    <div class="max-w-5xl sm:mx-auto">
      <div class="flex flex-col lg:flex-row lg:space-y-0 space-y-16 lg:space-x-6">
        <div class="lg:w-1/3 cursor-not-allowed max-w-sm mx-auto w-full text-white text-center rounded-lg shadow-smooth border border-gray-700 bg-gray-800 battle-typee relative fadeInDown">
          <div class="absolute w-full h-full bg-gray-black z-40 opacity-50 cursor-not-allowed rounded-lg"></div>
          <div class="relative flex place-content-center">
            <img class="absolute h-24 -top-10 z-50" src="@/assets/adventure-title.png" />
            <img class="absolute flex place-self-center h-36" src="@/assets/battle-adventure-mode.png" />
            <div class="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-gray-800 h-24 z-20"></div>
            <img class="h-72 object-cover w-full rounded-t-lg overflow-hidden" src="@/assets/arcane.jpg" />
          </div>
          <div class="px-4 pb-12">
            <p class="text-gray-200">Level-up your gods and demi-gods as you explore the world of Olympus. Earn new NFT’s and leverages by completing quests in our unique P2E adventure game.</p>
            <button class="mt-6 battle-btn-disable">
              COMING SOON
            </button>
          </div>
        </div>
        <div @click="battle = 'quickmatch'" class="lg:w-1/3 cursor-pointer max-w-sm mx-auto w-full text-white text-center rounded-lg shadow-smooth border border-gray-700 bg-gray-800 battle-type fadeInDown">
          <div class="relative flex place-content-center">
            <img class="absolute h-24 -top-10" src="@/assets/quickmatch-title.png" />
            <img class="absolute flex place-self-center h-36" src="@/assets/battle-quick-battle-mode.png" />
            <div class="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-gray-800 h-24 z-20"></div>
            <img class="h-72 object-cover w-full rounded-t-lg overflow-hidden" src="@/assets/firebomb.jpg" />
          </div>
          <div class="px-4 pb-12">
            <p class="text-gray-200">The fastest way to test the might of your god and earn favour. Battle with a randomly selected opponent and increase your wager to earn bigger rewards.</p>
            <button class="mt-6 battle-btn">
              JOIN QUICK MATCH
            </button>
          </div>
        </div>
        <div class="lg:w-1/3 cursor-not-allowed max-w-sm mx-auto w-full text-white text-center rounded-lg shadow-smooth border border-gray-700 bg-gray-800 battle-typee relative fadeInDown">
          <div class="absolute w-full h-full bg-gray-black z-40 opacity-50 cursor-not-allowed rounded-lg"></div>
          <div class="relative flex place-content-center">
            <img class="absolute h-24 -top-10 z-50" src="@/assets/olympusroyale-title.png" />
            <img class="absolute flex place-self-center h-36" src="@/assets/battle-olympus-royale-mode.png" />
            <div class="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-gray-800 h-24 z-20"></div>
            <img class="h-72 object-cover w-full rounded-t-lg overflow-hidden" src="@/assets/nomansland.jpg" />
          </div>
          <div class="px-4 pb-12">
            <p class="text-gray-200">Step into the arena and face off against your foes. Stake big risks and earn bigger rewards when you become the ultimate last man standing of Olympus Royale.</p>
            <button class="mt-6 battle-btn-disable">
              COMING SOON
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div v-if="matchStarting">
      <div class="max-w-6xl mx-auto">
        <img @click="backToFight()" data-wow-duration="0.4s" data-wow-delay="0.15s" class="wow fadeInDown md:max-w-xs max-w-50 mb-8 mx-auto w-full" src="@/assets/quickmatch.png" alt="" />
        <div class="flex justify-between px-4 items-center flex-row">
          <div data-wow-duration="0.4s" data-wow-delay="0.15s" class="wow fadeInDown w-full flex text-center flex-col pb-8 md:pb-32 relative space-y-4">
            <img class="md:h-8 h-4 object-contain" src="@/assets/yourgod.png" />
            <div class="text-white font-heading text-xl font-bold">{{ yourGodHp }}/100</div>
            <div class="h-4 w-full flex flex-row bg-gray-800 shadow-smooth border border-gray-600 overflow-hidden rounded-full relative">
              <span :style="yourGodHpStyle" class=" bg-success z-20 relative w-full"></span>
            </div>
            <div class="bg-gray-900 z-10 border border-gray-700 rounded-2xl text-center md:p-6 p-2 overflow-hidden">
              <div class="flex place-content-center items-center">
                <img class="max-w-xs w-full" :src="yourGodImage" alt="" />
              </div>

              <div class="mt-3">
                <h4 class="font-heading text-sm md:text-lg text-white">{{ yourGodName }}</h4>
                <div style="text-shadow: 0px 0px 5px #3BD0F5" class="text-locker_primary text-base md:text-2xl font-heading mt-1 md:mt-2 font-bold">Power: {{ godPower }}</div>
                <h4 class="font-heading text-base md:text-lg mt-0 md:mt-3 text-gray-400">{{ leverage }}x Leverage</h4>
              </div>
            </div>
            <div class="bottom-0 absolute"><img src="@/assets/blueglow.png" /></div>
          </div>
          <div data-wow-duration="0.4s" data-wow-delay="0.35s" class="wow fadeInDown px-4">
            <img class="md:w-full w-20" src="@/assets/versus.png" />
          </div>
          <div data-wow-duration="0.4s" data-wow-delay="0.55s" class="wow fadeInDown w-full flex text-center flex-col pb-8 md:pb-32 relative space-y-4">
            <img class="md:h-8 h-4 object-contain" src="@/assets/opponentsgod.png" />
            <div class="text-white font-heading text-xl font-bold">{{ enemyGodHp }}/100</div>
            <div class="h-4 w-full flex flex-row bg-gray-800 shadow-smooth border border-gray-600 overflow-hidden rounded-full relative">
              <span :style="enemyGodHpStyle" class=" bg-success z-20 relative w-full"></span>
            </div>
            <div class="bg-gray-900 z-10 border border-gray-700 rounded-2xl text-center md:p-6 p-2 overflow-hidden">
              <div class="flex place-content-center items-center">
                <img class="max-w-xs w-full" :src="enemyGodImage" alt="" />
              </div>
              <div class="mt-3">
                <h4 class="font-heading text-sm md:text-lg text-white">{{ enemyGodName }}</h4>
                <div style="text-shadow: 0px 0px 5px #3BD0F5" class="text-locker_primary text-base md:text-2xl font-heading mt-1 md:mt-2 font-bold">Power: {{ enemyPower }}</div>
                <h4 class="font-heading text-base md:text-lg mt-0 md:mt-3 text-gray-400"></h4>
              </div>
            </div>
            <div class="bottom-0 absolute"><img src="@/assets/redglow.png" /></div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p data-wow-duration="0.4s" data-wow-delay="0.35s" class="wow fadeInDown text-white max-w-lg text-center text-lg mx-auto font-heading">
        The fastest way to test the might of your god and earn favour. Battle with a randomly selected opponent and increase your wager to earn bigger rewards
      </p>
      <choose-card v-bind:timeLeft="timeLeft" v-bind:hadLastFight="hadLastFight" v-bind:lastFought="lastFought" data-wow-duration="0.4s" data-wow-delay="0.45s" class="wow fadeInDown" ref="pickedCard" />
      <div data-wow-duration="0.4s" data-wow-delay="0.55s" class="wow fadeInDown flex md:items-end items-center place-content-center md:space-y-0 space-y-6 md:space-x-4 flex-col md:flex-row mb-8">
        <Listbox as="div" v-model="selected">
          <div class="text-gray-400 overline mb-2 flex flex-row items-center">
            <span class="mr-2">What is this?</span>
            <InformationCircleIcon
              class="h-4 w-4"
              v-tippy="{
                content: 'Increase leverage to bet Olympus against the prize pool. Leverage may lower your winrate up to 20% down to a 50%!',
                appendTo: 'parent',
                theme: 'olympus',
                animation: 'shift-toward-subtle',
                arrow: false,
                maxWidth: '20',
              }"
            />
          </div>
          <div class="relative text-white">
            <ListboxButton class="relative w-full h-16 shadow-smooth bg-gray-900 border border-gray-600 rounded-md pl-4 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 sm:text-sm">
              <span class="flex items-center">
                <span v-if="leverage >= 1" class="block font-bold text-xl font-heading">{{ leverage }}x leverage</span>
                <span v-else class="block font-bold text-xl font-heading">No leverage</span>
              </span>
              <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </ListboxButton>

            <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
              <ListboxOptions class="absolute z-10 mt-1 w-40 bg-gray-900 shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                <ListboxOption as="template">
                  <li @click="leverage = 0" class="cursor-default text-gray-100 select-none relative py-2 hover:bg-gray-800 pl-3 pr-9']">
                    <div class="flex items-center">
                      <span :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block']">
                        No leverage
                      </span>
                    </div>
                  </li>
                </ListboxOption>
                <ListboxOption as="template">
                  <li @click="leverage = 2" class="cursor-default text-gray-100 select-none relative py-2 hover:bg-gray-800 pl-3 pr-9']">
                    <div class="flex items-center">
                      <span :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block']">
                        2x leverage
                      </span>
                    </div>
                  </li>
                </ListboxOption>
                <ListboxOption as="template">
                  <li @click="leverage = 3" class="cursor-default text-gray-100 select-none relative py-2 hover:bg-gray-800 pl-3 pr-9']">
                    <div class="flex items-center">
                      <span :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block']">
                        3x leverage
                      </span>
                    </div>
                  </li>
                </ListboxOption>
                <ListboxOption as="template">
                  <li @click="leverage = 4" class="cursor-default text-gray-100 select-none relative py-2 hover:bg-gray-800 pl-3 pr-9']">
                    <div class="flex items-center">
                      <span :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block']">
                        4x leverage
                      </span>
                    </div>
                  </li>
                </ListboxOption>
                <ListboxOption as="template">
                  <li @click="leverage = 5" class="cursor-default text-gray-100 select-none relative py-2 hover:bg-gray-800 pl-3 pr-9']">
                    <div class="flex items-center">
                      <span :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block']">
                        5x leverage
                      </span>
                    </div>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>
        <button v-if="!this.isApproved" @click="approveFight()" class="h-16 px-8 bg-gray-700 hover:scale-110 shadow-smooth border-4 transition-all duration-200 transform rounded-lg text-white font-bold border-gray-600 font-heading text-xl">
          Approve
        </button>
        <button v-else @click="findRealFight()" :disabled="!allowBattle" class="h-16 px-8 bg-gray-700 hover:scale-110 shadow-smooth border-4 transition-all duration-200 transform rounded-lg text-white font-bold border-gray-600 font-heading text-xl">
          Start Battle
        </button>
        <button v-if="battleReport" @click="showReward = true" class="h-16 px-8 bg-gray-700 hover:scale-110 shadow-smooth border-4 transition-all duration-200 transform rounded-lg text-white font-bold border-gray-600 font-heading text-xl">
          Last Fight
        </button>
      </div>
      <view-collection class="wow fadeInDown" data-wow-duration="0.4s" data-wow-delay="0.65s" />
    </div>
  </div>
  <!-- <img style="z-index: -1" class="absolute top-48 left-0 object-contain max-w-screen w-full" src="@/assets/background-tunnel.png" alt="" /> -->
</template>
<script>
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/vue";
import { InformationCircleIcon } from "@heroicons/vue/outline";
import { SelectorIcon } from "@heroicons/vue/solid";
import chooseCard from "./components/chooseCard.vue";
import viewCollection from "@/components/viewCollection.vue";
import Reward from "./components/Reward.vue";
import { getBattleContract, approveBattle, lastFightResult, isBattleApproved, getTokenStatsByIndex } from "@/web3/fight";
import { getAccount, getProvider, getEthereum } from "@/web3/index";
import { utils } from "ethers";

export default {
  name: "Battle",
  data() {
    return {
      showReward: false, // Show or hide popup
      matchStarting: false,
      battle: "",
      isApproved: false,
      allowBattle: true,

      pickedId: null,
      chainName: "None",
      chainError: "",
      errorMsg: "",
      wallet: "",
      metamaskConnected: false,
      olympus: 0,
      minHold: 200,

      lastFought: "",
      timeLeft: 0,
      wins: 0,
      defeats: 0,
      speed: 0,

      lastFightGodId: null,
      yourGodHp: 100,
      enemyGodHp: 100,
      godPower: 0,
      enemyPower: 0,
      yourEnemyId: null,
      yourEnemyHp: 0,
      won: false,
      battleReport: "",
      hadLastFight: false,
      yourGodName: "",
      enemyGodName: "",
      godType: "Unknown",
      enemyType: "Unknown",
      currentEnergy: 0,
      fightValue: 0,
      approveDisabled: false,
      leverage: 0,
      currentPrize: 0,
      currentMin: 0,
    };
  },
  components: {
    chooseCard,
    viewCollection,
    Reward,
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
    SelectorIcon,
    InformationCircleIcon,
  },
  computed: {
    enemyGodHpStyle: function() {
      return "width: " + this.yourGodHp.toFixed(2) + "%;";
    },
    yourGodHpStyle: function() {
      return "width: " + this.enemyGodHp.toFixed(2) + "%;";
    },
  },
  async mounted() {
    const ethereum = getEthereum();
    ethereum.on("chainChanged", this.handleChainChanged);
    ethereum.on("accountsChanged", this.handleAccountsChanged);
    try {
      this.isApproved = await isBattleApproved();
      this.currentEnergy = await this.getCurrentEnergy();
      const faito = await this.getLastFight();
      if (!(faito.enemyId == 0 && faito.fighterId == 0)) {
        await this.showFightData(faito);
      }
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    async getFightContract() {
      return await getBattleContract();
    },
    async checkConnectedAccount() {
      let account = null;
      if (this.wallet == null) {
        account = await getAccount();
      } else {
        account = this.wallet;
      }
      return account;
    },
    async approveFight() {
      const tx = await approveBattle();
      this.waitTxAndRender(tx, () => (this.isApproved = true));
    },
    async getLastFight() {
      return await lastFightResult();
    },
    async getCurrentEnergy() {
      try {
        const contract = await getBattleContract();
        const timestamp = await contract.energyTime(await getAccount());
        const energy = await contract.getEnergyByTime(timestamp);
        if (energy < 20) {
          this.allowBattle = false;
        }
        return energy;
      } catch (e) {
        return 100;
      }
    },
    async showFightData(faito) {
      const stats = await getTokenStatsByIndex(faito.fighterId);
      const estats = await getTokenStatsByIndex(faito.enemyId);

      this.lastFightMessage = faito.won ? "You won!" : "You lost.";
      this.won = faito.won;
      this.currentPrize = utils.formatUnits(faito.prize, 9);

      this.yourEnemyHp = estats.hp;
      this.yourFighterHp = stats.hp;
      this.yourEnemyId = faito.enemyId;
      this.lastFightId = faito.fighterId;
      this.godPower = stats.attack + stats.defence;
      this.enemyPower = estats.attack + estats.defence;

      const player = require("@/metadata/" + faito.fighterId + ".json");
      const enemy = require("@/metadata/" + faito.enemyId + ".json");
      this.yourGodName = player.name;
      this.enemyGodName = enemy.name;
      this.yourGodImage = "https://olympusroyale.io/img/nfts/" + player.image;
      this.enemyGodImage = "https://olympusroyale.io/img/nfts/" + enemy.image;

      let battleDesc = player.name + " VS " + enemy.name + "! Turn 1: ";
      battleDesc += stats.speed > estats.speed ? "You attacked first!" : "Your enemy attacked first...";
      battleDesc += " Your damage: " + faito.turnOneAttack + ". Your enemy's damage: " + faito.turnOneEnemyAttack;
      if (faito.turnTwoAttack > 0 || faito.turnTwoEnemyAttack > 0) {
        battleDesc += " Turn 2: ";
        battleDesc += "Your damage: " + faito.turnTwoEnemyAttack + ". Your enemy's damage: " + faito.turnTwoAttack;
      }
      this.battleReport = battleDesc;
    },
    async startFight() {
      const contract = await getBattleContract();
      const tx = await contract.runPveFight(this.$refs.pickedCard.cardSelected, false, 0, { gasLimit: 169000 });
      this.waitTxAndRender(tx, this.fightStarted);
    },

    async findRealFight() {
      const contract = await getBattleContract();
      const tx = await contract.runPveFight(this.$refs.pickedCard.cardSelected, true, this.leverage, { gasLimit: 1700069 });
      this.waitTxAndRender(tx, this.fightStarted);
    },

    async fightStarted() {
      const faito = await this.getLastFight();
      this.showFightData(faito);
      this.matchStarting = true;
      this.currentEnergy = await this.getCurrentEnergy();
      this.showReward = true;
    },

    async waitTxAndRender(tx, cb) {
      const provider = await getProvider();
      provider.waitForTransaction(tx.hash).then(async () => {
        await cb();
      });
    },

    backToFight() {
      this.matchStarting = false;
    },

    handleChainChanged(chainId) {
      console.log("Ethereum chain changed. Reloading as recommended. ChainId: ", chainId);
      window.location.reload();
    },
    async handleAccountsChanged(accounts) {
      this.ids = await this.getAllNftIds(accounts[0]);
      if (this.ids.length > 0) {
        this.pickedId = this.ids[0];
      }
      this.isApproved = await isBattleApproved();
      this.isOwned = false;

      this.updatePage();
    },
  },
};
</script>
