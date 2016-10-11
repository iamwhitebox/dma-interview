import HomePage from './pages/HomePage'
import MoviePage from './pages/MoviePage'
import WatchlistPage from './pages/WatchlistPage'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
var router = new VueRouter({
  history: false
})

router.map({
  '/': {
    component: HomePage
  },
  '/item/:id': {
    name: 'item',
    component: MoviePage
  },
  '/watchlist': {
    component: WatchlistPage
  }
})

export default router
