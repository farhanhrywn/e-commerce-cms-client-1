<template>
    <div>
      <div class="container">
        <div class="d-flex justify-content-center align-items-center">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title" style="justify-self: center;">Your Product</h5>
              <table class="table table-striped" style="width: 1000px;">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Image</th>
                    <th scope="col">Price</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product.id">
                        <td>{{product.name}}</td>
                        <td><img :src="product.image_url" alt="image product" height="150px"></td>
                        <td>{{product.price}}</td>
                        <td>{{product.stock}}</td>
                        <td>
                            <button class="btn btn-primary text-white mr-3" style="background-color: #42b0f8;"> Edit</button>
                            <button class="btn btn-primary text-white" style="background-color: #42b0f8;"> Delete</button>
                        </td>
                    </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </div>
      </div>
</template>

<script>
// import Nav from '@/components/Nav.vue'
export default {
  name: 'ListProduct',
  methods: {
    fetchProduct () {
      this.$store.dispatch('fetchProducts')
    }
  },
  created () {
    this.fetchProduct()
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>

<style>

</style>
