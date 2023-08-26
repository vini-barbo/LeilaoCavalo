import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LeilaoOnline from '../views/LeilaoOnline.vue'
import LeilaoPresencial from '../views/LeilaoPresencial.vue'
import ProdutoCavalo from '../views/ProdutoCavalo.vue'
import ProdutoEmbriao from '../views/ProdutoEmbriao.vue'
import ProdutoCobertura from '../views/ProdutoCobertura.vue'
import ProdutoOvulo from '../views/ProdutoOvulo.vue'
import telaItem from '../views/telaItem.vue'
import LoginEmpresa from '../views/Login.vue'
import AdicionarCavalo from "../views/AdicionarCavalo.vue"
import AdicionarLeilao from "../views/AdicionarLeilão.vue"



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/online',
      name: 'online',
      component: LeilaoOnline
    },
    {
      path: '/presencial',
      name: 'presencial',
      component: LeilaoPresencial
    },
      {
      path: '/cavalos',
      name: 'cavalos',
      component: ProdutoCavalo
    },
    {
      path: '/embriao',
      name: 'embriao',
      component: ProdutoEmbriao
    },
    {
      path: '/cobertura',
      name: 'cobertura',
      component: ProdutoCobertura
    },
    {
      path: '/ovulo',
      name: 'ovulo',
      component: ProdutoOvulo
    },
    {
      path: '/item',
      name: 'item/id',
      component: telaItem
    },
    {
      path: '/login',
      name: 'login',
      component: LoginEmpresa
    },
    {
      path: '/adicionarcavalo',
      name: 'adicionarcavalo',
      component: AdicionarCavalo
    },
    {
      path: '/adicionarleilao',
      name: '/adicionarleilao',
      component: AdicionarLeilao
    },
  ]
})

export default router
