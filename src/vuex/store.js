import Vue from 'vue'
import Vuex from 'vuex'
import watchlist from './watchlist/store'
import items from './items/store'
import createLogger from 'vuex/logger'

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'itemion'

export default new Vuex.Store({
  modules: {
    watchlist,
    items
  },
  strict: debug,
  middlewares: debug ? [createLogger()] : []
})
