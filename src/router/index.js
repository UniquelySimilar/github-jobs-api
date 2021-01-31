import Vue from "vue";
import VueRouter from "vue-router";
import Jobs from '@/components/Jobs'
import JobPage from '@/components/JobPage'


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Jobs",
    component: Jobs,
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
