<template>
  <section class="c-todo_list_template">
    <app-page-title :title="labels.pages.home"></app-page-title>
    <todo-list-area :todo="todo" :labels="labels.buttons"></todo-list-area>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import AppPageTitle from '../../../atoms/AppPageTitle.vue';
import TodoListArea from '../../components/home/index.vue';

export default {
  name: 'Home',
  components: {
    AppPageTitle,
    TodoListArea,
  },
  computed: {
    ...mapGetters('global', {
      labels: 'getInitLabels',
      todo: 'getStateTodo',
    }),
  },
};
</script>
