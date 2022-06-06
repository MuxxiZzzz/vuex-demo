<template>
  <div>
    <h2>产品</h2>
    <ul>
      <li v-for="product in list" :key="product.id">
        {{ product.title }} - {{ product.price }}
        <br />
        <button @click="addCart(product)" :disabled="!product.inventory">加入购物车</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {
    addCart(product) {
      this.$store.dispatch('cart/addToCart', product)
    },
  },
  computed: {
    ...mapState({
      list: state => state.products.list,
    }),
  },
}
</script>

<style so>
button {
  margin: 10px 10px 10px 0px;
}
</style>
