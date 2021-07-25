<template>
  <div>
    <h1>目前在後台</h1>
    <div id="nav">
      <router-link to="/">回到前台</router-link> |
      <router-link to="/admin/products">後台產品</router-link>|
      <router-link to="/admin/order">後台訂單</router-link>|
      <router-link to="/admin/usercart">後台購物車</router-link>|
      <router-link to="/admin/coupons"> 優惠券 </router-link>|
      <a href="#" @click.prevent="logout">登出</a>
    </div>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {
      status: false,
    };
  },
  methods: {
    logout() {
      const api = `${process.env.VUE_APP_API}logout`;
      this.$http.post(api).then((res) => {
        if (res.data.success) {
          this.$router.push("/");
        }
      });
    },
  },
  created() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );

    this.$http.defaults.headers.common.Authorization = token;

    const api = `${process.env.VUE_APP_API}api/user/check`;
    this.$http.post(api).then((res) => {
      if (res.data.success) {
        this.status = true;
        console.log(res);
      } else {
        alert(res.data.message);
        this.$router.push("/");
      }
    });
  },
};
</script>
