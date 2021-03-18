import getters from "./getters";
import mutations from "./mutations";

const state = {
    animals: [],
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
