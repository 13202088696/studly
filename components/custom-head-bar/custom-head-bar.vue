<template>
	<view class="customHead" :style="{height:totalHeight+'px'}">
		<view class="bg">
			<image class="bgimg" src="../../static/images/logo.png" mode="aspectFill"></image>
		</view>
		<view class="container">
			<view class="statusBar" :style="{height:titleBarHeight+'px'}"></view>
			<view class="service" :style="{height:titleBarHeight+'px'}">
				<view class="kefu">
					<u-icon name="server-fill" size="22" color="#fff"></u-icon>
				</view>
				<navigator class="manage">
					<u-icon name="bag-fill" size="22" color="#fff"></u-icon>
					后台管理
				</navigator>
			</view>
			<view class="body">
				<view class="brand">
					<view class="pic">
						<img class="img" src="../../static/images/logo.png" alt="" mode="aspectFill" />
					</view>
					<view>
						<view class="text">
							<view class="title">
								<text class="font">现实性小店</text>
								<u-icon name="more-circle" size="26" color='#fff'></u-icon>
							</view>
						</view>
						<view class="des">一大堆品牌介绍一大堆品牌介绍一大堆品牌介绍</view>
					</view>
				</view>
				<view class="code">
					<view class="pic">
						<image class="img" src="../../static/images/logo.png" mode="aspectFill"></image>
					</view>
					<text class="pay">付款</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapGetters } from 'vuex';
	export default{
		name:'custom-head-bar',
		data(){
			return{
				statusbarHeight:0,
				titleBarHeight:0
			};
		},
		computed:{
			totalHeight(){
				return this.statusbarHeight+this.titleBarHeight+100+10
			},
			...mapGetters(['titleBarHeight'])
		},
		mounted() {
			let systemInfo = uni.getSystemInfoSync();
			this.statusbarHeight = systemInfo.statusBarHeight || 20
			// #ifdef MP-WEIXIN
			let menuBtnTnfo = uni.getMenuButtonBoundingClientRect()
			this.titleBarHeight = menuBtnTnfo.height + (menuBtnTnfo.top - this.statusbarHeight)*2
			console.log("title:",this.titleBarHeight);
			// #endif
			// #ifndef MP-WEIXIN
				this.titleBarHeight = 40
			// #endif
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
	.customHead{height: 180px;overflow: hidden;position: relative;
		.bg{width: 100%;height: 100%;background: #000;
			.bgimg{width: 100%;height: 100%;filter: blur(15px);transform: scale(2);}
		}
		.container{
			width: 100%; position: absolute;top:0;border:3px solid red;
			.statusBar{}
			.service{border:3px solid blue;padding-left: 30rpx;@include flex-box-set(start);
				.kefu{}
				.manage{padding-left: 20rpx;@include flex-box-set(start);}
			}
			.body{@include flex-box();padding: 0 45rpx;height: 100px;border: 1px solid yellow;
				.brand{width: 580rpx;@include flex-box-set(start);
					.pic{overflow: hidden; border-radius: 50%; width: 110rpx;height: 110rpx; 
					.img{width: 100%;height: 100%;}
					}
				.text{flex: 1;padding: 0 30rpx;color: #fff;
					.title{font-size: 36rpx;font-weight: 800;display: flex;align-items: center;}
				}
				.des{flex: 1;padding: 0 30rpx;color: #fff;font-size: 26rpx;align-items: center;display: flex;@include ellipsis()}
				}
				.code{width: 80rpx;height: 80rpx;border-left: 1px solid rgba(255,255,255,0.6);@include flex-box-set();flex-direction: column;
					.pic{width: 40rpx;height: 40rpx; .img{width: 100%;height: 100%;}}
					.pay{}
				}
			}
		}
	}
</style>