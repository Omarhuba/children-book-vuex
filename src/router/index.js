import { createRouter, createWebHistory } from 'vue-router'
import BookList from '../views/BookList.vue'
import SingleBook from '../views/SingleBook.vue'

const routes = [
  {
    path: '/',
    name: 'booklist',
    component: BookList
  },
  {
    path: '/books/:bookId',
    name: 'single-book',
    component: SingleBook
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
