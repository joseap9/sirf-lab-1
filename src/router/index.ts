import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import PrincipalView from '../views/PrincipalView.vue';
import CursoView from '../views/CursoView.vue';
import LoginView from '../views/LoginView.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    component: LoginView
  },
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
    component: CursoView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
