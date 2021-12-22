<template>
  <Sidebar />
  <div style="margin-left: 300px">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Segoe UI", Arial, sans-serif;
  text-align: center;
  color: #fff;
}
</style>

<script>
import Sidebar from "@/components/Sidebar.vue";
export default {
  components: {
    Sidebar,
  },
};
</script>
