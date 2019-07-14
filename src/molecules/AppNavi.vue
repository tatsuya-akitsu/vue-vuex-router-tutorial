<template>
  <nav class="m-navi_area">
    <router-link to="/">{{ labels.name }}</router-link>
    <ul class="m-navi_list">
      <app-navi-item
        v-for="(label, i) in labels.navi"
        :key="i"
        :label="label.title"
      ></app-navi-item>
    </ul>
    <router-link to="/add">{{ labels.buttons.post }}</router-link>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';
import AppNaviItem from '../atoms/AppNaviItem.vue';

export default {
  components: {
    AppNaviItem,
  },
  computed: {
    ...mapGetters('global', {
      labels: 'getNavi',
    }),
  },
};
</script>
