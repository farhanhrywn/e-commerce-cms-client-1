<template>
  <div class="container mt-5">
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" placeholder="e.g. Ortuseight">
      </div>
      <div class="form-group">
        <label for="image_url">Image Url</label>
        <input type="url" class="form-control" id="image_url" placeholder="e.g. http://arah.in/adidas-neo">
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input type="text" class="form-control" id="price" placeholder="e.g. 150000">
      </div>
      <div class="form-group">
        <label for="stock">Stock</label>
        <input type="text" class="form-control" id="stock" placeholder="e.g. 15">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  <button type="submit" class="btn btn-primary mt-3" @click="cancelAddProduct">Cancel</button>
  </div>
</template>

<script>
export default {
  name: 'FormAdd'
}
</script>

<style>

</style>
