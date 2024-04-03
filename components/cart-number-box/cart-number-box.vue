<template>
	<view class="proView">
		<u-number-box v-model="value" min="0" max="99" @change="numlChange">
			<view 
				slot="minus"
				class="minus numbtn"
				:style="value<=0?'display:none':''"
			>
				<u-icon 
					name="minus"
					size="12"
					color="#ccc"
				></u-icon>
			</view>
			 <text
			            slot="input"
						:style="value<=0?'display:none':''"
			            class="input"
			        >{{value}}</text>
			<view 
			slot="plus"
			class="plus numbtn">
				<u-icon
					name="plus"
					size="12"
					color="#FFFFFF"
				></u-icon>
			</view>
		
		</u-number-box>
	</view>
</template>

<script>
	export default {
		name:"cart-number-box",
		data() {
			return {
				value:0
			};
		},
		methods:{
			numlChange(e){
				console.log(e)
			}
		}
	}
</script>

<style lang="scss">
.proView{
	.minus{
		border: 1px solid #ccc;
	}
	.numbtn{
	width: 40rpx;
	height: 40rpx;
	@include flex-box-set();
	}
	.plus{
		background: $brand-theme-color;
		}
	.none{display: none;}
	.input{
		width: 50px;text-align: center;
		@include flex-box-set();
	}
}
</style>