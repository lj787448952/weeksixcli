(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2fc86c9c"],{"14e5":function(t,e,n){"use strict";n("2b2c")},1999:function(t,e,n){"use strict";var a=function(t){return{all:t=t||new Map,on:function(e,n){var a=t.get(e);a?a.push(n):t.set(e,[n])},off:function(e,n){var a=t.get(e);a&&(n?a.splice(a.indexOf(n)>>>0,1):t.set(e,[]))},emit:function(e,n){var a=t.get(e);a&&a.slice().map((function(t){t(n)})),(a=t.get("*"))&&a.slice().map((function(t){t(e,n)}))}}},c=a();e["a"]=c},"1dde":function(t,e,n){var a=n("d039"),c=n("b622"),i=n("2d00"),r=c("species");t.exports=function(t){return i>=51||!a((function(){var e=[],n=e.constructor={};return n[r]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"2b2c":function(t,e,n){},8418:function(t,e,n){"use strict";var a=n("c04e"),c=n("9bf2"),i=n("5c6c");t.exports=function(t,e,n){var r=a(e);r in t?c.f(t,r,i(0,n)):t[r]=n}},"99af":function(t,e,n){"use strict";var a=n("23e7"),c=n("d039"),i=n("e8b5"),r=n("861d"),o=n("7b0b"),s=n("50c4"),l=n("8418"),u=n("65f0"),b=n("1dde"),f=n("b622"),d=n("2d00"),v=f("isConcatSpreadable"),j=9007199254740991,O="Maximum allowed index exceeded",p=d>=51||!c((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),h=b("concat"),g=function(t){if(!r(t))return!1;var e=t[v];return void 0!==e?!!e:i(t)},m=!p||!h;a({target:"Array",proto:!0,forced:m},{concat:function(t){var e,n,a,c,i,r=o(this),b=u(r,0),f=0;for(e=-1,a=arguments.length;e<a;e++)if(i=-1===e?r:arguments[e],g(i)){if(c=s(i.length),f+c>j)throw TypeError(O);for(n=0;n<c;n++,f++)n in i&&l(b,f,i[n])}else{if(f>=j)throw TypeError(O);l(b,f++,i)}return b.length=f,b}})},bb51:function(t,e,n){"use strict";n.r(e);var a=n("7a23");function c(t,e,n,c,i,r){var o=Object(a["D"])("Navbar");return Object(a["u"])(),Object(a["e"])(o)}var i={class:"bg-white sticky-top"},r={class:"container"},o={class:"navbar px-0 navbar-expand-lg navbar-light bg-white"},s=Object(a["h"])(" Home"),l=Object(a["i"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(a["i"])("span",{class:"navbar-toggler-icon"})],-1),u={class:"collapse navbar-collapse bg-white custom-header-md-open",id:"navbarNav"},b={class:"navbar-nav"},f={class:"nav-item d-sm-block d-md-none"},d=Object(a["h"])("Home"),v={class:"nav-item active"},j=Object(a["h"])("產品列表"),O={class:"nav-item"},p=Object(a["h"])("購物車"),h={class:"nav-item"},g=Object(a["h"])("後台"),m={class:"nav-item"},w=Object(a["h"])("登入"),x={class:"d-flex position-relative"},k={href:"#"},y=Object(a["i"])("i",{class:"bi bi-cart-fill",style:{"font-size":"2rem",color:"#000"}},null,-1),P={key:0,class:"rounded-pill bg-danger text-white position-absolute px-1",style:{right:"1px",top:"1px"}};function _(t,e,n,c,_,N){var C=Object(a["D"])("router-link"),D=Object(a["D"])("router-view");return Object(a["u"])(),Object(a["e"])(a["a"],null,[Object(a["i"])("div",i,[Object(a["i"])("div",r,[Object(a["i"])("nav",o,[Object(a["i"])(C,{class:"navbar-brand position-absolute d-sm-none d-md-block d-none",style:{left:"50%",transform:"translate(-50%, -50%)",top:"50%"},to:"/"},{default:Object(a["P"])((function(){return[s]})),_:1}),l,Object(a["i"])("div",u,[Object(a["i"])("ul",b,[Object(a["i"])("li",f,[Object(a["i"])(C,{class:"nav-link ps-0",to:"/"},{default:Object(a["P"])((function(){return[d]})),_:1})]),Object(a["i"])("li",v,[Object(a["i"])(C,{class:"nav-link ps-0",to:"/products"},{default:Object(a["P"])((function(){return[j]})),_:1})]),Object(a["i"])("li",O,[Object(a["i"])(C,{class:"nav-link",to:"/cart"},{default:Object(a["P"])((function(){return[p]})),_:1})]),Object(a["i"])("li",h,[Object(a["i"])(C,{class:"nav-link",to:"/admin"},{default:Object(a["P"])((function(){return[g]})),_:1})]),Object(a["i"])("li",m,[Object(a["i"])(C,{class:"nav-link",to:"/login"},{default:Object(a["P"])((function(){return[w]})),_:1})])])]),Object(a["i"])("div",x,[Object(a["i"])("a",k,[y,_.cart.carts?(Object(a["u"])(),Object(a["e"])("div",P,Object(a["G"])(_.cart.carts.length),1)):Object(a["f"])("",!0)])])])])]),Object(a["i"])(D)],64)}n("99af");var N=n("1999"),C={data:function(){return{cart:{carts:{}}}},methods:{getCart:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("lj787448952","/cart");this.$http.get(e).then((function(e){console.log(e),t.cart=e.data.data}))}},mounted:function(){var t=this;this.getCart(),N["a"].on("update-cart",(function(){t.getCart()}))}};C.render=_;var D=C,H={name:"Home",data:function(){return{}},components:{Navbar:D}};n("14e5");H.render=c;e["default"]=H}}]);
//# sourceMappingURL=chunk-2fc86c9c.b1c1af17.js.map