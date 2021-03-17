// fort-awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft, faCookieBite } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

//Carousel3D 테스트
import Carousel3d from "vue-carousel-3d";

import Vue from "vue";
// axios 테스트
import axios from "axios";

// vue-js-modal
import VModal from "vue-js-modal";

import App from "./App.vue";
import router from "./router";
import store from "./store";

// font-awesome
library.add(faArrowLeft);
library.add(faCookieBite);
Vue.component("font-awesome-icon", FontAwesomeIcon);

// axios config,  axios를 전역에서 사용할 수 있도록,
Vue.prototype.$http = axios; // vue 컴포넌트에서 this.$http로 요청할 수 있게 됨.

Vue.use(VModal, {dynamic: true});

//Carousel3D 테스트
Vue.use(Carousel3d);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount("#app");
