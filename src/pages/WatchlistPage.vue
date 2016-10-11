<template>
  <div class="watchlist">
    <p v-show="!items.length"><i>Please add some items to watchlist.</i></p>
    <div v-show="items.length > 0">
    <table class="addToWatchlist-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th>Per Unit</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
      <tr v-for="p in items">
        <td><a v-link="{name:'item', params:{id:p.id}}">{{ p.title }}</a></td>
        <td>{{ p.price|currency }}</td>
        <td>{{ p.quantity }}</td>
        <td>{{ p.price * p.quantity | currency }}</td>
      </tr>
      <tr class='total'>
        <td><b>TOTAL</b></td>
        <td></td>
        <td></td>
        <td>{{ total|currency }}</td>
      </tr>
      </tbody>
    </table>
    <p><button :disabled="!items.length" @click="addToWatchlist(items)" class='addToWatchlist-button'>Checkout</button></p>
    <p v-show="addToWatchlistStatus">Checkout {{ addToWatchlistStatus }}.</p>
    </div>
  </div>
</template>

<script>
  import { addToWatchlist } from '../vuex/watchlist/actions'
  import { watchlistMovies } from '../vuex/watchlist/getters'

  export default {
    vuex: {
      getters: {
        items: watchlistMovies,
        addToWatchlistStatus: ({ watchlist }) => watchlist.lastAddition
      },
      actions: {
        addToWatchlist
      }
    },
    computed: {
      total () {
        return this.items.reduce((total, p) => {
          return total + p.price * p.quantity
        }, 0)
      }
    }
  }
</script>

<style>

.watchlist {
  width: 600px;
}
.addToWatchlist-table {
  width: 100%;
}

.addToWatchlist-table th {
  text-align: left;
  padding: 15px 0px;
  border-bottom: 1px solid #aaa;
}

.addToWatchlist-table td {
  padding: 8px 0px;
}

.addToWatchlist-button {
  float: right;
  width: 120px;
  height: 40px;
  margin-top: 20px;
}

.total td {
  border-top: 1px solid #aaa;
  padding-top: 10px;
}
</style>
