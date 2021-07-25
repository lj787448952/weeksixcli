<template>
  <!-- <Loading :active="isLoading" :z-index="1060"></Loading>
  <div class="text-end mt-4">
    <h1>這裡是優惠券</h1>
    <button
      type="button"
      class="btn btn-primary"
      @click="openCouponModal(true)"
    >
      建立新的優惠券
    </button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th>名稱</th>
        <th>折扣百分比</th>
        <th>到期日</th>
        <th>是否啟用</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table> -->
  <CouponModal
    :coupon="tempCoupon"
    :is-new="isNew"
    ref="couponModal"
    @update-coupon="updateCoupon"
  ></CouponModal>
</template>

<script>
// import CouponModal from "@/components/CouponModal.vue";
// export default {
//   data() {
//     return {
//       coupons: {},
//       tempCoupon: {
//         title: "",
//         is_enabled: 0,
//         percent: 100,
//         code: "",
//       },
//       isloading: false,
//       isNew: false,
//     };
//   },
//   methods: {
//     openCouponModal(isNew, item) {
//       this.isNew = isNew;

//       if (this.isNew) {
//         this.tempCoupon = {
//           due_date: new Date().getTime() / 1000,
//         };
//       } else {
//         this.tempCoupon = { ...item };
//       }
//       this.$refs.couponModal.openModal();
//     },
//     updateCoupon(tempCoupon) {
//       this.isLoading = true;
//       if (this.isNew) {
//         const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`;
//         this.$http.post(url, { data: tempCoupon }).then((res) =>  {
//             if(res.data.success){
//                  console.log(res);
//         this.getCoupons();
//         this.$refs.couponModal.hideModal();
//         this.isLoading = flase
//             }else{
//                 alert('更新優惠券')
//                 this.isLOading = flase;
//             }
//     });
//     }else{
//         const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
//         this.$http.put(url , { data: this.tempCoupon}).then((res) =>{
//             console.log(res)
//         })
//     }
//     getCoupons(); {
//       this.isloading = true;
//       const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons`;
//       this.$http
//         .get(url, this.tempProduct)
//         .then((res) => {
//         //   console.log(res);
//           this.coupons = res.data.coupons;
//           this.isLoading = false;
//         });
//     };

//   },
//   components: {
//     CouponModal,
//   },
//     created() {
//   this.getCoupons();
//     },
// }
</script> 