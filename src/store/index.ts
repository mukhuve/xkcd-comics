import { ComicModel } from '@/models/comic';
import Axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

import { State, LoadCommand } from './types';

Vue.use(Vuex);
const ratingskey = 'comics:ratings';
const proxy = 'https://cors-anywhere.herokuapp.com';
export default new Vuex.Store<State>({
  state: {
    last: 2366,
    comic: new ComicModel({}),
    ratings: JSON.parse(localStorage.getItem(ratingskey) || '{}'),
  },
  mutations: {
    setRating(state, stars = 0) {
      const { comic, ratings } = state;
      state.ratings = { ...ratings, [String(comic?.id)]: stars };
    },
    setLast: (state, last: number) => {
      state.last = last;
    },
    setComic: (state, comic?: ComicModel) => {
      state.comic = comic;
    },
  },
  actions: {
    rate({ commit, state }, stars: number) {
      commit('setRating', stars);
      localStorage.setItem(ratingskey, JSON.stringify(state.ratings || {}));
    },
    async command({ state }, command: LoadCommand = 'random') {
      const { comic = new ComicModel(), last = 0 } = state || {};
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
          id = Math.random() * last;
          break;
      }
      this.dispatch('load', id);
    },
    async load(opts, id = 0) {
      const { commit, state } = opts;
      commit('setComic', undefined);
      let comic: ComicModel = new ComicModel();
      try {
        if (id <= 0) id = state.last;
        if (id > state.last) id = 1;
        const uri = `https://xkcd.com/${Math.round(id)}/info.0.json`;
        const { data, status } = await Axios.get(`${proxy}/${uri}`);
        console.log(data, status);
        if (status >= 200 && status < 300) comic = new ComicModel(data);
        else throw new Error('Request error');
      } catch (e) {
        const res = await Axios.get(`${proxy}/https://xkcd.com/info.0.json`);
        if (res.data) comic = new ComicModel(res.data);
      }
      commit('setComic', comic);
    },
  },
});
