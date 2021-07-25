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
    style="min-height: 400px"
  >
    <div
      class="position-absolute"
      style="
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        background-position: center center;
        opacity: 0.1;
      "
      :style="{ backgroundImage: `url(${products.imageUrl} )` }"
    ></div>
    <h2 class="fw-bold">Lorem ipsum.</h2>
  </div>
  <div class="container mt-md-5 mt-3 mb-7">
    <div class="row">
      <div class="col-md-4">
        <div class="list-group">
          <a
            href="#"
            class="list-group-item list-group-item-action active"
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
          <div class="col-md-6" v-for="item in filterProducts" :key="item.id">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img
                :src="item.imageUrl"
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
                  <router-link :to="`/product/${item.id}`">
                    {{ item.title }}</router-link
                  >
                </h4>
                <p class="card-text mb-0">
                  {{ item.price }}
                  <span class="text-muted"
                    ><del> 原價 {{ item.origin_price }}</del></span
                  >
                </p>
                <p class="text-muted mt-3">現在只要{{ item.content }}</p>
              </div>
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
                <button
                  type="button"
                  class="btn btn-outline-success"
                  @click="addMyFavorite(item)"
                  :class="{ active: myFavorite.includes(item.id) }"
                >
                  我的最愛
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
        <div id="domGetNewPage" ref="domGetNewPage"></div>
        <nav class="d-flex justify-content-center">
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
        </nav>
      </div>
    </div>
  </div>
  <div class="bg-light py-4">
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
  </div>
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
      pagination: {},
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
      }
      console.log(this.myFavorite);
      // storageMethods.save(this.myFavorite);
    },
    getProducts(page = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${page}`;
      this.$http.get(url).then((res) => {
        console.log(res);
        this.isloading = true;
        if (res.data.success) {
          console.log(res);
          this.products = [...this.products, ...res.data.products];
          // this.products = res.data.products;

          this.pagination = res.data.pagination;
          this.getCategories();
          setTimeout(() => {
            this.isLoading = false;
          }, 4000);
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
    scrollFunction() {
      // domGetNewPage
      const { domGetNewPage } = this.$refs;
      window.addEventListener("scroll", () => {
        console.log(domGetNewPage);
        // 取得目前滾動位址
        //  domGetNewPage location
        //  when scroll over the location of domGetNewPage  , it will gonna
        //  height of screen to determine
        const windowY = window.scrollY;
        const windowHeight = window.innerHeight;
        const domPosition = domGetNewPage.offsetTop;
        console.log(windowY, windowHeight, domPosition);
        if (
          windowY + windowHeight > domPosition &&
          this.pagination.has_next &&
          !this.isloading
        ) {
          // console.log("  already over original status");
          this.getProducts(this.pagination.current_page + 1);
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
  mounted() {
    window.addEventListener("scroll", this.scrollFunction);
  },
  unmounted() {
    window.removeEventListener("scroll", this.scrollFunction);
  },
};
</script>
