<template>
  <div>
    <h2>清单</h2>
    <p v-show="!products.length"><i>请添加产品到购物车</i></p>
    <ul>
      <li v-for="product in products" :key="product.id">{{ product.title }} - {{ product.price }} X {{ product.quantity }}</li>
    </ul>
    <p>合计:&nbsp;&nbsp;{{ totals }}</p>
    <button style="margin: 16px 16px 16px 0" @click="checkout(products)" :disabled="!products.length">提交</button>
    <p v-if="status">提交&nbsp;{{ status }}</p>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {
    checkout(products) {
      this.$store.dispatch('cart/chekOut', products)
    },
  },
  computed: {
    ...mapGetters('cart', {
      products: 'getProducts',
      totals: 'getTotals',
    }),
    ...mapState({
      status: state => state.cart.status,
    }),
  },
}
</script>

<style></style>
