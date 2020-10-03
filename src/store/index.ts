import { ComicModel } from '@/models/comic';
import Axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

import { State } from './types';

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
    async load(opts, id = 0) {
      const { commit, state } = opts;
      commit('setComic', undefined);
      let comic: ComicModel = new ComicModel();
      try {
        if (id <= 0) id = state.last;
        if (id > state.last) id = 1;
        const uri = `https://xkcd.com/${Math.round(id)}/info.0.json`;
        const { data, status } = await Axios.get(`${proxy}/${uri}`);
        if (status >= 200 && status < 300) comic = new ComicModel(data);
        else throw new Error('Request error');
      } catch (e) {
        const res = await Axios.get(`${proxy}/https://xkcd.com/info.0.json`);
        if (res.data) comic = new ComicModel(res.data);
      }
      commit('setComic', comic);
    },
    async loadLast({ commit }) {
      const { data } = await Axios.get(`${proxy}/https://xkcd.com/info.0.json`);
      if (data) commit('setLast', data?.num);
    },
  },
});
