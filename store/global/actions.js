import T from './types';

const actions = {
  [T.STATE_POST_TODO]({ commit }) {
    commit(T.STATE_POST_TODO);
  },
  [T.STATE_POST_TODO_TITLE]({ commit }, val) {
    commit(T.STATE_POST_TODO_TITLE, val);
  },
  [T.STATE_POST_TODO_DATE]({ commit }, val) {
    commit(T.STATE_POST_TODO_DATE, val);
  },
  [T.STATE_POST_TODO_COMMENT]({ commit }, val) {
    commit(T.STATE_POST_TODO_COMMENT, val);
  },
  [T.STATE_POST_TODO_PRIORITY]({ commit }, obj) {
    commit(T.STATE_POST_TODO_PRIORITY, obj);
  },
  [T.STATE_GET_TODO_DETAIL]({ commit }, id) {
    commit(T.STATE_GET_TODO_DETAIL, id);
  },
  [T.STATE_REMOVE_TODO]({ commit }, id) {
    commit(T.STATE_REMOVE_TODO, id);
  },
  [T.STATE_EDIT_TODO]({ commit }, id) {
    commit(T.STATE_EDIT_TODO, id);
  },
};

export default actions;
