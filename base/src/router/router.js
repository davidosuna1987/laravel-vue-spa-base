import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { appear } from '@/modules/appear'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/pages/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/pages/auth/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../components/pages/auth/Register.vue')
  },
  {
    path: '/forgot',
    name: 'forgot',
    component: () => import('../components/pages/auth/Forgot.vue')
  },
  {
    path: '/reset/:token',
    name: 'reset',
    component: () => import('../components/pages/auth/Reset.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    beforeEnter: (to, from, next) => { next('/404') }
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../components/pages/NotFound.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    appear()
    if(savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()

  if(to.name === 'login' && userStore.user){
    next({ name: 'home' })
  }

  else if(to.meta.auth && !userStore.user){
    next({ name: 'home' })
  }

  else{
    next()
  }

  window.scrollTo(0, 0)
})

export default router