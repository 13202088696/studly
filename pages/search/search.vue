<template>
	<view class="searchLayout">
		<u-search
		placeholder="请输入搜索内容"
		v-model="keyword"
		clearabled
		showAction
		actionText="搜索"
		animation
		@search="onSearch"
		@custom="onCustom"
		></u-search>
		
		<view class="historyList">
			<view class="item" v-for="(item,index) in historyList" :key="index">
				<view class="text">搜索文字</view>
				<view class="close">
					<u-icon name="close" size="16" color="#999"></u-icon>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			keyword:'',
			historyList:[]
			};
		},
		methods:{
			onSearch(e){
				console.log(e)
			},
			onCustom(e){
				console.log(e)
			},
		}
	}
</script>

<style lang="scss">
.searchLayout{padding: 30rpx;
	.historyList{margin-top: 30rpx;
		.item{@include flex-box;font-size: 32rpx;padding: 30rpx 0;color: #333;
			border-bottom: 1px solid $border-color-light;
		}
	}	
}
</style>
