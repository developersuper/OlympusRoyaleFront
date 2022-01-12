import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueTippy from "vue-tippy";
import store from "./store/store.js";
import Donut from "vue-css-donut-chart";
import "vue-css-donut-chart/dist/vcdonut.css";
import Vue3VideoPlayer from '@cloudgeek/vue3-video-player'
import '@cloudgeek/vue3-video-player/dist/vue3-video-player.css'
import VueLazyLoad from 'vue3-lazyload'
import "tippy.js/animations/shift-toward-subtle.css";

import "./assets/css/main.css";

// Button "ripple" effect
import VWave from "v-wave";
store.commit("initialize", store.dispatch("initialize"));


createApp(App)
  .use(router)
  .use(store)
  .use(VWave, {
    initialOpacity: 0.3,
    easing: "ease-in",
  })
  .use(Vue3VideoPlayer)
  .use(VueTippy)
  .use(Donut)
  .use(VueLazyLoad)
  .mount("#app");
