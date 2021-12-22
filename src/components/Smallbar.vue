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
  name: "Smallbar",
  setup() {
    const indicator = ref(null);
    let moveIndicator = (el) => {
      if (el.target.parentElement.nodeName == "A") {
        indicator.value.style.left = `${
          el.target.parentElement.offsetLeft - 10
        }px`;
      } else {
        indicator.value.style.left = `${el.target.offsetLeft - 10}px`;
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
  bottom: 0;
  left: 0;
  color: #fff;
  width: 100%;
  height: 70px;
  background-color: var(--secondColor);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

#nav .links {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0 40px;
}

#nav .links .indicator {
  position: absolute;
  bottom: 30px;
  left: 30px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  box-sizing: content-box;
  background-color: var(--therdColor);
  transition: all 0.3s ease;
  border: 10px solid var(--firstColor);
}

#nav .links .indicator::before,
#nav .links .indicator::after {
  content: "";
  top: 40px;
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: var(--secondColor);
  border-radius: 50%;
}

#nav .links .indicator::before {
  left: -28px;
  box-shadow: 7px -11px 0 var(--firstColor);
}

#nav .links .indicator::after {
  right: -28px;
  box-shadow: -7px -11px 0 var(--firstColor);
}

#nav .links a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
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
  font-size: 2.3;
  transform: translateY(-40px);
}

#nav a.router-link-exact-active .label {
  transform: translateY(20px);
  opacity: 1;
}
</style>
