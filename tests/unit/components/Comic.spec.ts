import Comic from '@/components/Comic.vue';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import moment from 'moment';
import VueMoment from 'vue-moment';
import Vuetify from 'vuetify';
import Vue from 'vue';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import VuePhotoZoomPro from 'vue-photo-zoom-pro';

import { comicMock as comic } from './../mocks/comic.mock';
Vue.use(Vuetify);
const localVue = createLocalVue();
localVue.use(VuePhotoZoomPro);
localVue.use(VueMoment);

describe('Comic.vue', () => {
  const component = shallowMount(Comic, {
    localVue,
    propsData: { comic: comic },
  });

  it('Render comic title correcctly', () => {
    expect(component.find('.comic-title').text()).toContain(comic.title);
  });

  it('Render date with correct format', () => {
    expect(component.find('.comic-date').text()).toContain(
      moment(comic.date).format('dddd, MMMM Do YYYY'),
    );
  });
});
