import {listProducts }from "@/data/suppliersList";
export default({
  namespaced: true,
  state: {
    listSuppliers:[]
  },
  getters: {
    getListSuppliers:({listSuppliers})=>listSuppliers
  },
  mutations: {
    loadListSuppliers(state,list){
      state.listSuppliers=list
    }
  },
  actions: {
    loadListSuppliers({commit}){
      commit('loadListSuppliers',listProducts)
    }
  },
  modules: {},
});
