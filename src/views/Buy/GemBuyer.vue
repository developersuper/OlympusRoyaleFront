<template>
<div>
    <p class="flex justify-center mb-12 text-md text-center text-gray-200 font-semibold sm:text-xl p-4 sm:p-1">Want to play more? Look no further than Chronus Gems which<br /> can turn back time and replenish your gods’ stamina for an extra round.</p>
    <div class="max-w-5xl sm:mx-auto">
        <div class="flex flex-col lg:flex-row lg:space-y-0 space-y-16 lg:space-x-6">
            <div class="lg:w-1/3 cursor-not-allowed max-w-sm mx-auto w-full text-white text-center rounded-2xl shadow-smooth border border-gray-500 bg-gray-800 battle-typee transition-transform duration-200 transform wow fadeInDown relative" data-wow-duration="1s" data-wow-delay=".55s">
                <div class="absolute w-full h-full rounded-2xl bg-gray-black z-40 opacity-50 cursor-not-allowed"></div>
                <div class="relative flex place-content-center">
                <img class="absolute h-24 -top-10 z-50" src="@/assets/btn-gembuy-small.png" />
                <img class="absolute flex place-self-center h-40 mt-16 hover:scale-105 transition-transform duration-200 transform" src="@/assets/buy/small-gem.png" />
                <div class="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-gray-800 h-12 z-20"></div>
                <div class="h-56 object-cover w-full rounded-t-2xl overflow-hidden"></div>
                </div>
                <div class="px-4 pb-6">
                    <span class="text-2xl font-semibold text-locker_primary">5 GEMS</span>
                    <p class="mb-2 text-sm">1 OLYMPUS = 1 GEMS</p>
                    <p class="text-gray-200 mb-4 px-2">On a roll! Use this small dusting of GEMS to keep your winning streak going for longer and win big!</p>
                    <div class="flex flex-col sm:flex-row">
                        <div class="relative w-full sm:w-2/5 mt-1 sm:mr-3">
                        <span class="absolute left-2 font-semibold mt-2">QTY</span>
                            <input
                            v-model="fiveGem"
                            type="number"
                            name="fiveGem"
                            id="fiveGem"
                            class="py-2 text-right font-semibold text-white placeholder-gray-100 shadow-lg focus:ring-locker_primary focus:border-locker_primary block w-full sm:text-sm border-2 border-gray-400 bg-gray-600 px-2 rounded-full"
                            placeholder="1"
                            />
                        </div>
                        <div class="relative w-full flex flex-row justify-between sm:w-3/5 mt-2 sm:mt-1 py-2 flex justify-start text-white shadow-lg font-semibold w-full sm:text-sm border-2 border-gray-400 bg-gray-600 px-2 rounded-full">
                            <span>TOTAL:</span>
                            <span class="absolute right-8 top-2">{{ fiveGem }}</span>
                            <img class="w-6 h-6 sm:w-5 sm:h-5" src="@/assets/dashboard.png" />
                        </div>
                    </div>
                    <button class="w-full mt-3 exchange-btn">
                        COMING SOON
                    </button>
                </div>
            </div>
            <div class="cursor-not-allowed lg:w-1/3 cursor-pointer max-w-sm mx-auto w-full text-white text-center rounded-2xl shadow-smooth border border-gray-500 bg-gray-800 battle-typee transition-transform duration-200 transform wow fadeInDown relative" data-wow-duration="1s" data-wow-delay=".55s">
                <div class="absolute w-full h-full bg-gray-black z-40 opacity-50 cursor-not-allowed rounded-2xl"></div>
                <div class="relative flex place-content-center">
                <img class="absolute h-24 -top-10 z-50" src="@/assets/btn-gembuy-big.png" />
                <img class="absolute flex place-self-center h-40 mt-16 hover:scale-105 transition-transform duration-200 transform" src="@/assets/buy/medium-gem.png" />
                <div class="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-gray-800 h-12 z-20"></div>
                <div class="h-56 object-cover w-full rounded-t-2xl overflow-hidden"></div>
                </div>
                <div class="px-4 pb-6">
                    <span class="text-2xl font-semibold text-locker_primary">15 GEMS</span>
                    <p class="mb-2 text-sm">1 OLYMPUS = 1 GEMS</p>
                    <p class="text-gray-200 mb-4 px-2">This heroic haul of GEMS means you can be ready to play whenver you choose! Get back in the fight!</p>
                    <div class="cursor-not-allowed flex flex-col sm:flex-row">
                        <div class="relative w-full sm:w-2/5 mt-1 sm:mr-3">
                        <span class="absolute left-2 font-semibold mt-2">QTY</span>
                            <input
                            disabled="disabled"
                            v-model="FifteenGem"
                            type="number"
                            name="FifteenGem"
                            id="FifteenGem"
                            class="py-2 text-right font-semibold text-white placeholder-gray-100 shadow-lg focus:ring-locker_primary focus:border-locker_primary block w-full sm:text-sm border-2 border-gray-400 bg-gray-600 px-2 pr-4 sm:pr-2 rounded-full"
                            placeholder="1"
                            />
                        </div>
                        <div class="relative w-full flex flex-row justify-between sm:w-3/5 mt-2 sm:mt-1 py-2 flex justify-start text-white shadow-lg font-semibold w-full sm:text-sm border-2 border-gray-400 bg-gray-600 px-2 rounded-full">
                            <span>TOTAL:</span>
                            <span class="absolute right-8 top-2">{{ FifteenGem }}</span>
                            <img class="w-6 h-6 sm:w-5 sm:h-5" src="@/assets/dashboard.png" />
                        </div>
                    </div>
                    <button class="cursor-not-allowed w-full mt-3 exchange-btn">
                        COMING SOON
                    </button>
                </div>
            </div>
            <div class="lg:w-1/3 cursor-not-allowed max-w-sm mx-auto w-full text-white text-center rounded-2xl shadow-smooth border border-gray-500 bg-gray-800 battle-typee transition-transform duration-200 transform wow fadeInDown relative" data-wow-duration="1s" data-wow-delay=".55s">
                <div class="absolute w-full h-full bg-gray-black z-40 opacity-50 cursor-not-allowed rounded-2xl"></div>
                <div class="relative flex place-content-center">
                <img class="absolute h-24 -top-10 z-50" src="@/assets/btn-gembuy-large.png" />
                <img class="absolute flex place-self-center h-40 mt-16 hover:scale-105 transition-transform duration-200 transform" src="@/assets/buy/large-gem.png" />
                <div class="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-gray-800 h-12 z-20"></div>
                <div class="h-56 object-cover w-full rounded-t-2xl overflow-hidden"></div>
                </div>
                <div class="px-4 pb-6">
                    <span class="text-2xl font-semibold text-locker_primary">50 GEMS</span>
                    <p class="mb-2 text-sm">1 OLYMPUS = 1 GEMS</p>
                    <p class="text-gray-200 mb-4 px-2">Come rain or shine, you have your own personal mine of Chronus Gems at your disposal to wreck!</p>
                    <div class="flex flex-col sm:flex-row">
                        <div class="relative w-full sm:w-2/5 mt-1 sm:mr-3">
                        <span class="absolute left-2 font-semibold mt-2">QTY</span>
                            <input
                            v-model="FiftyGem"
                            type="number"
                            name="FiftyGem"
                            id="FiftyGem"
                            class="py-2 text-right font-semibold text-white placeholder-gray-100 shadow-lg focus:ring-locker_primary focus:border-locker_primary block w-full sm:text-sm border-2 border-gray-400 bg-gray-600 px-2 pr-4 sm:pr-2 rounded-full"
                            placeholder="1"
                            />
                        </div>
                        <div class="relative w-full flex flex-row justify-between sm:w-3/5 mt-2 sm:mt-1 py-2 flex justify-start text-white shadow-lg font-semibold w-full sm:text-sm border-2 border-gray-400 bg-gray-600 px-2 rounded-full">
                            <span>TOTAL:</span>
                            <span class="absolute right-8 top-2">{{ FiftyGem }}</span>
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
      fiveGem: 5,
      FifteenGem: 15,
      FiftyGem: 50
    };
  },
  name: "GemBuyer",
};
</script>