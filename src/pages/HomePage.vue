<template>
    <!-- TODO: search & sort -->
    <input type="text" placeholder="Search..." @onchange="" />
    <select>
      <option>Sort By:</option>
      <option>Name</option>
      <option>Rating</option>
    </select>

    <div v-for="item in items" class="item">
      <a v-link="{name:'item', params:{id:item.id}}" class="title">{{ item.title }}</a>
      <img src="{{item.image}}" alt="{{item.title}}" title="{{item.title}}" />
      <span class="price">{{ item.price | currency }}</span>
    </div>
  </div>
</template>

<script>
  import { sortMovies, getAllMovies, addToWatchlist } from '../vuex/items/actions'

  export default {
    vuex: {
      getters: {
        items: ({ items }) => items.all
      },
      actions: {
        sortMovies,
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
.item {
  padding: 10px 0px;
  border-bottom: 1px solid #eee;
  width: 400px;
}

.title {
  color: #312377;
}

.price {
  float: right;
}
</style>
