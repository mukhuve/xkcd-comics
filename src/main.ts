import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import VueMoment from 'vue-moment';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import VuePhotoZoomPro from 'vue-photo-zoom-pro';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');

// Library imports
Vue.use(VueMoment);
Vue.use(VuePhotoZoomPro);
