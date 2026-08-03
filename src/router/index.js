import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ServicesView from '../views/ServicesView.vue';
import ContactView from '../views/ContactView.vue';
import PricingView from '../views/PricingView.vue';
import ResourcesView from '../views/ResourcesView.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/services', name: 'services', component: ServicesView },
  { path: '/contact', name: 'contact', component: ContactView },
  { path: '/pricing', name: 'pricing', component: PricingView },
  { path: '/resources', name: 'resources', component: ResourcesView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
