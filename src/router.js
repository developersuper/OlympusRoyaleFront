import { createWebHistory, createRouter } from "vue-router";
import Mint from "./views/Mint/Mint.vue";
import Collection from "./views/Collection/Collection.vue";
import Battle from "./views/Battle/Battle.vue";
import GemBuyer from "./views/Buy/GemBuyer.vue";
import GoldBuyer from "./views/Buy/GoldBuyer.vue";

const routes = [
  {
    path: "/collection",
    name: "Collection",
    component: Collection,
  },
  {
    path: "/battle",
    name: "Battle",
    component: Battle,
  },
  {
    path: "/",
    name: "Mint",
    component: Mint,
  },
  {
    path: "/buy-gold",
    name: "Gold",
    component: GoldBuyer,
  },
  {
    path: "/buy-gem",
    name: "Gem",
    component: GemBuyer,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 };
    }
  },
});

export default router;
