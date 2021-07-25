import { createApp } from "vue";
import 'bootstrap';
import axios from "axios";
import VueAxios from 'vue-axios';
import App from "./App.vue";
import router from "./router";

import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

import {
  Form, Field, ErrorMessage, defineRule, configure,
} from 'vee-validate'
import AllRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});

setLocale('zh_TW');
//   這一段是因為無法強制設定啟用


const app = createApp(App);
app.use(router);
app.use(VueAxios, axios);
app.component('Loading', Loading);
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);
// 以上為註冊元件 要在creatapp 跟 mounted  中間癌註冊
app.mount('#app');
