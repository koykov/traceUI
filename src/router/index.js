import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [
        {
            name: 'home',
            path: '/',
            component: () => import("@/views/ViewHome"),
        },
        {
            name: 'view',
            path: '/view/:id/:sid',
            component: () => import("@/views/ViewTrace"),
            props: true
        },
        {
            name: 'view',
            path: '/view/:id',
            component: () => import("@/views/ViewTrace"),
            props: true
        },
        {
            name: 'dl',
            path: '/dl/:id',
            component: () => import("@/views/ViewTrace"),
            props: true
        }
    ]
});
