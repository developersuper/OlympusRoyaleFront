<template>
  <div class="flex w-full place-content-center my-0 sm:mb-10 sm:-mt-8 wow fadeInDown" data-wow-duration="0.6s" data-wow-delay="0.35s">
    <img class="hidden sm:block h-24 object-contain select-none" src="@/assets/olympus-nfts.png" />
  </div>
  <p class="hidden sm:block -mt-12 sm:mt-0 sm:mb-4 sm:mb-0  w-full flex justify-center text-center text-gray-100 font-bold text-md sm:text-lg">
      VIEW AND MANAGE YOUR OLYMPUS NFT'S
  </p>
  <span class="xl:flex-row flex-col flex lg:space-y-0 space-y-4 justify-between mb-4 ml-4 xl:ml-0 mr-4 px-3 py-3 rounded-lg wow fadeInDown" data-wow-duration="0.6s" data-wow-delay="0.45s">
    <div class="-mt-16 sm:mt-0 flex xl:flex-row lg:space-y-0 space-y-4 flex-col items-center lg:space-x-3">
      <div class="relative z-0 inline-flex place-content-center shadow-sm rounded-md toggle-bg">
        <div
          :class="[
            showGods ? 'text-locker_primary' : 'text-gray-300 hover:text-locker_primary',
            'relative cursor-pointer text-sm md:text-xl font-bold w-1/3 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-300',
          ]"
          @click="toggleGods"
        >
          <span class="absolute left-1/2">Gods</span>
        </div>
        <div
          :class="[
            showSoldiers ? 'text-locker_primary' : 'text-gray-300 hover:text-locker_primary',
            'relative justify-center text-sm md:text-xl cursor-pointer font-bold w-1/3 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-300',
          ]"
          @click="toggleSoldiers"
        >
          <span class="absolute left-1/4">Soldiers</span>
        </div>
        <div
          :class="[
            showBounties ? 'text-locker_primary' : 'text-gray-300 hover:text-locker_primary',
            '-ml-px relative cursor-pointer text-sm md:text-xl font-bold w-1/3 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-300',
          ]"
          @click="toggleBounties"
        >
          <span class="absolute right-1/3">Bounties</span>
        </div>
        <img 
          :class="[
            showGods ? 'block' : 'hidden',
            'absolute toggle-btn top-3 sm:top-4 left-0'
          ]" 
          src="@/assets/toggle/gods-btn.png" 
          @click="toggleGods"
        />
        <img 
          :class="[
            showSoldiers ? 'block' : 'hidden',
            'absolute toggle-btn top-4 sm:top-5'
          ]" 
          src="@/assets/toggle/soldiers-btn.png"
          @click="toggleSoldiers" 
        />
        <img 
          :class="[
            showBounties ? 'block' : 'hidden',
            'absolute toggle-btn top-4 sm:top-5 right-0'
          ]" 
          src="@/assets/toggle/bounty-btn.png" 
          @click="toggleBounties"
        />
      </div>
    </div>

    <div class="flex xl:flex-row xl:space-y-0 space-y-4 flex-col items-center lg:space-x-3">
      <Listbox as="div" v-model="selectedCollection" class="w-72 xl:w-48 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
        <div class="w-full mt-1 relative">
          <ListboxButton class="relative w-full text-gray-ct hover:text-locker_primary bg-gray-900 border hover:shadow-locker_primary border-gray-bc transition-all duration-200 rounded-lg shadow-sm py-3 pl-3 pr-10 text-left cursor-default font-bold text-sm sm:text-lg">
            <span class="flex items-center">
              <span class="ml-3 block truncate">{{ selectedCollection.name }}</span>
            </span>
            <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
            </span>
          </ListboxButton>

          <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
            <ListboxOptions class="absolute z-10 mt-1 w-full bg-gray-900 shadow-lg max-h-56 rounded-2xl py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
              <ListboxOption as="template" v-for="token in tokenMyCollection" :key="token.id" :value="token" v-slot="{ active, selected }">
                <li @click="toggleMyCollection(token.status)" :class="[active ? 'text-white bg-gray-800' : 'text-gray-100', 'cursor-default select-none relative py-2 pl-3 pr-9']">
                  <div class="flex items-center">
                    <span :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">
                      {{ token.name }}
                    </span>
                  </div>

                  <span v-if="selected" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                    <CheckIcon class="h-5 w-5" aria-hidden="true" />
                  </span>
                </li>
              </ListboxOption>
            </ListboxOptions>
          </transition>
        </div>
      </Listbox>
      <Listbox as="div" v-model="selectedSortBy" class="w-72 xl:w-48 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
        <div class="w-full mt-1 relative">
          <ListboxButton class="relative text-sm sm:text-lg w-full text-gray-ct hover:text-locker_primary font-bold bg-gray-900 border hover:shadow-locker_primary border-gray-bc transition-all duration-200 rounded-lg shadow-sm pl-3 pr-10 py-3 text-left cursor-default">
            <span class="flex items-center">
              <span class="ml-3 block truncate">{{ selectedSortBy.name }}</span>
            </span>
            <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
            </span>
          </ListboxButton>

          <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
            <ListboxOptions class="absolute z-10 mt-1 w-full bg-gray-900 shadow-lg max-h-56 rounded-2xl py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
              <ListboxOption as="template" v-for="token in tokens" :key="token.id" :value="token" v-slot="{ active, selected }">
                <li @click="setSortBy(token.status)" :class="[active ? 'text-white bg-gray-800' : 'text-gray-100', 'cursor-default select-none relative py-2 pl-3 pr-9']">
                  <div class="flex items-center">
                    <span :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">
                      {{ token.name }}
                    </span>
                  </div>

                  <span v-if="selected" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                    <CheckIcon class="h-5 w-5" aria-hidden="true" />
                  </span>
                </li>
              </ListboxOption>
            </ListboxOptions>
          </transition>
        </div>
      </Listbox>
      <input
        v-model="searchValue"
        class="bg-gray-900 text-gray-400 font-bold text-sm sm:text-lg w-72 hover:shadow-locker_primary focus:shadow-locker_primary relative border-gray-bc transition-all duration-200 placeholder-gray-ct hover:placeholder-locker_primary rounded-lg border px-4 py-3 text-left"
        placeholder="Search items..."
      />
      
    </div>
  </span>

  <div v-if="filteredCards[1].length" class="flex flex-wrap overflow-visible wow fadeInDown" data-wow-duration=".6s" data-wow-delay=".55s">
    <!-- <div 
      :class="[
        showBounties ? 'block' : 'hidden',
        'font-heading fade-in px-4 pb-4 text-sm flex xl:w-1/2 w-full justify-between'
      ]" 
      v-for="card in this.bountyData" v-bind:key="card"
    >
      <div class="bg-gray-900 border rounded-3xl border-gray-700 w-full h-90 p-4 nft-cards wow flipInX" data-wow-duration="1s" data-wow-delay=".55s">
        <img class="w-full h-3/4 mb-2 sm:mb-4 rounded-3xl p-2" :src="card.image" alt="" />
        <h4 class="font-heading text-lg text-white flex justify-center text-center opensans">{{ card.name }}</h4>
        <span class="text-base sm:text-xl font-bold shadow-power text-white flex justify-center">RARITY: A+ (1 OF 1000)</span>
        <div class="flex flex-row justify-center">
          <p class="mt-2 text-locker_primary font-semibold text-base"><span>VIEW</span> / <span><a href="https://lootex.io/stores/olympus-royale" target="_blank">TRADE</a></span></p>
          <i class="py-2 text-base fa fa-heart text-gray-300"> 73</i>
        </div>
        <button @click="showPopup = card.id" class="border border-gray-700 text-gray-400 mt-3 hover:border-gray-600 hover:text-gray-300 duration-200 transition-colors py-2 rounded-md w-full">View</button>
      </div>
    </div> -->
    <div class="font-heading fade-in px-4 pb-4 text-sm flex 2xl:w-1/4 xl:w-1/3 md:w-1/2 w-full h-auto justify-between" v-for="card in filteredCards[0]" v-bind:key="card">
      <popup 
        v-bind:cards="filteredCards[0]"
        v-bind:id="card.id" 
        v-bind:name="card.name" 
        v-bind:image="card.image"
        v-bind:video="card.video"  
        v-bind:level="card.level" 
        v-bind:power="card.power" 
        v-bind:attack="card.attack" 
        v-bind:defense="card.defense"
        v-bind:vitality="card.vitality"
        v-bind:speed="card.speed"
        v-bind:win="card.win"
        v-bind:lost="card.lost"
      @close="showPopup = false" 
      v-if="showPopup == card.id"
      >
      </popup>
      <div class="bg-gray-900 border rounded-3xl border-gray-bc w-full px-4 pt-4 pb-2 nft-cards cursor-pointer wow flipInX" data-wow-duration="1s" data-wow-delay=".55s">
        <img class="w-full -mb-2" :src="card.image" @click="toView(card.id)" alt="" />
        <p v-if="card.collection == 'God'" class="text-center text-lg text-white flex justify-center opensans leading-6">{{ card.name.slice(0, -10) }} <br /> Level {{ card.level }} </p>
        <p v-if="card.collection == 'Bounty'" class="text-center mt-8 text-lg text-white flex justify-center opensans">{{ card.name }} </p>
        <p v-if="card.collection == 'Bounty'" class="text-base sm:text-xl font-bold shadow-power text-white flex justify-center">RARITY: S+ (1 OF 1)</p>
        <span v-if="card.collection == 'God'" class="text-base sm:text-xl font-bold shadow-power text-white flex justify-center">POWER: {{ card.power }}</span>
        <div class="flex flex-row justify-center">
          <p class="mt-1 text-locker_primary font-semibold text-base"><span class="cursor-pointer" @click="toView(card.id)">VIEW</span> / <span><a href="https://lootex.io/stores/olympus-royale" target="_blank">TRADE</a></span></p>
        </div>
      </div>
    </div>
  </div>

  <div v-if="filteredCards[1].length" class="flex flex-row mx-auto place-content-center text-sm sm:text-lg text-gray-200 font-bold my-4">
    NFT'S PER PAGE: 
    <span 
      :class="[
        perPage == 16 ? 'text-locker_primary' : 'text-gray-200',
        'mx-2 hover:text-gray-300 cursor-pointer transition-all duration-100 transform'
      ]" 
      @click="perPageCardStatus(16)"
    >
    16
    </span>/
    <span 
      :class="[
        perPage == 32 ? 'text-locker_primary' : 'text-gray-200',
        'mx-2 hover:text-gray-300 cursor-pointer transition-all duration-100 transform'
      ]" 
      @click="perPageCardStatus(32)"
    >
    32
    </span>/
    <span 
      :class="[
        perPage == 64 ? 'text-locker_primary' : 'text-gray-200',
        'mx-2 hover:text-gray-300 cursor-pointer transition-all duration-100 transform'
      ]" 
      @click="perPageCardStatus(64)"
    >
    64
    </span>
  </div>

  <div v-if="filteredCards[1].length" class="flex flex-row mx-auto place-content-center">
    <img 
      :class="[
        flagForPagination == false ? 'cursor-not-allowed' : 'cursor-pointer',
        'w-6 h-6 sm:w-10 sm:h-10 mt-3 mr-1 sm:mr-2 hover:scale-110 cursor-pointer transition-all duration-200 transform'
      ]" 
      src="@/assets/prev.png"
      @click="toPrev(this.currentPagination)"  
    />
    <div v-for="i in [(this.currentPagination - 1)*5+1, (this.currentPagination - 1)*5+2, (this.currentPagination - 1)*5+3, (this.currentPagination - 1)*5+4, this.currentPagination*5]" :key="i">
      <div class="relative" v-if="Math.ceil((filteredCards[1].length)/this.perPage) > i - 1">
        <img 
          v-if="i < 10"
          :class="[
            currentPage == i ? 'hidden' : 'block',
            'w-12 h-12 sm:w-16 sm:h-16 hover:scale-110 cursor-pointer transition-all duration-200 transform'
          ]" 
          @click="currentPageStatus(i)" src="@/assets/pagination/one.png" />
        <img 
          v-if="i > 9 && i < 100"
          :class="[
            currentPage == i ? 'hidden' : 'block',
            'w-16 h-12 sm:w-20 sm:h-16 hover:scale-110 cursor-pointer transition-all duration-200 transform'
          ]" 
          @click="currentPageStatus(i)" src="@/assets/pagination/one.png" />
        <span :class="[
            currentPage == i ? 'hidden' : 'block',
            'absolute font-bold guavacandy cursor-pointer'
          ]"
          @click="currentPageStatus(i)"
        >
        {{ i }}
        </span>
        <span :class="[
            currentPage == i ? 'block' : 'hidden',
            'absolute font-bold guavacandy-click z-50 cursor-pointer'
          ]"
        >
        {{ i }}
        </span>
        <span :class="[
            currentPage == i ? 'block' : 'hidden',
            'absolute font-bold guavacandy-click-1 z-20 cursor-pointer'
          ]"
        >
        {{ i }}
        </span>
        <img 
          v-if="i < 10"
          :class="[
            currentPage == i ? 'block' : 'hidden',
            'w-12 sm:w-16 hover:scale-110 cursor-pointer transition-all duration-200 transform'
          ]" 
          src="@/assets/pagination/one-click.png" 
        />
        <img 
          v-if="i > 9 && i < 100"
          :class="[
            currentPage == i ? 'block' : 'hidden',
            'w-16 h-20 sm:w-20 sm:h-24 hover:scale-110 cursor-pointer transition-all duration-200 transform'
          ]" 
          src="@/assets/pagination/one-click.png" 
        />
      </div>
    </div>
    <img 
      :class="[
        flagForPagination == false ? 'cursor-not-allowed' : 'cursor-pointer',
        'w-6 h-6 sm:w-10 sm:h-10 mt-3 ml-1 sm:ml-2 hover:scale-110 cursor-pointer transition-all duration-200 transform'
      ]" 
      src="@/assets/right.png"
      @click="toNext(this.currentPagination)"  
    />
  </div>

  <div class="flex place-content-center" v-else>
    <div class="text-white py-4 px-16 rounded-full bg-gray-900 my-24 text-center font-bold text-2xl font-heading">{{ noCardsText }}</div>
  </div>
</template>

<script>
import { getAccount } from "@/web3/index";
import { getNftsOf, getBountiesOf, 
getTotalGodsNFT,
getTotalBounties,
getStatsRoyaleCards,
getJsonForGods,
getJsonForBounties,
getPrevWIns,
getPrevDefeats
} from "@/web3/nft";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/vue";
import { CheckIcon, SelectorIcon } from "@heroicons/vue/solid";
import Popup from "./components/Popup.vue";
import { ref } from "vue";
import { useSound } from '@vueuse/sound'
import buttonSfx from '@/assets/sound/click.mp3'
import modalSfx from '@/assets/sound/modal.wav'
import paginationSfx from '@/assets/sound/pagination.wav'

const tokens = [
  {
    id: 1,
    name: "Sort By ID",
    status: "id",
  },
  {
    id: 2,
    name: "Sort By Rarity",
    status: "rarity",
  },
];

const tokenMyCollection = [
  {
    id: 1,
    name: "My Collection",
    status: true,
  },
  {
    id: 2,
    name: "Full Collection",
    status: false,
  },
];

export default {
  data() {
    return {
      sortBy: "id",
      connectedWallet: "0x00",
      ascending: true,
      showMyCollection: true,
      showSoldiers: false,
      showGods: false,
      showBounties: false,
      currentPage: 1,
      currentPagination: 1,
      flagForPagination: true,
      perPage: 16,
      searchValue: "",
      collectionType: "",
      cards: [],
      owners: [],
      yourNfts: [],
      godNfts: [],
      bountyNfts: [],
      totalLength: 0,
      noCardsText: "Loading...",
      showPopup: "",
      bountyData: [
        {
          name: "Bullish Billionair Ltd Ediditon NFT",
          image: "https://user-images.githubusercontent.com/81764479/146896413-9bb4d236-fa8f-455e-83f1-2374faac36e2.png",
        },
        {
          name: "The Fury of Poseidon [Power-Up] NFT",
          image: "https://user-images.githubusercontent.com/81764479/146898204-90d1e9e7-4100-40e8-8603-64d3c4def05a.png",
        },
        {
          name: "The Power of Zeus [Power-Up] NFT",
          image: "https://user-images.githubusercontent.com/81764479/146896430-dfa46f9a-cb00-49cb-a0fe-e3b346381003.png",
        }
      ]
    };
  },
  components: {
    Popup,
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
    CheckIcon,
    SelectorIcon,
  },
  setup() {
    const selectedSortBy = ref(tokens[0]);
    const selectedCollection = ref(tokenMyCollection[0]);
    const onSound = useSound(buttonSfx, { volume: 0.25 })
    const modalSound = useSound(modalSfx, { volume: 0.25 })
    const paginationSound = useSound(paginationSfx, { volume: 0.25 })

    return {
      tokens,
      onSound,
      modalSound,
      paginationSound,
      selectedSortBy,
      tokenMyCollection,
      selectedCollection,
    };
  },
  async mounted() {
    this.wallet = await getAccount();
    this.getTotalLength();
    await this.getYourBounties();
    await this.getYourNfts();
    this.getAllBountiesNfts();
    this.getAllGodsNfts();
    // this.getOwners();
  },
  methods: {
    setSortBy(e) {
      this.sortBy = e;
    },
    toggleMyCollection(e) {
      this.showMyCollection = e;
      this.currentPage = 1;
    },
    toPrev(e) {
      if (e == 1) {
        this.flagForPagination = false;
      }
      else {
        this.flagForPagination = true;
        this.currentPagination = e - 1;
        this.currentPage = (e-2)*5 + 1;
      }
    },
    toNext(e) {
      if (e == Math.ceil(this.filteredCards[2]/((this.perPage)*5))) {
        this.flagForPagination = false;
      }
      else {
        this.flagForPagination = true;
        this.currentPagination = e + 1;
        this.currentPage = e*5 + 1;
      }
    },
    async getTotalLength() {
      const a = await getTotalBounties();
      const b = await getTotalGodsNFT(); 
      const tLength = Number(a) + Number(b); 
      this.totalLength = tLength;
    },
    async getAllBountiesNfts() {
      const length = await getTotalBounties(); 
      // TODO: For the future change 1000 to whatever necessary reading from the contract.
      for (let i = 0; i < length; i++) {
        let url = await getJsonForBounties(i);
        fetch(url)
        .then(res => res.json())
        .then((out) => {
            this.cards.push({
              id: i+1,
              name: out.name,
              image: out.image,
              video: out.video,
              owner: "",
              rarity: 1,
              value: "??? OLYMPUS",
              collection: out.attributes[0].trait_type
            })
        })
        .catch(err => {
            throw err
        });
        // const card = require("@/metadata/bounties/" + i + ".json");
        // this.cards.push({
        //   id: i+1,
        //   name: card.name,
        //   image: "https://user-images.githubusercontent.com/81764479/148542476-d57fa6fb-2ff7-44a4-8553-6c8fd08edd58.png",
        //   video: card.video,
        //   owner: "",
        //   rarity: 1,
        //   value: "??? OLYMPUS",
        //   collection: card.attributes[0].trait_type,// gods, soldiers or bounties
        //   mediaType: card.media, // video or image
        // });
      }
    },
    async getAllGodsNfts() {
      const addNo = await getTotalBounties(); 
      const length = await getTotalGodsNFT();
      // TODO: For the future change 1000 to whatever necessary reading from the contract.
      for (let i = 0; i < length; i++) {
        let url = await getJsonForGods(i);
        const stats = await getStatsRoyaleCards(i);
        const wins = await getPrevWIns(i);
        const defeats = await getPrevDefeats(i);
          fetch(url)
          .then(res => res.json())
          .then((out) => {
              this.cards.push({
                id: i + Number(addNo) + 1,
                name: out.name,
                image: out.image.replace("play.olympustoken.io/", "bafybeig6iusafwgftccirnxffy32zw2cy6kmvmd6z4sqwpheiuc7e5yx6i").replace("img/", ".ipfs").replace("nfts/", ".dweb.link/"),
                owner: "",
                rarity: 1,
                value: "??? OLYMPUS",
                power: stats.attack + stats.defence + stats.hp + stats.speed,
                level: out.attributes[2].value,
                attack: stats.attack,
                defense: stats.defence,
                vitality: stats.hp,
                speed: stats.speed,
                win: wins,
                lost: defeats,
                collection: out.attributes[0].trait_type
              })
          })
          .catch(err => {
              throw err
          });
        // const card = require("@/metadata/gods/" + i + ".json");
        // this.cards.push({
        //   id: i + Number(addNo) + 1,
        //   name: card.name,
        //   image: card.image.replace("play.olympustoken.io/", "bafybeig6iusafwgftccirnxffy32zw2cy6kmvmd6z4sqwpheiuc7e5yx6i").replace("img/", ".ipfs").replace("nfts/", ".dweb.link/"),
        //   owner: "",
        //   rarity: 1,
        //   value: "??? OLYMPUS",
        //   power: stats.attack + stats.defence + stats.hp + stats.speed,
        //   level: card.attributes[2].value,
        //   attack: stats.attack,
        //   defense: stats.defence,
        //   vitality: stats.hp,
        //   speed: stats.speed,
        //   win: wins,
        //   lost: defeats,
        //   collection: card.attributes[0].trait_type
        //   //collection: card.type, // gods, soldiers or bounties
        //   //mediaType: card.media, // video or image
        //   //video: card.video,
        // });
      }
    },
    toView(e) {
      this.showPopup = e;
      this.modalSound.play();
    },
    currentPageStatus(e) {
      this.currentPage = e;
       this.paginationSound.play();
    },
    perPageCardStatus(e) {
      this.perPage = e;
      this.currentPage = 1;
    },
    toggleGods() {
      this.showGods = this.showGods ? false : true;
      this.currentPage = 1;
      this.showSoldiers = false;
      this.showBounties = false;
      this.onSound.play();
    },
    toggleSoldiers() {
      this.showSoldiers = this.showSoldiers ? false : true;
      this.currentPage = 1;
      this.showGods = false;
      this.showBounties = false;
      this.onSound.play();
    },
    toggleBounties() {
      this.showBounties = this.showBounties ? false : true;
      this.currentPage = 1;
      this.showGods = false;
      this.showSoldiers = false;
      this.onSound.play();
    },

    // async getOwners() {
    //   // This ideally should be managed server side and cached
    //   // It's just too damn slow
    //   for (let i = 0; i < 1000; i++) {
    //     const owner = await getOwner(i);
    //     this.owners.push(owner);
    //   }
    // },
    async getYourBounties() {
      const nfts = await getBountiesOf(this.wallet);
      if (nfts.length == 0) {
        this.noCardsText = "No cards";
      } else {
        for (const nft of nfts) {
          this.bountyNfts.push(nft.toNumber());
        }
      }
      const arr = Object.values(this.bountyNfts);
      for (let i = 0; i < arr.length; i ++) {
            let url = await getJsonForBounties(arr[i]);
            fetch(url)
            .then(res => res.json())
            .then((out) => {
                this.yourNfts.push({
                  id: arr[i] + 1,
                  name: out.name,
                  image: out.image,
                  video: out.video,
                  owner: "",
                  rarity: 1,
                  value: "??? OLYMPUS",
                  collection: out.attributes[0].trait_type
                })
            })
            .catch(err => {
                throw err
            });
        }
    },
    async getYourNfts() {
      const nfts = await getNftsOf(this.wallet);
      if (nfts.length == 0) {
        this.noCardsText = "No cards";
      } else {
        for (const nft of nfts) {
          this.godNfts.push(nft.toNumber());
        }
      }
      const arr = Object.values(this.godNfts);
      const addNo = await getTotalBounties(); 
      for (let i = 0; i < arr.length; i ++) {
          let url = await getJsonForGods(arr[i]);
          const stats = await getStatsRoyaleCards(i);
          const wins = await getPrevWIns(i);
          const defeats = await getPrevDefeats(i);
            fetch(url)
            .then(res => res.json())
            .then((out) => {
                this.yourNfts.push({
                  id: i + Number(addNo) + 1,
                  name: out.name,
                  image: out.image.replace("play.olympustoken.io/", "bafybeig6iusafwgftccirnxffy32zw2cy6kmvmd6z4sqwpheiuc7e5yx6i").replace("img/", ".ipfs").replace("nfts/", ".dweb.link/"),
                  owner: "",
                  rarity: 1,
                  value: "??? OLYMPUS",
                  power: stats.attack + stats.defence + stats.hp + stats.speed,
                  level: out.attributes[2].value,
                  attack: stats.attack,
                  defense: stats.defence,
                  vitality: stats.hp,
                  speed: stats.speed,
                  win: wins,
                  lost: defeats,
                  collection: out.attributes[0].trait_type
                })
            })
            .catch(err => {
                throw err
            });
        }
    },
  },
  computed: {
    filteredCards() {
      let tempCards = this.cards;

      // Process search input
      if (this.searchValue != "" && this.searchValue) {
        tempCards = tempCards.filter((card) => {
          return card.name.toUpperCase().includes(this.searchValue.toUpperCase());
        });
      }

      // Show user collection
      if (this.showMyCollection){
        tempCards = [...this.yourNfts];
      }

      // Show gods
      if (this.showGods)
        tempCards = tempCards.filter((item) => {
          return item.collection == "God";
        });

      // Show soldiers
      if (this.showSoldiers)
        tempCards = tempCards.filter((item) => {
          return item.collection == "soldiers";
        });

      // Show bounties
      if (this.showBounties)
        tempCards = tempCards.filter((item) => {
          return item.collection == "Bounty";
        });

      // Sort by id
      tempCards = tempCards.sort((a, b) => {
        if (this.sortBy == "id") {
          return a.id - b.id;
        }
      });

      // Sort by rarity
      tempCards = tempCards.sort((a, b) => {
        if (this.sortBy == "rarity") {
          return a.rarity - b.rarity;
        }
      });

      // Show sorted array in descending or ascending order
      if (!this.ascending) {
        tempCards.reverse();
      }
      const a = (this.currentPage - 1)*(this.perPage)
      return [tempCards.slice(a,  a+this.perPage), tempCards, tempCards.length];
    },
  },
};
</script>
