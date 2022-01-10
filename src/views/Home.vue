<template>
  <div class="home">
    <div class="main-box">
      <header>
        <h1>AASIM OMAR</h1>
        <h2>Front End Developer</h2>
      </header>
      <main>
        <p>
          I am a self-taught web developer from Sudan. Passionate about coding
          and fond of great design. Looking for an opportunity to work with a
          tech company.
          <br>Currently open to freelance offerings and full-time job
          opportunities, whether on site or - and preferably - remote.
        </p>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
header h1 {
  font-size: 4rem;
  letter-spacing: 0.25rem;
  margin-top: 0;
  margin-bottom: 10px;
}

header h2 {
  margin: 10px 0;
  padding-bottom: 10px;
  color: var(--therdColor);
  border-bottom: 2px solid var(--therdColor);
  font-weight: normal;
}
main {
  margin-top: 30px;
}
main p {
  font-size: 1.2rem;
  margin: 0;
  line-height: 1.7;
}

@media (max-width: 600px) {
  header h1 {
    font-size: 30px;
  }
}
</style>
