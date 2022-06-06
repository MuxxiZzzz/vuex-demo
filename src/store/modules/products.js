import axios from 'axios'

// initial state
// shape: [{ id, quantity }]
const state = {
  list: [],
}

// getters
const getters = {}

// actions
const actions = {
  getInitData(context) {
    axios.get('/list.json').then(({ data }) => {
      context.commit('initData', data)
    })
  },
}

// mutations
const mutations = {
  initData(state, data) {
    state.list = data
  },
  deInventory(state, id) {
    const res = state.list.find(product => product.id === id)
    res.inventory--
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
