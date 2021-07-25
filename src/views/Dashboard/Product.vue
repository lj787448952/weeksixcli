<template>
  <Loading :active="isLoading" :z-index="1060"></Loading>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/admin/orders"> 購物車 </router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ product.title }}
        </li>
      </ol>
    </nav>
    <div>
      <h2>這裡是產品單一頁面</h2>
    </div>
  </div>
  <div class="row justify-content-center">
    <article class="col-8">
      <h2>{{ product.title }}</h2>
      <p>{{ product.content }}</p>
      <p>{{ product.description }}</p>
      <img :src="product.imageUrl" alt="" class="img-fluid" />
    </article>
    <div class="col-4">
      <div class="h5" v-if="!product.price">{{ product.origin_price }} 元</div>
      <div class="h6" v-if="product.price">
        原價 {{ product.origin_price }}元
      </div>
      <div class="h5" v-if="product.price">現在只要{{ product.price }}元</div>
      <hr />
      <button
        type="button"
        class="btn btn-outline-danger"
        @click="addToCart(product.id)"
      >
        加入購物車
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {},
      isLoading: false,
      id: "",
    };
  },
  methods: {
    getProduct() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.isLoading = true;
      this.$http
        .get(url)
        .then((res) => {
          console.log(res);
          this.isLoading = true;
          if (res.data.success) {
            this.product = res.data.product;
            this.isLoading = false;
          } else {
            alert("失敗");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addToCart(id, qty = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty,
      };
      this.isLoading = true;
      this.$http.post(url, { data: cart }).then((res) => {
        console.log(res);
        if (res.data.success) {
          alert("res.data.message");
          this.isLoading = false;
          this.$router.push("/admin/orders");
        } else {
          alert(res.data.message);
        }
      });
    },
  },
  created() {
    //   console.log(this.$route.params);
    this.id = this.$route.params.productId;
    this.getProduct();
  },
  //   mounted() {},
};
</script>