<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#" id="btn-home" @click.prevent="toHomePage">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" id="btn-list" @click.prevent="toAddPage">Add Product</a>
            </li>
            </ul>
            <form class="form-inline my-lg-0" @submit.prevent="logoutUser">
            <button class="btn btn-danger" type="submit">Sign Out</button>
            </form>
        </div>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'Nav',
  methods: {
    logoutUser () {
      this.$store.dispatch('logout')
    },
    toAddPage () {
      this.$store.dispatch('toAddPage')
    },
    toHomePage () {
      this.$store.dispatch('toHomePage')
    }
  }
}
</script>

<style>

</style>
