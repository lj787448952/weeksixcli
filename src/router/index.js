import { createRouter, createWebHashHistory } from "vue-router";
// import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    // name: "Home",
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/Index.vue'),
      },
      {
        path: 'products',
        name: '產品列表',
        component: () => import('../views/Products.vue'),
      },
      {
        path: 'products-lazy',
        name: '單一產品列表',
        component: () => import('../views/ProductsLazy.vue'),
      },
      {
        path: 'cart',
        name: '購物車列表',
        component: () => import('../views/Cart.vue'),
      },
      {
        path: 'product/:id',
        name: '產品細節',
        component: () => import('../views/Product.vue'),
      },
    ],
  },

  {
    path: '/login',
    // name: '登入頁面',
    component: () => import('../views/Login.vue'),
  },
  // 這邊是後台
  {
    path: '/admin',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'products',
        name: '後台產品',
        component: () => import('../views/Dashboard/Products.vue'),
      },
      {
        path: 'usercart',
        name: '後台購物車',
        component: () => import('../views/Dashboard/UserCart.vue'),
      },
      {
        path: 'order',
        name: '後台訂單',
        component: () => import('../views/Dashboard/Order.vue'),
      },
      {
        path: 'product/:productId',
        name: '單一產品',
        component: () => import('../views/Dashboard/Product.vue'),
      },
      {
        path: 'checkout/:orderId',
        name: '確定結帳頁面',
        component: () => import('../views/Dashboard/UserCheckout.vue'),
      },
      {
        path: 'coupons',
        name: '優惠券',
        component: () => import('../views/Dashboard/Coupons.vue'),
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
