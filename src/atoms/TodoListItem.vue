<template>
  <li class="a-todo_list_item">
    <router-link :to="{ path: `/detail/${todo.id}`, params: { id: todo.id } }">
      <div class="a-todo_timestamp_box">
        <p class="a-todo_list_day">{{ day }}</p>
        <p class="a-todo_list_month">{{ month }}</p>
      </div>
      <div class="a-todo_list_body">
        <p class="a-todo_list_title">{{ todo.title }}</p>
        <p class="a-todo_list_priority">{{ todo.priority.label }}</p>
      </div>
    </router-link>
    <button type="button" @click="removeTodo(todo.id)">{{ labels.remove }}</button>
  </li>
</template>

<script>
import T from '../../store/global/types';

export default {
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
  data: () => ({
    day: '',
    month: '',
  }),
  mounted() {
    const date = this.$props.todo.date.split('-');
    this.day = date[2];
    this.month = date[1];
  },
  methods: {
    removeTodo(id) {
      this.$store.dispatch(`global/${T.STATE_REMOVE_TODO}`, id);
    },
  },
};
</script>
