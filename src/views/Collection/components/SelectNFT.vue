<template>
  <div class="-mt-16 sm:mt-0 flex xl:flex-row lg:space-y-0 space-y-4 flex-col items-center lg:space-x-3">
    <div class="relative z-0 inline-flex place-content-center shadow-sm rounded-md toggle-bg">
      <div
        :class="[
          type === 'gods' ? 'text-locker_primary' : 'text-gray-300 hover:text-locker_primary',
          'relative cursor-pointer text-sm md:text-xl font-bold w-1/3 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-300',
        ]"
        @click="toggle('gods')"
      >
        <span class="absolute left-1/2">Gods</span>
      </div>
      <div
        :class="[
          type === 'soldiers' ? 'text-locker_primary' : 'text-gray-300 hover:text-locker_primary',
          'relative justify-center text-sm md:text-xl cursor-pointer font-bold w-1/3 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-300',
        ]"
        @click="toggle('soldiers')"
      >
        <span class="absolute left-1/4">Soldiers</span>
      </div>
      <div
        :class="[
          type === 'bounties' ? 'text-locker_primary' : 'text-gray-300 hover:text-locker_primary',
          '-ml-px relative cursor-pointer text-sm md:text-xl font-bold w-1/3 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-300',
        ]"
        @click="toggle('bounties')"
      >
        <span class="absolute right-1/3">Bounties</span>
      </div>
      <img 
        :class="[
          type === 'gods' ? 'block' : 'hidden',
          'absolute toggle-btn top-3 sm:top-4 left-0'
        ]" 
        src="@/assets/toggle/gods-btn.png" 
        @click="toggle('gods')"
      />
      <img 
        :class="[
          type === 'soldiers' ? 'block' : 'hidden',
          'absolute toggle-btn top-4 sm:top-5'
        ]" 
        src="@/assets/toggle/soldiers-btn.png"
        @click="toggle('soldiers')" 
      />
      <img 
        :class="[
          type === 'bounties' ? 'block' : 'hidden',
          'absolute toggle-btn top-4 sm:top-5 right-0'
        ]" 
        src="@/assets/toggle/bounty-btn.png" 
        @click="toggle('bounties')"
      />
    </div>
  </div>
</template>
<script>
import { useSound } from '@vueuse/sound'

import buttonSfx from '@/assets/sound/click.mp3'

export default {
  props: {
    type: String,
  },
  setup() {
    const onSound = useSound(buttonSfx, { volume: 0.25 });
    return {
      onSound,
    }
  },
  updated() {
    console.log(this.type);
  },
  methods: {
    toggle(value) {
      this.onSound.play();
      this.$emit('changeType', value);
    }
  }
}
</script>
