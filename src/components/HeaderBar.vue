<template>
  <div class="menu-links">
    <a v-link="{path:'/'}">HOME</a>
    <a v-link="{path:'/watchlist'}">VIEW WATCHLIST ({{ count }})</a>
  </div>
</template>

<script>
import { watchlistCount } from '../vuex/watchlist/getters'
export default {
  vuex: {
    getters: {
      count: watchlistCount
    }
  }
}
</script>

<style>
.menu-links a {
  display: inline-block;
  text-decoration: none;
  color: #555;
  margin-right: 30px;
}
</style>
