<template>
	<view class="goodsLayout">
		<view class="wrapper">
			<view class="title">共3件商品</view>
			
			<view class="list">
				<view class="row" v-for="(item,index) in 3" :key="index">
					<view class="left">
						<image src="../../static/images/logo.png" mode="aspectFill" class="img"></image>
						<view class="name">零食</view>
					</view>
					<view class="center">x3</view>
					<view class="right">
						<view class="big">$15.5</view>
						<view class="small">$22.3</view>
					</view>
				</view>
			</view>
			
			<view class="total">
				<text>
					已优惠￥30.3
				</text>合计 <text class="big">$45.6</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"goods-list",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.goodsLayout{
	.wrapper{background: #fff;padding: 30rpx;border-radius: 30rpx ;
		.title{}
		.list{margin: 20rpx 0;
			.row{@include flex-box-set(between);margin-bottom: 20rpx;
				.left{@include flex-box;
					.img{width: 40rpx;height: 40rpx;}
				}
				.right{
					.small{font-size: 20rpx;color: $text-font-color-3;position: relative;
						&::after{content: "";position: absolute;width: 50rpx;height: 2rpx;
							background: $text-font-color-3;left: 0;top: 50%;
						}
					}
				}
			}
		}
		.total{font-size: 20rpx;color: $text-font-color-3;@include flex-box-set(end);
			.big{font-size: 34rpx;font-weight: bold;color: #000;margin-left: 10rpx;}
		}
	}
}
</style>