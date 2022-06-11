<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <header class="header">
    <h1 class="header__top">
      <RouterLink to="/" class="header__logo">AdamWrayTheVolcano</RouterLink>
    </h1>
    <nav class="header__nav">
      <RouterLink to="#bio" class="header__link">Bio</RouterLink>
      <RouterLink to="#book" class="header__link">Book</RouterLink>
      <RouterLink to="#album" class="header__link">Album</RouterLink>
      <RouterLink to="#pub" class="header__link">Pub</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style lang="scss">
@import "@/assets/base.css";

#app {
  font-weight: normal;
  color: white;
}
.header {
  position: sticky;
  display: grid;
  gap: 10px;
  top: 0;
  height: 130px;
  padding: 0 20px;
  background: var(--background);
  z-index: 1;
  @media (min-width: 768px) {
    padding: 0 30px;
  }
  @media (min-width: 1024px) {
    padding: 0 50px;
  }
  @media (min-width: 1320px) {
     padding: 0 calc((100vw - 1280px) / 2);
  }
}
.header__logo {
  font-size: 2rem;
}
.header__top {
  padding: 20px 0;
}
.header__nav {
  display: grid;
  grid-auto-flow: column dense;
  grid-auto-columns: max-content;
  justify-content: flex-end;
  gap: 20px;
}
.header__link {
  text-transform: uppercase;
  letter-spacing: 0.02em;
  transition: color .2s ease-out;
  &:hover, &:focus {
    color: var(--palette-red);
  }
  @media (min-width: 1024px) {
    font-size: 18px;
  }
}
.section {
  padding: 40px 20px;
  @media (min-width: 768px) {
    padding: 40px 30px;
  }
  @media (min-width: 1024px) {
    padding: 50px 50px;
  }
  @media (min-width: 1320px) {
     padding: 70px calc((100vw - 1280px) / 2);
  }
}

/* #app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
