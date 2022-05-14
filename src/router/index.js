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
            path: '/r/:id/:vid/:gid/:rid',
            component: () => import("@/views/ViewRecord"),
            props: true
        },
        {
            name: 'stage',
            path: '/g/:id/:vid/:gid',
            component: () => import("@/views/ViewTrace"),
            props: true
        },
        {
            name: 'service',
            path: '/v/:id/:vid',
            component: () => import("@/views/ViewTrace"),
            props: true
        },
        {
            name: 'trace',
            path: '/t/:id',
            component: () => import("@/views/ViewTrace"),
            props: true
        },
        {
            name: 'dl',
            path: '/d/:id',
            component: () => import("@/views/ViewTrace"),
            props: true
        }
    ]
});
