<template>
  <div class="container">
    <!-- <nav class="navbar navbar-expand-lg navbar-light px-0">
      <a class="navbar-brand" href="./index.html">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav">
          <a class="nav-item nav-link me-4 active" href="./index.html"
            >Home <span class="sr-only">(current)</span></a
          >
          <a class="nav-item nav-link me-4" href="./product.html">Product</a>
          <a class="nav-item nav-link me-4" href="./detail.html">Detail</a>
          <a class="nav-item nav-link" href="./cart.html"
            ><i class="fas fa-shopping-cart"></i
          ></a>
        </div>
      </div>
    </nav> -->
    <div class="row align-items-center">
      <div class="col-md-7">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img :src="product.imageUrl" class="d-block w-100" alt="..." />
            </div>
            <!-- <div class="carousel-item">
              <img
                :src="product.imagesUrl[1]"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                :src="product.imagesUrl[2]"
                class="d-block w-100"
                alt="..."
              />
            </div> -->
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="col-md-5">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-white px-0 mb-0 py-3">
            <li class="breadcrumb-item">
              <a class="text-muted" href="./index.html">Home</a>
            </li>
            <li class="breadcrumb-item">
              <a class="text-muted" href="./product.html">Product</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Detail</li>
          </ol>
        </nav>
        <h2 class="fw-bold h1 mb-1">{{ product.title }}</h2>
        <p class="mb-0 text-muted text-end">
          <del>NT${{ product.origin_price }}</del>
        </p>
        <p class="h4 fw-bold text-end">NT${{ product.price }}</p>
        <div class="row align-items-center">
          <div class="col-6">
            <div class="input-group my-3 bg-light rounded">
              <div class="input-group-prepend">
                <button
                  class="btn btn-outline-dark border-0 py-2"
                  type="button"
                  id="button-addon1"
                >
                  <i class="fas fa-minus"></i>
                </button>
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
                "
                placeholder=""
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
                value="1"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-outline-dark border-0 py-2"
                  type="button"
                  id="button-addon2"
                >
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="col-6">
            <button
              class="text-nowrap btn btn-dark w-100 py-2"
              type="button"
              @click="addToCart"
            >
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row my-5">
      <div class="col-md-4">
        <p>
          {{ product.content }}
        </p>
      </div>
      <div class="col-md-3">
        <p class="text-muted">
          {{ product.description }}
        </p>
      </div>
    </div>
    <h3 class="fw-bold pt-3">您可能也喜歡</h3>
    <div class="container my-5">
      <div class="row">
        <div
          class="card col-md-4"
          v-for="item in randomArray"
          :key="item.id"
          style=""
        >
          <img
            :src="item.imageUrl"
            class="card-img-top alike-img m-auto"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">
              {{ item.content }}
            </p>

            <a href="#" class="btn btn-primary">了解更多</a>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="swiper-container mt-4 mb-5">
      <div class="swiper-wrapper" v-for="item in product" :key="item.id">
        <div class="swiper-slide">
          <div class="card border-0 mb-4 position-relative position-relative">
            <img
              :src="item.imagesUrl"
              class="card-img-top rounded-0"
              alt="..."
            />
            <a href="#" class="text-dark"> </a>
            <div class="card-body p-0">
              <h4 class="mb-0 mt-3">
                <a href="#">{{ item.title }}</a>
              </h4>
              <p class="card-text mb-0">
                NT$1,080 \<span class="text-muted"><del>NT$1,200</del></span>
              </p>
              <p class="text-muted mt-3"></p>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="card border-0 mb-4 position-relative position-relative">
            <img
              src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              class="card-img-top rounded-0"
              alt="..."
            />
            <a href="#" class="text-dark"> </a>
            <div class="card-body p-0">
              <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
              <p class="card-text mb-0">
                NT$1,080 <span class="text-muted"><del>NT$1,200</del></span>
              </p>
              <p class="text-muted mt-3"></p>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="card border-0 mb-4 position-relative position-relative">
            <img
              src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              class="card-img-top rounded-0"
              alt="..."
            />
            <a href="#" class="text-dark"> </a>
            <div class="card-body p-0">
              <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
              <p class="card-text mb-0">
                NT$1,080 <span class="text-muted"><del>NT$1,200</del></span>
              </p>
              <p class="text-muted mt-3"></p>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="card border-0 mb-4 position-relative position-relative">
            <img
              src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              class="card-img-top rounded-0"
              alt="..."
            />
            <a href="#" class="text-dark"> </a>
            <div class="card-body p-0">
              <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
              <p class="card-text mb-0">
                NT$1,080 <span class="text-muted"><del>NT$1,200</del></span>
              </p>
              <p class="text-muted mt-3"></p>
            </div>
          </div>
        </div>
      </div>
    </div> -->
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
import emitter from "../assets/javascript/mitt";
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
export default {
  data() {
    return {
      product: {},
      products: [],
      randomArray: [],
      id: "",
    };
  },

  methods: {
    getProduct() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.$http.get(url).then((res) => {
        console.log(res);
        if (res.data.success) {
          // console.log(res);
          this.product = res.data.product;
          this.isLoading = false;
          this.getProducts();
        } else {
          alert(res.data.message);
        }
      });
    },
    getProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(url).then((res) => {
        console.log(res);
        if (res.data.success) {
          this.products = res.data.products;
          this.isLoading = false;
          this.randomArrayFilter();
        } else {
          alert(res.data.message);
        }
      });
    },
    randomArrayFilter() {
      const { category } = this.product;
      const filterProducts = this.products.filter(
        (item) => item.category === category
      );
      const maxSize = filterProducts.length < 3 ? filterProducts.length : 3;
      console.log(filterProducts);
      const arrSet = new Set([]);
      console.log(arrSet.size);
      getRandomInt();
      for (let i = 0; arrSet.size < maxSize; i + 1) {
        const num = getRandomInt(filterProducts.length);
        arrSet.add(num);
        console.log(arrSet, num);
      }
      arrSet.forEach((i) => {
        this.randomArray.push(filterProducts[i]);
      });
      console.log(this.randomArray);
    },
    addToCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: this.product.id,
        qty: 1,
      };
      this.$http.post(url, { data: cart }).then((res) => {
        console.log(res);
        this.isLoading = false;
        emitter.emit("update-cart");
      });
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.getProduct();
  },
  // 要取得單一的產品di this.$route.params
};
</script>

<style scoped>
.alike-img {
  object-fit: cover;
  object-position: center;
  width: 345px;
  height: 245px;
}
</style>