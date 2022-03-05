import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [
        {
            name: 'home',
            path: '/',
            component: () => import("@/App"),
        },
        {
            name: 'trace',
            path: '/trace/:id',
            component: () => import("@/components/ViewTrace"),
            props: true
        }
    ]
});
