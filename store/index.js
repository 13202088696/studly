import Vue from "vue"
import Vuex from "vuex"
import system from "./moudel/system"
import getters from "./moudel/getter"
import cart from "./moudel/cart"
Vue.use(Vuex)
const store = new Vuex.Store({
	getters,
	 modules:{
		system,
		cart
	} 
})
export default store