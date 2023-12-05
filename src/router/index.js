import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GoodsView from "@/views/GoodsView.vue";
import SuppliersView from "@/views/SuppliersView.vue";
import ContactsView from "@/views/ContactsView.vue";
import PurchaseRulesView from "@/views/PurchaseRulesView.vue";
import SearchView from "@/views/SearchView.vue";
import EditorView from "@/views/EditorView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/goods",
    name: "goods",
    component:GoodsView,
    children:[
      {
        path: "selector",
        name: "selector",
        component:SearchView,
      },
      {
        path: "editor",
        name: "editor",
        component:EditorView,
      },
    ]
  },
  {
    path: "/suppliers",
    name: "suppliers",
    component:SuppliersView,
  },
  {
    path: "/contacts",
    name: "contacts",
    component:ContactsView,
  },
  {
    path: "/purchase_rules",
    name: "purchase_rules",
    component:PurchaseRulesView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
