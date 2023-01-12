<template>
  <footer class="footer">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-1 m-3">
          <img
            slot="image"
            src="../assets/img/logo-gouv.png"
            alt="gouv"
            style="width: 100%"
          />
        </div>
        <div class="col-md">
          <nav>
            <ul class="footer-menu">
              <li>
                <router-link to="/admin">Dashboard</router-link>
              </li>
            </ul>
          </nav>
        </div>
        <div class="col-md-1 m-3">
          <img src="../assets/img/logo.png" alt="CSSE" style="width: 100%" />
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style>
</style>
