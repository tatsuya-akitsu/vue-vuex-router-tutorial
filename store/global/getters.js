const getters = {
  getInitLabels(state) {
    return state.labels;
  },
  getNavi(state) {
    const labels = {
      navi: [],
      buttons: {},
      name: '',
    };
    labels.navi = state.labels.navi.navi;
    labels.buttons = state.labels.navi.buttons;
    labels.name = state.serviceName;
    return labels;
  },
  getStateTodo(state) {
    const todo = {};
    todo.data = state.todo.data;
    todo.todo = state.todo.todo;
    todo.notFoundMessage = state.todo.notFoundMessage;
    todo.isNotFound = state.todo.data.length === 0;
    return todo;
  },
  getStateTodoDetail(state) {
    return state.todo.body;
  },
};

export default getters;
