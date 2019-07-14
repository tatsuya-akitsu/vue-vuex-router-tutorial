<template>
  <li class="a-navi_item">{{ label }}</li>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
  },
};
</script>
