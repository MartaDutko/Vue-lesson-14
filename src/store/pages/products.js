import { listProducts } from "@/data/productsList";
export default ({
  namespaced: true,
  state: {
    listProducts: [],
    searchValue: null
  },
  getters: {
    getSearchValue: state => state.searchValue,
    getFilteredListProducts: (state) => {
      if (!state.searchValue) {
        return state.listProducts
      }
      else {
        return state.listProducts.filter(product =>
          product.title.toLowerCase().includes(state.searchValue.toLowerCase())
        )
      }
    }
  },
  mutations: {
    loadProductsList(state, list) {
      state.listProducts = list
    },
    searchValue(state, val) {
      state.searchValue = val
    },
    addProduct(state,productObj){
      state.listProducts.push(productObj)
    }
  },
  actions: {
    loadProductsList({ commit }) {
      commit('loadProductsList', listProducts)
    },
    setSearchValue({ commit }, val) {
      commit('searchValue', val)
    },
    addProduct({commit},productObj){
      commit('addProduct',{
        id:Date.now(),
        ...productObj
      })
    }
  },
  modules: {},
});
