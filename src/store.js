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
    todoAll(state) {
      return state.todos;
    },
    todoUndone(state) {
      return state.todos.filter(todo => !todo.done);
    },
    todoDone(state) {
      return state.todos.filter(todo => todo.done);
    }
  }
});
