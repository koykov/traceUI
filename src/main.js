import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueFlex from "vue-flex";
import App from './App.vue'
import router from "./router";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(VueFlex);

new Vue({
    router,
    // store,
    render: h => h(App)
}).$mount("#app");
