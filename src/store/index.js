import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'
import router from '../router/index'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'Hacktiv Store',
    products: [],
    product: []
  },
  mutations: {
    setProducts (state, data) {
      state.products = data
    },
    findProduct (state, data) {
      state.product = data
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
          Swal.fire({
            icon: 'error',
            title: 'Sorry...',
            text: err.response.data.message
          })
        })
    },
    fetchProducts (context) {
      axios({
        url: '/product',
        method: 'GET'
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
        url: '/product',
        method: 'POST',
        headers: { access_token: AccessToken },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: +payload.price,
          stock: +payload.stock
        }
      })
        .then(({ data }) => {
          Swal.fire({
            icon: 'success',
            title: 'Done',
            text: 'Product added'
          })
          context.dispatch('fetchProducts')
          router.push('home')
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Sorry...',
            text: err.response.data.message
          })
        })
    },
    deleteProduct (context, id) {
      Swal.fire({
        text: 'Are you sure to delete this product ?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: 'Deleted!',
            text: 'Product deleted',
            icon: 'success'
          })
          const AccessToken = localStorage.getItem('access_token')
          axios({
            url: `/product/${id}`,
            method: 'DELETE',
            headers: { access_token: AccessToken }
          })
            .then(({ data }) => {
              router.push('home')
              context.dispatch('fetchProducts')
            })
            .catch(err => {
              console.log(err)
            })
        }
      })
    },
    editProduct (context, id) {
      const AccessToken = localStorage.getItem('access_token')
      axios({
        url: `/product/${id}`,
        method: 'GET',
        headers: { access_token: AccessToken }
      })
        .then(({ data }) => {
          context.commit('findProduct', data)
          router.push('edit')
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateProduct (context, payload) {
      const AccessToken = localStorage.getItem('access_token')
      axios({
        url: `/product/${payload.id}`,
        method: 'PUT',
        headers: { access_token: AccessToken },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: +payload.price,
          stock: +payload.stock
        }
      })
        .then(({ data }) => {
          Swal.fire({
            icon: 'success',
            title: 'Done',
            text: 'Product updated'
          })
          context.dispatch('fetchProducts')
          router.push('home')
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Sorry...',
            text: err.response.data.message
          })
        })
    }
  },
  modules: {
  }
})
