<template>
  <div class="container-fluid" style="min-height: 100vh">
    <div
      class="position-absolute d-flex justify-content-end align-items-center"
      style="
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: url(/img/1.jpg);
        background-position: center center;
        opacity: 1;
      "
    >
      <h1
        class="fw-bold text-white me-5 d-flex flex-wrap align-items-end"
        style="
          max-width: 700px;
          border-bottom: 1px solid #fff;
          padding: 10px 20px;
          font-family: ‘Noto Sans TC’, sans-serif;
          letter-spacing: -1px;
        "
      >
        <strong class="" style="font-size: 80px"
          >好酒
          <br />
          不見</strong
        >

        <img src="/img/logo/hero.png" width="170px" class="mx-2" alt="" />
      </h1>
    </div>
  </div>

  <!-- 本月主打 -->
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h2 class="text-center">本月推薦</h2>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-md-6">
        <div
          class="
            d-flex
            flex-wrap
            justify-content-center
            align-items-center
            p-3
            month-product
          "
        >
          <div class="col-md-6">
            <img
              src="/img/single/single-gin.png"
              class="hot-product-img"
              width="100%"
              alt=""
            />
          </div>
          <div class="col-md-6 text-start text-sm-center text-white">
            <h4 class="pt-3">龐貝琴酒</h4>
            <h5>Bombay</h5>
            <p>
              產地：英國 <br />
              容量：750ml <br />
              酒精成分：40~43%
            </p>
            <!-- <p></p> -->
            <!-- <p></p> -->
            <!-- <p>推薦度：★☆☆</p>
            <p>種類：調和純麥</p> -->
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div
          class="
            d-flex
            flex-wrap
            justify-content-center
            align-items-center
            p-3
            month-product
          "
        >
          <div class="col-md-6">
            <img
              src="/img/single/single-vodka.png"
              class="hot-product-img"
              width="100%"
              alt=""
            />
          </div>
          <div class="col-md-6 text-start text-white text-sm-center">
            <h4 class="pt-3">思美洛</h4>
            <h5>Smirnoff</h5>
            <p>
              產地：俄羅斯 <br />
              容量：750ml <br />
              酒精成分：35~37%
            </p>
            <!-- <p></p> -->
            <!-- <p></p> -->
            <!-- <p>推薦度：★☆☆</p>
            <p>種類：調和純麥</p> -->
          </div>
        </div>
      </div>
      <!-- <div class="col-md-6">
        <div class="d-flex">
          <div class="col-md-6">
            <img
              src="/img/single/single-vodka.png"
              class="hot-product-img"
              width="100%"
              alt=""
            />
          </div>
          <div class="col-md-6">
            <h2>rgjirtgeg</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              illo ut iure optio, cum enim et dolore itaque voluptatibus dolor
              voluptates! Veritatis totam aliquid repudiandae possimus. Omnis
              voluptas quisquam expedita?
            </p>
          </div>
        </div>
      </div> -->

      <!-- <div class="col-md-6 mt-md-4" v-for="item in products" :key="item.id">
        <div class="row align-items-center">
          <div class="col-md-8">
            <img
              :src="item.imagesUrl[2]"
              class="card-img-top rounded-0 product-img"
              alt="..."
            />
          </div>
          <div class="col-md-4">
            <h4>{{ item.title }}</h4>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div> -->
    </div>
  </div>
  <!-- 本月主打 -->
  <div class="container my-7 pt-5">
    <div class="row py-5">
      <div class="col-12"></div>
      <h2>好酒推薦</h2>
    </div>
    <div class="row py-5 justify-content-center align-items-center">
      <div class="col-md-4">
        <img src="/img/deal-red/red-1.png" alt="" class="img-fluid" />
      </div>
      <div class="col-md-5 text-start px-4">
        <h4 class="mt-4">夏多內</h4>
        <h5>Chardonnay</h5>
        <p class="text-muted">
          世界上最受歡迎的白葡萄品種之一，最初是種植於法國勃根地（Burgundy），由於其對氣候強大的適應力，現在世界各地都可以看到它的蹤影。
        </p>
        <p>
          隨著風土條件與釀造師風格的不同，夏多內釀造的白酒可說是千變萬化，從法國香檳區的白中白香檳（Blanc
          de
          Blanc），到夏布利（Chablis）那帶有礦石味與檸檬氣息的清爽滋味，又或是美國釀造，浸泡橡木桶後圓潤豐滿的奶油味，夏多內在每個地方都有不同的際遇，是白酒中的百變女郎。檸檬，蘋果，杏桃，鳳梨，百香果，桃子，柑桔和李子都是夏多內中可能出現的氣息。
        </p>
        <hr />
        <router-link class="btn btn-primary" to="/products"
          >了解更多</router-link
        >
      </div>
    </div>
    <div class="row py-5 justify-content-center align-items-center d-flex">
      <div class="col-md-4 order-sm-1 order-md-2">
        <img src="/img/deal-white/white-1.png" alt="" class="img-fluid" />
      </div>
      <div class="col-md-5 text-start px-4 order-sm-2 order-md-1">
        <h4 class="mt-4">麗絲玲</h4>
        <h5>Riesling</h5>
        <p class="text-muted">
          麗絲玲最早出現於在德國的萊茵河區，適合在較冷的地區生長，而將麗絲玲發揚光大的，同樣也是德國，當然法國阿爾薩斯，澳洲與美國等地也能看到它的身影。
        </p>
        <p>
          麗絲玲是個能充分體現種植土地特色的芳香品種，依產地和採收時節的不同，它可以釀造出帶有汽油味息，不甜的乾白酒，卻也可以產出極為知名甜酒，帶有蜂蜜氣息的貴腐酒。
        </p>
        <hr />
        <router-link class="btn btn-primary" to="/products"
          >了解更多</router-link
        >
      </div>
    </div>

    <div class="row py-5 justify-content-center align-items-center">
      <div class="col-md-4">
        <img src="/img/deal-gin/gin-2.png" alt="" class="img-fluid" />
      </div>
      <div class="col-md-5 text-start px-4">
        <h4 class="mt-4">英人琴酒</h4>
        <h5>Beefeaters</h5>
        <p class="text-muted">
          英人琴酒算是最普遍看的到的琴酒款，在各大超商都見的到他的蹤影，價格也不貴，適合入門者購買使用。
        </p>
        <p>
          英人琴酒的副料為柑橘果皮、少許混合穀物，其風味較於濃郁。經過二次蒸餾的程序製成，氣味較於清淡，尾韻也較短。
        </p>
        <hr />
        <router-link class="btn btn-primary" to="/products"
          >了解更多</router-link
        >
      </div>
    </div>
  </div>

  <!-- 五種類別 -->
  <div class="container py-5 pt-5">
    <div class="row">
      <div class="col-12 py-2">
        <h2>本館珍藏</h2>
        <p>點擊以查看更多</p>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-2">
        <img
          src="/img/single/single-gin.png"
          class="my-5 m-auto"
          width="52%"
          alt=""
        />
        <h5>琴酒</h5>
      </div>
      <div class="col-md-2">
        <img
          src="/img/single/single-vodka.png"
          class="my-5 m-auto"
          width="53%"
          alt=""
        />
        <h5>伏特加</h5>
      </div>
      <div class="col-md-2">
        <img
          src="/img/single/single-whisky.png"
          class="my-5 m-auto"
          width="60%"
          alt=""
        />
        <h5>威士忌</h5>
      </div>
      <div class="col-md-2">
        <img
          src="/img/single/single-white.png"
          class="my-5 m-auto"
          width="40%"
          alt=""
        />
        <h5>白酒</h5>
      </div>
      <div class="col-md-2">
        <img
          src="/img/single/single-red.png"
          class="my-5 m-auto"
          width="50%"
          alt=""
        />
        <h5>紅酒</h5>
      </div>
    </div>
  </div>
  <!-- 五種類別 -->

  <!-- bg-attachment-fix  -->
  <div
    class="
      bg-light
      mt-7
      bg-fix
      d-flex
      justify-content-center
      align-items-center
    "
    style="background-image: url(img/3.jpg)"
  >
    <div class="container">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row justify-content-center py-7">
              <div class="col-md-6 text-center text-secondary">
                <h3>琴酒 Schinken Hager</h3>
                <p class="my-5">
                  其製法特殊，是讓未經加工的新鮮杜松子發酵蒸餾後，和另外發酵蒸餾的大麥混合而成。無論在味道和香氣皆較英產杜松子酒溫和，容易入囗，與德國啤酒是絕妙的搭配，目的在暖和喝過啤酒後冷卻的胃。
                </p>
                <p><small>產地：西班牙 容量：700ml </small></p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row justify-content-center py-7">
              <div class="col-md-6 text-center">
                <h3>龐貝琴酒 Bombay</h3>
                <p class="my-5">
                  僅次於英人，也是入門琴酒推薦款，價格與英人差不多，如果想換口味可以試試。高登琴酒的主要原料為玉米、大麥、杜松子等眾多香料，共進行三次蒸餾。將玉米、大麥經過一次蒸餾後，加入杜松子、胡荽籽、圓當歸根等香料做第二次的共同蒸餾，最後經過第三道蒸餾後加以稀釋製成。
                </p>
                <p><small>產地：英國 容量：750ml </small></p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row justify-content-center py-7">
              <div class="col-md-6 text-center">
                <h3>Lorem ipsum.</h3>
                <p class="my-5">
                  龐貝琴酒使用特殊泉水與特殊蒸餾法製造，價格也略高一點。源自1761年的配方，使用純淨的威爾斯凡尼湖泉水，在完美結合十種來自於世界各地的天然草本植物精華混和調味而成
                </p>
                <p><small>產地：英國 容量：750ml </small></p>
              </div>
            </div>
          </div>
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
  </div>
  <!-- bg-attachment-fix  -->

  <!-- 輪播關於酒類知識部落格 -->
  <section class="py-5">
    <div class="container py-5">
      <div class="row">
        <div class="col-12 py-2">
          <h2>酒類知識分享</h2>
          <p>點擊以查看更多</p>
        </div>
      </div>
      <div class="">
        <div
          id="carouselExampleInterval"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <img src="/img/causoul-bgimg/red.png" class="" alt="..." />
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src="/img/causoul-bgimg/white.png" class="" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="/img/causoul-bgimg/gin.png" class="" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="/img/causoul-bgimg/whisky.png" class="" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="/img/causoul-bgimg/vodka.png" class="" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </section>
  <!-- 輪播關於酒類知識部落格 -->

  <!-- 酒類產品聯節拼圖 -->
  <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-12 py-2">
          <h2>部落格文章連結</h2>
          <p>點擊以查看更多</p>
        </div>
      </div>
      <div class="row py-3 justify-content-center my-2">
        <div
          class="
            d-flex
            col-md-6 col-12
            flex-wrap
            justify-content-center
            align-items-center
          "
        >
          <div class="col-md-6 col-12">
            <a href="#">
              <img
                src="img/blog/1.jpg"
                class="blog-img-small px-1 blog-link py-2"
                width="100%"
                alt="..."
              />
              <!-- <p class="blog-link-txt">酒窖知識你知多少</p> -->
            </a>
          </div>
          <div class="col-md-6 col-12">
            <a href="＃">
              <img
                src="img/blog/2.jpg"
                class="blog-img-small px-1 blog-link py-2"
                width="100%"
                alt="..."
              />
            </a>
          </div>
        </div>
        <div class="col-md-4 col-12 d-flex justify-content-center">
          <a href="＃">
            <img
              src="img/blog/3.jpg"
              class="blog-img-large blog-link py-2"
              width="100%"
              alt="..."
            />
          </a>
        </div>
      </div>
      <div class="row py-3 justify-content-center my-2 align-items-center">
        <div class="col-md-4 col-12 d-flex justify-content-center">
          <a href="＃">
            <img
              src="img/blog/4.jpg"
              class="blog-img-large blog-link py-2"
              width="100%"
              alt="..."
            />
          </a>
        </div>
        <div class="d-flex flex-wrap col-md-6 col-12 justify-content-center">
          <div class="col-md-6">
            <a href="＃">
              <img
                src="img/blog/5.jpg"
                class="blog-img-small px-1 blog-link py-2"
                width="100%"
                alt="..."
              />
            </a>
          </div>
          <div class="col-md-6 col-12">
            <a href="＃">
              <img
                src="img/blog/6.jpg"
                class="blog-img-small px-1 blog-link py-2"
                width="100%"
                alt="..."
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 酒類產品聯節拼圖 -->

  <!-- <div class="bg-light py-4">
    <div class="container">
      <div
        class="
          d-flex
          flex-column flex-md-row
          justify-content-between
          align-iㄋtems-md-center align-items-start
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

  <section
    class="bg-fix d-flex justify-content-center align-items-center"
    style="background-image: url(img/9.jpg)"
  >
    <div class="text-white footer-text">
      <h3>加入<span class="text-warning mb-2">好酒不見</span></h3>
      <h6>想知道更多優惠訊息嗎！！點擊加入我們的官方帳號</h6>
      <p>我們定時提供更多的資訊讓你掌握</p>
      <div class="">
        <a href="#" class="p-5"
          ><i class="bi bi-facebook text-white" style="font-size: 30px"></i
        ></a>
        <a href="#" class="p-5"
          ><i class="bi bi-instagram text-white" style="font-size: 30px"></i
        ></a>
      </div>
    </div>
  </section>

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
  name: "Index",
  data() {
    return {
      products: [],
      loadingStatus: {
        loadingItem: "",
      },
      isloading: false,
    };
  },
  // components: {
  //   Footer,
  // },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products`;
      this.$http.get(url).then((res) => {
        console.log(res);
        if (res.data.success) {
          this.products = res.data.products;
        } else {
          console.log(res);
        }
      });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style scoped>
.blog-link:hover {
  background: rgba(0, 0, 0, 0.37);
  opacity: 0.6;
  cursor: pointer;
  transform: rotate(3deg);
}
/* .blog-link {
  position: relative;
}
.blog-link-txt {
  color: aliceblue;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
} */
.blog-link-txt:hover {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
}
.product-img {
  object-fit: cover;
  object-position: center;
  width: 310px;
  height: 320px;
}
.hot-product-img {
  object-fit: contain;
  object-position: center;
  width: 310px;
  height: 320px;
}

.blog-img-small {
  object-fit: cover;
  object-position: center;
  /* width: 310px; */
  width: 100%;
  height: 237px;
}

.blog-img-large {
  object-fit: cover;
  object-position: center;
  /* width: 380px; */
  width: 100%;
  height: 280px;
}

.bg-fix {
  background: rgba(0, 0, 0, 0.274);
  background-blend-mode: multiply;
  background-attachment: fixed;
  height: 500px;
  width: 100vw;
}

.month-product {
  position: relative;
}
.month-product::after {
  position: absolute;
  top: 20%;
  left: 10%;
  content: "";
  width: 90%;
  height: 59%;
  background-color: #313c3e;
  z-index: -1;
}
.footer-text {
  background-color: rgba(0, 0, 0, 0.753);
  padding: 60px 40px;
}
/* h1 {
  position: relative;
}
h1::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  background-image: url(/img/logo/hero.png);
  width: 100px;
  height: 300px;
  z-index: 10;
} */
</style>
