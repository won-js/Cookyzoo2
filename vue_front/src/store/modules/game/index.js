import getters from "./getters";
import mutations from "./mutations";

const state = {
    contents: [],
    step: 0,
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
