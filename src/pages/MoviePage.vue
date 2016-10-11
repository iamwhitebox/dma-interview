<template>
  <div class="item-item">
    <a class="back-link" v-link="{path:'/'}">&lt; BACK</a>
    <div class="item-title">{{ item.title }}</div>
    <div class="item-details">
      <button class="add-button" :disabled="!item.inWatchlist"
        @click="addToWatchlist(item)">{{ item.inWatchlist > 0 ? "Add to watchlist" : "" }}</button>
    </div>
  </div>
</template>

<script>
  import { getAllMovies, addToWatchlist } from '../vuex/items/actions'
  export default {
    vuex: {
      getters: {
        item: ({items, route}) => {
          var id = parseInt(route.params.id)
          return items.all.find((p) => p.id === id) || {}
        }
      },
      actions: {
        getAllMovies,
        addToWatchlist
      }
    },
    created () {
      this.getAllMovies()
    }
  }
</script>

<style>
.item-item {
  margin: 10px 10px;
  width: 500px;
  height: 400px;
  border-bottom: 1px solid #aaa;
}

.back-link {
  font-size: 20px;
}

.item-title {
  padding-top: 120px;
  text-align: center;
  margin: 0 auto;
  font-size: 26px;
}

.item-details {
  margin-top: 120px;
}

.inWatchlist {
  float: left;
  font-size: 20px;
  margin-top: 15px;
}
.add-button {
  float: right;
  width: 140px;
  height: 50px;
}
</style>
