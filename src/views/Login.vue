<template>
  <div class='login'>
    <h1>Hacktiv Store</h1>
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
  }

}
</script>

<style>

</style>
