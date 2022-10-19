import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import PrincipalView from '../views/PrincipalView.vue';
import CursoView from '../views/CursoView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: PrincipalView
  },
  {
    path: '/sirf',
    component: PrincipalView
  },
  {
    path: '/curso/:nombre',
    component: CursoView
  },
  {
    path: '/:id',
    component: () => import ('../views/FolderPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
