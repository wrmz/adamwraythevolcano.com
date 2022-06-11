import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TheBio from '../components/TheBio.vue';
import TheAlbum from '../components/TheAlbum.vue';
import TheBook from '../components/TheBook.vue';
import ThePub from '../components/ThePub.vue';

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
    console.log('scrolling', to, from, savedPosition);
    // if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    // }
  }
});

export default router;
