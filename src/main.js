import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import VueFlex from "vue-flex";
import App from "./App";

Vue.use(BootstrapVue);
Vue.use(VueFlex);

new Vue({
    el: "#app",
    render: h => h(App)
});
