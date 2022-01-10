<template>
  <router-link to="/" class="flex self-center flex-col text-center place-content-center wow fadeInDown" data-wow-duration="0.6s" data-wow-delay="0.25s">
    <!-- <img class="my-8 sm:-mt-4 sm:h-60 h-40 object-contain select-none" src="@/assets/olympusroyale-logo.png" /> -->
    <lottie-player class="-mt-16 sm:-mt-24 xl:-mt-36 sm:h-96 h-60 object-contain select-none" src="https://assets4.lottiefiles.com/packages/lf20_j57xqfho.json"  background="transparent"  speed="1"  loop autoplay></lottie-player>
  </router-link>
  <div v-if="$route.name === 'Battle'" class="hidden sm:block flex -mt-4 sm:-mt-16 mb-20 w-full place-content-center my-10 wow fadeInDown" data-wow-duration="0.6s" data-wow-delay="0.35s">
    <img class="hidden sm:block mx-auto h-24 object-contain select-none" src="@/assets/olympus-battle.png" />
  </div>
  <div v-if="$route.name === 'Gold'" class="hidden sm:block flex -mt-4 sm:-mt-16 w-full place-content-center my-10 wow fadeInDown" data-wow-duration="0.6s" data-wow-delay="0.35s">
    <img class="hidden sm:block mx-auto h-24 object-contain select-none" src="@/assets/buy-gold.png" />
  </div>
  <div v-if="$route.name === 'Gem'" class="hidden sm:block flex -mt-4 sm:-mt-16 w-full place-content-center my-10 wow fadeInDown" data-wow-duration="0.6s" data-wow-delay="0.35s">
    <img class="hidden sm:block mx-auto h-24 object-contain select-none" src="@/assets/buy-gem.png" />
  </div>
</template>
