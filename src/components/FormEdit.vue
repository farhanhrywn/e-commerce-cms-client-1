<template>
  <div class="container mt-5 d-flex flex-row">
    <div class="col-6">
      <img :src="data.image_url" alt="img product" width="500px" height="400px">
    </div>
    <div class="col-6">
      <form @submit.prevent="saveUpdateProduct">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" v-model="data.name">
        </div>
        <div class="form-group">
          <label for="image_url">Image Url</label>
          <input type="url" class="form-control" id="image_url" v-model="data.image_url">
        </div>
        <div class="form-group">
          <label for="price">Price</label>
          <input type="text" class="form-control" id="price" v-model="data.price">
        </div>
        <div class="form-group">
          <label for="stock">Stock</label>
          <input type="text" class="form-control" id="stock" v-model="data.stock">
        </div>
        <button type="submit" class="btn btn-primary">Edit</button>
      </form>
      <button type="submit" class="btn btn-primary mt-3" @click="cancelEditProduct">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormEdit',
  data () {
    return {
      data: this.$store.state.product
    }
  },
  computed: {
  },
  methods: {
    cancelEditProduct () {
      this.$router.push('home')
    },
    saveUpdateProduct () {
      const payload = {
        id: this.data.id,
        name: this.data.name,
        image_url: this.data.image_url,
        price: this.data.price,
        stock: this.data.stock
      }
      this.$store.dispatch('updateProduct', payload)
    }
  }
}
</script>

<style>

</style>
