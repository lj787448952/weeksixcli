<template>
  <div class="container">
    <h1>後台產品管理列表</h1>

    <div class="text-end mt-4">
      <button class="btn btn-primary" type="button" @click="openModal(true)">
        建立新的產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-end">
            {{ item.origin_price }}
          </td>
          <td class="text-end">
            {{ item.price }}
          </td>
          <td>
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="openModal(falses, item)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="openDelModal(item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <Pagination :pages="pagination" @emit-pages="getProducts"> </Pagination>
    <!-- Pagination -->
    <ProductModal
      :product="tempProduct"
      :isNew="isNew"
      ref="productModal"
      @update-product="updateProduct"
    ></ProductModal>

    <DelModal
      :product="tempProduct"
      @del-item="delProduct"
      ref="delModal"
    ></DelModal>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination.vue";
import ProductModal from "@/components/ProductModal.vue";
import DelModal from "@/components/DelModal.vue";

export default {
  name: "Products",
  props: ["token"],
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {
        imagesUrl: [],
      },
      isNew: false,
      isLoading: false,
      status: {
        fileUploading: false,
      },
      currentPage: 1,
    };
  },
  components: {
    Pagination,
    ProductModal,
    DelModal,
  },

  methods: {
    getProducts(page = 1) {
      // API
      this.currentPage = page;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
      this.$http
        .get(api)
        .then((response) => {
          // console.log(response);
          this.isLoading = true;
          if (response.data.success) {
            // console.log(response);
            this.products = response.data.products;
            this.pagination = response.data.pagination;
          } else {
            alert(response.data.message);
            this.$router.push("/login");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    openModal(isNew, item) {
      if (isNew) {
        // 點擊進來之後會進行判斷說是新增還是編輯 新增就給空 編輯就用淺層拷貝
        this.tempProduct = {};
        this.isNew = true;
      } else {
        this.tempProduct = { ...item };
        this.isNew = false;
      }
      //  else if(isNew === 'delete') {
      //   this.tempProduct = { ...item };
      //   delProductModal.show()
      // }
      const productComponent = this.$refs.productModal;
      productComponent.openModal();
    },
    openDelModal(item) {
      this.tempProduct = { ...item };
      const delComponent = this.$refs.delModal;
      delComponent.openModal();
    },
    updateProduct(item) {
      // 新增商品
      this.tempProduct = item;
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
      let httpMethod = "post";
      // let status = "新增產品";
      // 當不是新增商品時則切換成編輯商品 API
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
        httpMethod = "put";
        // status = "更新產品";
      }
      const productComponent = this.$refs.productModal;
      this.$http[httpMethod](api, { data: this.tempProduct })
        .then((res) => {
          if (res.data.success) {
            alert(res.data.message);
            productComponent.hideModal();
            this.getProducts(this.currentPage);
            // this.$emit('update');
            // 當執行完post 或是put 之後必須更新畫面
          } else {
            alert(res.data.message);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    delProduct() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
      this.isLoading = true;
      this.$http.delete(url).then((res) => {
        if (res.data.success) {
          console.log(res);
          const delComponent = this.$refs.delModal;
          delComponent.hideModal();
          this.getProducts(this.currentPage);
        } else {
          console.log(res);
          alert(res.data.message);
        }
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
