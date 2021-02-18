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
	}, {
		path: "/cook-main",
		name: "Cook-Main",
		component: () => import(/* webpackChunkName: "about" */ "../views/cook-main.vue"),
	}, {
		path: "/cook-character",
		name: "Cook-Character",
		component: () => import(/* webpackChunkName: "about" */ "../views/cook-character.vue"),
	}, {
		path: "/cook-wash",
		name: "Cook-Wash",
		component: () => import(/* webpackChunkName: "about" */ "../views/cook-wash.vue"),
	}, {
		path: "/cook-material",
		name: "Cook-Material",
		component: () => import(/* webpackChunkName: "about" */ "../views/cook-material.vue"),
	}, {
		path: "/cook-area",
		name: "Cook-Area",
		component: () => import(/* webpackChunkName: "about" */ "../views/cook-area.vue"),
	}, {
		path: "/cook-ready",
		name: "Cook-Ready",
		component: () => import(/* webpackChunkName: "about" */ "../views/cook-ready.vue"),
	}, {
		path: "/cook-routine",
		name: "Cook-Routine",
		component: () => import(/* webpackChunkName: "about" */ "../views/cook-routine.vue"),
	}, {
		path: "/cook-sample",
		name: "Cook-Sample",
		component: () => import(/* webpackChunkName: "about" */ "../views/cook-sample.vue"),
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
