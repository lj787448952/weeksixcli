<template>
  <div class="container">
    <div>
      <Loading :active="isLoading"></Loading>
      <h1>購物車頁面</h1>
      <div class="container">
        <table class="table align-middle">
          <thead>
            <tr>
              <th></th>
              <th>品名</th>
              <th style="width: 150px">數量/單位</th>
              <th>單價</th>
            </tr>
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
                  <div class="text-success" v-if="item.coupon">
                    已套用優惠券
                  </div>
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

          <!-- <tbody>
                        <template v-if="cart.carts">
                            <tr v-for="item in cart.carts" :key="item.id">
                                <td>
                                    <button type="button" class="btn btn-outline-danger btn-sm"
                                        @click="removeCartItem(item.id)"
                                        :disabled="loadingStatus.loadingItem === item.id">
                                        <i class="fas fa-spinner fa-pulse"
                                            v-if="loadingStatus.loadingItem === item.id"></i>
                                        x
                                    </button>
                                </td>
                                <td>
                                    {{ item.product.title }}
                                    <div class="text-success" v-if="item.coupon">
                                        已套用優惠券
                                    </div>
                                </td>
                                <td>
                                    <div class="input-group input-group-sm">
                                        <div class="input-group mb-3">
                                            <input v-model.number="item.qty" @blur="updateCart(item)"
                                                :disabled="loadingStatus.loadingItem === item.id" min="1" type="number"
                                                class="form-control">
                                            <span class="input-group-text" id="basic-addon2">{{ item.product.unit
                                                }}</span>
                                        </div>
                                    </div>
                                </td>
                                <td class="text-end">
                                    <small v-if="cart.final_total !== cart.total" class="text-success">折扣價：</small>
                                    {{ item.final_total }}
                                </td>
                            </tr>
                        </template>
                    </tbody> -->
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
                            <td colspan="3" class="text-end">總計</td>
                            <td class="text-end">{{ cart.total }}</td>
                        </tr>
                        <tr v-if="cart.final_total !== cart.total">
                            <td colspan="3" class="text-end text-success">折扣價</td>
                            <td class="text-end text-success">{{ cart.final_total }}</td>
                        </tr>
                    </tfoot> -->
        </table>

        <div class="my-5 row justify-content-center">
          <Form
            ref="form"
            class="col-md-6"
            v-slot="{ errors }"
            @submit="createOrder"
          >
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <Field
                id="email"
                name="email"
                type="email"
                class="form-control"
                :class="{ 'is-invalid': errors['email'] }"
                placeholder="請輸入 Email"
                rules="email|required"
                v-model="form.user.email"
              ></Field>
              <ErrorMessage
                name="email"
                class="invalid-feedback"
              ></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="name" class="form-label">收件人姓名</label>
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
              <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="tel" class="form-label">收件人電話</label>
              <Field
                id="tel"
                name="電話"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['電話'] }"
                placeholder="請輸入電話"
                rules="required|min:8|max:10"
                v-model="form.user.tel"
              ></Field>
              <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="address" class="form-label">收件人地址</label>
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
              <label for="message" class="form-label">留言</label>
              <textarea
                name=""
                id="message"
                class="form-control"
                cols="30"
                rows="10"
                v-model="form.message"
              ></textarea>
            </div>
            <div class="text-end">
              <button type="submit" class="btn btn-danger">送出訂單</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row justify-content-center" v-if="cart.carts">
      <div
        class="col-md-6 bg-white py-5"
        style="min-height: calc(100vh - 56px - 76px)"
      >
        <div class="d-flex justify-content-between">
          <h2 class="mt-2">Cart Detail</h2>
        </div>
        <div
          class="d-flex mt-4 bg-light"
          v-for="item in cart.carts"
          :key="item.id"
        >
          <img
            :src="item.product.imageUrl"
            alt=""
            style="width: 120px; height: 120px; object-fit: cover"
          />
          <div class="w-100 p-3 position-relative">
            <a href="#" class="position-absolute" style="top: 16px; right: 16px"
              ><i class="fas fa-times"></i
            ></a>
            <p class="mb-0 fw-bold">{{ item.product.title }}</p>
            <p class="mb-1 text-muted" style="font-size: 14px">
              {{ item.product.category }}
            </p>
            <div
              class="d-flex justify-content-between align-items-center w-100"
            >
              <div class="input-group w-50 align-items-center">
                <div class="input-group-prepend pe-1">
                  <a href="#"> <i class="fas fa-minus"></i></a>
                </div>
                <input
                  type="text"
                  class="
                    form-control
                    border-0
                    text-center
                    my-auto
                    shadow-none
                    bg-light
                    px-0
                  "
                  placeholder=""
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                  value="1"
                />
                <div class="input-group-append ps-1">
                  <a href="#"><i class="fas fa-plus"></i></a>
                </div>
              </div>
              <p class="mb-0 ms-auto">NT$12,000</p>
            </div>
          </div>
        </div>
        <!-- <div class="d-flex mt-4 bg-light">
          <img
            src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80"
            alt=""
            style="width: 120px; height: 120px; object-fit: cover"
          />
          <div class="w-100 p-3 position-relative">
            <a href="#" class="position-absolute" style="top: 16px; right: 16px"
              ><i class="fas fa-times"></i
            ></a>
            <p class="mb-0 fw-bold">Lorem ipsum</p>
            <p class="mb-1 text-muted" style="font-size: 14px">
              Lorem ipsum dolor sit amet
            </p>
            <div
              class="d-flex justify-content-between align-items-center w-100"
            >
              <div class="input-group w-50 align-items-center">
                <div class="input-group-prepend pe-1">
                  <a href="#"> <i class="fas fa-minus"></i></a>
                </div>
                <input
                  type="text"
                  class="
                    form-control
                    border-0
                    text-center
                    my-auto
                    shadow-none
                    bg-light
                    px-0
                  "
                  placeholder=""
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                  value="1"
                />
                <div class="input-group-append ps-1">
                  <a href="#"><i class="fas fa-plus"></i></a>
                </div>
              </div>
              <p class="mb-0 ms-auto">NT$12,000</p>
            </div>
          </div>
        </div> -->
        <table class="table mt-4 text-muted">
          <tbody>
            <tr>
              <th scope="row" class="border-0 px-0 font-weight-normal">總計</th>
              <td class="text-end border-0 px-0"></td>
            </tr>
            <tr>
              <th scope="row" class="border-0 px-0 pt-0 font-weight-normal">
                Lorem ipsum
              </th>
              <td class="text-end border-0 px-0 pt-0">NT$500</td>
            </tr>
          </tbody>
        </table>
        <div class="d-flex justify-content-between mt-4">
          <p class="mb-0 h4 fw-bold">總計</p>
          <p class="mb-0 h4 fw-bold"></p>
        </div>
        <a
          href="./checkout.html"
          class="btn btn-dark btn-block mt-4 rounded-0 py-3"
          >Lorem ipsum</a
        >
      </div>
    </div>
  </div>
  <!--以下為footer -->
  <section>
    <div class="bg-dark py-5">
      <div class="container">
        <div
          class="
            row
            flex-wrap
            align-items-center
            justify-content-between
            text-white
            mb-md-7 mb-4
          "
        >
          <div class="col-md-2">
            <img src="/img/logo/hero.png" alt=" " class="img-fluid" />
          </div>
          <div class="col-md-5 p-5">
            <ul class="list-unstyled">
              <li class="mb-3">
                <h4>
                  <img src="/img/logo/hero.png" width="50px" />
                </h4>
              </li>
              <li class="mb-3">
                <h6 class="text-start">
                  服務電話<a class="px-3" href="tel:0925339425">0925339425</a>
                </h6>
              </li>
              <li class="mb-3">
                <h6 class="text-start">
                  服務地址<a class="px-3" href="#">桃園市中壢區榮民九路564號</a>
                </h6>
              </li>
              <li class="mb-3">
                <h6 class="text-start">
                  Facebook<a class="px-3" href="#">好酒不見</a>
                </h6>
              </li>
              <li class="mb-3">
                <h6 class="text-start">
                  Line<a class="px-3" href="#">點擊加入官方帳號</a>
                </h6>
              </li>
              <li class="mb-3">
                <h6 class="text-start">
                  instagram<a class="px-3" href="#">@longtim 最新動態顯示</a>
                </h6>
              </li>
              <li class="mb-3">
                <h6 class="text-start">
                  Gmail<a class="px-3" href="tel:0925339425"
                    >mark8486305@gmail.com</a
                  >
                </h6>
              </li>

              <li class="d-flex justify-content-start">
                <a href="#" class="text-white me-4"
                  ><i class="pe-2 fs-3 bi bi-facebook"></i
                ></a>
                <a href="#" class="text-white me-4"
                  ><i class="pe-2 fs-3 bi bi-instagram"></i
                ></a>
                <a href="#" class="text-white me-4">
                  <i class="bi pe-2 fs-3 bi-phone-fill"></i
                ></a>

                <a href="#" class="text-white me-4">
                  <i class="bi pe-2 fs-3 bi-map-fill"></i>
                </a>

                <a href="#" class="text-white me-4">
                  <i class="bi pe-2 fs-3 bi-chat-dots-fill"></i>
                </a>
              </li>
            </ul>
          </div>

          <!-- <div class="col-md-4 p-5">
            <ul class="list-unstyled">
              <li class="mb-3">
                <a class="text-white h4" href="#">
                  <img src="img/deal-vodka/vodka-1.png" width="100%" />
                </a>
              </li>
              <li class="mb-3">
                <h6 class="text-start">
                  近期活動行事曆<a class="px-3" href="＃">8月線上喝酒活動</a>
                </h6>
              </li>
              <li class="mb-3">
                <h6 class="text-start">
                  贊助廠商<a class="px-3" href="#">世界酒廠</a>
                  <a class="px-3" href="#">世界酒廠</a>
                </h6>
              </li>
              <li class="mb-3">
                <h6 class="text-start">
                  慈善活動<a class="px-3" href="#">世界酒廠</a>
                  <a class="px-3" href="#">世界酒廠</a>
                </h6>
              </li>
              <li class="mb-3">
                <h6 class="text-start">
                  周邊商品<a class="px-3" href="#">世界酒廠</a>
                  <a class="px-3" href="#">世界酒廠</a>
                </h6>
              </li>
              <li class="mb-3">
                <h6 class="text-start">
                  合作名人<a class="px-3" href="#">世界酒廠</a>
                  <a class="px-3" href="#">世界酒廠</a>
                </h6>
              </li>
            
            </ul>
          </div> -->

          <div class="col-md-5 d-flex justify-content-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.8028129752465!2d121.25605971487816!3d24.972822684001045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346821ff2247e46d%3A0x629926233052db00!2z5YWn5aOi54Gr6LuK56uZ!5e0!3m2!1szh-TW!2stw!4v1627036997805!5m2!1szh-TW!2stw"
              width="100%"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div
          class="
            d-flex
            flex-column flex-md-row
            justify-content-between
            align-items-md-end align-items-start
            text-white
          "
        >
          <!-- <div class="mb-md-0 mb-1">
            <p class="mb-0">02-3456-7890</p>
            <p class="mb-0">service@mail.com</p>
          </div> -->
        </div>
      </div>
      <hr />
      <div class="bg-dark py-3">
        <p class="mb-0">
          Copyright© 2021 好酒不見 All Rights Reserved ｜ Designed by Chao lei.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      loadingStatus: {
        loadingItem: "",
      },
      isLoading: false,
      cart: {},
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
        },
        message: "",
      },
      coupon_code: "",
    };
  },
  created() {
    this.getCart();
  },
  methods: {
    getCart() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(url).then((response) => {
        if (response.data.success) {
          console.log(response);
          this.cart = response.data.data;
          this.isLoading = false;
        } else {
          alert(response.data.message);
        }
      });
    },
    removeCartItem(id) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.loadingStatus.loadingItem = id;
      this.$http.delete(url).then((response) => {
        if (response.data.success) {
          alert(response.data.message);
          this.getCart();
        } else {
          alert(response.data.message);
        }
        this.loadingStatus.loadingItem = "";
        this.isLoading = false;
      });
    },
    updateCart(data) {
      this.loadingStatus.loadingItem = data.id;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${data.id}`;
      const cart = {
        product_id: data.product_id,
        qty: data.qty,
        // 更新id與購物車數量
      };
      this.$http.put(url, { data: cart }).then((response) => {
        if (response.data.success) {
          console.log(response);
          alert(response.data.message);
          this.loadingStatus.loadingItem = "";
          this.getCart();
        } else {
          alert(response.data.message);
          this.loadingStatus.loadingItem = "";
        }
      });
    },
    createOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      const order = this.form;

      this.$http.post(url, { data: order }).then((response) => {
        console.log(response);
        if (response.data.success) {
          alert(response.data.message);
          this.$refs.form.resetForm();
          this.getCart();
        } else {
          alert(response.data.message);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
p,
h2,
tr,
th,
td {
  color: gray;
}
</style>