import { listProfielImg } from "@/data/profielInfoList";
export default({
  namespaced: true,
  state: {
    listInfo:[]
  },
  getters: {
    getListInfo:({listInfo})=>listInfo
  },
  mutations: {
    loadListInfo(state,list){
      state.listInfo=list
    }
  },
  actions: {
    loadListInfo({commit}){
      commit('loadListInfo',listProfielImg)
    }
  },
  modules: {},
});
