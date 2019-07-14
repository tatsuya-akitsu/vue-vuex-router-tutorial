<template>
  <div class="o-todo_list_area">
    <template v-if="!todo.isNotFound">
      <todo-list :todos="todo.data" :labels="labels"></todo-list>
    </template>
    <template v-else-if="todo.isNotFound">
      <p class="o-todo_not_found_message">{{ todo.notFoundMessage }}</p>
    </template>
  </div>
</template>

<script>
import TodoList from '../../../molecules/TodoList.vue';

export default {
  components: {
    TodoList,
  },
  props: {
    todo: {
      type: Object,
      required: true,
    },
    labels: {
      type: Object,
      required: true,
    },
  },
};
</script>
