<template>
  <div id="nav">
    <div class="links">
      <div class="indicator" ref="indicator"></div>
      <router-link to="/" @click="moveIndicator">
        <div class="icon-user icon"></div>
        <div>Home</div>
        <div class="overlay"></div>
      </router-link>
      <router-link to="/skills" @click="moveIndicator">
        <div class="icon-chart-bar icon"></div>
        <div>Skills</div>
        <div class="overlay"></div>
      </router-link>
      <router-link to="/portfolio" @click="moveIndicator">
        <div class="icon-code icon"></div>
        <div>Portfolio</div>
        <div class="overlay"></div>
      </router-link>
      <router-link to="/contact" @click="moveIndicator">
        <div class="icon-at icon"></div>
        <div>Contact</div>
        <div class="overlay"></div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';

export default {
  name: "Sidebar",
  setup () {
    const indicator = ref(null)

    let moveIndicator = (el) => {
      indicator.value.style.top = `${el.target.parentElement.offsetTop}px`
    }

    return { indicator, moveIndicator }
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
  width: 250px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--secondColor);
  padding: 5px;
}

#nav .links {
  width: 100%;
  border-radius: 10px;
  position: relative;
}

#nav .links .indicator {
  position: absolute;
  top: 20px;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: var(--therdColor);
  border-radius: 10px;
  transition: all 0.3s ease;
}

#nav .links a {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 70px;
  font-size: 1.1rem;
  margin: 10px 0;
  color: #fff;
  text-decoration: none;
  border-radius: 10px;
  transition: all 0.3s ease;
  position: relative;
}

#nav .links a .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
}

#nav .links a .icon {
  font-size: 2.1rem;
  margin-right: 10px;
}

#nav a.router-link-exact-active {
  padding-left: 20px;
  transform: scale(1.2);
}
</style>
