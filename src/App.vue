<template>
  <v-app>
    <Header />
    <v-main>
      <router-view></router-view>
    </v-main>
    <Toolbar />
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
});
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap');
body {
  * {
    color: var(--v-secondary-lighten1);
  }
  .b-glass {
    backdrop-filter: blur(22px);
    background: #f3f4f766;
  }
  .theme--dark {
    .b-glass {
      background: #2d314288;
    }
  }
}
</style>
