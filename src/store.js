import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {},
  actions: {},
  getters: {
    todoStorage(state) {
      return state.todos;
    }
  }
});
