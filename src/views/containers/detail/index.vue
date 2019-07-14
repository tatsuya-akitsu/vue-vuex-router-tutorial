<template>
  <section class="c-todo_detail_template">
    <app-page-title :title="labels.pages.detail"></app-page-title>
    <todo-detail-area :detail="detail" :labels="labels.buttons"></todo-detail-area>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import AppPageTitle from '../../../atoms/AppPageTitle.vue';
import TodoDetailArea from '../../components/detail/index.vue';
import T from '../../../../store/global/types';

export default {
  components: {
    AppPageTitle,
    TodoDetailArea,
  },
  computed: {
    ...mapGetters('global', {
      labels: 'getInitLabels',
      detail: 'getStateTodoDetail',
    }),
  },
  mounted() {
    this.$store.dispatch(`global/${T.STATE_GET_TODO_DETAIL}`, this.$route.params.id);
  },
};
</script>
