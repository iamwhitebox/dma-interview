/**
 * YOU CAN SAFELY REMOVE THIS FILE.
 * FILE FOR DEMO PURPOSE ONLY
 *
 * Notes:
 *
 * This file contains 'getters' for the watchlist, which are functions which
 * take a whole state and transforms it into data we're interested in
 */

// The watchlistMovies function return all the items in our watchlist
// but also looks up the title and price, since we only store the IDs
// in the watchlist
export const watchlistMovies = state => {
  return state.watchlist.added.map(({ id }) => {
    const item = state.items.all.find(p => p.id === id)
    return {
      title: item.title
    }
  })
}

// This creates a total sum of all the items in the watchlist. This is an example
// of how a getter can return a scalar value which can be re-used in views
export const watchlistCount = state => {
  var totalCount = 0
  state.watchlist.added.forEach(({ quantity }) => {
    totalCount += quantity
  })

  return totalCount
}
