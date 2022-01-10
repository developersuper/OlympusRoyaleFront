<template>
  <span class="mt-10 lg:flex-row flex-col flex lg:space-y-0 space-y-4 justify-between mb-4 mr-4 rounded-lg wow fadeInDown" data-wow-duration="0.6s" data-wow-delay="0.45s">
    <div class="flex lg:flex-row lg:space-y-0 space-y-4 flex-col items-center lg:space-x-3">
      <div class="relative z-0 inline-flex place-content-center shadow-sm rounded-md">
        <button
          @click="
            sortBy = 'rarity';
            ascending = !ascending;
          "
          type="button"
          class="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-600 bg-gray-700 text-sm font-medium text-white hover:bg-gray-600 focus:z-10 focus:outline-none focus:bg-gray-600"
        >
          Rarity
          <div :class="sortBy == 'rarity' ? 'text-gray-200' : 'text-gray-500'" class="ml-2 inline-block group-hover:text-gray-300 duration-200 transition-colors">
            <SortAscendingIcon v-if="sortBy == 'rarity' && !ascending" class="h-4 w-4" aria-hidden="true" />
            <SortDescendingIcon v-else class="h-4 w-4" aria-hidden="true" />
          </div>
        </button>

        <button
          @click="
            sortBy = 'id';
            ascending = !ascending;
          "
          type="button"
          class="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-600 bg-gray-700 text-sm font-medium text-white hover:bg-gray-600 focus:z-10 focus:outline-none focus:bg-gray-600"
        >
          ID
          <div :class="sortBy == 'id' ? 'text-gray-200' : 'text-gray-500'" class="ml-2 inline-block group-hover:text-gray-300 duration-200 transition-colors">
            <SortAscendingIcon v-if="sortBy == 'id' && !ascending" class="h-4 w-4" aria-hidden="true" />
            <SortDescendingIcon v-else class="h-4 w-4" aria-hidden="true" />
          </div>
        </button>
      </div>
    </div>

    <div class="flex lg:flex-row lg:space-y-0 space-y-4 flex-col items-center lg:space-x-3">
      <input
        v-model="searchValue"
        class="bg-locker_primary overline w-72 bg-opacity-10 hover:shadow-locker_primary focus:shadow-locker_primary relative border-locker_primary transition-all duration-200 placeholder-locker_primary text-locker_primary rounded-full border px-4 py-2 text-left"
        placeholder="Search cards"
      />
    </div>
  </span>

  <swiper
    v-if="filteredCards.length"
    :breakpoints="{
      '640': {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      '768': {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      '1024': {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      '1440': {
        slidesPerView: 4,
        spaceBetween: 32,
      },
    }"
    :slides-per-view="1"
    :space-between="12"
    :loop="false"
    :centeredSlides="true"
    navigation
    class="my-10"
  >
    <swiper-slide
      @click="cardSelected = card.id"
      :class="cardSelected == card.id ? 'border-locker_primary shadow-locker_primary' : 'border-none'"
      class="bg-gray-900 border-4 rounded-2xl text-center p-6 overflow-hidden"
      v-for="card in filteredCards"
      v-bind:key="card"
    >
      <div class="flex place-content-center items-center">
        <div v-if="cardSelected == card.id" class="absolute bg-locker_primary shadow-smooth font-heading font-bold text-xl text-locker_primary-xtra_dark rounded-lg py-3 px-8">Selected</div>
        <img class="w-full mb-4" :src="card.image" alt="" />
      </div>
      <div class="mt-3">
        <h4 class="font-heading text-lg text-white">{{ card.name }}</h4>

        <span class="font-heading block text-sm text-gray-100 mt-1">Attack: 1, Defence: 1, Speed: 1, <span class="text-locker_primary">Energy 100/100</span></span>

        <span class="font-heading block text-sm text-gray-300 mt-2">Time left: {{ timeLeft }} seconds</span>
        <span class="font-heading block text-sm text-gray-300 mt-1"
          >Last fought: <span v-if="hadLastFight">{{ lastFought }}</span
          ><span v-else>Never</span></span
        >
      </div>
    </swiper-slide>
  </swiper>

  <div class="flex place-content-center" v-else>
    <div class="text-white py-4 px-16 rounded-full bg-gray-900 my-24 text-center font-bold text-2xl font-heading">{{ noCardsText }}</div>
  </div>
</template>

<script>
import { SortAscendingIcon, SortDescendingIcon } from "@heroicons/vue/solid";
import { getAccount } from "@/web3/index";
import { getOwner, getNftsOf } from "@/web3/nft";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Swiper as SwiperCore, Pagination, Navigation } from "swiper/swiper.esm.js";
import { getBattleContract } from "@/web3/fight";

// swiper bundle styles
import "swiper/swiper-bundle.min.css";

// swiper core styles
import "swiper/swiper.min.css";

// modules styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

// Swiper modules
SwiperCore.use([Pagination, Navigation]);

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
      searchValue: "",
      collectionType: "",
      owners: [],
      yourNfts: [],
      noCardsText: "Loading...",
      cardSelected: "",
      cards: [],
      timeLeft: 0,
      lastFought: "Never",
    };
  },

  components: {
    Swiper,
    SwiperSlide,
    SortAscendingIcon,
    SortDescendingIcon,
  },
  async mounted() {
    this.wallet = await getAccount();
    this.getYourNfts();
    await this.getAllNfts();
    this.getOwners();
  },
  watch: {
    cardSelected() {
      console.log("oyoyoyo");
      this.lastTimeFought(this.cardSelected);
    },
  },
  methods: {
    toggleMyCollection() {
      this.showMyCollection = this.showMyCollection ? false : true;
    },
    async getAllNfts() {
      // TODO: For the future change 1000 to whatever necessary reading from the contract.
      for (let i = 1; i <= 1000; i++) {
        const card = require("@/metadata/" + i + ".json");
        this.cards.push({
          id: i,
          name: "#" + i + " " + card.name,
          image: "https://olympusroyale.io/img/nfts/" + card.image,
          video: "",
          owner: "",
          rarity: 1,
          value: "??? OLYMPUS",
          collection: "", // gods, soldiers or bounties
          mediaType: "", // video or image
        });
      }
    },
    toggleGods() {
      this.showGods = this.showGods ? false : true;
      this.showSoldiers = false;
      this.showBounties = false;
    },
    toggleSoldiers() {
      this.showSoldiers = this.showSoldiers ? false : true;
      this.showGods = false;
      this.showBounties = false;
    },
    toggleBounties() {
      this.showBounties = this.showBounties ? false : true;
      this.showGods = false;
      this.showSoldiers = false;
    },

    async getOwners() {
      // This ideally should be managed server side and cached
      // It's just too damn slow
      for (let i = 1; i <= 1000; i++) {
        const owner = await getOwner(i);
        this.owners.push(owner);
      }
    },
    async getYourNfts() {
      const nfts = await getNftsOf(this.wallet);
      if (nfts.length == 0) {
        this.noCardsText = "No cards";
      } else {
        for (const nft of nfts) {
          this.yourNfts.push(nft.toNumber());
        }
      }
    },

    async lastTimeFought(id) {
      console.log("desu");
      const contract = await getBattleContract();
      let last = null;
      try {
        last = await contract.lastFight(id);
        console.log(last);
        if (last != null && last.eq(0)) {
          this.lastFought = "Never.";
          this.timeLeft = 0;
          this.hadLastFight = false;
        } else {
          const num = last.toNumber();
          this.lastFought = "" + new Date(num * 1000);
          const cd = await contract.pveFightCooldown();
          const rn = Math.floor(Date.now() / 1000);
          const ends = num + cd.toNumber();
          this.timeLeft = rn >= ends ? 0 : ends - rn;
          this.hadLastFight = true;
        }
      } catch (e) {
        console.log(e);
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
      if (this.showMyCollection)
        tempCards = tempCards.filter((item) => {
          return this.yourNfts.indexOf(item.id) > -1;
        });

      // Show gods
      if (this.showGods)
        tempCards = tempCards.filter((item) => {
          return item.collection == "gods";
        });

      // Show soldiers
      if (this.showSoldiers)
        tempCards = tempCards.filter((item) => {
          return item.collection == "soldiers";
        });

      // Show bounties
      if (this.showBounties)
        tempCards = tempCards.filter((item) => {
          return item.collection == "bounties";
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

      return tempCards;
    },
  },
};
</script>

<style>
.swiper-button-next,
.swiper-button-prev {
  width: 80px;
  height: 80px;
  top: 40%;
}
.swiper-button-prev {
  left: 0px;
}
.swiper-button-next {
  right: 0px;
}

.swiper-button-next:after {
  background: url("~@/assets/next.png");
  content: "";
  width: 80px;
  height: 80px;
  background-size: cover;
}

.swiper-button-next:hover:after {
  background: url("~@/assets/next-hover.png");
  width: 80px;
  height: 80px;
  background-size: cover;
  transform: scale(1.1);
  transition: all 0.05s ease-in-out;
}

.swiper-button-prev:after {
  background: url("~@/assets/prev.png");
  content: "";
  width: 80px;
  height: 80px;
  background-size: cover;
}

.swiper-button-prev:hover:after {
  background: url("~@/assets/prev-hover.png");
  width: 80px;
  height: 80px;
  background-size: cover;
  transform: scale(1.1);
  transition: all 0.05s ease-in-out;
}
</style>
