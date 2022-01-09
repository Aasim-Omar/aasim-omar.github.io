<template>
  <div class="contact main-box">
    <h1 class="main-head">Contact Me:</h1>
    <ul>
      <li v-for="contact in contactInfo" :key="contact.icon">
        <a :href="contact.href" target="_blank">
          <div class="icon" :class="contact.icon"></div>
          <div class="label">{{ contact.label }}</div>
          <div class="link">{{ contact.link }}</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
ul li {
  width: 32%;
  margin-bottom: 15px;
  border-radius: 10px;
  transition: all 0.2s linear;
}
ul li:hover {
  box-shadow: 0 0 5px var(--therdColor);
}
ul li a {
  display: block;
  color: #fff;
  text-decoration: none;
  padding: 20px;
  text-align: center;
  border: 1px solid var(--therdColor);
  border-radius: inherit;
  width: 100%;
  line-height: 1.7;
}
ul li a .icon {
  display: block;
  font-size: 2rem;
}
ul li a .link:hover {
  color: var(--therdColor);
  text-decoration: underline;
}
</style>

<script>
export default {
  data() {
    return {
      contactInfo: [
        {
          href: "https://mail.google.com",
          icon: "icon-mail",
          label: "My Email",
          link: "aasim.omar7@gmail.com",
        },
        {
          href: "https://www.linkedin.com/in/AasimOmar/",
          icon: "icon-linkedin",
          label: "Linkedin Account",
          link: "@AasimOmar",
        },
        {
          href: "https://twitter.com/AasimOmar",
          icon: "icon-twitter",
          label: "By Twitter",
          link: "@AasimOmar",
        },
        {
          href: "https://www.github.com/Aasim-Omar",
          icon: "icon-github",
          label: "Github Account",
          link: "@Aasim-Omar",
        },
        {
          href: "https://facebook.com/AasimOmar7/",
          icon: "icon-facebook",
          label: "By Facebook",
          link: "@AasimOmar7",
        },
        {
          href: "#",
          icon: "icon-phone",
          label: "By Phone",
          link: "+249117322272",
        },
        {
          href: "#",
          icon: "icon-location",
          label: "My Location",
          link: "Khartoum, Sudan",
        },
      ],
    };
  },
};
</script>
