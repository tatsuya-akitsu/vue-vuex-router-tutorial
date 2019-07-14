<template>
  <button type="button" @click="handleEvent">{{ label }}</button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleEvent() {
      this.$emit('child-event');
    },
  },
};
</script>
