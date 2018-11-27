import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced : true,
  state: {
    dot:{
          num : null,
          mainCity : null,
          inDay : null,
          outDay :null,
          url: null,
          checkList:{
            id:null,
            title :null,
            action : null
          },
      }

  },
  getters:{
    getResponse: state => {
      return state.dot;
    }

  }, 
  mutations: {
    // setPartialResponse: (state, payload) => {
    //   let keys = Object.keys(payload);
    //   for (let i = 0; i < keys.length; i++) {
    //     let key = keys[i];
    //     state.dot[key] = payload[key];
    //   }
    // },
    // setCheckList: (state, payload) => {
    //   let keys = Object.keys(payload);
    //   for (let i = 0; i < keys.length; i++) {
    //     state.dot.CheckList[keys[i]] = payload[keys[i]];
    //   }
    // }
  },
  actions: {
    // setPartialResponse: ({ commit }, payload) => {
    //   commit("setPartialResponse", payload);
    // },
    // setCheckList: ({ commit }, payload) => {
    //   commit("setCheckList", payload);
    // }
  }
})
