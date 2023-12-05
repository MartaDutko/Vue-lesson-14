import { createStore } from "vuex";
import products from "@/store/pages/products";
import suppliers from "@/store/pages/suppliers";
import profileInfo from "@/store/pages/profileInfo";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    products,
    suppliers,
    profileInfo
  },
});
