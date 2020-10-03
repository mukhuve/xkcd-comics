import Header from '@/components/Header.vue';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import Vue from 'vue';

import { comicMock as comic } from './../mocks/comic.mock';

Vue.use(Vuetify);
const localVue = createLocalVue();
localVue.use(Vuex);

describe('Header.vue', () => {
  const vuetify = new Vuetify({
    theme: { dark: false },
  });
  const store = new Vuex.Store({ state: { comic } });
  const wrapper = shallowMount(Header, { vuetify, store, localVue });

  it('Render comic number correcctly', () => {
    expect(wrapper.find('h2 > span').text()).toContain(`#${comic.id}`);
  });

  // it('Change light/dark mode button', async () => {
  //   await wrapper.find('.theme-switch').trigger('click');
  //   expect(wrapper.vm.$vuetify.theme.dark).toEqual(true);
  // });
});
