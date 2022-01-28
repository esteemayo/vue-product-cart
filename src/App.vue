<template>
  <Navbar />
  <router-view />
  <teleport to="body">
    <Sidebar v-if="showSidebar" />
  </teleport>
</template>

<script>
import { mapGetters } from 'vuex';

import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Sidebar,
  },
  computed: mapGetters(['showSidebar']),
};
</script>

<style></style>
