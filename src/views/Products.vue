<template>
  <!-- <div class="container">
    <h1>產品列表</h1>
    <Loading :active="isLoading"></Loading>
    <table class="table align-middle">
      <thead>
        <tr>
          <th>圖片</th>
          <th>商品名稱</th>
          <th>價格</th>
          <th></th>
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
            <div class="h5" v-if="item.price">現在只要 {{ item.price }} 元</div>
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
  </div> -->

  <UserProductModal
    ref="userProductModal"
    :product="product"
    @add-to-cart="addToCart"
  ></UserProductModal>
  <!-- <Pagination :pages="pagination" @emit-pages="getData"></Pagination> -->

  <div
    class="position-relative d-flex align-items-center justify-content-center"
    style="min-height: 600px"
  >
    <div
      class="position-absolute d-flex justify-content-end align-items-center"
      style="
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-position: center center;
      "
      :style="{
        backgroundImage: `url(img/10.jpg )`,
      }"
    >
      <h1
        class="fw-bold text-white me-5"
        style="
          max-width: 500px;

          padding: 10px 20px;
        "
      >
        <strong style="font-size: 56px"
          >好
          <span class="text-warning" style="font-size: 64px">酒</span>
          不見</strong
        >
        <br class="d-sm-block d-md-none" />
        週年慶
        <hr />

        <h3>有多久沒有跟朋友好好喝一杯了</h3>
      </h1>
    </div>
  </div>
  <div class="container mt-md-5 mt-3 mb-7">
    <div class="row">
      <div class="col-md-4">
        <div class="mb-3">
          <label for="search">搜尋你想要的酒類</label>
          <input
            type="text"
            class="form-control"
            id="search"
            placeholder="search"
            v-model.trim="selectCategory"
          />
          <p class="text-start pt-2 text-secondary">
            關鍵字 白酒 紅酒 威士忌等
          </p>
        </div>
        <div class="list-group">
          <a
            href="#"
            class="
              list-group-item list-group-item-action
              active
              border-bottom
              mb-1
            "
            aria-current="true"
            v-for="item in categories"
            :key="item.id"
            @click.prevent="selectCategory = item"
          >
            {{ item }}
          </a>
        </div>
      </div>
      <div class="col-md-8">
        <div class="row">
          <div class="mb-3">
            <div class="form-floating">
              <select
                v-model="selectCategory"
                id="cacheArea"
                class="form-select w-50 mb-2"
                aria-label="select example"
              >
                <option selected value="" disabled>搜尋紀錄</option>
                <option
                  :value="item"
                  v-for="(item, index) in browseLog"
                  :key="item.Add + index"
                >
                  {{ `${index + 1}.${item}` }}
                </option>
              </select>
              <label for="cacheArea">瀏覽紀錄</label>
            </div>
          </div>
          <div class="col-md-6" v-for="item in filterProducts" :key="item.id">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img
                :src="item.imageUrl"
                class="card-img-top rounded-0 product-img"
                alt="..."
              />

              <!-- <a href="#" class="text-dark">
                <i
                  class="bi bi-heart position-absolute"
                  style="right: 16px; top: 16px"
                ></i>
              </a> -->
              <button
                type="button"
                class="btn btn-outline-danger rounded-circle position-absolute"
                @click="addMyFavorite(item)"
                :class="{ active: myFavorite.includes(item.id) }"
                style="right: 16px; top: 355px"
              >
                <i class="bi bi-heart-fill"></i>
              </button>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3">
                  <router-link :to="`/product/${item.id}`">
                    {{ item.title }}</router-link
                  >
                </h4>

                <p class="card-text mb-0">
                  現在只要{{ item.price }}
                  <span class="text-muted"
                    ><del> 原價 {{ item.origin_price }}</del></span
                  >
                </p>
                <p
                  class="text-muted mt-3 p-3"
                  style="overflow-x: hidden; overflow-y: auto; height: 140px"
                >
                  {{ item.content }}
                </p>
              </div>
              <div class="d-flex justify-content-center">
                <button
                  type="button"
                  class="btn btn-secondary rounded-circle m-3"
                  @click="getProduct(item.id)"
                  :disabled="
                    loadingStatus.loadingItem === item.id || !item.is_enabled
                  "
                >
                  <i
                    class="fas fa-spinner fa-pulse"
                    v-if="loadingStatus.loadingItem === item.id"
                  ></i>
                  <i class="bi bi-zoom-in"></i>
                </button>

                <button
                  type="button"
                  class="btn btn-warning rounded-circle m-3"
                  @click="addToCart(item.id)"
                  :disabled="
                    loadingStatus.loadingItem === item.id || !item.is_enabled
                  "
                >
                  <i
                    class="fas fa-spinner fa-pulse"
                    v-if="loadingStatus.loadingItem === item.id"
                  ></i>
                  <i class="bi bi-cart-plus-fill"></i>
                </button>
              </div>
            </div>
          </div>
          <!-- <div class="col-md-6">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img
                src="https://images.unsplash.com/photo-1591843336741-9f1238f66758?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80"
                class="card-img-top rounded-0"
                alt="..."
              />
              <a href="#" class="text-dark">
                <i
                  class="far fa-heart position-absolute"
                  style="right: 16px; top: 16px"
                ></i>
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3">
                  <a href="./detail.html">Lorem ipsum</a>
                </h4>
                <p class="card-text mb-0">
                  NT$1,080 <span class="text-muted"><del>NT$1,200</del></span>
                </p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img
                src="https://images.unsplash.com/photo-1591843336741-9f1238f66758?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80"
                class="card-img-top rounded-0"
                alt="..."
              />
              <a href="#" class="text-dark">
                <i
                  class="far fa-heart position-absolute"
                  style="right: 16px; top: 16px"
                ></i>
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3">
                  <a href="./detail.html">Lorem ipsum</a>
                </h4>
                <p class="card-text mb-0">
                  NT$1,080 <span class="text-muted"><del>NT$1,200</del></span>
                </p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img
                src="https://images.unsplash.com/photo-1591843336741-9f1238f66758?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80"
                class="card-img-top rounded-0"
                alt="..."
              />
              <a href="#" class="text-dark">
                <i
                  class="far fa-heart position-absolute"
                  style="right: 16px; top: 16px"
                ></i>
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3">
                  <a href="./detail.html">Lorem ipsum</a>
                </h4>
                <p class="card-text mb-0">
                  NT$1,080 <span class="text-muted"><del>NT$1,200</del></span>
                </p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img
                src="https://images.unsplash.com/photo-1591843336741-9f1238f66758?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80"
                class="card-img-top rounded-0"
                alt="..."
              />
              <a href="#" class="text-dark">
                <i
                  class="far fa-heart position-absolute"
                  style="right: 16px; top: 16px"
                ></i>
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3">
                  <a href="./detail.html">Lorem ipsum</a>
                </h4>
                <p class="card-text mb-0">
                  NT$1,080 <span class="text-muted"><del>NT$1,200</del></span>
                </p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img
                src="https://images.unsplash.com/photo-1591843336741-9f1238f66758?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80"
                class="card-img-top rounded-0"
                alt="..."
              />
              <a href="#" class="text-dark">
                <i
                  class="far fa-heart position-absolute"
                  style="right: 16px; top: 16px"
                ></i>
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3">
                  <a href="./detail.html">Lorem ipsum</a>
                </h4>
                <p class="card-text mb-0">
                  NT$1,080 <span class="text-muted"><del>NT$1,200</del></span>
                </p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img
                src="https://images.unsplash.com/photo-1591843336741-9f1238f66758?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80"
                class="card-img-top rounded-0"
                alt="..."
              />
              <a href="#" class="text-dark">
                <i
                  class="far fa-heart position-absolute"
                  style="right: 16px; top: 16px"
                ></i>
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3">
                  <a href="./detail.html">Lorem ipsum</a>
                </h4>
                <p class="card-text mb-0">
                  NT$1,080 <span class="text-muted"><del>NT$1,200</del></span>
                </p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img
                src="https://images.unsplash.com/photo-1591843336741-9f1238f66758?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80"
                class="card-img-top rounded-0"
                alt="..."
              />
              <a href="#" class="text-dark">
                <i
                  class="far fa-heart position-absolute"
                  style="right: 16px; top: 16px"
                ></i>
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3">
                  <a href="./detail.html">Lorem ipsum</a>
                </h4>
                <p class="card-text mb-0">
                  NT$1,080 <span class="text-muted"><del>NT$1,200</del></span>
                </p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div> -->
        </div>
        <!-- <nav class="d-flex justify-content-center">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item active">
              <a class="page-link" href="#">1</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav> -->
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
  <!-- <div class="bg-light py-4">
    <div class="container">
      <div
        class="
          d-flex
          flex-column flex-md-row
          justify-content-between
          align-items-md-center align-items-start
        "
      >
        <p class="mb-0 fw-bold">Lorem ipsum dolor sit amet.</p>
        <div class="input-group w-md-50 mt-md-0 mt-3">
          <input type="text" class="form-control rounded-0" placeholder="" />
          <div class="input-group-append">
            <button class="btn btn-dark rounded-0" type="button" id="search">
              Lorem ipsum
            </button>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <!-- <div class="bg-dark py-5">
    <div class="container">
      <div
        class="
          d-flex
          align-items-center
          justify-content-between
          text-white
          mb-md-7 mb-4
        "
      >
        <a class="text-white h4" href="./index.html">LOGO</a>
        <ul class="d-flex list-unstyled mb-0 h4">
          <li>
            <a href="#" class="text-white mx-3"
              ><i class="fab fa-facebook"></i
            ></a>
          </li>
          <li>
            <a href="#" class="text-white mx-3"
              ><i class="fab fa-instagram"></i
            ></a>
          </li>
          <li>
            <a href="#" class="text-white ms-3"><i class="fab fa-line"></i></a>
          </li>
        </ul>
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
        <div class="mb-md-0 mb-1">
          <p class="mb-0">02-3456-7890</p>
          <p class="mb-0">service@mail.com</p>
        </div>
        <p class="mb-0">© 2020 LOGO All Rights Reserved.</p>
      </div>
    </div>
  </div> -->
</template>

<script>
import emitter from "../assets/javascript/mitt";
import UserProductModal from "@/components/UserProductModal.vue";

const storageMethods = {
  save(favorite) {
    // 存取時要先轉型成字串
    const favoriteString = JSON.stringify(favorite);
    localStorage.setItem("favoriteItem", favoriteString);
  },
  get() {
    return JSON.parse(localStorage.getItem("favoriteItem"));
  },
};
console.log("storageMethods,", storageMethods);

export default {
  name: "Products",
  data() {
    return {
      products: [],
      loadingStatus: {
        loadingItem: "",
      },
      myFavorite: storageMethods.get() || [],
      isloading: false,
      product: {},
      categories: [],
      selectCategory: "",

      browseLog: [],
      // when you have to put record in browlog so you have to create another place to store data which you choose
    };
  },
  components: {
    UserProductModal,
  },
  created() {
    this.getProducts();
  },
  methods: {
    addMyFavorite(item) {
      // console.log("addMyfavorite");
      // console.log(this.product);
      // this.myFavorite.push(item.id);
      if (this.myFavorite.includes(item.id)) {
        this.myFavorite.splice(this.myFavorite.indexOf(item.id), 1);
        console.log("有重複");
      } else {
        this.myFavorite.push(item.id);
        alert("已加入我的最愛");
      }
      console.log(this.myFavorite);
      // storageMethods.save(this.myFavorite);
    },
    getProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(url).then((res) => {
        console.log(res);
        if (res.data.success) {
          console.log(res);
          this.products = res.data.products;
          this.isLoading = false;
          this.getCategories();
        } else {
          alert(res.data.message);
        }
      });
    },
    getCategories() {
      // 避免直接使用proxy 原型
      const categories = new Set();
      this.products.forEach((item) => {
        categories.add(item.category);
      });

      // 抓到型別之後 set 轉回proxy
      this.categories = [...categories];
      console.log(categories);
    },
    getProduct(id) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`;
      this.loadingStatus.loadingItem = id;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          console.log(res);
          this.loadingStatus.loadingItem = "";
          this.product = res.data.product;
          this.isLoading = false;

          // 這是單一商品燈箱的頁面
          this.$refs.userProductModal.openModal();
          // 動員素綁定
        } else {
          alert(res.data.message);
        }
      });

      // [說明]: product_id(String)、qty(Number) 為必填欄位
      // 支援合併購物車品項：當加入相同商品時會自動累加數量
      // [參數]: { "data": { "product_id":"-L9tH8jxVb2Ka_DYPwng","qty":1 } }

      //取得單一商品一定要帶id
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

      this.$refs.userProductModal.hideModal();
      this.$http.post(url, { data: cart }).then((res) => {
        if (res.data.success) {
          alert(res.data.message);
          this.loadingStatus.loadingItem = "";
          emitter.emit("update-cart");
          this.getCart();
          // this.$refs.userProductModal.hideModal();
          this.isLoading = false;
        } else {
          alert(res.data.message);
        }
      });
    },
  },

  computed: {
    filterProducts() {
      return this.products.filter((item) =>
        item.category.match(this.selectCategory)
      );
    },
  },
  watch: {
    selectCategory(newItem) {
      if (this.browseLog.length < 4) {
        this.browseLog.push(newItem);
      } else {
        this.browseLog.shift();
        this.browseLog.push(newItem);
      }
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.product-img {
  object-position: center;
  object-fit: cover;
  width: 100%;
  height: 400px;
}

a {
  color: #89a3ca;
  text-decoration: none;
}
hr {
  border: 1px solid #fff;
}
</style>
