<template>
  <section class="c-todo_add_template">
    <app-page-title :title="labels.pages.add"></app-page-title>
    <todo-add-components
      :labels="labels.todo"
      :todo="todo.todo"
      :text="labels.buttons">
    </todo-add-components>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import AppPageTitle from '../../../atoms/AppPageTitle.vue';
import TodoAddComponents from '../../components/add/index.vue';

export default {
  name: 'TodoAdd',
  components: {
    AppPageTitle,
    TodoAddComponents,
  },
  computed: {
    ...mapGetters('global', {
      labels: 'getInitLabels',
      todo: 'getStateTodo',
    }),
  },
};
</script>
