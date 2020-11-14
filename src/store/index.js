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
    fetchProducts (context) {
      // console.log(AccessToken)
      const AccessToken = localStorage.getItem('access_token')
      axios({
        url: '/product',
        method: 'GET',
        headers: { AccessToken }
      })
        .then(({ data }) => {
          context.commit('setProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    logout (context) {
      localStorage.removeItem('access_token')
      router.push('/')
    },
    toAddPage (context) {
      router.push('add')
    },
    toHomePage (context) {
      router.push('home')
    },
    addProduct (context, payload) {
      const AccessToken = localStorage.getItem('access_token')
      axios({
        url: '/product/create',
        method: 'POST',
        headers: { AccessToken },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
        .then(({ data }) => {
          context.dispatch('fetchProducts')
          router.push('home')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
