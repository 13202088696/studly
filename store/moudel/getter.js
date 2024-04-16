const getters ={
	vuexValue3:state=>state.system.vuexValue3 + 22,
	cartNo:state=>state.cart.cartNo + 23,
	titleBarHeightt:state=>state.system.titleBarHeight,
}
export default getters