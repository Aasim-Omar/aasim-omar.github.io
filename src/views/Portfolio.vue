<template>
  <div class="portfolio main-box">
    <h1 class="main-head">My Portfolio</h1>
    <div class="portfolio-box">
      <h2>Elitecorp Template</h2>
      <p>This is Modren Template, Build By Basic Web Language And Some Liberary</p>
      <h3>The Technolgy Used in This Template is:</h3>
      <ul>
        <li>Html</li>
        <li>Css3</li>
        <li>Javascript</li>
      </ul>
      <h3>And Some Library Like:</h3>
      <ul>
        <li>WOWjs</li>
        <li>Mixitup</li>
        <li>Fontello for Icons fonts</li>
      </ul>
      <div class="buttons">
        <a href="https://aasim-omar.github.io/Elitecorp-Template" target="_blank">Preview</a>
        <a href="https://github.com/Aasim-Omar/Elitecorp-Template" target="_blank">View Source</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.portfolio-box {
  padding: 15px 20px;
  margin: 20px 0;
  border: 1px solid var(--therdColor);
  border-radius: 10px;
  letter-spacing: 2px;
}
.portfolio-box h3,
.portfolio-box h2 {
  margin: 10px 0;
  font-weight: 600;
  text-decoration: underline;
}
.portfolio-box h2 {
  font-size: 1.7rem;
}
.portfolio-box ul {
  list-style: disc;
  padding-left: 20px;
}
.portfolio-box ul li {
  line-height: 1.7;
}
.portfolio-box .buttons {
  margin: 15px 0;
}
.portfolio-box .buttons a {
  display: inline-block;
  padding: 10px 20px;
  border: 1px solid var(--therdColor);
  margin-right: 10px;
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease;
}
.portfolio-box .buttons a:hover {
  background-color: var(--therdColor);
}
</style>
