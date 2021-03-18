import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const state = {
  lessonId: 0,
  name: 0,
  price: 0,
  thumbnail: [],
  categoryId: 0,
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
