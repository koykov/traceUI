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
            name: 'view',
            path: '/view/:id',
            component: () => import("@/components/ViewTrace"),
            props: true
        },
        {
            name: 'dl',
            path: '/dl/:id',
            component: () => import("@/components/ViewTrace"),
            props: true
        }
    ]
});
