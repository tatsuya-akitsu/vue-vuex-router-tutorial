<template>
  <h2 class="a-page_title">{{ title }}</h2>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
