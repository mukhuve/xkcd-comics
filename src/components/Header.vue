<template>
  <div class="host b-glass">
    <v-app-bar flat dense color="transparent">
      <h2>
        XKCD <span>#{{ id }}</span>
      </h2>
      <v-spacer></v-spacer>
      <v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-information-variant</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';

@Component({
  computed: mapState({
    id: (state: any) => state?.comic?.id,
  }),
})
export default class Header extends Vue {}
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
