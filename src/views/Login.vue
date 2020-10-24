<template>
  <div class="container">
    <div class="row"> 
      <div class="col-md-3"> </div>

      <div class="col-md-6">  
        <h1>Welcome to Leave Application</h1> 
        <br> <br>
        <form>
            <div class="form-group">
             
              <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter Email..." required>
              
            </div>
            <div class="form-group">
             
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Password" required>
            </div>
        
            <button type="submit" class="btn btn-primary" to="/register"> Login</button>
          </form>
      </div>

      <div class="col-md-3"> </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>