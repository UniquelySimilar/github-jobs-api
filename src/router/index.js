import Vue from "vue";
import VueRouter from "vue-router";
import JobPage from "../components/JobPage.vue";
import Home from "../views/Home.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/jobpage",
    name: "JobPage",
    component: JobPage,
    props: true
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
