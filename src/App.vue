<script setup>
import { RouterLink, RouterView } from "vue-router";
const year = (new Date()).getFullYear();
</script>

<template>
  <header class="header">
    <div class="header__background"></div>
    <h1 class="header__top">
      <RouterLink to="/" class="header__logo">AdamWrayTheVolcano<span>.com</span></RouterLink>
    </h1>
    <nav class="header__nav">
      <RouterLink to="#book" class="header__link">Book</RouterLink>
      <RouterLink to="#album" class="header__link">Album</RouterLink>
      <RouterLink to="#bio" class="header__link">Bio</RouterLink>
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
  backdrop-filter: blur(4px);
  // background: var(--palette-dark-gray);
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
.header__background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--palette-dark-gray) url('./assets/images/background.jpg') top center no-repeat;
  background-attachment: fixed;
  background-position: top center;
  background-size: cover;
  background-blend-mode: multiply;
  opacity: 0.8;

}
.header__logo {
  font-size: 2rem;
  span {
    opacity: 0.3;
  }
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
  font-family: var(--font-heading);
  font-weight: 600;
  letter-spacing: 0.05em;
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
// Sections layout
.section__article {
  display: grid;
  gap: 20px;
  @media (min-width: 768px) {
    gap: 30px;
  }
  @media (min-width: 1024px) {
    gap: 30px 50px;
  }
  @media (min-width: 1320px) {
    gap: 30px 70px;
  }
}
.section {
  @media (min-width: 768px) {
    .section__article {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      grid-template-rows: max-content max-content;
    }
    .section__header {
      grid-row: 1;
      grid-column: 1 / span 2;
    }
    .section__aside {
      grid-row: 2;
      grid-column: 1;
    }
    .section__body {
      grid-row: 2;
      grid-column: 2;
    }
    .section__footer {
      grid-row: 3;
      grid-column: 2;
    }
    &:nth-child(odd) {
      .section__aside {
        grid-column: 2;
      }
      .section__body {
        grid-column: 1;
      }
      .section__footer {
        grid-column: 1;
      }
    }
  }
  @media (min-width: 1024px) {
    .section__article {
      grid-template-columns: minmax(0, 40%) minmax(0, 60%);
    }
    &:nth-child(odd) .section__article {
      grid-template-columns: minmax(0, 60%) minmax(0, 40%);
    }
  }
}

.section {
  padding: 40px 20px;
  &:nth-child(even) {
    background: rgba(white, 0.1);
    mix-blend-mode: overlay;
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
    padding: 40px 30px;
  }
  @media (min-width: 1024px) {
    gap: 50px;
    padding: 50px 50px;
  }
  @media (min-width: 1320px) {
    gap: 70px;
  }
}
.section__aside {
  grid-row: 1;
}
.section__header {
  grid-row: 2;
}
.section__title {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 30px;
  line-height: 1.3;
  @media (min-width: 1024px) {
    font-size: 40px;
  }
}
.section__subtitle {
  font-family: var(--font-heading);
  font-weight: 400;
  font-size: 24px;
  line-height: 1.3;
  @media (min-width: 1024px) {
    font-size: 30px;
  }
}
.section__body {
  grid-row: 3;
  padding: 50px;
  background: var(--palette-black);
  border-radius: 2px;
  @media (min-width: 1024px) {
    font-size: 18px;
  }
}
.picture {
  display: block;
  overflow: hidden;
  border-radius: 2px;

}
.footer {
  padding: 30px;
  text-align: center;
  background: var(--palette-black);
}
</style>
