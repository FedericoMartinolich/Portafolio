import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Writing from "../views/Writing.vue";
import Notes from "../views/Notes.vue";
import ProjectDetail from "../views/ProjectDetail.vue";

const routes = [
    {
        path: '/',
        redirect: '/home', // 👈 redirect root to Home page
        component: Home,
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
    },
    {
        path: '/writing',
        name: 'Writing',
        component: Writing,
    },
    {
        path: '/notes',
        name: 'Notes',
        component: Notes,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/projects/:id',
        component: ProjectDetail,
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router