<template>
  <div id="nav">
    <div class="links">
      <div class="indicator" ref="indicator"></div>
      <router-link to="/" @click="calcAll">
        <div class="icon-user icon"></div>
        <div>Home</div>
      </router-link>
      <router-link to="/skills" @click="calcAll">
        <div class="icon-chart-bar icon"></div>
        <div>Skills</div>
      </router-link>
      <router-link to="/portfolio" @click="calcAll">
        <div class="icon-code icon"></div>
        <div>Portfolio</div>
      </router-link>
      <router-link to="/contact" @click="calcAll">
        <div class="icon-at icon"></div>
        <div>Contact</div>
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

    let calcAll = (el) => {
      indicator.value.style.top = `${el.target.offsetTop}px`
    }

    return { indicator, calcAll }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nav {
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 5px;
  color: #fff;
  width: 200px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#nav .links {
  width: 100%;
  background-color: #012a35;
  padding: 10px;
  border-radius: 10px;
  position: relative;
}

#nav .links .indicator {
  position: absolute;
  top: 20px;
  left: 10px;
  width: calc(100% - 20px);
  height: 70px;
  background-color: #22bd88;
  border-radius: 10px;
  transition: all 0.3s ease;
}

#nav .links a {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px;
  height: 70px;
  font-size: 1.1rem;
  margin: 10px 0;
  color: #fff;
  text-decoration: none;
  border-radius: 10px;
  transition: all 0.3s ease;
  position: relative;
}

#nav .links a .icon {
  font-size: 2.1rem;
  margin-right: 10px;
}

#nav a.router-link-exact-active {
  text-decoration: underline;
}
</style>
