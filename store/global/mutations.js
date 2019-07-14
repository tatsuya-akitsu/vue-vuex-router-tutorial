import T from './types';

const mutations = {
  [T.STATE_POST_TODO](state) {
    const list = state.todo.data;
    let tId = 0;

    if (list.length !== 0) {
      tId = list[list.length - 1].id + 1;
    } else {
      tId = 0;
    }

    const todoObj = {
      id: tId,
      title: state.todo.todo.title,
      date: state.todo.todo.date,
      comment: state.todo.todo.comment,
      priority: state.todo.todo.priority,
    };

    state.todo.data.push(todoObj);
    const todo = {
      title: '',
      date: '',
      comment: '',
      priority: {},
    };
    state.todo.todo = todo;
  },
  [T.STATE_POST_TODO_TITLE](state, val) {
    state.todo.todo.title = val;
  },
  [T.STATE_POST_TODO_DATE](state, val) {
    state.todo.todo.date = val;
  },
  [T.STATE_POST_TODO_COMMENT](state, val) {
    state.todo.todo.comment = val;
  },
  [T.STATE_POST_TODO_PRIORITY](state, obj) {
    state.todo.todo.priority = obj;
  },
  [T.STATE_GET_TODO_DETAIL](state, id) {
    const list = state.todo.data;
    const tId = Number(id);
    const detail = list.filter(item => item.id === tId)[0];
    state.todo.body = detail;
  },
  [T.STATE_REMOVE_TODO](state, id) {
    const list = state.todo.data;
    const tId = Number(id);
    state.todo.data = list.filter(item => item.id !== tId);
  },
  [T.STATE_EDIT_TODO](state, id) {
    const list = state.todo.data;
    const tId = Number(id);
    const detail = list.filter(item => item.id === tId)[0];
    const newList = list.filter(item => item.id !== tId);
    detail.id = tId;
    detail.title = state.todo.todo.title;
    detail.date = state.todo.todo.date;
    detail.comment = state.todo.todo.comment;
    detail.priority = state.todo.todo.priority;

    newList.push(detail);
    console.log(newList);
    const todo = {
      title: '',
      date: '',
      comment: '',
      priority: {},
    };
    state.todo.data = newList;
    state.todo.todo = todo;
  },
};

export default mutations;
