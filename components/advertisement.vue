<template>
	<view class="card advertisement" :class="bg">
		<view class="advertisement_item" v-if="iamge">
			<image class="advertisement_item_img" :src="iamge" mode=""></image>
		</view>
		<view class="advertisement_item">
			<view class="text-black">{{title}}</view>
		</view>
		<view class="advertisement_item">
			<button class="ui-btn dashed advertisement_item_btn" :class="bg" @click="buttonCall">查看</button>
		</view>
	</view>
</template>

<script>
	export default {
		name:"advertisement",
		props:{
			iamge : {
				type : String,
				default: ''
			},
			title :{
				type: String,
				required: true
			},
			showButton : {
				type: Boolean,
				default: true
			},
			bg :{
				type:String,
				default: 'bg-blue-thin'
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			buttonCall(){
				this.$emit('clickButton')
			}
		}
	}
</script>

<style lang="scss" scoped>
/*广告*/
	.advertisement{
		display: flex;
		align-items:center;
		justify-content: space-around;
		.advertisement_item_img{
			width: 60rpx;
			height: 60rpx;
		}
		.advertisement_item_btn{
			width: 40rpx;
			height: 30rpx;
			display: flex;
			align-items: center;
		}
	}
</style>
