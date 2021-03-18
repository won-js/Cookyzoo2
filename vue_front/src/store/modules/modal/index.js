import getters from "./getters";
import mutations from "./mutations";

const state = {
  page: 0,
  maxPage: 3,
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
