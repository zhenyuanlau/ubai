import { createRouter, createWebHistory } from "vue-router";
import EventList from "@/views/event/Index.vue";

const routes = [{ path: "/", component: EventList }];

export default () =>
  createRouter({
    history: createWebHistory(),
    routes,
  });
