<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <DialogOverlay class="fixed z-20 inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
      </TransitionChild>
      <div class="fixed inset-0 z-30 overflow-y-auto">
        <div class="min-h-screen text-center">
          <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
            <DialogOverlay class="fixed inset-0" />
          </TransitionChild>

          <span class="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
            <div class="inline-block w-full max-w-2xl overflow-hidden text-left align-middle transition-all transform">
              <div class="relative">
                <div class="md:pb-12 pb-8 mx-auto" id="Popup">
                  <div class="absolute right-6 top-6 z-40">
                    <div @click="$emit('close')" class="select-none cursor-pointer h-20 w-20 close-popup" />
                  </div>

                  <div class="flex relative flex-col text-center h-full items-end place-content-end">
                    <swiper navigation :loop="true" :effect="'flip'" :space-between="32" class="w-full px-4 absolute bottom-0">
                      <swiper-slide v-for="card in cards" v-bind:key="card">
                        <img class="object-contain pt-8 md:max-w-75 sm:max-w-50 max-w-32 w-full mx-auto select-none" src="@/assets/placeholdernft.png" />
                        <div class="mt-2 sm:mt-6">
                          <p class="font-heading text-white text-xs sm:text-xl">{{ card.name }}</p>
                          <p class="caption text-gray-300 sm:mt-2">{{ card.value }}</p>
                        </div>
                      </swiper-slide>
                    </swiper>
                  </div>
                </div>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref } from "vue";
import { TransitionRoot, TransitionChild, Dialog, DialogOverlay } from "@headlessui/vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Swiper as SwiperCore, Pagination, Navigation, EffectFlip } from "swiper/swiper.esm.js";

// swiper bundle styles
import "swiper/swiper-bundle.min.css";

// swiper core styles
import "swiper/swiper.min.css";

// modules styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

// Swiper modules
SwiperCore.use([Pagination, Navigation, EffectFlip]);

export default {
  data() {
    return {
      cards: [
        {
          name: "Emblazened Zeus #999",
          value: "77,519,379 OLYMPUS",
          image: "url",
        },
        {
          name: "Emblazened Zeus #234",
          value: "99,519,379 OLYMPUS",
          image: "url",
        },
      ],
    };
  },
  setup() {
    const isOpen = ref(true);
    return {
      isOpen,
      closeModal() {
        isOpen.value = false;
      },
      openModal() {
        isOpen.value = true;
      },
    };
  },
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    Swiper,
    SwiperSlide,
  },
};
</script>

<style scoped>
.swiper-button-next,
.swiper-button-prev {
  width: 80px;
  height: 80px;
  top: 40%;
}
.swiper-button-prev {
  left: 32px;
}
.swiper-button-next {
  right: 32px;
}

.swiper-button-next:after {
  background: url("~@/assets/next.png");
  content: "";
  width: 80px;
  height: 80px;
  background-size: contain;
}

.swiper-button-next:hover:after {
  background: url("~@/assets/next-hover.png");
  width: 80px;
  height: 80px;
  background-size: contain;
  transform: scale(1.1);
  transition: all 0.05s ease-in-out;
}

.swiper-button-prev:after {
  background: url("~@/assets/prev.png");
  content: "";
  width: 80px;
  height: 80px;
  background-size: contain;
}

.swiper-button-prev:hover:after {
  background: url("~@/assets/prev-hover.png");
  width: 80px;
  height: 80px;
  background-size: contain;
  transform: scale(1.1);
  transition: all 0.05s ease-in-out;
}

.close-popup {
  background: url("~@/assets/close.png");
  background-size: contain;
}

.close-popup:hover {
  background: url("~@/assets/close-hover.png");
  background-size: contain;
  transform: scale(1.02);
}

#Popup {
  background: url("~@/assets/popup.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top center;
  width: 700px;
  height: 808px;
}

@media (max-width: 768px) {
  #Popup {
    width: 300px;
    height: 346px;
  }
}

@media (max-width: 768px) {
  #Popup {
    width: 500px;
    height: 577px;
  }
}

@media (max-width: 640px) {
  #Popup {
    width: 100%;
    height: 346px;
  }
}
</style>
