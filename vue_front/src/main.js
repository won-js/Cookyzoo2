// fort-awesome
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import Vue from "vue";
// axios 테스트
import axios from "axios";

// vue-js-modal
import VModal from "vue-js-modal";

import App from "./App.vue";
import router from "./router";
import store from "./store";

// font-awesome
// library.add(faUserSecret);
// Vue.component("font-awesome-icon", FontAwesomeIcon);

// axios config,  axios를 전역에서 사용할 수 있도록,
Vue.prototype.$http = axios; // vue 컴포넌트에서 this.$http로 요청할 수 있게 됨.

Vue.use(VModal);


Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount("#app");
