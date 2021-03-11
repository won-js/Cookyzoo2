import Vue from "vue";
import Vuex from "vuex";
// import createPersistedState from "vuex-persistedstate";
import lessonModule from "./modules/lesson";
import modalModule from "./modules/modal";
import gameModule from "./modules/game";
import animalModule from "./modules/animal";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		lesson: lessonModule,
		modal: modalModule,
		game: gameModule,
		animal: animalModule,
	},
	// plugins: [createPersistedState()],
});
