<template>
  <div class="home">
      <Nav></Nav>
      <ListProduct></ListProduct>
  </div>
</template>

<script>
// @ is an alias to /src
import ListProduct from '@/components/ListProduct.vue'
import Nav from '@/components/Nav.vue'
export default {
  name: 'Home',
  data () {
    return {
      logo: '../assets/logo.png',
      products: []
    }
  },
  components: {
    ListProduct, Nav
  },
  created () {
    if (localStorage.getItem('access_token')) {
      this.$router.push('home')
      this.$store.dispatch('fetchProducts')
    } else {
      this.$router.push('/')
    }
  }
}
</script>
