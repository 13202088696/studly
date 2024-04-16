<template>
	<view class="orderPage">
		<view class="row" v-for="(item,index) in 8" :key="index" @click="getDetail(index)">
			<view class="head">
				<view class="number">编号<text class="way">商家外卖</text></view>
				<view class="state">
					<u-icon name="weixin-fill" color="#04c15f" size="22"></u-icon>
					<text>已付款</text>
				</view>
			</view>
			<view class="body">
				零食
			</view>
			<view class="footer">
				<view class="time">2023-06-10 18:20</view>
				<view class="count">
					共两件审批，实付<text class="price">$33.3</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			getDetail(index){
				uni.navigateTo({
					url:'/pages/order/detail?index=' + index
				})
			}
		}
	}
</script>

<style lang="scss">
page{
	background: $page-bg-color;
}
.orderPage{
	.row{padding:40rpx 20rpx;background: #fff;margin: 20rpx;border-radius: 20rpx;
		.head{@include flex-box font-size: 32rpx;
			.number{@include flex-box-set(start)
				.way{background: #19be6b;color: #fff;font-size: 22rpx;padding: 6rpx 20rpx;border-radius: 30rpx;margin-left: 10rpx;}
			}
			.state{@include flex-box;color:$brand-theme-color-aux}
		}
		.body{border: 1px solid $border-color;padding: 60rpx 20rpx;border-radius: 10rpx;background: #f9f9f9;font-size: 34rpx;margin: 30px 0;}
		.footer{@include flex-box;font-size: 26rpx;color: #a5a5a5;
			.price{font-weight: bold;color: #000;}
		}
	}
}
</style>
