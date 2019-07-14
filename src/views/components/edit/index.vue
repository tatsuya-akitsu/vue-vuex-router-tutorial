<template>
  <div class="o-todo_edit_area">
    <div class="o-todo_edit_box">
      <label>{{ labels.todo.labels.title }}</label>
      <input type="text" :placeholder="labels.todo.placeholders.title" v-model="title">
    </div>
    <div class="o-todo_edit_box">
      <label>{{ labels.todo.labels.date }}</label>
      <flat-pickr v-model="date" name="date" :config="config"></flat-pickr>
    </div>
    <div class="o-todo_edit_box">
      <label>{{ labels.todo.labels.comment }}</label>
      <textarea :placeholder="labels.todo.placeholders.comment" v-model="comment"></textarea>
    </div>
    <div class="o-todo_edit_box">
      <label>{{ labels.todo.labels.priority }}</label>
      <select v-model="priority">
        <option
          v-for="(option, i) in labels.priorities"
          :key="i"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>
    </div>
    <app-button @child-event="addTodo" :label="labels.buttons.edit"></app-button>
  </div>
</template>

<script>
import flatPickr from 'vue-flatpickr-component';
import { Japanese } from 'flatpickr/dist/l10n/ja';
import 'flatpickr/dist/flatpickr.css';
import moment from 'moment';
import AppButton from '../../../atoms/AppButton.vue';
import T from '../../../../store/global/types';

export default {
  components: {
    flatPickr,
    AppButton,
  },
  props: {
    labels: {
      type: Object,
      required: true,
    },
    todo: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    config: {
      locale: Japanese,
      static: true,
      altInput: true,
      altFormat: 'n/j(D)',
      minDate: 'today',
      maxDate: moment().add(2, 'months').endOf('month').format('YYYY-MM-DD'),
    },
  }),
  computed: {
    title: {
      get() { return this.$props.todo.title; },
      set(val) { this.$store.dispatch(`global/${T.STATE_POST_TODO_TITLE}`, val); },
    },
    date: {
      get() { return this.$props.todo.date; },
      set(val) { this.$store.dispatch(`global/${T.STATE_POST_TODO_DATE}`, val); },
    },
    comment: {
      get() { return this.$props.todo.comment; },
      set(val) { this.$store.dispatch(`global/${T.STATE_POST_TODO_COMMENT}`, val); },
    },
    priority: {
      get() { return this.$props.labels.todo.priorities; },
      set(val) {
        const obj = {
          label: '',
          value: '',
        };
        if (val === 'high') {
          obj.label = '高';
        } else if (val === 'middle') {
          obj.label = '中';
        } else {
          obj.label = '低';
        }
        obj.value = val;
        this.$store.dispatch(`global/${T.STATE_POST_TODO_PRIORITY}`, obj);
      },
    },
  },
  methods: {
    addTodo() {
      this.$store.dispatch(`global/${T.STATE_EDIT_TODO}`, this.$props.todo.id);
    },
  },
};
</script>
