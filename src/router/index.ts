import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import EntryPage from '@views/EntryPage/index.vue'
import BaseLayout from '@layout/BaseLayout/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'entryPage',
    component: EntryPage
  }, {
    path: '/dashboard',
    name: 'dashboard',
    component: BaseLayout,
    children: [
      {
        path: '',
        name: 'AccountCreate',
        component: () => import('@views/Account/AccountCreate/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
