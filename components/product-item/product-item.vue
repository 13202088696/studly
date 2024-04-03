<template>
	<view class="pro-item">
		<view class="pic">
			<image class="img" src="../../static/images/logo.png" mode="aspectFill"></image>
		</view>
		<view class="text">
			<view class="title">产品标题产品标题产品标题产品标题</view>
			<view class="price">
				<view class="big">$10.5</view>
				<view class="small">$22.3</view>
			</view>
			<view class="discount">3折</view>
			<view class="numbox">
				<view class="skuSelect" v-if="false">选规格</view>
				<view class="uNum" v-else>
					<cart-number-box></cart-number-box>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"product-item",
		data() {
			return{
				
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
.pro-item{
	width: 100%;
	@include flex-box();
	.pic{
		width: 180rpx;
		height: 180rpx;
		border-radius: 20rpx;
		overflow: hidden;
		.img{
			width: 100%;
			height: 100%;
		}
	}
	.text{
		flex: 1;
		padding-left: 20rpx;
		padding: 25rpx 0;
		position: relative;
		.title{
			font-size: 34rpx;
			font-weight: bold;
			@include ellipsis();
		}
		.price{
			@include flex-box-set(start,end);
			font-weight: bold;
			padding: 25rpx 0;
			.big{
				font-size:34rpx ;
				color: $brand-theme-color;
			}
			.small{
				font-size: 26rpx;
				opacity: 0.4;
				text-decoration: line-through;
				padding-left: 10rpx;
			}
		}
		.discount{
			font-size: 22rpx;
			color: $brand-theme-color;
			padding: 3rpx 8rpx;
			border: 1rpx solid $brand-theme-color;
			display: inline-block;
			border-radius: 6rpx;
		}
		.numbox{
			position: absolute;
			bottom: 0;
			right: 0;
			.skuSelect{
				background: $brand-theme-color;
				height: 40rpx;
				padding: 0 10rpx;
				font-size: 28rpx;
				color: #fff;
			}
		}
	}
}
</style>