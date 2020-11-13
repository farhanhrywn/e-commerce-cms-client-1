<template>
      <div class="container">
        <div class="d-flex justify-content-center align-items-center" style="height: 50vh;">
          <div class="card" style="width: 100%;">
            <div class="card-body">
              <h5 class="card-title" style="justify-self: center;">Your Product</h5>
              <table class="table table-striped">
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
                    <tr>
                        <td>Ini nama product</td>
                        <td>Ini foto product</td>
                        <td>Ini harga product</td>
                        <td>Ini stock product</td>
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
</template>

<script>
export default {
  name: 'ListProduct'
}
</script>

<style>

</style>
