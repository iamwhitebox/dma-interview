/**
 * YOU CAN SAFELY REMOVE THIS FILE.
 * FILE FOR DEMO PURPOSE ONLY
 *
 * Notes:
 *
 * This file contains actions for the watchlist, specific functions with
 * arguments which apply mutations on the store.
 */
import movies from '../../api/movies'
import * as types from '../mutation-types'

// The first argument is the vuex store, but we're using only the
// dispatch function, which applies a mutation to the store,
// and the current state of the store
export const getAllMovies = ({ dispatch, state }, items) => {
  const savedwatchlistItems = [...state.watchlist.added]
  dispatch(types.CHECKOUT_REQUEST)
  // Call our fake movies API
  movies.getAllMovies(
    items,
    // Callback function which dispatches CHECKOUT_SUCCESS
    () => dispatch(types.CHECKOUT_SUCCESS),
    // Callback function which dispatches CHECKOUT_FAILURE
    () => dispatch(types.CHECKOUT_FAILURE, savedwatchlistItems)
  )
}
