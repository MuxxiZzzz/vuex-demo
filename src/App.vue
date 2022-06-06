<template>
  <div id="app">
    <h1>购物车实例</h1>
    <p>账户：{{ userInfo.email }}</p>
    <hr />
    <ProductList />
    <hr />
    <ShoppingCart />
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue'
import ShoppingCart from './components/ShoppingCart.vue'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    ProductList,
    ShoppingCart,
  },
  created() {
    this.$store.dispatch('products/getInitData')
  },
  computed: {
    ...mapState(['userInfo']),
  },
}
</script>

<style>
p {
  margin: 0;
}
</style>
