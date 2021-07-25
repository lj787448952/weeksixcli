<template>
  <Loading :active="isLoading" :z-index="1060"></Loading>
  <div class="my-5 row justify-content-center">
    <h1>這是客戶訂單確定的頁面</h1>
    <form class="col-md-6" @submit.prevent="payOrder">
      <table class="table align-middle">
        <thead>
          <th>品名</th>
          <th>數量</th>
          <th>單價</th>
        </thead>
        <tbody>
          <tr v-for="item in order.products" :key="item.id">
            <td>{{ item.product.title }}</td>
            <td>{{ item.qty }}/{{ item.product.unit }}</td>
            <td>{{ item.final_total }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2" class="text-end">總計</td>
            <td class="text-end">{{ order.total }}</td>
          </tr>
        </tfoot>
      </table>

      <table class="table">
        <tbody>
          <tr>
            <th width="100">Email</th>
            <td>{{ order.user.email }}</td>
          </tr>
          <tr>
            <th width="100">Address</th>
            <td>{{ order.user.address }}</td>
          </tr>
          <tr>
            <th width="100">Phone</th>
            <td>{{ order.user.tel }}</td>
          </tr>
          <tr>
            <th width="100">Name</th>
            <td>{{ order.user.name }}</td>
          </tr>
          <tr>
            <th width="100">付款狀態</th>
            <td>
              <span v-if="!order.is_paid"> 尚未付款 </span>
              <span v-else class="text-success"> 付款完成 </span>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="text-end" v-if="order.is_paid === false">
        <button class="btn btn-danger">確認付款去</button>
      </div>
    </form>
    <div>
      <button class="btn btn-success" @click="goBack">回購物頁面</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      order: {
        user: {},
      },
      orderId: "",
    };
  },
  methods: {
    getOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      this.isLoading = true;
      this.$http.get(url).then((res) => {
        console.log(res);
        this.order = res.data.order;
        this.isLoading = false;
      });
    },
    payOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`;
      this.isLoading = true;
      this.$http
        .post(url)
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            alert(res.data.message);
            this.isLoading = false;
            this.getOrder();
          }
        })
        .catch((error) => {
          console.log(error);
          alert(error.data.message);
        });
    },
    goBack() {
      this.$router.push(`/admin/orders`);
    },
  },
  created() {
    console.log(this.$route.params.orderId);
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
  mounted() {},
};
</script>