<template>
  <div class="home">
      <Nav/>
      <ListProduct/>
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
      logo: '../assets/logo.png'
    }
  },
  components: {
    ListProduct, Nav
  }
}
</script>
