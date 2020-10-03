<template>
  <v-container class="host d-flex flex-column align-center">
    <Comic v-if="comic" :comic="comic" />
    <v-progress-circular
      v-else
      indeterminate
      color="acent"
    ></v-progress-circular>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { mapState } from 'vuex';
import Comic from '../components/Comic.vue';

@Component({
  computed: { ...mapState(['comic']) },
  components: { Comic },
})
export default class Home extends Vue {
  @Watch('$route', { immediate: true, deep: true })
  onUrlChange() {
    const { id } = this.$route.params;
    const { last } = this.$store.state;
    if (!id || (id && isNaN(+id)))
      this.$router.push({ path: `/${Math.round(Math.random() * last)}` });
    else this.$store.dispatch('load', id);
  }
}
</script>
<style lang="scss" scoped>
.host {
  flex: 1 0;
}
</style>
