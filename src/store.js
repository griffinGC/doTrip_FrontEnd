import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced : true,
  state: {
    dot:{
          mainCity : null,
          inDay :null,
          outDay :null,
          url:null,
          checkList:{
            id:0,
            title :null,
            action :null
          },
        }

  },
  getters:{
    getResponse: state => {
      return state.dot;
    }

  }, 
  mutations: {
    setPartialResponse: (state, payload) => {
      let keys = Object.keys(payload);
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        state.dot[key] = payload[key];
      }
    }
  },
  actions: {
    setPartialResponse: ({ commit }, payload) => {
      commit("setPartialResponse", payload);
    }
  }
})
