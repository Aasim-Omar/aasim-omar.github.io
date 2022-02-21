<template>
  <Sidebar v-if="largeScreen" />
  <MediumSidebar v-if="mediumScreen" />
  <Smallbar v-if="smallScreen" />
  <div id="router-container">
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<style>
#app {
  font-family: "Montserrat", sans-serif, "Segoe UI", Arial, sans-serif;
  text-align: center;
  color: #fff;
}

@media (min-width: 601px) {
  #router-container {
    margin-left: 80px;
  }
}
@media (min-width: 1200px) {
  #router-container {
    margin-left: 250px;
  }
}

/* route transitions */
.route-enter-from {
  opacity: 0;
  transform: translateY(100px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Smallbar from "@/components/Smallbar.vue";
import MediumSidebar from "@/components/MediumSidebar.vue";
export default {
  data() {
    return {
      largeScreen: false,
      mediumScreen: false,
      smallScreen: false,
    };
  },
  components: {
    Sidebar,
    Smallbar,
    MediumSidebar,
  },
  mounted() {
    if (window.innerWidth >= 1200) {
      this.largeScreen = true;
    } else if (window.innerWidth > 600) {
      this.mediumScreen = true;
    } else if (window.innerWidth <= 600) {
      this.smallScreen = true;
    }
  },
};
</script>
