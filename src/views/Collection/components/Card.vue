<template>
  <div v-show="loaded" class="bg-gray-900 border rounded-3xl border-gray-bc w-full px-4 pt-4 pb-2 nft-cards cursor-pointer wow flipInX" data-wow-duration="1s" data-wow-delay=".55s">
    <img class="w-full -mb-2" :src="card.image" @click="toView()" alt="" @load="onLoad()" />
    <p v-if="card.collection == 'God'" class="text-center text-lg text-white flex justify-center opensans leading-6">{{ card.name.slice(0, -10) }} <br /> Level {{ card.level }} </p>
    <p v-if="card.collection == 'Bounty'" class="text-center mt-8 text-lg text-white flex justify-center opensans">{{ card.name }} </p>
    <p v-if="card.collection == 'Bounty'" class="text-base sm:text-xl font-bold shadow-power text-white flex justify-center">RARITY: S+ (1 OF 1)</p>
    <span v-if="card.collection == 'God'" class="text-base sm:text-xl font-bold shadow-power text-white flex justify-center">POWER: {{ card.power }}</span>
    <div class="flex flex-row justify-center">
      <p class="mt-1 text-locker_primary font-semibold text-base"><span class="cursor-pointer" @click="toView()">VIEW</span> / <span><a href="https://lootex.io/stores/olympus-royale" target="_blank">TRADE</a></span></p>
    </div>
  </div>
  <div v-show="!loaded" class="bg-gray-900 border rounded-3xl border-gray-bc w-full px-4 pt-4 pb-2 nft-cards cursor-pointer wow flipInX" data-wow-duration="1s" data-wow-delay=".55s">
    <!-- <img class="w-full -mb-2" :src="require('@/assets/cards/attack.png')" @click="toView()" alt="" @load="onLoad()" /> -->
    <!-- <p v-if="card.collection == 'God'" class="text-center text-lg text-white flex justify-center opensans leading-6">{{ card.name.slice(0, -10) }} <br /> Level {{ card.level }} </p>
    <p v-if="card.collection == 'Bounty'" class="text-center mt-8 text-lg text-white flex justify-center opensans">{{ card.name }} </p>
    <p v-if="card.collection == 'Bounty'" class="text-base sm:text-xl font-bold shadow-power text-white flex justify-center">RARITY: S+ (1 OF 1)</p>
    <span v-if="card.collection == 'God'" class="text-base sm:text-xl font-bold shadow-power text-white flex justify-center">POWER: {{ card.power }}</span>
    <div class="flex flex-row justify-center">
      <p class="mt-1 text-locker_primary font-semibold text-base"><span class="cursor-pointer" @click="toView()">VIEW</span> / <span><a href="https://lootex.io/stores/olympus-royale" target="_blank">TRADE</a></span></p>
    </div> -->
  </div>
</template>
<script>

export default {
  props: {
    card: Object,
  },
  data() {
    return {
      loaded: false,
    }
  },
  mounted() {
  },
  methods: {
    toView() {
      this.$emit('toView');
    },
    onLoad() {
      this.loaded = true;
    }
  }
}
</script>
