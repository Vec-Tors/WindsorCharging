import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
  ],
});

export default router;

interface apiSend {
  //lat long
  coordinates: [number, number];
  chargerType: Array<
    | "NEMA1450"
    | "NEMA515"
    | "NEMA520"
    | "J1772"
    | "J1772COMBO"
    | "CHADEMO"
    | "TESLA"
  >;
  chargeLevel: Array<1 | 2 | "dc_fast" | "legacy">;
}
