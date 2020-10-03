<template>
  <v-app>
    <Header />
    <v-main class="d-flex">
      <router-view></router-view>
    </v-main>
    <Toolbar v-if="$route.path !== '/about'" />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from './components/Header.vue';
import Toolbar from './components/Toolbar.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Header,
    Toolbar,
  },
  created() {
    this.$store.dispatch('loadLast');
  },
});
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap');
body {
  * {
    color: var(--v-secondary-lighten1);
  }
  .v-main__wrap {
    flex: 1 0;
    display: flex;
    flex-flow: column nowrap;
  }
  .b-glass {
    backdrop-filter: blur(12px);
    background: #f3f4f766;
  }
  .theme--dark {
    .b-glass {
      background: #2d314288;
    }
  }
  .photo-zoom-pro .container {
    padding: 0;
  }
}
</style>
