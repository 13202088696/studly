<template>
	<view class="customHead">
		<view class="bg">
			<image class="bgimg" src="../../static/images/logo.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default{
		name:'custom-head-bar',
		data(){
			return{}
		},
		onLoad() {
			
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
	.customHead{
		height: 100px;
		overflow: hidden;
		.bg{
			width: 100%;
			height: 100%;
			background: #000;
			.bgimg{
				width: 100%;
				height: 100%;
				filter: blur(15px);
				transform: scale(2);
			}
		}
	}
</style>