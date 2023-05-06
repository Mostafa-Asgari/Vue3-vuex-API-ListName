import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      {title: 'Javascript-Nuxt3-Vue3', complete: false}
    ]
  },
  getters: {

  },
  mutations: {
    ADD_TODO(state, todo){
      state.todos.push({
        title: todo,
        complete: false
      })
    },
    DEL_TODO(state, td){
      let index = state.todos.indexOf(td)
      state.todos.splice(index, 1)
    },
    TOGGLE_TODO(state, todo){
      todo.complete = !todo.complete
    }
  },
  actions: {
    add_todo({commit}, todo){
      commit('ADD_TODO', todo)
    },
    toggle_todo({commit}, todo){
      commit('TOGGLE_TODO', todo)
    },
  },
  modules: {
  }
})
