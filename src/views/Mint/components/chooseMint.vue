<template>
  <section>
    <p class="w-full -mt-12 flex justify-center text-xl font-semibold text-gray-100">
      MINT NFT'S
    </p>
    <p class="mb-4 sm:mb-0 w-full flex justify-center text-gray-100 text-center">
      CREATE YOUR ULTIMATE NFT COLLECTION
    </p>
    <div class="hidden sm:block flex mt-12 w-full place-content-center my-10 wow fadeInDown" data-wow-duration="0.6s" data-wow-delay="0.35s">
      <img class="hidden sm:block mx-auto h-24 object-contain select-none" src="@/assets/choosemint.png" />
    </div>
    <div class="flex text-white w-11/12 mx-auto mb-20 lg:mb-24 flex-col items-center xl:space-y-0 space-y-24 xl:flex-row xl:space-x-8">
      <div class="lg:w-1/3 w-full wow fadeInDown" data-wow-duration="0.6s" data-wow-delay="0.45s">
        <div class="flex place-content-center flex-col">
          <img class="h-24 object-contain select-none" src="@/assets/godnft-title.png" />
          <img class="2xl:max-h-105 max-h-96 mt-8 z-10 object-contain select-none hover:scale-105 transform transition-transform relative z-40" src="@/assets/godnft.png" />
          <div style="margin-top: -40px;" class="w-full relative max-w-75 pb-16 mx-auto rounded-xl text-center mint-bg">
            <div class="absolute w-full h-full bg-gray-900 z-20 opacity-50 cursor-not-allowed"></div>
            <div class="pt-12 p-4">
              <p class="mb-6 mt-2 text-sm font-semibold text-gray-200">Unlock your main God of Olympus to battle and dominate the competition in Olympus Royale</p>
              <span class="font-heading font-bold text-locker_primary uppercase text-lg underline">Rarities</span>
              <p class="w-full font-semibold flex justify-center text-gray-200 mt-2">99.999% - 1 x GOD NFT</p>
              <p class="w-full font-semibold flex justify-center text-gray-200 mb-12">0.0001% - 1 x POWER-UP NFT</p>
              <div class="w-full mt-4">
                <div
                  name="rate"
                  id="rate"
                  class="py-2 flex justify-center text-white shadow-lg font-semibold w-full sm:text-sm border-2 border-gray-400 bg-gray-600 px-2 rounded-full">
                  1 GOD NFT - 750,100 OLYMPUS
                </div>
              </div>
              <div class="flex flex-col sm:flex-row">
              <div class="w-full sm:w-2/5 mt-4 sm:mr-3">
              <span class="absolute left-8 font-semibold mt-2">QTY</span>
                <input
                  v-model="mintAmount"
                  type="number"
                  name="amount"
                  id="amount"
                  :disabled="!this.olympusApproved && this.paymentMethod != 'BNB'"
                  class="py-2 text-right font-semibold text-white placeholder-gray-100 shadow-lg focus:ring-locker_primary focus:border-locker_primary block w-full sm:text-sm border-2 border-gray-400 bg-gray-600 px-2 rounded-full"
                  placeholder="1"
                />
              </div>
              <div class="w-full relative flex flex-row justify-between sm:w-3/5 mt-4 py-2 flex justify-start text-white shadow-lg font-semibold w-full sm:text-sm border-2 border-gray-400 bg-gray-600 px-2 rounded-full">
                <span>TOTAL:</span>
                <span class="absolute right-9 sm:right-8">{{ mintAmount * 750100 }}</span>
                <img class="w-6 h-6 sm:w-5 sm:h-5" src="@/assets/dashboard.png" />
              </div>
              </div>

              <div class="absolute w-full -bottom-3 left-0 p-4">
                <button
                  @click="showMint()"
                  disabled="disabled"
                  v-wave
                  class="text-gray-200 font-bold uppercase mint-btn w-full"
                >
                  coming soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 w-full wow fadeInDown" data-wow-duration="0.6s" data-wow-delay="0.55s">
        <div class="flex place-content-center flex-col">
          <img class="h-24 object-contain select-none" src="@/assets/multipack-title.png" />
          <img class="2xl:max-h-105 max-h-96 mt-8 z-10 object-contain select-none hover:scale-105 transform transition-transform relative z-40" src="@/assets/multipack.png" />
          <div style="margin-top: -40px;" class="w-full relative max-w-75 pb-16 mx-auto rounded-xl text-center mint-bg relative z-20">
            <div class="absolute w-full h-full bg-gray-900 z-20 opacity-50 cursor-not-allowed"></div>
            <div class="pt-12 p-4">
              <p class="mb-6 mt-2 text-sm font-semibold text-gray-200">Increase your chances of unlocking the unique power-up NFTs with the Olympus multi-pack</p>
              <span class="font-heading font-bold text-locker_primary uppercase text-lg underline">Rarities</span>
              <p class="w-full font-semibold flex justify-center text-gray-200 mt-2">99.99% - 1 x GOD NFT</p>
              <p class="w-full font-semibold flex justify-center text-gray-200">100% - 2 x WARRIOR NFT</p>
              <p class="w-full font-semibold flex justify-center text-gray-200 mb-4">0.01% - POWER-UP NFT</p>
              <div class="w-full mt-4">
                <div
                  name="rate"
                  id="rate"
                  class="py-2 flex justify-center text-white shadow-lg font-semibold w-full sm:text-sm border-2 border-gray-400 bg-gray-600 px-2 rounded-full">
                  1 MULTIPACK - 350,100 OLYMPUS
                </div>
              </div>
              <div class="flex flex-col sm:flex-row">
                <div class="w-full sm:w-2/5 mt-4 sm:mr-3">
                <span class="absolute left-8 font-semibold mt-2">QTY</span>
                  <input
                    v-model="mintAmount1"
                    type="number"
                    name="amount1"
                    id="amount1"
                    :disabled="!this.olympusApproved && this.paymentMethod != 'BNB'"
                    class="py-2 text-right font-semibold text-white placeholder-gray-100 shadow-lg focus:ring-locker_primary focus:border-locker_primary block w-full sm:text-sm border-2 border-gray-400 bg-gray-600 px-2 rounded-full"
                    placeholder="1"
                  />
                </div>
                <div class="w-full relative flex flex-row justify-between sm:w-3/5 mt-4 py-2 flex justify-start text-white shadow-lg font-semibold w-full sm:text-sm border-2 border-gray-400 bg-gray-600 px-2 rounded-full">
                  <span>TOTAL:</span>
                  <span class="absolute right-9 sm:right-8">{{ mintAmount1 * 350100 }}</span>
                  <img class="w-6 h-6 sm:w-5 sm:h-5" src="@/assets/dashboard.png" />
                </div>
              </div>

              <div class="absolute w-full -bottom-3 left-0 p-4">
                <button
                  @click="showMint()"
                  disabled="disabled"
                  v-wave
                  class="text-gray-200 font-bold uppercase mint-btn w-full"
                >
                  coming soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 w-full wow fadeInDown" data-wow-duration="0.6s" data-wow-delay="0.65s">
        <div class="flex place-content-center flex-col">
          <img class="h-24 object-contain select-none" src="@/assets/warriornft-title.png" />
          <img class="2xl:max-h-105 max-h-96 mt-8 z-10 object-contain select-none hover:scale-105 transform transition-transform relative z-40" src="@/assets/warriornft.png" />
          <div style="margin-top: -40px;" class="w-full relative max-w-75 pb-16 mx-auto rounded-xl text-center mint-bg">
            <div class="absolute w-full h-full bg-gray-900 z-20 opacity-50 cursor-not-allowed"></div>
              <div class="pt-12 p-4">
              <p class="mb-6 mt-2 text-sm font-semibold text-gray-200">Unlock your warrior support to strengthen your army and become the ultimate God of Olympus </p>
              <span class="font-heading font-bold text-locker_primary uppercase text-lg underline">Rarities</span>
              <p class="w-full font-semibold flex justify-center text-gray-200 mt-2">99.9999% - 1 x WARRIOR NFT</p>
              <p class="w-full font-semibold flex justify-center text-gray-200 mb-12">0.00001% - 1x POWER-UP NFT</p>
              <div class="w-full mt-4">
                <div
                  name="rate"
                  id="rate"
                  class="py-2 flex justify-center text-white shadow-lg font-semibold w-full sm:text-sm border-2 border-gray-400 bg-gray-600 px-2 rounded-full">
                  1 WARRIOR NFT - 127,320 OLYMPUS
                </div>
              </div>
              <div class="flex flex-col sm:flex-row">
              <div class="w-full sm:w-2/5 mt-4 sm:mr-3">
              <span class="absolute left-8 font-semibold mt-2">QTY</span>
                <input
                  v-model="mintAmount2"
                  type="number"
                  name="amount"
                  id="amount2"
                  :disabled="!this.olympusApproved && this.paymentMethod != 'BNB'"
                  class="py-2 text-right font-semibold text-white placeholder-gray-100 shadow-lg focus:ring-locker_primary focus:border-locker_primary block w-full sm:text-sm border-2 border-gray-400 bg-gray-600 px-2 rounded-full"
                  placeholder="1"
                />
              </div>
              <div class="w-full relative flex flex-row justify-between sm:w-3/5 mt-4 py-2 flex justify-start text-white shadow-lg font-semibold w-full sm:text-sm border-2 border-gray-400 bg-gray-600 px-2 rounded-full">
                <span>TOTAL:</span>
                <span class="absolute right-9 sm:right-8">{{ mintAmount2 * 127320 }}</span>
                <img class="w-6 h-6 sm:w-5 sm:h-5" src="@/assets/dashboard.png" />
              </div>
              </div>

              <div class="absolute w-full -bottom-3 left-0 p-4">
                <button
                  @click="showMint()"
                  disabled="disabled"
                  v-wave
                  class="text-gray-200 font-bold uppercase mint-btn w-full"
                >
                  coming soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <popup @close="showPopup = false" v-if="showPopup"></popup>
</template>

<script>
import Popup from "./Popup.vue";
import { bogintific } from "@/helpers/filters";
import { mint, mintTokens, getCurrentTokenPrice, getNftAddress } from "@/web3/nft";
import { isApproved, getOlympusAddress, getAccount, getCurrentNetwork, approve, getProvider, MAX_AMOUNT_HEX } from "@/web3/index";
import { utils } from 'ethers';

export default {
  data: function() {
    return {
      paymentMethod: "BNB",
      showPopup: false,
      bnbPrice: "0.2",
      olympusPrice: "0.18",
      mintAmount: 1,
      mintAmount1: 1,
      mintAmount2: 1,
      olympusApproved: false,
      canMint: true,
      wallet: null
    };
  },
  name: "Gateway",
  components: { Popup },
  async mounted() {
    this.wallet = await getAccount();
    const network = await getCurrentNetwork();
    // Can only mint on BSC and BSC Testnet
    this.canMint = network.chainId == 56 || network.chainId == 97;
    await this.isOlympusApproved();
  },
  methods: {
    openPopup: async function() {
      this.showPopup = true;
    },
    bogintific,
    async mint() {
      // Not on BSC
      if (!this.canMint) {
        return;
      }
      if (this.paymentMethod == "BNB") {
        const tx = await mint(this.mintAmount, utils.parseEther(this.bnbPrice));
        getProvider().waitForTransaction(tx.hash).then(this.showMint);
      } else {
        if (!this.olympusApproved) {
          const tx = await this.approve();
          getProvider().waitForTransaction(tx.hash).then(this.isOlympusApproved);
        } else {
          const tx = await mintTokens(this.mintAmount);
          getProvider().waitForTransaction(tx.hash).then(this.showMint);
        }
      }
    },
    async isOlympusApproved() {
      const tokenPrice = await getCurrentTokenPrice();
      this.olympusApproved = await isApproved(this.wallet, await getOlympusAddress(), await getNftAddress(), tokenPrice.mul(this.mintAmount || 1));
    },
    async approve() {
      return await approve(await getOlympusAddress(), await getNftAddress(), MAX_AMOUNT_HEX);
    },
    showMint() {
        this.openPopup();
    }
  },
  computed: {
    totalPrice() {
      return this.chosenMethod * this.mintAmount;
    },
    chosenMethod() {
      if (this.paymentMethod == "BNB") {
        return this.bnbPrice;
      } else {
        return this.olympusPrice;
      }
    },
    mintText() {
        if (!this.olympusApproved && this.paymentMethod != "BNB") {
            return "Approve";
        }
      return "Mint";
    }
  }
};
</script>
