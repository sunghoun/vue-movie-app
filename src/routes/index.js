import { createRouter, createWebHashHistory } from "vue-router"
import Home from "./Home"
import Movie from "./Movie"
import About from "./About"
import NotFound from "./NotFound"

export default createRouter({
  // Hash
  history: createWebHashHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  // pages
  routes: [
    {
      path: "/", // https://google.com/
      name: "Home",
      component: Home,
    },
    {
      path: "/movie/:id",
      name: "Movie",
      component: Movie,
    },
    {
      path: "/about", // https://google.com/about
      name: "About",
      component: About,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
})
