<template>
  <Sidebar v-if="largeScreen" />
  <Smallbar v-else />
  <div id="router-container">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Segoe UI", Arial, sans-serif;
  text-align: center;
  color: #fff;
}

@media (min-width: 768px) {
  #router-container {
    margin-left: 250px;
  }
}
</style>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Smallbar from "@/components/Smallbar.vue";
export default {
  data() {
    return {
      largeScreen: false,
    };
  },
  components: {
    Sidebar,
    Smallbar,
  },
  mounted() {
    if (window.innerWidth > 600) {
      this.largeScreen = true;
    } else {
      this.largeScreen = false;
    }
  },
};
</script>
