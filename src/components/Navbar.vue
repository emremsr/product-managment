<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-success">
      <a class="navbar-brand text-white">Product Seller</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ">
          <router-link class="nav-item nav-link" to="/" tag="a"
            >Product List</router-link
          >
          <router-link class="nav-item nav-link" to="/product" tag="a"
            >Product Operations</router-link
          >
          <router-link class="nav-item nav-link" to="/productsell" tag="a"
            >Product Sell</router-link
          >
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "ProductManagmentNavbar",
};
</script>
