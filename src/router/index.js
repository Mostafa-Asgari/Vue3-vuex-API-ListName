import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Add from '@/views/Add.vue'
import Edit from '@/views/Edit.vue'
import TodoList from '@/views/TodoList.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add',
    name: 'Add',
    component: Add
  },
  {
    path: '/project/:id',
    name: 'Edit',
    component: Edit,
    props: true
  },
  {
    path: '/todo',
    name: 'TodoList',
    component: TodoList
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
