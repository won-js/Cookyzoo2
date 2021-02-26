import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import lessonModule from "./modules/lesson";
import modalModule from "./modules/modal";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		lesson: lessonModule,
		modal: modalModule,
	},
	plugins: [createPersistedState()],
});
