import { createStore } from 'vuex';
import { character, user,BookClassify } from '@/service';
import { result } from '@/helpers/utils';
import { getCharacterInfoById } from '@/helpers/character';

export default createStore({
  state: {
    characterInfo: [],
    userInfo: {},
    userCharacter: {},
    bookClassify:[]
  },
  getters: {},
  mutations: {
    setCharacterInfo(state, characterInfo) {
      state.characterInfo = characterInfo;

    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
    setUserCharacter(state, userCharacter) {
      state.userCharacter = userCharacter;
    },
    setBookClassify(state, bookClassify) {
      state.bookClassify = bookClassify
    }
  },
  actions: {
    async getBookClassify(store) {
      const res = await BookClassify.list()
      result(res).success(({ data }) => {
        store.commit('setBookClassify',data)
      })
    },
    async getCharacterInfo(store) {
      const res = await character.list();
      result(res).success(({ data }) => {
        store.commit('setCharacterInfo', data);
      });
    },
    async getUserInfo(store) {
      const res = await user.info();
      // console.log(123456);
      result(res).success(({ data }) => {
        store.commit('setUserInfo', data);
        store.commit('setUserCharacter', getCharacterInfoById(data.character));
      });
    },
  },
  modules: {},
});
