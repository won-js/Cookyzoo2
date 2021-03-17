import getters from "./getters";
import mutations from "./mutations";

const state = {
    contents: [],
    step: 0,
    success: false,
		start: false,
    motion: undefined,
    active: false,
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
