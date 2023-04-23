import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: "/", name:"home", component: () => import('@/views/HomeView.vue')},
    { path: "/about", name:"about", component: () => import('@/views/AboutView.vue')},
    { path: "/list", name:"list", component: () => import('@/views/ListView.vue')}
]

const router = createRouter({
    routes,
    history : createWebHistory(),
})

export default router;
