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
            name: 'record',
            path: '/record/:id/:sid/:rid',
            component: () => import("@/views/ViewRecord"),
            props: true
        },
        {
            name: 'service',
            path: '/service/:id/:sid',
            component: () => import("@/views/ViewTrace"),
            props: true
        },
        {
            name: 'trace',
            path: '/trace/:id',
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
