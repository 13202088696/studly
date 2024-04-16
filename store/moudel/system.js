const systemInfo = uni.getSystemInfoSync()
//获取状态栏高度
const getStatusBarHeight = ()=> systemInfo.statusBarHeight || 20
//获取标题栏高度
const getTitleBarHeight= () =>{
	// #ifdef MP-WEIXIN
	let menuBtnInfo = uni.getMenuButtonBoundingClientRect();
	let height = menuBtnInfo.height + (menuBtnInfo.top - getStatusBarHeight())*2;
	return height;
	// #endif
	return 40;
}
const system={
	state:{
		vuexValue1:'no1',
		vuexValue2:'no2',
		vuexValue3:99,
		statusBarHeight:getStatusBarHeight(),
		titleBarHeight:getTitleBarHeight()
	},
	mutations:{
		setVuexValue(state,num){
			state.vuexValue3 = num
		}
	},
}
export default system