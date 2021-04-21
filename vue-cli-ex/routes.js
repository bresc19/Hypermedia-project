import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from "./src/pages/HomePage";
import PostListPage from "./src/pages/PostListPage";


Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [
        {
            path: "/",
            component: HomePage
        },
        {
            path: "/posts",
            component: PostListPage
        }

    ]
})