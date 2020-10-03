<template>
  <div class="host d-flex flex-column align-center pa-16">
    <span class="mb-3">Created by</span>
    <div class="dev-info pa-6 d-flex flex-column align-center">
      <v-img
        class="image"
        src="https://s.gravatar.com/avatar/2298711daee4496d13414002903a5d63?s=400"
      ></v-img>
      <h2>Manuel Rivera</h2>
      <span>Full-Stack Developer</span>
      <v-divider class="ma-3"></v-divider>
      <div class="d-flex flex-row align-center justify-center">
        <v-btn
          outlined
          fab
          large
          href="https://www.linkedin.com/in/mukuve"
          target="_blank"
          class="mr-4 ml-4"
        >
          <v-icon size="36">mdi-linkedin</v-icon>
        </v-btn>
        <v-btn
          outlined
          fab
          large
          href="https://www.instagram.com/marpdevs"
          target="_blank"
          class="mr-4 ml-4"
        >
          <v-icon size="36">mdi-instagram</v-icon>
        </v-btn>
        <v-btn
          outlined
          fab
          large
          href="https://twitter.com/marpdevs"
          target="_blank"
          class="mr-4 ml-4"
        >
          <v-icon size="36">mdi-twitter</v-icon>
        </v-btn>
      </div>
    </div>
    <p class="description-info d-flex flex-column align-center mt-6">
      <span>
        <b> XKCD Comics </b> - Made with love for the
        <a href="https://masiv.com/nosotros" target="_blank">Masivian</a>
        technical test
      </span>
      <small> Oct 03, 2020 - Bogotá, Colombia. </small>
    </p>
  </div>
</template>
<style lang="scss" scoped>
.host {
  flex: 1 1;
  .dev-info {
    max-width: 93vw;
    border-radius: 0.6rem;
    border: 1px solid #ccc;
    .image {
      --size: 9rem;
      max-width: var(--size);
      max-height: var(--size);
      border-radius: 100%;
    }
    h2 {
      font-family: 'Major Mono Display', Roboto, sans-serif !important;
    }
    .v-divider {
      width: 70vw;
    }
    .v-btn {
      color: var(--v-secondary-base) !important;
    }
  }
  a {
    color: var(--v-info-base);
    text-decoration: none;
  }
}
</style>
