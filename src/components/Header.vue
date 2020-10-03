<template>
  <div class="host b-glass">
    <v-app-bar flat dense color="transparent">
      <router-link to="/">
        <h2>
          XKCD <span v-if="id">#{{ id }}</span>
        </h2>
      </router-link>
      <v-spacer></v-spacer>
      <v-btn
        icon
        class="theme-switch"
        @click="$vuetify.theme.dark = !$vuetify.theme.dark"
      >
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
      <v-btn icon to="/about">
        <v-icon>mdi-information-variant</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Header extends Vue {
  get id() {
    if (this.$route.path === '/about') return undefined;
    return this.$store?.state?.comic?.id;
  }
}
</script>
<style scoped lang="scss">
.host {
  top: 0;
  z-index: 600;
  position: sticky;
  border-bottom: 1px solid var(--v-secondary-lighten4);
  h2 {
    font-family: 'Major Mono Display', Roboto, sans-serif;
  }
}
.theme--dark .host {
  border-bottom: 1px solid var(--v-secondary-darken4);
}
</style>
