import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import lessonModule from "./modules/lesson";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		lesson: lessonModule,
	},
	plugins: [createPersistedState()],
});
