import shop from '../../../api/shop'
// initial state
// shape: [{ id, quantity }]
const state = {
  items: [],
  status: false,
}

// getters
const getters = {
  getProducts(state, getters, rootState) {
    return state.items.map(({ id, quantity }) => {
      const res = rootState.products.list.find(product => product.id === id)
      return {
        title: res.title,
        price: res.price,
        quantity,
      }
    })
  },
  getTotals(state, getters) {
    return getters.getProducts.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  },
}

// actions
const actions = {
  addToCart({ state, commit }, product) {
    if (product.inventory > 0) {
      const cartItem = state.items.find(item => item.id === product.id)
      if (!cartItem) {
        commit('pushToCart', product)
      } else {
        commit('increaseQuantity', product)
      }
      commit('products/deInventory', product.id, { root: true })
    }
  },
  chekOut({ commit, state }, products) {
    const saveCart = [...state.items]
    commit('setStatus', null)
    // console.log(saveCart)
    // console.log(state.items)
    // 使用state.items这个会失败???????
    commit('setCartItems', [])
    shop.buyProducts(
      products,
      () => commit('setStatus', 'successful'),
      () => {
        commit('setStatus', 'failed')
        commit('setCartItems', saveCart)
      },
    )
  },
}

// mutations
const mutations = {
  pushToCart(state, obj) {
    state.items.push({
      id: obj.id,
      quantity: 1,
    })
  },
  setStatus(state, status) {
    state.status = status
  },
  setCartItems(state, item) {
    state.items = item
  },
  increaseQuantity(state, obj) {
    const res = state.items.find(item => item.id === obj.id)
    res.quantity++
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
