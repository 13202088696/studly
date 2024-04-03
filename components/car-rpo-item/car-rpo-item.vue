<template>
	<view class="carProItem">
		<view class="left">
			<view class="pic">
				<image class="img" src="../../static/images/logo.png"></image>
			</view>
			<view class="rootPic">
				<view class="text">
					<view class="title">这是商品</view>
					<view class="sku">商品/10包</view>
				</view>
				<view class="price">
					<view class="big">￥55.5</view>
					<view class="samll">$88.8</view>
				</view>
			</view>
		</view>
		<view class="right">
			<cart-number-box></cart-number-box>
		</view>
	</view>
</template>

<script>
	export default {
		name:"car-rpo-item",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.carProItem{
	padding: 20rpx 0;
	border-bottom:1px solid $border-color-light ;
	position: relative;
	.left{
		@include flex-box-set(start,center)
		.pic{width: 110rpx;height: 110rpx; .img{width: 100%;height: 100%;}}
		.text{
			flex: 1;padding-left: 20rpx; 
			.title{font-size: 28rpx;@include ellipsis(2)}
			.sku{font-size: 22rpx;color: #999;padding: 5rpx 0;}
		}
		.price{
			@include flex-box-set();
			.big{font-weight: bold;font-size: 28rpx;color: $brand-theme-color;}
			.samll{font-size: 26rpx;color: $text-font-color-3;}
		}
	}
	.right{position: absolute;right: 0;bottom: 0;}
}
</style>