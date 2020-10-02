import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#F3F4F7',
        secondary: '#2D3142',
        accent: '#EF8354',
        error: '#EE4466',
        info: '#2BA4D4',
        success: '#2BD4A4',
        warning: '#FFC107',
      },
      dark: {
        primary: '#2D3142',
        secondary: '#F3F4F7',
      },
    },
  },
});
