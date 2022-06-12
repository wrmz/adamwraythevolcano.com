<script setup>
import { RouterLink, RouterView } from "vue-router";
const year = (new Date()).getFullYear();
</script>

<template>
  <header class="header">
    <h1 class="header__top">
      <RouterLink to="/" class="header__logo">AdamWrayTheVolcano.com</RouterLink>
    </h1>
    <nav class="header__nav">
      <RouterLink to="#bio" class="header__link">Bio</RouterLink>
      <RouterLink to="#book" class="header__link">Book</RouterLink>
      <RouterLink to="#album" class="header__link">Album</RouterLink>
      <RouterLink to="#pub" class="header__link">Pub</RouterLink>
    </nav>
  </header>
  <RouterView />
  <footer class="footer">
    <small>&copy; {{ year }} Adam Douglas Wray. All rights reserved.</small>
  </footer>
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
  top: 0;
  padding: 0 20px;
  background: var(--palette-dark-gray);
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
  @media (min-width: 1024px) {
    justify-content: flex-end;
    gap: 20px;
  }
}
.header__link {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 8px 30px 10px 20px;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  transition: color .2s ease-out;
  background: var(--palette-black);
  clip-path: polygon(0 0, calc(100% - 20px) 0%, 100% 100%, 0 100%);
  &:hover, &:focus {
    color: var(--palette-red);
    background: var(--palette-black);
  }
  @media (min-width: 1024px) {
    font-size: 18px;
  }
}
.section {
  display: grid;
  gap: 20px;
  padding: 40px 20px;
  &:nth-child(even) {
    background: rgba(white, 0.1);
  }
  p {
    margin-bottom: 1em;
    &:last-child {
      margin-bottom: 0;
    }
  }
  img {
    display: block;
    max-width: 100%;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 30px;
    padding: 40px 30px;
  }
  @media (min-width: 1024px) {
    gap: 50px;
    padding: 50px 50px;
  }
  @media (min-width: 1320px) {
    gap: 70px;
    padding: 70px calc((100vw - 1280px) / 2);
  }
}
.section__header {
  margin-bottom: 30px;
}
.section__title {
  font-size: 30px;
  line-height: 1.3;
  @media (min-width: 1024px) {
    font-size: 40px;
  }
}
.section__subtitle {
  font-size: 24px;
  line-height: 1.3;
  @media (min-width: 1024px) {
    font-size: 30px;
  }
}
.section__body {
  @media (min-width: 1024px) {
    font-size: 18px;
  }
}
.section__footer {
  margin-top: 30px;
}
.footer {
  padding: 30px;
  text-align: center;
  background: var(--palette-black);
}
</style>
