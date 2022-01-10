<template>
  <div :class="showMenu ? 'bottom-0' : 'md:-bottom-16 bottom-0'" @mouseover="showMenu = true" @mouseleave="showMenu = false" class="fixed flex self-center transition-all duration-200 z-50 mx-auto">
    <div class="flex place-content-center flex-row items-end">
      <img :class="showMenu ? 'opacity-0 hidden' : 'opacity-100 hidden md:block '" src="@/assets/menu-blur.png" class="fixed transition-opacity duration-300 bottom-0 h-16 z-30 blur-2xl" />
      <router-link to="/">
        <div class="menu-mint-wrapper cursor-pointer" @mouseover="menuMintHover = true" @mouseleave="menuMintHover = false">
          <div v-if="$route.name === 'Mint'" class="menu-mint-active absolute bottom-0"></div>
          <div v-if="$route.name != 'Mint'" :class="menuMintHover ? 'md:-bottom-full bottom-0' : 'bottom-0'" class="menu-mint absolute transition-all duration-300"></div>
          <div v-if="$route.name != 'Mint' && !isMobile" :class="menuMintHover ? 'bottom-0' : '-bottom-full'" class="menu-mint-hover absolute transition-all duration-300"></div>
        </div>
      </router-link>

      <router-link to="/collection">
        <div class="menu-nfts-wrapper cursor-pointer" @mouseover="menuNftsHover = true" @mouseleave="menuNftsHover = false">
          <div v-if="$route.name === 'Collection'" class="menu-nfts-active absolute bottom-0"></div>
          <div v-if="$route.name != 'Collection'" :class="menuNftsHover ? 'md:-bottom-full bottom-0' : 'bottom-0'" class="menu-nfts absolute transition-all duration-300"></div>
          <div v-if="$route.name != 'Collection' && !isMobile" :class="menuNftsHover ? 'bottom-0' : '-bottom-full'" class="menu-nfts-hover absolute transition-all duration-300"></div>
        </div>
      </router-link>

      <router-link to="/battle">
        <div class="menu-battle-wrapper cursor-pointer" @mouseover="menuBattleHover = true" @mouseleave="menuBattleHover = false">
          <div v-if="$route.name === 'Battle'" class="menu-battle-active absolute bottom-0"></div>
          <div v-if="$route.name != 'Battle'" :class="menuBattleHover ? 'md:-bottom-full bottom-0' : 'bottom-0'" class="menu-battle absolute transition-all duration-300"></div>
          <div v-if="$route.name != 'Battle' && !isMobile" :class="menuBattleHover ? 'bottom-0' : '-bottom-full'" class="menu-battle-hover absolute transition-all duration-300"></div>
        </div>
      </router-link>

      <div class="menu-events"></div>
      <div class="menu-lore"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: "",
      menuMintHover: false,
      menuNftsHover: false,
      menuBattleHover: false,
      windowWidth: window.innerWidth,
    };
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  },
  computed: {
    isMobile() {
      return this.windowWidth <= 768;
    },
  },
};
</script>

<style scoped>
.menu-mint-wrapper {
  width: calc(0.8 * 159px);
  height: calc(0.8 * 165px);
}
.menu-mint {
  background: url("~@/assets/Menu-mint.png");
  width: calc(0.8 * 159px);
  height: calc(0.8 * 165px);
  background-size: contain;
  background-repeat: no-repeat;
}
.menu-mint-hover {
  background: url("~@/assets/Menu-mint-hover.png");
  width: calc(0.8 * 159px);
  height: calc(0.8 * 183px);
  background-size: contain;
  background-repeat: no-repeat;
}
.menu-mint-active {
  background: url("~@/assets/Menu-mint-active.png");
  width: calc(0.8 * 160px);
  height: calc(0.8 * 180px);
  background-size: contain;
  background-repeat: no-repeat;
}

.menu-nfts-wrapper {
  width: calc(0.8 * 159px);
  height: calc(0.8 * 165px);
}
.menu-nfts {
  background: url("~@/assets/Menu-nfts.png");
  width: calc(0.8 * 159px);
  height: calc(0.8 * 165px);
  background-size: contain;
  background-repeat: no-repeat;
}
.menu-nfts-hover {
  background: url("~@/assets/Menu-nfts-hover.png");
  width: calc(0.8 * 159px);
  height: calc(0.8 * 183px);
  background-size: contain;
  background-repeat: no-repeat;
}
.menu-nfts-active {
  background: url("~@/assets/Menu-nfts-active.png");
  width: calc(0.8 * 160px);
  height: calc(0.8 * 180px);
  background-size: contain;
  background-repeat: no-repeat;
}

.menu-battle-wrapper {
  width: calc(0.8 * 215px);
  height: calc(0.8 * 221px);
}
.menu-battle {
  background: url("~@/assets/Menu-battle.png");
  width: calc(0.8 * 215px);
  height: calc(0.8 * 221px);
  background-size: contain;
  background-repeat: no-repeat;
}
.menu-battle-hover {
  background: url("~@/assets/Menu-battle-hover.png");
  width: calc(0.8 * 215px);
  height: calc(0.8 * 221px);
  background-size: contain;
  background-repeat: no-repeat;
}
.menu-battle-active {
  background: url("~@/assets/Menu-battle-active.png");
  width: calc(0.8 * 215px);
  height: calc(0.8 * 221px);
  background-size: contain;
  background-repeat: no-repeat;
}

.menu-events {
  background: url("~@/assets/Menu-events.png");
  width: calc(0.8 * 164px);
  height: calc(0.8 * 164px);
  background-size: contain;
  background-repeat: no-repeat;
}
.menu-lore {
  background: url("~@/assets/Menu-lore.png");
  width: calc(0.8 * 164px);
  height: calc(0.8 * 164px);
  background-size: contain;
  background-repeat: no-repeat;
}

@media (max-width: 768px) {
  .menu-mint-wrapper {
    width: calc(0.37 * 159px);
    height: calc(0.37 * 165px);
  }
  .menu-mint {
    width: calc(0.37 * 159px);
    height: calc(0.37 * 165px);
  }
  .menu-mint-active {
    width: calc(0.37 * 160px);
    height: calc(0.37 * 180px);
  }
  .menu-nfts-wrapper {
    width: calc(0.37 * 159px);
    height: calc(0.37 * 165px);
  }
  .menu-nfts {
    width: calc(0.37 * 159px);
    height: calc(0.37 * 165px);
  }
  .menu-nfts-active {
    width: calc(0.37 * 160px);
    height: calc(0.37 * 180px);
  }
  .menu-battle-wrapper {
    width: calc(0.37 * 215px);
    height: calc(0.37 * 221px);
  }
  .menu-battle {
    width: calc(0.37 * 215px);
    height: calc(0.37 * 221px);
  }
  .menu-battle-active {
    width: calc(0.37 * 215px);
    height: calc(0.37 * 221px);
  }
  .menu-events {
    width: calc(0.37 * 164px);
    height: calc(0.37 * 164px);
  }
  .menu-lore {
    width: calc(0.37 * 164px);
    height: calc(0.37 * 164px);
  }
}

@media (max-width: 374px) {
  .menu-mint-wrapper {
    width: calc(0.32 * 159px);
    height: calc(0.32 * 165px);
  }
  .menu-mint {
    width: calc(0.32 * 159px);
    height: calc(0.32 * 165px);
  }
  .menu-mint-active {
    width: calc(0.32 * 160px);
    height: calc(0.32 * 180px);
  }
  .menu-nfts-wrapper {
    width: calc(0.32 * 159px);
    height: calc(0.32 * 165px);
  }
  .menu-nfts {
    width: calc(0.32 * 159px);
    height: calc(0.32 * 165px);
  }
  .menu-nfts-active {
    width: calc(0.32 * 160px);
    height: calc(0.32 * 180px);
  }
  .menu-battle-wrapper {
    width: calc(0.32 * 215px);
    height: calc(0.32 * 221px);
  }
  .menu-battle {
    width: calc(0.32 * 215px);
    height: calc(0.32 * 221px);
  }
  .menu-battle-active {
    width: calc(0.32 * 215px);
    height: calc(0.32 * 221px);
  }
  .menu-events {
    width: calc(0.32 * 164px);
    height: calc(0.32 * 164px);
  }
  .menu-lore {
    width: calc(0.32 * 164px);
    height: calc(0.32 * 164px);
  }
}
</style>
