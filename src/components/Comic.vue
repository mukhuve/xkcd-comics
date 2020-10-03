<template>
  <div class="host d-flex flex-column align-center">
    <div class="comic-info text-center mb-2">
      <h1
        class="comic-title text-sm-h4 text-h5 font-weight-bold"
        transition="slide-x-transition"
      >
        {{ comic.title || '' }}
      </h1>
      <span class="comic-date" small v-if="comic.date">
        {{ comic.date | moment('dddd, MMMM Do YYYY') }}
      </span>
    </div>
    <vue-photo-zoom-pro
      class="comic-image elevation-6"
      transition="slide-x-transition"
      :type="'square'"
      :url="comic.image"
      :scale="1.6"
      :out-zoomer="false"
      :mask="false"
    ></vue-photo-zoom-pro>
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
.host {
  width: 100%;
  .comic-image {
    border-radius: 4px;
    max-width: 93vw;
    overflow: hidden;
  }
}
.theme--dark .comic-image {
  filter: invert(0.86);
}
</style>
