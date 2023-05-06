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
    component: BaseLayout,
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('@views/Dashboard/index.vue')
      }
    ]
  }, {
    path: '/account',
    component: BaseLayout,
    children: [
      {
        path: '',
        name: 'accountCreate',
        component: () => import('@views/Account/AccountCreate/index.vue')
      }, {
        path: '',
        name: 'accountInfo',
        component: () => import('@views/Account/AccountInfo/index.vue')
      }
    ]
  }, {
    path: '/dataDisplay',
    component: BaseLayout,
    children: [
      {
        path: '',
        name: 'dataDisplay',
        component: () => import('@views/DataDisplay/index.vue')
      }
    ]
  }, {
    path: '/image',
    component: BaseLayout,
    children: [
      {
        path: '',
        name: 'image',
        component: () => import('@views/Image/index.vue')
      }
    ]
  }, {
    path: '/pod',
    component: BaseLayout,
    children: [
      {
        path: '',
        name: 'pod',
        component: () => import('@views/Pod/index.vue')
      }
    ]
  }, {
    path: '/upload',
    component: BaseLayout,
    children: [
      {
        path: '',
        name: 'upload',
        component: () => import('@views/Upload/index.vue')
      }
    ]
  }, {
    path: '/directory',
    component: BaseLayout,
    children: [
      {
        path: '',
        name: 'directory',
        component: () => import('@views/Directory/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
