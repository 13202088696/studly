<template>
	<view>
		<view class="carLayout">
			<view class="goods" v-if="showBackground">
				<view class="head">
					<view class="text">已选商品</view>
					<view class="empty">清空</view>
				</view>
				
				<scroll-view scroll-y="true" class="body">
					<view class="sContent">
						<view class="caritem" v-for="(item,index) in 5" :key="index">
							<car-rpo-item></car-rpo-item>
						</view>
					</view>
				</scroll-view>
			</view>
			<view class="content">
				<view class="left" @click="clickHandler">
					<view class="icon" hover-class="iconhover" hover-stay-time="50">
						<u-icon name="shopping-cart" size="34" color="#EC544F"></u-icon>
						<view class="num">1</view>
					</view>
					<view class="price">合计<text class="text">$33.3</text></view>
				</view>
				<view class="right">
					<view class="btn disable" v-if="true">选好了</view>
					<view class="btn" v-else>支付</view>
				</view>
			</view>
		</view>
		
		<u-overlay :show="showBackground" z-index="9" @click="clickHandler()"></u-overlay>
	</view>
</template>

<script>
	export default {
		name:"car-layout",
		data() {
			return {
				showBackground:false
			};
		},
		methods:{
			clickHandler(){
				this.showBackground = !(this.showBackground)
			}
		}
	}
</script>

<style lang="scss" scoped>
.carLayout{
	position: relative;
	z-index: 10;
	.goods{
		border-bottom: 1px solid $border-color-light;
		padding: 30rpx 30rpx 0 ;
		border-radius: 20rpx 20rpx 0 0;
		background: #fff;
		.head{
			@include flex-box();
			color: $text-font-color-3;
			padding: 25rpx 0;
			.empty{
				color: $brand-theme-color-aux;
			}
		}
		.body{
			height: 500rpx
		}
	}
	
	.content{
		@include flex-box();
		padding: 0 30rpx;
		height: 140rpx;
		background:#fff;
		.left{
			@include flex-box();
			.icon{
				width: 80rpx;
				height: 80rpx;
				background-color: #EEE;
				border-radius: 10rpx;
				@include flex-box-set();
				position: relative;
				margin-right: 30rpx;
				.num{
					position: absolute;
					right: -18rpx;
					top:-18rpx;
					width: 36rpx;
					height: 36rpx;
					background: $brand-theme-color;
					border-radius: 50%;
					font-size: 22rpx;
					color: #fff;
					@include flex-box-set()
				}
			}
			.iconhover{transform: scale(0.9);}
			.price{font-size: 28rpx;.text{}}
		}
		.right{
			.btn{
				width: 210rpx;
				height: 76rpx;
				background: $brand-theme-color;
				display: flex;
				align-items: center;
				justify-content: center;
				color: #fff;
				border-radius: 10rpx;
				&.disable{
					opacity: 0.6;
				}
			}
		}
	}
}
</style>