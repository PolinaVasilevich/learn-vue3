import Main from "@/pages/Main";
import PostPage from "@/pages/PostPage";
import PostIdPage from "@/pages/PostIdPage";
import About from "@/pages/About";
import PostPageWithStore from "@/pages/PostPageWithStore";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/posts",
    component: PostPage,
  },

  {
    path: "/posts/:id",
    component: PostIdPage,
  },

  {
    path: "/about",
    component: About,
  },

  {
    path: "/posts-store",
    component: PostPageWithStore,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
