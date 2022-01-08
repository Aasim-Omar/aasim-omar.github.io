<template>
  <div class="skills main-box">
    <h1 class="main-head">My Skills :</h1>
    <div class="skill-box">
      <h2>Basic Skills:</h2>
      <p>Html</p>
      <p>Css</p>
      <p>Javascript ES6+</p>
    </div>
    <div class="skill-box">
      <h2>Templating Languages</h2>
      <p>Pug.js</p>
      <p>Haml</p>
    </div>
    <div class="skill-box">
      <h2>Css Frameworks</h2>
      <p>Bootstrap</p>
      <p>Tailwind Css</p>
    </div>
    <div class="skill-box">
      <h2>Css Preprocessors</h2>
      <p>Less</p>
      <p>Sass</p>
    </div>
    <div class="skill-box">
      <h2>Javascript Frameworks</h2>
      <p>Vue.js</p>
    </div>
    <div class="skill-box">
      <h2>Vue.js Frameworks</h2>
      <p>Vuetify</p>
      <p>Qusar</p>
    </div>
    <div class="skill-box">
      <h2>Related Skills</h2>
      <p>Version control with Git</p>
      <p>Deployment</p>
    </div>
    <div class="skill-box">
      <h2>Soft Skills</h2>
      <p>Quick learner</p>
      <p>Hard worker</p>
      <p>Problem solver</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
.skill-box {
  margin: 10px 0;
  padding: 5px;
}
.skill-box h2 {
  font-weight: 500;
  font-size: 23px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--therdColor);
}
.skill-box p {
  font-size: 18px;
  padding: 2px 0;
  padding-left: 15px;
  position: relative;
}
.skill-box p::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  width: 10px;
  height: 10px;
  transform: translateY(-50%);
  background-color: var(--therdColor);
  border-radius: 50%;
}
</style>
