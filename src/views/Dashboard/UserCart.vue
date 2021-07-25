<template>
  <div class="container">
    <div>
      <h1>購物車訂單列表</h1>
    </div>

    <div class="mt-4">
      <table class="table align-middle">
        <thead>
          <tr>
            <th>圖片</th>
            <th>商品名稱</th>
            <th>價格</th>
            <th>功能</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <td style="width: 200px">
              <div
                style="
                  height: 100px;
                  background-size: cover;
                  background-position: center;
                "
                :style="{
                  backgroundImage: `
                            url(${item.imageUrl} )
                               `,
                }"
              ></div>
            </td>

            <td>
              {{ item.title }}
            </td>

            <td>
              <div class="h5" v-if="!item.price">
                {{ item.origin_price }}
              </div>

              <del class="h6" v-if="item.price">
                原價{{ item.origin_price }} 元
              </del>
              <div class="h5" v-if="item.price">
                現在只要 {{ item.price }} 元
              </div>
            </td>

            <td>
              <div class="btn-group btn-group-sm">
                <button
                  type="button"
                  class="btn btn-outline-secondary"
                  @click="getProduct(item.id)"
                  :disabled="
                    loadingStatus.loadingItem === item.id || !item.is_enabled
                  "
                >
                  <i
                    class="fas fa-spinner fa-pulse"
                    v-if="loadingStatus.loadingItem === item.id"
                  ></i>
                  查看更多
                </button>

                <button
                  type="button"
                  class="btn btn-outline-danger"
                  @click="addToCart(item.id)"
                  :disabled="
                    loadingStatus.loadingItem === item.id || !item.is_enabled
                  "
                >
                  <i
                    class="fas fa-spinner fa-pulse"
                    v-if="loadingStatus.loadingItem === item.id"
                  ></i>
                  加到購物車
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- 以下為購物車列表 -->
      <div class="text-end">
        <button
          class="btn btn-outline-danger"
          type="button"
          @click="deleteAllCarts"
        >
          清空購物車
        </button>
      </div>
      <table class="table align-middle">
        <thead>
          <tr>
            <th></th>
            <th>品名</th>
            <th style="width: 150px">數量/單位</th>
            <th>單價</th>
          </tr>
          <!-- 這邊可以試試用flex -->
        </thead>

        <tbody>
          <template v-if="cart.carts">
            <!-- 這邊是要來判斷購物車是否是空的 -->
            <tr v-for="item in cart.carts" :key="item.id">
              <td>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click="removeCartItem(item.id)"
                  :disabled="loadingStatus.loadingItem === item.id"
                >
                  <!-- 如果點擊之後 item.id ==  loading.id  -->
                  <i
                    class="fas fa-spinner fa-pulse"
                    v-if="loadingStatus.loadingItem === item.id"
                  >
                  </i>
                  x
                </button>
              </td>
              <td>
                {{ item.product.title }}
                <div class="text-success" v-if="item.coupon">已套用優惠券</div>
              </td>

              <td>
                <div class="input-group input-group-sm">
                  <div class="input-group mb-3">
                    <input
                      v-model.number="item.qty"
                      @blur="updateCart(item)"
                      :disabled="loadingStatus.loadingItem === item.id"
                      min="1"
                      type="number"
                      class="form-control"
                    />
                    <span class="input-group-text" id="basic-addon2">
                      {{ item.product.unit }}
                    </span>
                  </div>
                </div>
              </td>

              <td class="text-end">
                <small
                  v-if="cart.final_total !== cart.total"
                  class="text-success"
                  >折扣價：</small
                >
                {{ item.final_total }}
              </td>
            </tr>
          </template>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3" class="text-end">總計</td>
            <td class="text-end">
              {{ cart.total }}
            </td>
          </tr>
          <tr v-if="cart.final_total !== cart.total">
            <td colspan="3" class="text-end text-success">折扣價</td>
            <td class="text-end text-success">
              {{ cart.final_total }}
            </td>
          </tr>
        </tfoot>
        <!-- <tfoot>
                        <tr>
     </tfoot> -->
      </table>
    </div>
    <!-- 以下為訂購表單 -->
    <div class="my-5 row justify-content-center">
      <Form
        ref="form"
        class="col-md-6"
        v-slot="{ errors }"
        @submit="creatOrder"
      >
        <div class="mb-3">
          <label for="email" class="form-label"> Email </label>
          <Field
            id="email"
            name="email"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': errors['email'] }"
            placeholder="請輸入email"
            rules="email|required"
            v-model="form.user.email"
          ></Field>
          <ErrorMessage name="emial" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="name" class="form-label"> 收件人姓名 </label>
          <Field
            id="name"
            name="姓名"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['姓名'] }"
            placeholder="請輸入姓名"
            rules="required"
            v-model="form.user.name"
          ></Field>
          <ErrorMessage name="name" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label"> 收件人電話 </label>
          <Field
            id="tel"
            name="電話"
            type="tel"
            class="form-control"
            :class="{ 'is-invalid': errors['電話'] }"
            placeholder="請輸入電話"
            rules="required|min:8|max:10"
            v-model="form.user.tel"
          ></Field>
          <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label"> 收件人地址 </label>
          <Field
            id="address"
            name="地址"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['地址'] }"
            placeholder="請輸入地址"
            rules="required"
            v-model="form.user.address"
          ></Field>
          <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label"> 留言 </label>
          <textarea
            name=""
            id="message"
            class="form-control"
            cols="30"
            rows="10"
            v-model="form.message"
          >
          </textarea>
        </div>

        <div class="text-end">
          <button class="btn btn-danger">送出訂單</button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loadingStatus: {
        loadingItem: "",
      },
      products: [],
      product: {},
      cart: {},
      isLoading: false,
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
        },
        message: "",
      },
    };
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products`;
      this.isLoading = true;
      this.$http
        .get(url)
        .then((res) => {
          console.log(res);
          this.products = res.data.products;
          this.isLoading = false;
        })
        .catch((error) => {
          console.log(error);
          alert("you fail");
        });
    },
    getProduct(id) {
      this.$router.push(`/admin/product/${id}`);
      console.log(id);
    },
    addToCart(id, qty = 1) {
      // 前面是參數 後面是預設值 addToCart( id , qty = 1)
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart `;
      console.log(id);
      this.loadingStatus.loadingItem = id;
      console.log(this.loadingStatus.loadingItem);
      const cart = {
        product_id: id,
        qty,
      };
      // const cart = {
      //   product_id: id,
      //   qty,
      // };
      // this.$refs.userProductModal.hideModal();
      this.$http.post(url, { data: cart }).then((res) => {
        if (res.data.success) {
          alert(res.data.message);
          this.loadingStatus.loadingItem = "";
          this.getCart();
        } else {
          alert(res.data.message);
        }
      });
    },
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          // console.log(res);
          this.cart = res.data.data;
        } else {
          alert(res.data.message);
        }
      });
    },
    deleteAllCarts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`;
      this.$http.delete(url).then((res) => {
        if (res.data.success) {
          console.log(res);
          alert(res.data.message);
          this.getCart();
        } else {
          alert(res.data.message);
        }
      });
    },
    removeCartItem(id) {
      this.loadingStatus.loadingItem = id;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.isLoading = true;
      console.log(id);
      this.$http
        .delete(url)
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            alert(res.data.message);
            this.getCart();
          }
        })
        .catch((error) => {
          console.dir(error);
          alert(error.data.message);
        });
    },
    updateCart(data) {
      // this.loadingStatus.loadingItem = data.id;
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${data.id}`;

      const cart = {
        product_id: data.product_id,
        qty: data.qty,
        // 更新id與購物車數量
      };
      this.$http.put(url, { data: cart }).then((res) => {
        if (res.data.success) {
          alert(res.data.message);
          this.isLoading = false;
          this.getCart();
          // console.log(res.data);
        } else {
          alert(res.data.message);
          this.isLoading = false;
        }
      });
    },
    creatOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      // 必須把order設置為上面的表單
      const order = this.form;
      this.$http.post(url, { data: order }).then((res) => {
        console.log(res);
        if (res.data.success) {
          alert(res.data.message);
          this.$router.push(`/admin/checkout/${res.data.orderId}`);
        } else {
          console.log(res);
        }
        this.isLoading = false;
        this.$refs.form.resetForm();
      });
    },
  },

  created() {
    this.getProducts();
    this.getCart();
  },
};
</script>
