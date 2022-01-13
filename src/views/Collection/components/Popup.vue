<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal">
      <div class="fixed inset-0 z-50">
        <div class="absolute z-40 w-full h-full bg-black opacity-75 blur-sm"></div>
          <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
            <div v-if="!model.video" class="absolute z-50 text-center mx-auto symbol-center popup p-3 pb-5 md:p-6 xl:py-8 xl:px-16">
              <div class="absolute right-0 top-0 xl:right-6 xl:top-0 z-40">
                <div @click="$emit('close')" class="select-none cursor-pointer h-10 w-10 md:w-14 md:h-14 xl:h-20 xl:w-20 close-popup" />
              </div>
              <img 
                :class="[
                  selected === 0 ? 'cursor-not-allowed' : 'cursor-pointer',
                  'absolute top-50pc left-0 w-10 h-10 sm:w-14 sm:h-14 mt-3 mr-1 sm:mr-2 hover:scale-110 transition-all duration-200 transform'
                ]" 
                src="@/assets/prev.png"
                @click="toPrev()" 
              />
              <img 
                :class="[
                  selected === cards.length - 1 ? 'cursor-not-allowed' : 'cursor-pointer',
                  'absolute top-50pc right-0 w-10 h-10 sm:w-14 sm:h-14 mt-3 ml-1 sm:ml-2 hover:scale-110 transition-all duration-200 transform'
                ]" 
                src="@/assets/right.png" 
                @click="toNext()" 
              />
              <a href="https://lootex.io/stores/olympus-royale" target="_blank">
                <button
                  class="absolute bottom-2 z-40 text-gray-900 font-bold uppercase trade-btn"
                >
                  TRADE
                </button>
              </a> 
              <div class="bg-gray-900 h-full border rounded-3xl border-gray-700">
                <div class="flex flex-col h-full mmg:flex-row justify-between px-2 py-4">
                  <div class="flex relative flex-col w-full mmg:w-1/2 text-center h-full place-content-center">
                    <img 
                      class="p-2 w-100 sm:p-4 sm:max-w-sm xxs:max-w-70 max-w-50 mx-auto select-none" 
                      v-lazy="{
                        src: model.image,
                        loading: loading,
                        error: require('@/assets/emptybackground.png'),
                      }"
                    />
                    <div class="-mt-8">
                      <h4 class="text-center text-lg text-white flex justify-center opensans">{{ model.name }}</h4>
                      <span class="text-base sm:text-xl font-bold shadow-power text-white flex justify-center">POWER: {{ model.power }}</span>
                    </div>
                  </div>
                  <div class="mmg:hidden mt-2 w-full place-content-center flex flex-col pb-6">
                    <div class="flex flex-row w-full">
                      <span class="font-semibold w-1/3 text-gray-400 mt-2">ATTACK: {{model.stats[0]}}</span>
                      <span class="font-semibold w-1/3 text-gray-400 mt-2">DEFENSE: {{model.stats[1]}}</span>
                      <span class="font-semibold w-1/3 text-gray-400 mt-2">VITALITY: {{model.stats[2]}}</span>
                    </div>
                    <div class="flex flex-row w-full">
                      <span class="font-bold w-1/3 text-gray-400 mt-2">SPEED: {{model.stats[3]}}</span>
                      <span class="font-bold w-1/3 mt-2 green">{{ model.win }} WINS</span>
                      <span class="font-bold w-1/3 mt-2 red">{{ model.lost }} LOSSES</span>
                    </div>
                    <span class="card-status-color font-bold mt-4">VIEW BATTLE RECORD</span>
                  </div>
                  <div class="hidden mmg:block flex relative flex-col w-full mmg:w-1/2 text-center h-full place-content-center p-8">
                    <img class="hidden sm:block h-20 object-contain select-none mx-auto mb-4" src="@/assets/nfts.png" />
                    <span class="text-base sm:text-xl font-bold shadow-power text-white mb-4">RARITY: S+ (1 OF 1)</span>
                    <div class="flex flex-row w-full my-2 px-2">
                      <div class="relative w-1/2 flex flex-col">
                        <div class="relative w-full">
                          <img class="absolute z-10 w-12 h-12 symbol-center" src="@/assets/cards/attack.png" alt="Logo" />
                          <vc-donut :size="140" background="#081A2E" foreground="#2F455C" :thickness="42" :sections="[{ value: model.stats[1], color: attactColor }]"></vc-donut>
                        </div>  
                        <span class="font-semibold text-gray-200 mt-4">ATTACK: {{model.stats[1]}}/100</span>
                      </div>
                      <div class="relative w-1/2 flex flex-col">
                        <div class="relative w-full">
                          <img class="absolute z-10 w-12 h-12 symbol-center" src="@/assets/cards/defense.png" alt="Logo" />
                          <vc-donut :size="140" background="#081A2E" foreground="#2F455C" :thickness="42" :sections="[{ value: model.stats[2], color: defenseColor }]"></vc-donut>
                        </div>
                        <span class="font-semibold text-gray-200 mt-4">DEFENSE: {{model.stats[2]}}/100</span>
                      </div>
                    </div>
                    <div class="flex flex-row w-full my-2 px-2">
                      <div class="relative w-1/2 flex flex-col">
                        <div class="relative w-full">
                          <img class="absolute z-10 w-12 h-12 symbol-center" src="@/assets/cards/vitality.png" alt="Logo" />
                          <vc-donut :size="140" background="#081A2E" foreground="#2F455C" :thickness="42" :sections="[{ value: model.stats[0], color: vitalityColor }]"></vc-donut>
                        </div>
                        <span class="font-semibold text-gray-200 mt-4">HEALTH: {{model.stats[0]}}/100</span>
                      </div>
                      <div class="relative w-1/2 flex flex-col">
                        <div class="relative w-full">
                          <img class="absolute z-10 w-12 h-12 symbol-center" src="@/assets/cards/speed.png" alt="Logo" />
                          <vc-donut :size="140" background="#081A2E" foreground="#2F455C" :thickness="42" :sections="[{ value: model.stats[3], color: speedColor }]"></vc-donut>
                        </div>
                        <span class="font-semibold text-gray-200 mt-4">SPEED: {{model.stats[3]}}/100</span>
                      </div>
                    </div> 
                    <div class="flex flex-row w-full mmg:w-3/4 mx-auto my-2">
                      <div class="w-1/2 flex flex-row">
                        <img class="w-9" src="@/assets/cards/won.png" /><span class="green font-bold text-lg p-1">{{ wins }} WINS</span>
                      </div>
                      <div class="w-1/2 flex flex-row">
                        <img class="w-9" src="@/assets/cards/lost.png" /><span class="red font-bold text-lg p-1">{{ defeats }} LOSSES</span>
                      </div>
                    </div>
                    <span class="card-status-color font-bold">VIEW BATTLE RECORD</span>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="absolute h-auto popup-video z-50 p-3 symbol-center md:p-6 xl:py-8 xl:px-16">
              <div class="absolute right-0 top-0 xl:right-6 xl:top-0 z-40">
                <div @click="$emit('close')" class="select-none cursor-pointer h-10 w-10 md:w-14 md:h-14 xl:h-20 xl:w-20 close-popup" />
              </div>
              <img 
                :class="[
                  selected === 0 ? 'cursor-not-allowed' : 'cursor-pointer',
                  'absolute top-50pc z-40 left-0 w-10 h-10 sm:w-14 sm:h-14 mt-3 mr-1 sm:mr-2 hover:scale-110 transition-all duration-200 transform'
                ]" 
                src="@/assets/prev.png"
                @click="toPrev()" 
              />
              <img 
                :class="[
                  selected === cards.length - 1 ? 'cursor-not-allowed' : 'cursor-pointer',
                  'absolute top-50pc z-40 right-0 w-10 h-10 sm:w-14 sm:h-14 mt-3 ml-1 sm:ml-2 hover:scale-110 transition-all duration-200 transform'
                ]" 
                src="@/assets/right.png" 
                @click="toNext()" 
              />
              <div class="bg-gray-900 h-auto border rounded-3xl border-gray-700">
                <!-- <video class="rounded-lg" autoplay="" controls="" controlslist="nodownload" loop="" playsinline="" preload="auto">
                  <source :src="model.video" type="video/mp4" />
                  Your browser does not support videos.
                </video> -->
                <vue3-video-player 
                  class="rounded-t-lg" 
                  src="https://user-images.githubusercontent.com/81764479/148546265-751a6eec-9e21-4b96-84cc-791988dd248e.mp4" autoplay loop 
                  :controls="false"
                />
                <h4 class="text-center text-lg text-white flex justify-center opensans mt-4">{{ model.name }}</h4>
                <!-- <span class="text-base sm:text-xl font-bold shadow-power text-white flex justify-center">POWER: {{ model.power }}</span> -->
              </div>
            </div>
          </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref } from "vue";
import { TransitionRoot, TransitionChild, Dialog } from "@headlessui/vue";
//import { getTotalGodsNFT } from "@/web3/nft";
import { useSound } from '@vueuse/sound'
import nextSfx from '@/assets/sound/back.wav'
import { nftImages } from '@/assets/loadingNfts/nfts.js'
// import { getPrevDefeats, getPrevWins } from '@/web3/nft.js'

export default {
  props: ["cards", "id"],
  data() {
    return {
      attactColor: "#cc2b2e",
      defenseColor: "#0ebede",
      vitalityColor: "#26d670",
      speedColor: "#e9bd24",
      selected: 0,
    };
  },
  setup() {
    const nextSound = useSound(nextSfx, { volume: 0.25 })
    const isOpen = ref(true);
    return {
      nextSound,
      isOpen,
      closeModal() {
        isOpen.value = false;
      },
      openModal() {
        isOpen.value = true;
      },
    };
  },
  mounted() {
    this.selected = this.id - 1
  },
  methods: {
    toPrev() {
      if(this.selected === 0) return;

      this.nextSound.play();
      this.selected = this.selected - 1;
    },
    async toNext() {
      if(this.selected === this.cards.length - 1) return;

      this.nextSound.play();
      this.selected = this.selected + 1;
    }
  },
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
  },
  computed: {
    model() {
      return this.cards[this.selected];
    },
    loading() {
      if(Object.keys(this.model).length === 0) return;
      console.log(this.model);
      if(this.model?.attributes[0]?.trait_type === 'God') {
        return nftImages[`gods${this.model.image.split('/')[8].split('-')[0]}`];
      }
      if(this.model?.attributes[0]?.trait_type === 'Bounty') {
        return nftImages[`bounties${this.model.image.split('/')[8].split('.')[0]}`];
      }
      return '';
    }
  }
};
</script>

<style>
  video {
    border-radius: 0.3rem 0.3rem 0 0;
  }
</style>
<style scoped>
.close-popup {
  background: url("~@/assets/close.png");
  background-size: contain;
}

.close-popup:hover {
  background: url("~@/assets/close-hover.png");
  background-size: contain;
  transform: scale(1.02);
}

.popup {
  width: 96vw;
  height: auto;
}

.popup-video {
  width: 100%;
}

@media (min-width: 900px) { 
  .popup {
    width: 900px;
  }
  .popup-video {
    width: 900px;
  }
}

@media (min-width: 1280px) { 
  .popup {
    width: 1000px;
  }
  .popup-video {
    width: 1000px;
  }
}

img[lazy=loading] {
  margin-bottom: 40px;
}
img[lazy=error] {
  margin-bottom: 40px;
}

</style>
