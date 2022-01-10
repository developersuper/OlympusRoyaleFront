<template>
  <div>
    <choose-mint />
    <view-collection class="wow fadeInDown" data-wow-duration="0.6s" data-wow-delay="0.85s" />
  </div>
</template>
<script>
/*----------------     -------------------*/
import chooseMint from "./components/chooseMint.vue";
import viewCollection from "@/components/viewCollection.vue";

export default {
  name: "Mint",

  components: {
    chooseMint,
    viewCollection,
  },
};
</script>
