<template>
  <div id="nav">
    <div class="links">
      <div class="indicator" ref="indicator"></div>
      <router-link to="/" @click="moveIndicator">
        <div class="icon-user icon"></div>
        <div class="label">Home</div>
      </router-link>
      <router-link to="/skills" @click="moveIndicator">
        <div class="icon-chart-bar icon"></div>
        <div class="label">Skills</div>
      </router-link>
      <router-link to="/portfolio" @click="moveIndicator">
        <div class="icon-code icon"></div>
        <div class="label">Portfolio</div>
      </router-link>
      <router-link to="/contact" @click="moveIndicator">
        <div class="icon-at icon"></div>
        <div class="label">Contact</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";

export default {
  name: "MediumSidebar",
  setup() {
    const indicator = ref(null);
    let moveIndicator = (el) => {
      if (el.target.parentElement.nodeName == "A") {
        indicator.value.style.top = `${
          el.target.parentElement.offsetTop
        }px`;
      } else {
        indicator.value.style.top = `${el.target.offsetTop}px`;
      }
    };

    return { indicator, moveIndicator };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nav {
  position: fixed;
  top: 0;
  left: 0;
  color: #fff;
  width: 80px;
  height: 100%;
  background-color: var(--secondColor);
  z-index: 9;
}

#nav .links {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

#nav .links .indicator {
  position: absolute;
  top: 300px;
  left: 0;
  width: 80px;
  height: 80px;
  background-color: var(--therdColor);
  transition: all 0.3s ease;
}

#nav .links a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
}

#nav .links a .label {
  transition: inherit;
  position: absolute;
  opacity: 0;
}

#nav .links a .icon {
  transition: inherit;
  font-size: 2rem;
}

#nav a.router-link-exact-active .icon {
  transform: translateY(-20px);
}

#nav a.router-link-exact-active .label {
  transform: translateY(20px);
  opacity: 1;
}
</style>
