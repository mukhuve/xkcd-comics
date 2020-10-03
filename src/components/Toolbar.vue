<template>
  <div class="host b-glass d-flex flex-column flex-sm-row" elevation="3">
    <star-rating
      class="mb-sm-0 mb-2"
      :inline="true"
      :show-rating="false"
      :increment="0.5"
      :star-size="30"
      :border-width="2"
      :rating="rating"
      v-bind:max-rating="6"
      inactive-color="#EF835422"
      active-color="#EF8354"
      @rating-selected="rate"
    ></star-rating>
    <v-spacer></v-spacer>
    <div class="controls d-flex align-center justify-center">
      <v-btn icon class="mr-1 ml-1" @click="navigateTo('first')">
        <v-icon size="36">mdi-skip-previous</v-icon>
      </v-btn>
      <v-btn icon class="mr-1 ml-1" @click="navigateTo('prev')">
        <v-icon size="36">mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn icon class="mr-1 ml-1" @click="navigateTo('random')">
        <v-icon size="36">mdi-shuffle-variant</v-icon>
      </v-btn>
      <v-btn icon class="mr-1 ml-1" @click="navigateTo('next')">
        <v-icon size="36">mdi-chevron-right</v-icon>
      </v-btn>
      <v-btn icon class="mr-1 ml-1" @click="navigateTo('last')">
        <v-icon size="36">mdi-skip-next</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { ComicModel } from '@/models/comic';
import { LoadCommand } from '@/store/types';
import { Component, Vue } from 'vue-property-decorator';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import StarRating from 'vue-star-rating';
import { mapActions, mapState } from 'vuex';

@Component({
  components: { StarRating },
  computed: mapState({
    comic: 'comic' as any,
    rating: ({ ratings = {}, comic = {} }: any) => +ratings[comic.id],
  }),
  methods: mapActions(['rate']),
})
export default class Toolbar extends Vue {
  async navigateTo(command: LoadCommand = 'random') {
    const { comic = new ComicModel(), last = 0 } = this.$store.state || {};
    let id = 0;
    switch (command) {
      case 'first':
        id = 1;
        break;
      case 'prev':
        id = comic.id - 1;
        break;
      case 'next':
        id = comic.id + 1;
        break;
      case 'last':
        id = last;
        break;
      case 'random':
        id = Math.round(Math.random() * last);
        break;
    }
    this.$router.push(`/${id}`);
  }
}
</script>
<style scoped lang="scss">
.host {
  position: sticky;
  padding: 0.3rem 2rem;
  z-index: 600;
  bottom: 0;
  .rating {
    font-family: 'Major Mono Display', Roboto, sans-serif;
    font-size: 1rem;
    padding: 0 0.6rem;
  }
  .vue-star-rating {
    justify-content: center;
  }
}
</style>
