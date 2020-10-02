<template>
  <div class="d-flex flex-column align-center">
    <h1
      class="text-center text-sm-h3 text-h4 font-weight-bold"
      transition="slide-x-transition"
    >
      {{ comic.title || '' }}
    </h1>
    <span small v-if="comic.date">
      {{ comic.date | moment('dddd, MMMM Do YYYY') }}
    </span>
    <v-img
      contain
      transition="slide-x-transition"
      class="comic-image"
      max-width="90vw"
      :src="comic.image || require('@/assets/404.svg')"
    >
    </v-img>
  </div>
</template>

<script lang="ts">
import { ComicModel } from '@/models/comic';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class Comic extends Vue {
  @Prop({ default: new ComicModel({}) })
  comic!: ComicModel;
}
</script>
<style scoped lang="scss">
.theme--dark .comic-image {
  filter: invert(0.86);
}
.comic-image {
  padding: 1rem 0;
}
</style>
