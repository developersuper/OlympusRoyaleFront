<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <DialogOverlay class="fixed z-20 inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
      </TransitionChild>
      <div class="fixed mx-4 inset-0 z-30 overflow-y-auto">
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
                <div :class="won ? 'victory' : 'defeat'" class="md:pb-12 pb-8 mx-auto" id="Popup">
                  <div class="absolute right-6 top-6 z-40">
                    <div @click="$emit('close')" class="select-none cursor-pointer h-20 w-20 close-popup" />
                  </div>

                  <div class="flex relative flex-col text-center h-full items-end place-content-end">
                    <div v-if="won" class="mx-auto">
                      <div class="h-64 w-full rounded-xl overflow-scroll p-3 text-white max-w-75 border border-gray-700 bg-opacity-75 bg-gray-800">
                        <div class="block font-heading text-lg font-bold text-locker_primary">Battle log</div>
                        <div class="caption">{{ battleReport }}</div>
                      </div>
                      <div class="text-white mt-3">Congratulations you earned</div>
                      <div class="font-heading text-2xl mt-3 text-white">{{ currentPrize }} OLYMPUS</div>
                    </div>
                    <div v-else class="mx-auto">
                      <div class="h-64 w-full rounded-xl overflow-scroll p-3 text-white max-w-75 border border-gray-700 bg-opacity-75 bg-gray-800">
                        <div class="block font-heading text-lg font-bold text-locker_primary">Battle log</div>
                        <div class="caption">{{ battleReport }}</div>
                      </div>
                      <div class="text-white mt-3">You have been defeated</div>
                      <div class="font-heading text-2xl mt-3 text-white">Better luck next time!</div>
                    </div>
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

export default {
  props: ["currentPrize", "won", "battleReport"],

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
  },
};
</script>

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

.defeat {
  background: url("~@/assets/defeat.png");
}

.victory {
  background: url("~@/assets/victory.png");
}

#Popup {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top center;
  width: 600px;
  height: 608px;
}

@media (max-width: 768px) {
  #Popup {
    background: #1d344e;
    width: 100%;
    border-radius: 32px;
    height: auto;
    padding: 12px;
  }
}
</style>
