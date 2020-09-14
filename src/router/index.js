import Vue from "vue";
import VueRouter from "vue-router";
import ShowDashboard from '@/views/ShowDashboard.vue';
import ShowDetails from '@/views/ShowDetails.vue';
import SearchShow from '@/views/SearchShow.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ShowDashboard",
    component: ShowDashboard
  },
  {
    path: "/detail/:id",
    name: "ShowDetails",
    component: ShowDetails
},
{
  path: "/search",
  name: "SearchShow",
  component: SearchShow
},
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
