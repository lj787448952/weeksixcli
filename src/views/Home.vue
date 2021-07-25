<template>
  <Navbar></Navbar>

  <!-- <div class="home">
    <h1>目前在前台頁面</h1>
    <div id="nav">
      <router-link to="/"> Home</router-link> |
      <router-link to="/products">Products</router-link> |
      <router-link to="/cart">Cart</router-link> |
      <router-link to="/admin">Backend</router-link> |
      <router-link to="/login">Login in</router-link>
    </div>
  </div> -->
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Navbar from "../components/Navbar.vue";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
@import "../assets/stylesheets/all";
@import url(https://fonts.googleapis.com/earlyaccess/notosanstc.css);

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #6b8aa9;

    &.router-link-exact-active {
      color: #73d9e4;
    }
  }
}

body {
  background: #1b1b1b;
  font-family: ‘Noto Sans TC’, sans-serif;
}
</style>
