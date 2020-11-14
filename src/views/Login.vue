<template>
  <div class='login'>
    <h1>{{ title }} </h1>
      <LoginForm/>
  </div>
</template>

<script>
import LoginForm from '@/components/Login.vue'
// import Register from '../components/Register'
export default {
  name: 'Login',
  components: {
    LoginForm
  },
  computed: {
    title () {
      return this.$store.state.title
    }
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

<style>

</style>
