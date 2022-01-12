<template>
  <div class="flex flex-col justify-between min-h-screen">
    <Navbar />
    <Logo />
    <Menu />
    <div class="container mx-auto mb-16 md:mb-36">
      <router-view />
    </div>
    <Footer />
    <background style="z-index: -2;" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Logo from "@/components/Logo.vue";
import Menu from "@/components/Menu.vue";
import Background from "@/components/Background.vue";

export default {
  components: {
    Navbar,
    Footer,
    Logo,
    Menu,
    Background,
  },
  methods: {
    ...mapActions('cards',[
      'loadCards'
    ]),
  },
  async mounted() {
    await this.loadCards();
  }
};
</script>

<style>
* {
  font-family: "Open Sans", sans-serif;
}
body {
  background-color: #0e1f31;
}
</style>
