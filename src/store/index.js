import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import products from './modules/products'
// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {
      email: 'xxxxxx@qq.com',
    },
    list: [],
  },
  mutations: {},
  actions: {},
  modules: {
    cart,
    products,
  },
  getters: {},
})
