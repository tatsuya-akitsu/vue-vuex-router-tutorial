<template>
  <section class="c-todo_edit_template">
    <app-page-title :title="labels.pages.edit"></app-page-title>
    <todo-edit-component :labels="labels" :todo="detail"></todo-edit-component>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import AppPageTitle from '../../../atoms/AppPageTitle.vue';
import TodoEditComponent from '../../components/edit/index.vue';
import T from '../../../../store/global/types';

export default {
  components: {
    AppPageTitle,
    TodoEditComponent,
  },
  computed: {
    ...mapGetters('global', {
      labels: 'getInitLabels',
      detail: 'getStateTodoDetail',
    }),
  },
  mounted() {
    console.log('hogehoge');
    this.$store.dispatch(`global/${T.STATE_GET_TODO_DETAIL}`, this.$route.params.id);
  },
};
</script>
