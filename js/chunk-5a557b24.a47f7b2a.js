(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a557b24"],{"1dde":function(t,e,a){var c=a("d039"),n=a("b622"),i=a("2d00"),l=n("species");t.exports=function(t){return i>=51||!c((function(){var e=[],a=e.constructor={};return a[l]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"44d7":function(t,e,a){"use strict";a.r(e);a("b0c0");var c=a("7a23"),n={class:"container"},i=Object(c["i"])("div",null,[Object(c["i"])("h1",null,"購物車訂單列表")],-1),l={class:"mt-4"},o={class:"table align-middle"},s=Object(c["i"])("thead",null,[Object(c["i"])("tr",null,[Object(c["i"])("th",null,"圖片"),Object(c["i"])("th",null,"商品名稱"),Object(c["i"])("th",null,"價格"),Object(c["i"])("th",null,"功能")])],-1),r={style:{width:"200px"}},d={key:0,class:"h5"},u={key:1,class:"h6"},b={key:2,class:"h5"},j={class:"btn-group btn-group-sm"},m={key:0,class:"fas fa-spinner fa-pulse"},f=Object(c["h"])(" 查看更多 "),O={key:0,class:"fas fa-spinner fa-pulse"},p=Object(c["h"])(" 加到購物車 "),h={class:"text-end"},g={class:"table align-middle"},v=Object(c["i"])("thead",null,[Object(c["i"])("tr",null,[Object(c["i"])("th"),Object(c["i"])("th",null,"品名"),Object(c["i"])("th",{style:{width:"150px"}},"數量/單位"),Object(c["i"])("th",null,"單價")])],-1),y={key:0,class:"fas fa-spinner fa-pulse"},x=Object(c["h"])(" x "),k={key:0,class:"text-success"},C={class:"input-group input-group-sm"},I={class:"input-group mb-3"},S={class:"input-group-text",id:"basic-addon2"},V={class:"text-end"},w={key:0,class:"text-success"},_=Object(c["i"])("td",{colspan:"3",class:"text-end"},"總計",-1),L={class:"text-end"},$={key:0},q=Object(c["i"])("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),G={class:"text-end text-success"},U={class:"my-5 row justify-content-center"},B={class:"mb-3"},P=Object(c["i"])("label",{for:"email",class:"form-label"}," Email ",-1),A={class:"mb-3"},E=Object(c["i"])("label",{for:"name",class:"form-label"}," 收件人姓名 ",-1),F={class:"mb-3"},T=Object(c["i"])("label",{for:"tel",class:"form-label"}," 收件人電話 ",-1),D={class:"mb-3"},J=Object(c["i"])("label",{for:"address",class:"form-label"}," 收件人地址 ",-1),M={class:"mb-3"},Q=Object(c["i"])("label",{for:"message",class:"form-label"}," 留言 ",-1),z=Object(c["i"])("div",{class:"text-end"},[Object(c["i"])("button",{class:"btn btn-danger"},"送出訂單")],-1);function H(t,e,a,H,K,N){var R=Object(c["D"])("Field"),W=Object(c["D"])("ErrorMessage"),X=Object(c["D"])("Form");return Object(c["u"])(),Object(c["e"])("div",n,[i,Object(c["i"])("div",l,[Object(c["i"])("table",o,[s,Object(c["i"])("tbody",null,[(Object(c["u"])(!0),Object(c["e"])(c["a"],null,Object(c["B"])(K.products,(function(t){return Object(c["u"])(),Object(c["e"])("tr",{key:t.id},[Object(c["i"])("td",r,[Object(c["i"])("div",{style:[{height:"100px","background-size":"cover","background-position":"center"},{backgroundImage:"\n                            url(".concat(t.imageUrl," )\n                               ")}]},null,4)]),Object(c["i"])("td",null,Object(c["G"])(t.title),1),Object(c["i"])("td",null,[t.price?Object(c["f"])("",!0):(Object(c["u"])(),Object(c["e"])("div",d,Object(c["G"])(t.origin_price),1)),t.price?(Object(c["u"])(),Object(c["e"])("del",u," 原價"+Object(c["G"])(t.origin_price)+" 元 ",1)):Object(c["f"])("",!0),t.price?(Object(c["u"])(),Object(c["e"])("div",b," 現在只要 "+Object(c["G"])(t.price)+" 元 ",1)):Object(c["f"])("",!0)]),Object(c["i"])("td",null,[Object(c["i"])("div",j,[Object(c["i"])("button",{type:"button",class:"btn btn-outline-secondary",onClick:function(e){return N.getProduct(t.id)},disabled:K.loadingStatus.loadingItem===t.id||!t.is_enabled},[K.loadingStatus.loadingItem===t.id?(Object(c["u"])(),Object(c["e"])("i",m)):Object(c["f"])("",!0),f],8,["onClick","disabled"]),Object(c["i"])("button",{type:"button",class:"btn btn-outline-danger",onClick:function(e){return N.addToCart(t.id)},disabled:K.loadingStatus.loadingItem===t.id||!t.is_enabled},[K.loadingStatus.loadingItem===t.id?(Object(c["u"])(),Object(c["e"])("i",O)):Object(c["f"])("",!0),p],8,["onClick","disabled"])])])])})),128))])]),Object(c["i"])("div",h,[Object(c["i"])("button",{class:"btn btn-outline-danger",type:"button",onClick:e[1]||(e[1]=function(){return N.deleteAllCarts&&N.deleteAllCarts.apply(N,arguments)})}," 清空購物車 ")]),Object(c["i"])("table",g,[v,Object(c["i"])("tbody",null,[K.cart.carts?(Object(c["u"])(!0),Object(c["e"])(c["a"],{key:0},Object(c["B"])(K.cart.carts,(function(t){return Object(c["u"])(),Object(c["e"])("tr",{key:t.id},[Object(c["i"])("td",null,[Object(c["i"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:function(e){return N.removeCartItem(t.id)},disabled:K.loadingStatus.loadingItem===t.id},[K.loadingStatus.loadingItem===t.id?(Object(c["u"])(),Object(c["e"])("i",y)):Object(c["f"])("",!0),x],8,["onClick","disabled"])]),Object(c["i"])("td",null,[Object(c["h"])(Object(c["G"])(t.product.title)+" ",1),t.coupon?(Object(c["u"])(),Object(c["e"])("div",k,"已套用優惠券")):Object(c["f"])("",!0)]),Object(c["i"])("td",null,[Object(c["i"])("div",C,[Object(c["i"])("div",I,[Object(c["Q"])(Object(c["i"])("input",{"onUpdate:modelValue":function(e){return t.qty=e},onBlur:function(e){return N.updateCart(t)},disabled:K.loadingStatus.loadingItem===t.id,min:"1",type:"number",class:"form-control"},null,40,["onUpdate:modelValue","onBlur","disabled"]),[[c["L"],t.qty,void 0,{number:!0}]]),Object(c["i"])("span",S,Object(c["G"])(t.product.unit),1)])])]),Object(c["i"])("td",V,[K.cart.final_total!==K.cart.total?(Object(c["u"])(),Object(c["e"])("small",w,"折扣價：")):Object(c["f"])("",!0),Object(c["h"])(" "+Object(c["G"])(t.final_total),1)])])})),128)):Object(c["f"])("",!0)]),Object(c["i"])("tfoot",null,[Object(c["i"])("tr",null,[_,Object(c["i"])("td",L,Object(c["G"])(K.cart.total),1)]),K.cart.final_total!==K.cart.total?(Object(c["u"])(),Object(c["e"])("tr",$,[q,Object(c["i"])("td",G,Object(c["G"])(K.cart.final_total),1)])):Object(c["f"])("",!0)])])]),Object(c["i"])("div",U,[Object(c["i"])(X,{ref:"form",class:"col-md-6",onSubmit:N.creatOrder},{default:Object(c["P"])((function(t){var a=t.errors;return[Object(c["i"])("div",B,[P,Object(c["i"])(R,{id:"email",name:"email",type:"email",class:["form-control",{"is-invalid":a["email"]}],placeholder:"請輸入email",rules:"email|required",modelValue:K.form.user.email,"onUpdate:modelValue":e[2]||(e[2]=function(t){return K.form.user.email=t})},null,8,["class","modelValue"]),Object(c["i"])(W,{name:"emial",class:"invalid-feedback"})]),Object(c["i"])("div",A,[E,Object(c["i"])(R,{id:"name",name:"姓名",type:"text",class:["form-control",{"is-invalid":a["姓名"]}],placeholder:"請輸入姓名",rules:"required",modelValue:K.form.user.name,"onUpdate:modelValue":e[3]||(e[3]=function(t){return K.form.user.name=t})},null,8,["class","modelValue"]),Object(c["i"])(W,{name:"name",class:"invalid-feedback"})]),Object(c["i"])("div",F,[T,Object(c["i"])(R,{id:"tel",name:"電話",type:"tel",class:["form-control",{"is-invalid":a["電話"]}],placeholder:"請輸入電話",rules:"required|min:8|max:10",modelValue:K.form.user.tel,"onUpdate:modelValue":e[4]||(e[4]=function(t){return K.form.user.tel=t})},null,8,["class","modelValue"]),Object(c["i"])(W,{name:"電話",class:"invalid-feedback"})]),Object(c["i"])("div",D,[J,Object(c["i"])(R,{id:"address",name:"地址",type:"text",class:["form-control",{"is-invalid":a["地址"]}],placeholder:"請輸入地址",rules:"required",modelValue:K.form.user.address,"onUpdate:modelValue":e[5]||(e[5]=function(t){return K.form.user.address=t})},null,8,["class","modelValue"]),Object(c["i"])(W,{name:"地址",class:"invalid-feedback"})]),Object(c["i"])("div",M,[Q,Object(c["Q"])(Object(c["i"])("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":e[6]||(e[6]=function(t){return K.form.message=t})},"\n          ",512),[[c["L"],K.form.message]])]),z]})),_:1},8,["onSubmit"])])])}a("99af");var K={data:function(){return{loadingStatus:{loadingItem:""},products:[],product:{},cart:{},isLoading:!1,form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{getProducts:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("lj787448952","/products");this.isLoading=!0,this.$http.get(e).then((function(e){console.log(e),t.products=e.data.products,t.isLoading=!1})).catch((function(t){console.log(t),alert("you fail")}))},getProduct:function(t){this.$router.push("/admin/product/".concat(t)),console.log(t)},addToCart:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("lj787448952","/cart ");console.log(t),this.loadingStatus.loadingItem=t,console.log(this.loadingStatus.loadingItem);var n={product_id:t,qty:a};this.$http.post(c,{data:n}).then((function(t){t.data.success?(alert(t.data.message),e.loadingStatus.loadingItem="",e.getCart()):alert(t.data.message)}))},getCart:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("lj787448952","/cart/");this.$http.get(e).then((function(e){e.data.success?t.cart=e.data.data:alert(e.data.message)}))},deleteAllCarts:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("lj787448952","/carts");this.$http.delete(e).then((function(e){e.data.success?(console.log(e),alert(e.data.message),t.getCart()):alert(e.data.message)}))},removeCartItem:function(t){var e=this;this.loadingStatus.loadingItem=t;var a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("lj787448952","/cart/").concat(t);this.isLoading=!0,console.log(t),this.$http.delete(a).then((function(t){console.log(t),t.data.success&&(alert(t.data.message),e.getCart())})).catch((function(t){console.dir(t),alert(t.data.message)}))},updateCart:function(t){var e=this;this.isLoading=!0;var a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("lj787448952","/cart/").concat(t.id),c={product_id:t.product_id,qty:t.qty};this.$http.put(a,{data:c}).then((function(t){t.data.success?(alert(t.data.message),e.isLoading=!1,e.getCart()):(alert(t.data.message),e.isLoading=!1)}))},creatOrder:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("lj787448952","/order"),a=this.form;this.$http.post(e,{data:a}).then((function(e){console.log(e),e.data.success?(alert(e.data.message),t.$router.push("/admin/checkout/".concat(e.data.orderId))):console.log(e),t.isLoading=!1,t.$refs.form.resetForm()}))}},created:function(){this.getProducts(),this.getCart()}};K.render=H;e["default"]=K},8418:function(t,e,a){"use strict";var c=a("c04e"),n=a("9bf2"),i=a("5c6c");t.exports=function(t,e,a){var l=c(e);l in t?n.f(t,l,i(0,a)):t[l]=a}},"99af":function(t,e,a){"use strict";var c=a("23e7"),n=a("d039"),i=a("e8b5"),l=a("861d"),o=a("7b0b"),s=a("50c4"),r=a("8418"),d=a("65f0"),u=a("1dde"),b=a("b622"),j=a("2d00"),m=b("isConcatSpreadable"),f=9007199254740991,O="Maximum allowed index exceeded",p=j>=51||!n((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),h=u("concat"),g=function(t){if(!l(t))return!1;var e=t[m];return void 0!==e?!!e:i(t)},v=!p||!h;c({target:"Array",proto:!0,forced:v},{concat:function(t){var e,a,c,n,i,l=o(this),u=d(l,0),b=0;for(e=-1,c=arguments.length;e<c;e++)if(i=-1===e?l:arguments[e],g(i)){if(n=s(i.length),b+n>f)throw TypeError(O);for(a=0;a<n;a++,b++)a in i&&r(u,b,i[a])}else{if(b>=f)throw TypeError(O);r(u,b++,i)}return u.length=b,u}})},b0c0:function(t,e,a){var c=a("83ab"),n=a("9bf2").f,i=Function.prototype,l=i.toString,o=/^\s*function ([^ (]*)/,s="name";c&&!(s in i)&&n(i,s,{configurable:!0,get:function(){try{return l.call(this).match(o)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-5a557b24.a47f7b2a.js.map