<template>
  <div id="app">
    <Navbar />
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "ProductManagmentApp",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {};
  },

  created() {
    this.$store.dispatch("getTradeResult");
    this.$store.dispatch("initApp");
  },

  methods: {},
};
</script>

<style>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-leave-active {
  transition: opacity 0.3s ease-out;
}
</style>
