<template>
  <div class="container">
    <form @submit.prevent="saveNewProduct">
      <div class="form-group">
        <label for="productName">Name</label>
        <input type="text" class="form-control" id="productName" placeholder="e.g. Ortuseight" v-model="name">
      </div>
      <div class="form-group">
        <label for="image_url">Image Url</label>
        <input type="url" class="form-control" id="image_url" placeholder="e.g. http://arah.in/adidas-neo" v-model="image_url">
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input type="text" class="form-control" id="price" placeholder="e.g. 150000" v-model="price">
      </div>
      <div class="form-group">
        <label for="stock">Stock</label>
        <input v-model="stock" type="text" class="form-control" id="stock" placeholder="e.g. 15">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  <button type="submit" class="btn btn-primary mt-3">Cancel</button>
  </div>
</template>

<script>
export default {
  name: 'FormAdd',
  data () {
    return {
      name: '',
      image_url: '',
      price: '',
      stock: ''
    }
  },
  methods: {
    saveNewProduct () {
      const payload = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('addProduct', payload)
    }
  }
}
</script>

<style>

</style>
