<template>
  <div class="flex flex-row mx-auto place-content-center text-sm sm:text-lg text-gray-200 font-bold my-4">
    NFT'S PER PAGE: 
    <span v-for="(value, idx) in perPages" :key="value">
      <span 
        :class="[
          perPage == value ? 'text-locker_primary' : 'text-gray-200',
          'mx-2 hover:text-gray-300 cursor-pointer transition-all duration-100 transform'
        ]" 
        @click="setPerPage(value)"
      >{{value}}</span>
      <span v-if="idx < perPages.length - 1">/</span>
    </span>
  </div>
  <div  class="flex flex-row mx-auto place-content-center">
    <img 
      :class="[
        currentPagination === 0 ? 'cursor-not-allowed' : 'cursor-pointer',
        'w-6 h-6 sm:w-10 sm:h-10 mt-3 mr-1 sm:mr-2 hover:scale-110 cursor-pointer transition-all duration-200 transform'
      ]" 
      :src="prevArrow"
      @click="toPrev()"
      @mouseover="hoverPrev = true"
      @mouseout="hoverPrev = false"  
    />
    <div v-for="i in currentPageValues" :key="i">
      <div class="relative">
        <img 
          v-if="i < 10"
          :class="[
            currentPage == i ? 'hidden' : 'block',
            'w-12 h-12 sm:w-16 sm:h-16 hover:scale-110 cursor-pointer transition-all duration-200 transform'
          ]" 
          @click="setPage(i)" src="@/assets/pagination/one.png" />
        <img 
          v-if="i >= 10 && i < 100"
          :class="[
            currentPage == i ? 'hidden' : 'block',
            'w-16 h-12 sm:w-20 sm:h-16 hover:scale-110 cursor-pointer transition-all duration-200 transform'
          ]" 
          @click="setPage(i)" src="@/assets/pagination/one.png" />
        <span :class="[
            currentPage == i ? 'hidden' : 'block',
            'absolute font-bold guavacandy cursor-pointer'
          ]"
          @click="setPage(i)"
        >
        {{ i }}
        </span>
        <span :class="[
            currentPage == i ? 'block' : 'hidden',
            'absolute font-bold guavacandy-click z-30 cursor-pointer'
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
          v-if="i >= 10 && i < 100"
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
        currentPagination == paginationLength - 1 ? 'cursor-not-allowed' : 'cursor-pointer',
        'w-6 h-6 sm:w-10 sm:h-10 mt-3 ml-1 sm:ml-2 hover:scale-110 cursor-pointer transition-all duration-200 transform'
      ]" 
      :src="nextArrow"
      @click="toNext()"  
      @mouseover="hoverNext = true"
      @mouseout="hoverNext = false"  
    />
  </div>
</template>
<script>
import { useSound } from '@vueuse/sound'

import paginationSfx from '@/assets/sound/back.wav'
import nextArrowImgDisabled from '@/assets/next_disabled.png';
import nextArrowImg from '@/assets/next.png';
import nextArrowImgHover from '@/assets/next-hover.png';
import prevArrowImgDisabled from '@/assets/prev_disabled.png';
import prevArrowImg from '@/assets/prev.png';
import prevArrowImgHover from '@/assets/prev-hover.png';

export default {
  props: {
    totalLength: Number,
    currentPage: Number,
    perPage: Number,
    perPages: Array
  },
  setup() {
    const paginationSound = useSound(paginationSfx, { volume: 0.25 })
    return {
      paginationSound,
    }
  },
  data() {
    return {
      currentPagination: 0,
      hoverPrev: false,
      hoverNext: false,
    }
  },
  methods: {
    toNext() {
      if(this.currentPagination == this.paginationLength - 1) return;
      this.paginationSound.play();
      this.currentPagination += 1;
    },
    toPrev() {
      if(this.currentPagination == 0) return;
      this.paginationSound.play();
      this.currentPagination -= 1;
    },
    setPage(page) {
      this.paginationSound.play();
      this.$emit('updatePage', page)
    },
    setPerPage(perPage) {
      this.paginationSound.play();
      this.currentPagination = 0;
      this.$emit('updatePerPage', perPage);
    }
  },
  computed: {
    currentPageValues(){
      let values = [];
      for(let i = 1; i <= 5; i++) {
        if(this.currentPagination * 5 + i > this.pageLength) break;
        values.push(this.currentPagination * 5 + i);
      }
      return values;
    },
    pageLength() {
      return Math.ceil(1.0 * this.totalLength / this.perPage);
    },
    paginationLength() {
      return Math.ceil(1.0 * this.pageLength / 5);
    },
    prevArrow() {
      if(this.currentPagination === 0) return prevArrowImgDisabled;
      if(this.hoverPrev) return prevArrowImgHover;
      return prevArrowImg;
    },
    nextArrow() {
      if(this.currentPagination === this.paginationLength - 1) return nextArrowImgDisabled;
      if(this.hoverNext) return nextArrowImgHover;
      return nextArrowImg;
    }
  }
}
</script>
