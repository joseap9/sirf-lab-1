import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Login from '../views/LoginView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    component: () => import ('../views/PrincipalView.vue')
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/FolderPage.vue')
  },
  {
    path: '/folder/SIRF',
    component: () => import ('../views/PrincipalView.vue')
  },
  {
    path: '/login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
