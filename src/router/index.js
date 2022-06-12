import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      console.log('hash', to.hash);
      const el = document.querySelector(to.hash);
      if (el) {
        console.log('el', el);
        el.scrollIntoView({
          inline: 'nearest',
          block: 'start',
          behavior: 'smooth'
        });
      }
    }
  }
});

export default router;
