import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from "./src/pages/HomePage";
import PostListPage from "./src/pages/PostListPage";
import BlogPostFull from "./src/pages/BlogPostFull";


Vue.use(VueRouter);

export const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            component: HomePage
        },
        {
            path: "/posts",
            component: PostListPage
        },

        {
            path: "/posts/:id",
            component: BlogPostFull
        }

    ]
})