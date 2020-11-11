<template>
    <div class="container">
        <div class="row">
            <div class="col-6">
                <img src='../assets/undraw_Login_re_4vu2.png' alt="login-user" height="350px">
            </div>
            <div class="col-6">
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1">
                    </div>
                    <button type="submit" class="btn btn-primary">Login</button>
                    <!-- <small id="emailHelp" class="form-text text-muted">Dont have an account ? <a href="#">Register</a></small> -->
                </form>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      logo: '../assets/undraw_Login_re_4vu2.png'
    }
  }
}
</script>

<style>

</style>
