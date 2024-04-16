<template>
	<view class="home">
		<custom-head-bar></custom-head-bar>
		<view class="wrapper">
			<view class="infoModel">
				<view class="left" @click="StoreMessage">
					免费配送{{cartNo}}{{titleBarHeightt}}
				</view>
				<view class="right" @click="navOrder">
					<u-icon name="photo" color="#2979ff" size="28"></u-icon>
					我的订单
				</view>
			</view>
			<view class="scrollLayout">
				<view class="leftScroll">
					<scroll-view
					scroll-y
					class="sContent"
					 :scroll-top="leftScrollVAlue"
					scroll-with-animation>
							<view class="navitem" 
							:class="index == indexNow ? 'active' : ''"
							 @click="clickNav(index)"
							v-for="(item,index) in 20" :key="index">{{item}}</view>
					</scroll-view>
				</view>
				<view class="rightScroll">
					<view class="searchView" @click="navSearch">
						<u-icon name="search" size="22"></u-icon>
						搜索
					</view>
					<scroll-view scroll-y class="sContent">
							<view class="productView" v-for="(item,index) in 5" :key="index">
								<u-sticky :customNavHeight='0' zIndex="2">
									<view class="proTitle">产品名称{{item}}</view>
								</u-sticky>
								<view class="proContent">
									<view class="proitem" v-for="(itemChild,indexChild) in 5" :key="indexChild">
										<product-item></product-item>
									</view>
								</view>
							</view>
					</scroll-view>
				</view>
			</view>
		</view>
		
		<car-layout></car-layout>
		
	</view>
</template>



<script>
import indexList from '../../uni_modules/uview-ui/libs/config/props/indexList'
import loadingIcon from '../../uni_modules/uview-ui/libs/config/props/loadingIcon'
import {mapState,mapMutations,mapGetters} from "vuex"
	export default {
		data() {
			return {
				indexNow:0,
				rightScrollVAlue:0,
				leftScrollVAlue:0,
				leftHitArr:[],
				rightHitArr:[],
			}
		},
		onLoad() {
			this.$nextTick(()=>{
				this.getHeightArr()
			})
		},
		watch: {
		    rightHitArr: {
		        handler (newName, oldName) {
		            console.log(newName)
		        },
		        immediate: true,
				}
		    },
			computed:{
				...mapGetters(['cartNo','titleBarHeightt'])
			},
		methods: {
			...mapMutations(['setCartVaule']),
			StoreMessage(){
				this.setCartVaule(4554)
			},
			navOrder(){
				uni.navigateTo({
					url:'/pages/order/order'
				})
			},
			navSearch(){
				uni.navigateTo({
					url:'/pages/search/search'
				})
			},
			clickNav(index){
				if(this.indexNow == index) return;
				if(this.timeout){
					clearTimeout(this.timeout)
				}
				this.indexNow = index
				this.timeout = setTimeout(()=>{
					this.leftScrollVAlue = this.leftHitArr[index]
					this.rightScrollVAlue = this.rightHitArr[index]
				},100)
			},
			getHeightArr(){
				let seletorQuery = uni.createSelectorQuery();
				//左侧高度
				seletorQuery.selectAll(".navitem").boundingClientRect(response=>{
					this.leftHitArr = response.map(item=>item.top - 150)
				}).exec()
				//右侧高度
				seletorQuery.selectAll(".productView").boundingClientRect(response=>{
					this.rightHitArr = response.map(item=>item.top - 150)
				}).exec()
			},
			rightScrollEnt(e){
				let scorllTop = e.detail.scrollTop
			    let idx = this.rightHitArr.findIndex((value, index, arr) => scorllTop >= value && scorllTop < arr[index+1]) 
				this.indexNow = idx;
				this.leftScrollVAlue = this.leftHitArr[idx]
			},
		}
	}
</script>

<style lang="scss" scoped>  
	.home{
		height: 100vh;
		display: flex;
		flex-direction: column;
		.wrapper{
			flex: 1;
			background: #fff;
			margin-top: -10px;
			position: relative;
			z-index: 2;
			overflow: hidden;
			.infoModel{
				color: $text-font-color-1;
				@include flex-box
				height: 50px;
				background: #fff;
				padding: 0 15px;
				font-size: 16px;
				border: 1px solid $border-color-light;
				.right{
					@include flex-box
					color: $brand-theme-color-aux;
				}
			}
			.scrollLayout{
				height: calc(100% - 100rpx);
				@include flex-box
				.leftScroll{
					height: 100%;
					width: 190rpx;
					border-right: 1px solid $border-color-light;
					.navitem{
						font-size: 30rpx;
						padding-left: 30rpx;
						line-height: 100rpx;
						color: $text-font-color-2;
						position: relative;
						&.active{
							color:$text-font-color-1;
							background: #fff;
							&::after{
								content: '';
								width: 6rpx;
								height: 30rpx;
								background: $brand-theme-color;
								position: absolute;
								left: 0;
								top: 50%;
								transform: translateY(-50%);
							}
						}
					}
				}
				.rightScroll{
					height: 100%;
					flex:1 ;
					position: relative;
					.searchView{
						position: absolute;
						top: 0;
						right: 30rpx;
						z-index: 3;
						@include flex-box-set();
						height: 90rpx;
						color:$brand-theme-color-aux;
					}
					.productView{
						padding: 0 15px
					}
				}
				.sContent{
					height: 100%;
				}
				.productView{
					padding:0 30rpx;
					.proTitle{
						line-height: 90rpx;
						font-size: 30rpx;
						background: #fff;
					}
				}
			}
		}
	}
</style>
