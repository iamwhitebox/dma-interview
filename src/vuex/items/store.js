/**
 * YOU CAN SAFELY REMOVE THIS FILE.
 * FILE FOR DEMO PURPOSE ONLY
 *
 * Notes:
 *
 * This file contains the store for the watchlist. The store contains two parts:
 *
 * 1. The initial state: Which defines the state object when it's just created
 * 2. Logic on how to apply "mutations". A mutation is simply a clear "atomic" change
 *    which has a clear and single purpose of modifying the state in a particular way
 */

// What kind of mutations are we handling? import them so any
// typing mistakes are caught easily by the compiler.
import {
  ADD_TO_WATCHLIST,
  CHECKOUT_REQUEST,
  CHECKOUT_SUCCESS,
  CHECKOUT_FAILURE
} from '../mutation-types'

// shape: [{ id, quantity }]
const state = {
  added: [],
  lastAddition: null
}

// mutations
const mutations = {
  [ADD_TO_WATCHLIST] (state, itemId) {
    state.lastAddition = null
    const record = state.added.find(p => p.id === itemId)
    if (!record) {
      state.added.push({
        id: itemId,
        quantity: 1
      })
    } else {
      record.quantity++
    }
  },

  [CHECKOUT_REQUEST] (state) {
    // clear watchlist
    state.added = []
    state.lastAddition = null
  },

  [CHECKOUT_SUCCESS] (state) {
    state.lastAddition = 'successful'
  },

  [CHECKOUT_FAILURE] (state, savedwatchlistItems) {
    // rollback to the watchlist saved before sending the request
    state.added = savedwatchlistItems
    state.lastAddition = 'failed'
  }
}

export default {
  state,
  mutations
}
