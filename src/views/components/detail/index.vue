<template>
  <div class="o-todo_detail_area">
    <h2 class="o-todo_detail_title">{{ detail.title }}</h2>
    <p class="o-todo_detail_timestamp">{{ detail.date }}</p>
    <p class="o-todo_detail_comment">{{ detail.comment }}</p>
    <p class="o-todo_detail_priority">{{ detail.priority.label }}</p>
    <router-link :to="{ path: `/edit/${detail.id}`, params: { id: detail.id } }">{{ labels.edit }}</router-link>
  </div>
</template>

<script>
export default {
  props: {
    detail: {
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
