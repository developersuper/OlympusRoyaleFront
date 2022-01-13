<template>
  <div class="bg-gray-900 border rounded-3xl border-gray-bc w-full px-4 pt-4 pb-2 nft-cards cursor-pointer wow flipInX" data-wow-duration="1s" data-wow-delay=".55s">
    <img 
      :class="[
        imageStyle,
        'w-full -mb-2'
      ]" 
      v-lazy="{
        src: lazyOptions.src,
        loading: lazyOptions.loading,
        error: require('@/assets/emptybackground.png'),
        lifecycle: lazyOptions.lifecycle
      }"
     @click="toView" 
     alt="" 
    />
    <p v-if="card.attributes[0].trait_type === 'God'" class="text-center text-lg text-white flex justify-center opensans leading-6">{{ card.name.slice(0, -10) }} <br /> Level {{ card.level }} </p>
    <p v-if="card.attributes[0].trait_type === 'Bounty'" class="text-center mt-8 text-lg text-white flex justify-center opensans">{{ card.name }} </p>
    <!-- <p v-if="card.attributes[0].trait_type === 'Bounty'" class="text-base sm:text-xl font-bold shadow-power text-white flex justify-center">RARITY: S+ (1 OF 1)</p> -->
    <span v-if="card.attributes[0].trait_type === 'God'" class="text-base sm:text-xl font-bold shadow-power text-white flex justify-center">POWER: {{ card.power }}</span>
    <div class="flex flex-row justify-center">
      <p class="mt-1 text-locker_primary font-semibold text-base"><span class="cursor-pointer" @click="toView">VIEW</span> / <span><a href="https://lootex.io/stores/olympus-royale" target="_blank">TRADE</a></span></p>
    </div>
  </div>
</template>
<script>
import { reactive } from 'vue'
import { useSound } from '@vueuse/sound'

import { nftImages } from '@/assets/loadingNfts/nfts.js'
import backSfx from '@/assets/sound/back.wav'



export default {
  props: {
    card: Object,
  },
  setup(props) {
    const modalSound = useSound(backSfx, { volume: 0.25 });

    let loading = '';
    let src = '';

    if(props.card.attributes[0].trait_type === 'God') {
      loading = nftImages[`gods${props.card.image.split('/')[8].split('-')[0]}`];
      src = '' + props.card.image;
    }

    if(props.card.attributes[0].trait_type === 'Bounty') {
      loading = nftImages[`bounties${props.card.image.split('/')[8].split('.')[0]}`];
      src = '' + props.card.image;
    }

    const lazyOptions = reactive({
      src,
      loading,
      lifecycle: {
        loading: () => {
        },
        error: () => {
        },
        loaded: () => {
        }
      }
    })
    return {
      modalSound,
      lazyOptions,
    }
  },
  data() {
    return {
    }
  },
  mounted() {
  },
  unmounted() {
  },
  methods: {
    toView() {
      this.modalSound.play();
      this.$emit('toView', this.card.id);
    },
    onLoad() {
      this.loaded = true;
    },
  },
  computed: {
    imageStyle() {
      if(this.card.attributes[0].trait_type === 'Bounty') return 'p-1 rounded-2xl';
      return '';
    }
  }
}
</script>
<style scoped>
  img[lazy=loading] {
    margin-bottom: 10px;
  }
  img[lazy=error] {
    margin-bottom: 10px;
  }
</style>