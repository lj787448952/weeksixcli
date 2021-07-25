<template>
  <div class="bg-white sticky-top">
    <div class="container">
      <nav class="navbar px-0 navbar-expand-lg navbar-light bg-white">
        <router-link
          class="navbar-brand position-absolute d-sm-none d-md-block d-none"
          style="left: 50%; transform: translate(-50%, -50%); top: 50%"
          to="/"
        >
          Home</router-link
        >

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse bg-white custom-header-md-open"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item d-sm-block d-md-none">
              <router-link class="nav-link ps-0" to="/">Home</router-link>
            </li>
            <li class="nav-item active">
              <router-link class="nav-link ps-0" to="/products"
                >產品列表</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/cart">購物車</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/admin">後台</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login">登入</router-link>
            </li>
          </ul>
        </div>
        <div class="d-flex position-relative">
          <a href="#">
            <i class="bi bi-cart-fill" style="font-size: 2rem; color: #000"></i>
            <div
              class="rounded-pill bg-danger text-white position-absolute px-1"
              style="right: 1px; top: 1px"
              v-if="cart.carts"
            >
              {{ cart.carts.length }}
            </div>
          </a>
        </div>
      </nav>
    </div>
  </div>
  <router-view></router-view>
</template>

<script>
import emitter from "../assets/javascript/mitt";

export default {
  data() {
    return {
      cart: {
        carts: {},
      },
    };
  },
  methods: {
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(url).then((res) => {
        console.log(res);
        this.cart = res.data.data;
      });
    },
  },
  mounted() {
    this.getCart();
    emitter.on("update-cart", () => {
      this.getCart();
    });
  },
};
</script>