import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'Hacktiv Store',
    products: []
  },
  mutations: {
    setProducts (state, data) {
      state.products = data
    }
  },
  actions: {
    login (context, payload) {
      axios({
        url: '/login/admin',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          router.push('home')
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchProducts (context, AccessToken) {
      // console.log(AccessToken)
      axios({
        url: '/product',
        method: 'GET',
        headers: { AccessToken }
      })
        .then(({ data }) => {
          context.commit('setProduct', data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
