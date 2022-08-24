import { createRouter, createWebHistory } from 'vue-router'
import Library from '../views/Library.vue'
import BookView from '../views/BookView.vue'
import ReadingList from '../views/ReadingList.vue'

const routes = [
  {
    path: '/',
    name: 'Library',
    component: Library
  },
  {
    path: '/books/:id',
    name: 'BookView',
    component: BookView
  },
  {
    path: '/readinglist',
    name: 'Reading',
    component: ReadingList
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
