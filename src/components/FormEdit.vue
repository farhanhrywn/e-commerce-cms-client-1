<template>
  <div class="container mt-5">
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name">
      </div>
      <div class="form-group">
        <label for="image_url">Image Url</label>
        <input type="url" class="form-control" id="image_url">
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input type="text" class="form-control" id="price">
      </div>
      <div class="form-group">
        <label for="stock">Stock</label>
        <input type="text" class="form-control" id="stock">
      </div>
      <button type="submit" class="btn btn-primary">Edit</button>
    </form>
  <button type="submit" class="btn btn-primary mt-3" @click="cancelEditProduct">Cancel</button>
  </div>
</template>

<script>
export default {
  name: 'FormEdit'
}
</script>

<style>

</style>
