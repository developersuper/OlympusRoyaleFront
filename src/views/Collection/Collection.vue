<template>
  <div class="flex w-full place-content-center my-0 sm:mb-10 sm:-mt-8 wow fadeInDown" data-wow-duration="0.6s" data-wow-delay="0.35s">
    <img class="hidden sm:block h-24 object-contain select-none" src="@/assets/olympus-nfts.png" />
  </div>
  <p class="hidden sm:block -mt-12 sm:mt-0 sm:mb-4 sm:mb-0  w-full flex justify-center text-center text-gray-100 font-bold text-md sm:text-lg">
      VIEW AND MANAGE YOUR OLYMPUS NFT'S
  </p>
  <span class="xl:flex-row flex-col flex lg:space-y-0 space-y-4 justify-between mb-4 ml-4 xl:ml-0 mr-4 px-3 py-3 rounded-lg wow fadeInDown" data-wow-duration="0.6s" data-wow-delay="0.45s">
    <SelectNFT @changeType="onChangeNFTType" :type="type" />
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
    <div class="font-heading fadeInDown px-2 pb-4 text-sm flex 2xl:w-1/5 xl:w-1/4 md:w-1/3 w-full h-auto justify-between" v-for="card in filteredCards[0]" v-bind:key="card.image">
      <Popup 
        :cards="filteredCards[1]"
        :id="card.id" 
        @close="showPopup = false" 
        v-if="showPopup == card.id"
      />
      <Card :card="card" @toView="toView" />
    </div>
  </div>

  <Pagination 
    v-if="filteredCards[1].length"
    :totalLength="filteredCards[1].length"
    :currentPage="page"
    :perPage="perPage"
    :perPages="[25, 50, 75]"
    @updatePage="onChangePageInfo($event, 'page')"
    @updatePerPage="onChangePageInfo($event, 'perPage')"
  />

  <div v-else class="flex place-content-center">
    <div class="text-white py-4 px-16 rounded-full bg-gray-900 my-24 text-center font-bold text-2xl font-heading">{{ stateMessage }}</div>
  </div>
</template>

<script>
import { ref } from "vue";
import { mapGetters } from 'vuex';
import { useSound } from '@vueuse/sound'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/vue";
import { CheckIcon, SelectorIcon } from "@heroicons/vue/solid";

import paginationSfx from '@/assets/sound/pagination.wav'

import SelectNFT from './components/SelectNFT.vue';
import Popup from './components/Popup.vue';
import Card from './components/Card.vue';
import Pagination from './components/Pagination.vue';

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
      type: 'all',      
      flagForPagination: true,
      searchValue: "",
      collectionType: "",
      cards: [],
      showPopup: "",
      page: 1,
      perPage: 25,
    };
  },
  components: {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
    CheckIcon,
    SelectorIcon,
    Popup,
    Card,
    SelectNFT,
    Pagination,
  },
  setup() {
    const selectedSortBy = ref(tokens[0]);
    const selectedCollection = ref(tokenMyCollection[0]);
    const paginationSound = useSound(paginationSfx, { volume: 0.25 })
    return {
      tokens,
      paginationSound,
      selectedSortBy,
      tokenMyCollection,
      selectedCollection,
    };
  },
  async mounted() {
  },
  methods: {
    setSortBy(e) {
      this.sortBy = e;
    },
    toggleMyCollection(e) {
      this.showMyCollection = e;
      this.page = 1;
    },
    onChangePageInfo(value, info) {
      if(info === 'page') this.page = value;
      if(info === 'perPage') {
        this.perPage = value;
        this.page = 1;
      }
      console.log(value, info);
    },
    toView(e) {
      this.showPopup = e;
    },
    onChangeNFTType(e) {
      if(this.type === e) {
        this.type = 'all';
      }else {
        this.type = e;
      }
      this.page = 1;
    },
  },
  computed: {
    ...mapGetters('cards', [
      'gods',
      'bounties',
      'soldiers',
      'myGods',
      'myBounties',
      'mySoldiers',
      'totalLength'
    ]),
    ...mapGetters('wallet', [
      'address'
    ]),
    filteredCards() {
      let cards = [];
      if(this.showMyCollection) {
        if(this.type === 'all') cards = [...this.myBounties, ...this.myGods, ...this.mySoldiers];
        if(this.type === 'gods') cards = this.myGods;
        if(this.type === 'soldiers') cards = this.mySoldiers;
        if(this.type === 'bounties') cards = this.myBounties;
      }
      else {
        if(this.type === 'all') cards = [...this.bounties, ...this.gods, ...this.soldiers];
        if(this.type === 'gods') cards = this.gods;
        if(this.type === 'soldiers') cards = this.soldiers;
        if(this.type === 'bounties') cards = this.bounties;
      }

      if (this.searchValue != "" && this.searchValue) {
        cards = cards.filter((card) => {
          return card.name.toUpperCase().includes(this.searchValue.toUpperCase());
        });
      }

      cards = cards.map((card, idx) => ({
        ...card,
        id: idx + 1
      }));

      // Sort by id
      cards = cards.sort((a, b) => {
        if (this.sortBy == "id") {
          return a.id - b.id;
        }
      });

      // Sort by rarity
      cards = cards.sort((a, b) => {
        if (this.sortBy == "rarity") {
          return a.rarity - b.rarity;
        }
      });

      // Show sorted array in descending or ascending order
      if (!this.ascending) {
        cards.reverse();
      }

      const start = (this.page - 1) * this.perPage;
      console.log('filtered cards', cards);
      return [cards.slice(start,  start + this.perPage), cards, cards.length];
    },
    stateMessage() {
      if(this.showMyCollection && this.address === null) return 'Connect your wallet';
      if(this.filteredCards[1].length === 0) return 'No cards';
      return '';
    }
  },
};
</script>
