<template>
  <div class="container mt-5">
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
</template>

<script>
export default {
  name: 'FormEdit',
  data () {
    return {
      // name: this.product.name,
      // image_url: this.product.image_url,
      // price: this.product.price,
      // stock: this.product.stock,
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
      console.log(payload)
      this.$store.dispatch('updateProduct', payload)
    }
  }
}
</script>

<style>

</style>
