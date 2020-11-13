<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#" id="btn-home">Home<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" id="btn-list">Add Product</a>
            </li>
            </ul>
            <form class="form-inline my-2 my-lg-0" onsubmit="signOutUser(event)">
            <button class="btn btn-danger" type="submit">Sign Out</button>
            </form>
        </div>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style>

</style>
