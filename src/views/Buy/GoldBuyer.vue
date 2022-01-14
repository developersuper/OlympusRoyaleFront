<template>
<div>
    <p class="flex justify-center mb-12 text-md text-center text-gray-200 font-semibold sm:text-xl p-4 sm:p-1">GODL is the in-game currency of Olympus Royale that you need to play.<br /> Exchange your tokens for GODL below.</p>
    <div class="max-w-5xl sm:mx-auto">
        <div class="flex flex-col lg:flex-row lg:space-y-0 space-y-16 lg:space-x-6">
            <div class="lg:w-1/3 cursor-not-allowed max-w-sm mx-auto w-full text-white text-center rounded-2xl shadow-smooth border border-gray-500 bg-gray-800 battle-typee transition-transform duration-200 transform wow fadeInDown relative" data-wow-duration="1s" data-wow-delay=".55s">
                <div class="absolute w-full h-full rounded-2xl bg-gray-black z-40 opacity-50 cursor-not-allowed"></div>
                <div class="relative flex place-content-center">
                <img class="absolute h-24 -top-10 z-50" src="@/assets/btn-goldbuy-small.png" />
                <img class="absolute flex place-self-center h-40 mt-16 hover:scale-105 transition-transform duration-200 transform" src="@/assets/buy/small-gold.png" />
                <div class="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-gray-800 h-12 z-20"></div>
                <div class="h-56 object-cover w-full rounded-t-2xl overflow-hidden"></div>
                </div>
                <div class="px-4 pb-6">
                    <span class="text-2xl font-semibold text-locker_primary">50 GOLD</span>
                    <p class="mb-2 text-sm">1 OLYMPUS = 1 GOLD</p>
                    <p class="text-gray-200 mb-4 px-2">The small stack of GODL coins will allow you to enter the world of Olympus Royale and test your skill</p>
                    <div class="flex flex-col sm:flex-row">
                        <div class="relative w-full sm:w-2/5 mt-1 sm:mr-3">
                        <span class="absolute left-2 font-semibold mt-2">QTY</span>
                            <input
                            v-model="first"
                            type="number"
                            name="first"
                            id="first"
                            class="py-2 text-right font-semibold text-white placeholder-gray-100 shadow-lg focus:ring-locker_primary focus:border-locker_primary block w-full sm:text-sm border-2 border-gray-400 bg-gray-600 px-2 rounded-full"
                            placeholder="1"
                            />
                        </div>
                        <div class="relative w-full flex flex-row justify-between sm:w-3/5 mt-2 sm:mt-1 py-2 flex justify-start text-white shadow-lg font-semibold w-full sm:text-sm border-2 border-gray-400 bg-gray-600 px-2 rounded-full">
                            <span>TOTAL:</span>
                            <span class="absolute right-8 top-2">{{ first }}</span>
                            <img class="w-6 h-6 sm:w-5 sm:h-5" src="@/assets/dashboard.png" />
                        </div>
                    </div>
                    <button class="w-full mt-3 exchange-btn">
                        COMING SOON
                    </button>
                </div>
            </div>
            <div class="lg:w-1/3 cursor-not-allowed max-w-sm mx-auto w-full text-white text-center rounded-2xl shadow-smooth border border-gray-500 bg-gray-800 battle-typee transition-transform duration-200 transform wow fadeInDown relative" data-wow-duration="1s" data-wow-delay=".55s">
                <div class="absolute w-full h-full rounded-2xl bg-gray-black z-40 opacity-50 cursor-not-allowed"></div>
                <div class="relative flex place-content-center">
                <img class="absolute h-24 -top-10 z-50" src="@/assets/btn-goldbuy-big.png" />
                <img class="absolute flex place-self-center h-40 mt-16 hover:scale-105 transition-transform duration-200 transform" src="@/assets/buy/medium-gold.png" />
                <div class="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-gray-800 h-12 z-20"></div>
                <div class="h-56 object-cover w-full rounded-t-2xl overflow-hidden"></div>
                </div>
                <div class="px-4 pb-6">
                    <span class="text-2xl font-semibold text-locker_primary">250 GOLD</span>
                    <p class="mb-2 text-sm">1 OLYMPUS = 1 GOLD</p>
                    <p class="text-gray-200 mb-4 px-2">The big bag of GODL coins will offer you the chance to dominate the many challenges of Olympus</p>
                    <div class="flex flex-col sm:flex-row">
                        <div class="relative w-full sm:w-2/5 mt-1 sm:mr-3">
                        <span class="absolute left-2 font-semibold mt-2">QTY</span>
                            <input
                            v-model="second"
                            type="number"
                            name="second"
                            id="second"
                            class="py-2 text-right font-semibold text-white placeholder-gray-100 shadow-lg focus:ring-locker_primary focus:border-locker_primary block w-full sm:text-sm border-2 border-gray-400 bg-gray-600 px-2 pr-4 sm:pr-2 rounded-full"
                            placeholder="1"
                            />
                        </div>
                        <div class="relative w-full flex flex-row justify-between sm:w-3/5 mt-2 sm:mt-1 py-2 flex justify-start text-white shadow-lg font-semibold w-full sm:text-sm border-2 border-gray-400 bg-gray-600 px-2 rounded-full">
                            <span>TOTAL:</span>
                            <span class="absolute right-8 top-2">{{ second }}</span>
                            <img class="w-6 h-6 sm:w-5 sm:h-5" src="@/assets/dashboard.png" />
                        </div>
                    </div>
                    <button class="w-full mt-3 exchange-btn">
                        COMING SOON
                    </button>
                </div>
            </div>
            <div class="lg:w-1/3 cursor-not-allowed max-w-sm mx-auto w-full text-white text-center rounded-2xl shadow-smooth border border-gray-500 bg-gray-800 battle-typee transition-transform duration-200 transform wow fadeInDown relative" data-wow-duration="1s" data-wow-delay=".55s">
                <div class="absolute w-full h-full rounded-2xl bg-gray-black z-40 opacity-50 cursor-not-allowed"></div>
                <div class="relative flex place-content-center">
                <img class="absolute h-24 -top-10 z-50" src="@/assets/btn-goldbuy-large.png" />
                <img class="absolute flex place-self-center h-40 mt-16 hover:scale-105 transition-transform duration-200 transform" src="@/assets/buy/large-gold.png" />
                <div class="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-gray-800 h-12 z-20"></div>
                <div class="h-56 object-cover w-full rounded-t-2xl overflow-hidden"></div>
                </div>
                <div class="px-4 pb-6">
                    <span class="text-2xl font-semibold text-locker_primary">500 GOLD</span>
                    <p class="mb-2 text-sm">1 OLYMPUS = 1 GOLD</p>
                    <p class="text-gray-200 mb-4 px-2">The collosal chest of GODL is enough to satisfy the adventurous appetite of even Zeus himself!</p>
                    <div class="flex flex-col sm:flex-row">
                        <div class="relative w-full sm:w-2/5 mt-1 sm:mr-3">
                        <span class="absolute left-2 font-semibold mt-2">QTY</span>
                            <input
                            v-model="third"
                            type="number"
                            name="third"
                            id="third"
                            class="py-2 text-right font-semibold text-white placeholder-gray-100 shadow-lg focus:ring-locker_primary focus:border-locker_primary block w-full sm:text-sm border-2 border-gray-400 bg-gray-600 px-2 pr-4 sm:pr-2 rounded-full"
                            placeholder="1"
                            />
                        </div>
                        <div class="relative w-full flex flex-row justify-between sm:w-3/5 mt-2 sm:mt-1 py-2 flex justify-start text-white shadow-lg font-semibold w-full sm:text-sm border-2 border-gray-400 bg-gray-600 px-2 rounded-full">
                            <span>TOTAL:</span>
                            <span class="absolute right-8 top-2">{{ third }}</span>
                            <img class="w-6 h-6 sm:w-5 sm:h-5" src="@/assets/dashboard.png" />
                        </div>
                    </div>
                    <button class="w-full mt-3 exchange-btn">
                        COMING SOON
                    </button>
                </div>
            </div>
        </div>
    </div>  
    <img style="z-index: -1" class="absolute top-48 left-0 object-contain max-w-screen w-full" src="@/assets/background-tunnel.png" alt="" />
    <router-link to="/collection" class="flex max-w-100 mx-auto w-full hover:scale-105 transition-transform duration-200 transform mt-12">
        <img class="h-full object-contain select-none" src="@/assets/go-back-collection.png" />
    </router-link>                
</div>
</template>

<script>
export default {
  data: function() {
    return {
      first: 50,
      second: 250,
      third: 500
    };
  },
  name: "GoldenBuyer",
};
</script>