<template>
  <div>
    <nav class="flex flex-row items-center w-full px-4 h-20 bg-transparent justify-between md:justify-end">
      <div class="absolute top-6 left-4 flex flex-row justify-between buyer-bg mobile">
        <img class="w-14 h-9 hover:scale-110 cursor-pointer transition-all duration-200 transform" src="@/assets/gold.png" />
        <span class="py-2 px-2 ml-2 text-gray-200 font-semibold">{{ gold }} </span>
        <router-link to="/buy-gold">
          <img class="w-9 h-9 hover:scale-110 cursor-pointer transition-all duration-200 transform" src="@/assets/buy-more.png" />
        </router-link>
      </div>
      <div class="absolute top-6 left-44 flex flex-row justify-between buyer-bg mobile">
        <img class="w-14 h-9 hover:scale-110 cursor-pointer transition-all duration-200 transform" src="@/assets/gem.png" />
        <span class="py-2 px-2 ml-2 text-gray-200 font-semibold">{{ gem }} </span>
        <router-link to="/buy-gem">
          <img class="w-9 h-9 hover:scale-110 cursor-pointer transition-all duration-200 transform" src="@/assets/buy-more.png" />
        </router-link>
      </div>
      <Popper placement="bottom">
        <button v-wave class="relative z-40 flex mr-4 h-10 items-center px-3 py-2 border border-locker_primary rounded-md text-locker_primary bg-locker_primary bg-opacity-10 hover:bg-opacity-20 transition-all duration-200">
          <span class="mr-2">dApps</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          </svg>
        </button>
        <template #content="{ close }">
          <div class="text-sm mr-4 font-semibold text-white p-4 bg-gray-800 rounded-xl border-gray-700 border lg:flex-grow text-center lg:space-y-0 space-y-4 lg:space-x-8 flex lg:flex-row flex-col">
            <a @click="close" class="flex flex-col group items-center" href="https://locker.olympustoken.io/">
              <img class="h-14 w-14 group-hover:shadow-locker_primary rounded-full transition-all duration-300" src="@/assets/locker.png" />
              <span class="mt-2 group-hover:text-locker_primary transition-colors duration-300">Locker of Ananke</span>
            </a>
            <a @click="close" class="flex flex-col group items-center" href="https://app.olympustoken.io/">
              <img class="h-14 w-14 group-hover:shadow-dashboard_primary rounded-full transition-all duration-300" src="@/assets/dashboard.png" />
              <span class="mt-2 group-hover:text-dashboard_primary transition-colors duration-300">Dashboard</span>
            </a>
            <a @click="close" class="flex flex-col items-center opacity-30 cursor-not-allowed">
              <img class="h-14 w-14 group-hover:shadow-launchpad_primary rounded-full transition-all duration-300" src="@/assets/forge.png" />
              <span class="mt-2 group-hover:text-launchpad_primary transition-colors duration-300">Forge of Hephaestus</span>
            </a>
            <a @click="close" class="flex flex-col items-center opacity-30 cursor-not-allowed" href="/">
              <img class="h-14 w-14" src="@/assets/kronos.png" />
              <span class="mt-2">Wheel of Kronos</span>
            </a>
            <div class="flex flex-row justify-between buyer-bg mt-4 md:hidden">
              <img class="w-14 h-9 hover:scale-110 cursor-pointer transition-all duration-200 transform" src="@/assets/gold.png" />
              <span class="py-2 px-2 ml-2 text-gray-200 font-semibold">{{ gold }} </span>
              <router-link to="/buy-gold">
                <img class="w-9 h-9 hover:scale-110 cursor-pointer transition-all duration-200 transform" src="@/assets/buy-more.png" />
              </router-link>
            </div>
            <div class="flex flex-row justify-between buyer-bg mt-4 md:hidden">
              <img class="w-14 h-9 hover:scale-110 cursor-pointer transition-all duration-200 transform" src="@/assets/gem.png" />
              <span class="py-2 px-2 ml-2 text-gray-200 font-semibold">{{ gem }} </span>
              <router-link to="/buy-gem">
                <img class="w-9 h-9 hover:scale-110 cursor-pointer transition-all duration-200 transform" src="@/assets/buy-more.png" />
              </router-link>
            </div>
          </div>
        </template>
      </Popper>

      <Button name="Connect" class="connectBtn w-full max-w-32" v-if="!$store.getters['wallet/isWalletConnected']" @click="connect()" />
      <Button :name="$store.getters['wallet/addressPreviewLong']" class="connectBtn w-full max-w-32" @click="$store.commit('wallet/disconnectWallet')" v-else />
    </nav>
  </div>
</template>

<script>
import Popper from "vue3-popper";
import Button from "@/components/Button.vue";
import { getAccount } from "@/web3/index";

export default {
  name: "Navbar",
  components: {
    Popper,
    Button,
  },
  data: function() {
    return {
      dappsOpen: false,
      activeClass: "text-dashboard_primary",
      inactiveClass: "hover:text-dashboard_primary transition-colors duration-200",
      connectText: "Connect",
      loaded: false,
      gem: 0,
      gold: 0
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    toggleDapps() {
      this.dappsOpen = !this.dappsOpen;
    },
    async connect() {
      await this.$store.dispatch('wallet/connectWallet');
      await this.$store.dispatch('cards/loadMyCards');
    },
    async enableMetamask() {
        if (!this.loaded) {
          try {
            localStorage.wallet = await getAccount();
            this.loaded = true;
            //this.showAddress();
            //ethereum.on('chainChanged', this.handleChainChanged);
            //ethereum.on('accountsChanged', this.handleAccountsChanged);
            //this.chainId = ethereum.chainId;
          } catch (e) {
            if (e.code === 4001) {
              // EIP-1193 userRejectedRequest error
              // If this happens, the user rejected the connection request.
              console.log('User rejected connection.');
            } else {
              console.error('Error requesting Ethereum connection/accounts', e);
            }
          }
        }
      },
  },
  async mounted() {
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
    this.wallet = await getAccount();
    if (this.wallet) {
        this.connectText = this.wallet.substr(0, 5) + '...' + this.wallet.substr(this.wallet.length - 3, 3);
    }
  },
  computed: {
    isMobile() {
      return this.windowWidth <= 1024;
    },
  },
};
</script>
