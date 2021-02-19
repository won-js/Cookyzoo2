import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	}, {
		path: "/about",
		name: "About",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 665421da6b0e0d8714ab60b5610e3bcdf96f5113
	}, {
		path: "/cook",
		name: "Cook",
		component: () => import(/* webpackChunkName: "about" */ "../views/cook-main.vue"),
<<<<<<< HEAD
=======
>>>>>>> e31593e9a1d0e07758e63968a3f009c396304c11
=======
>>>>>>> 665421da6b0e0d8714ab60b5610e3bcdf96f5113
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
