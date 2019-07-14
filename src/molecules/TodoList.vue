<template>
  <ul class="m-todo_list">
    <todo-list-item
      v-for='(todo, index) in todos'
      :key="index"
      :todo='todo'
      :labels="labels"
    ></todo-list-item>
  </ul>
</template>

<script>
import TodoListItem from '../atoms/TodoListItem.vue';

export default {
  components: {
    TodoListItem,
  },
  props: {
    todos: {
      type: Array,
      required: true,
    },
    labels: {
      type: Object,
      required: true,
    },
  },
};
</script>
