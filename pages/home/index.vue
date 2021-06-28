<template>
	<ui-sys bg='bg-white'  tabbar>
		<ui-navbar :back="false" :opacity="false" shadow>
			<view class="flex-bar p-3" >
				<image src="https://cdn.jsdelivr.net/gh/bypanghu/assests@master/colorShop/logo.png" mode="aspectFill"
					style="width: 200rpx;height: 56rpx;"></image>
			</view>
			<view class="p-3 flex-bar flex-sub" v-if="sys_scrollTop > sys_navBar" >
				<view url="/pages/search/search" class="flex-sub flex-bar">
					<view class="p-2 bg-blur-1 w-100 round border flex-center" :style="{height:`35px`}">
						<text class="uicon-search-line mx-2"></text>
						<view class="text-c text-sm">
							搜索商品
						</view>
					</view>
				</view>
			</view>
			<view class="flex-bar">
				<!-- #ifdef MP -->
				<view :style="{width:`${sys_capsule.width + 10}px`,height:`${sys_capsule.height}px`}"> </view>
				<!-- #endif -->
			</view>
		</ui-navbar>
		
		<!-- banner区域 -->
			<block >
				<swiper class="swiper" autoplay >
					<swiper-item v-for="(item , index ) in swiperList" :key='index'>
						<view class="swiper_item">
							<image :src="item.img" class="swiper_img" mode="widthFix"></image>
						</view>
					</swiper-item>
				</swiper>
			</block>
		<!-- banner区域结束 -->
		
		<!-- 功能区域 -->
		<block>
			<scroll-view :scroll-x='true' style="width: 120vw;height: 100%;">
				<view  class="ui-grid grid-square ui-cols-6 p-3">
					<view class="ui-item radius " v-for="(item,index) in functionList" :key="index">
						 <view class="flex-center position-center ">
						 	<view style="text-align: center;">
								<view :class="[`cicon-home`]"></view>
								<view class="function_text">{{item}}</view>
							</view>
						 </view> 
					</view>
				</view>
			</scroll-view>
		</block>
		<!-- 功能区域结束 -->
		
		<!-- 套餐区域 -->
		<block>
			<div class="pl-2"><ui-title title="精选推荐"  desc="basic"></ui-title></div>
			<view class="card">
				
			</view>
		</block>
		<!-- 套餐区域结束 -->
	</ui-sys>
</template>

<script>
let _this = null;
export default {
	data() {
		return {
			swiperList: [{
				img: "https://cdn.jsdelivr.net/gh/bypanghu/assests@master/colorShop/banner1.png"
			}, {
				img: "https://oss.color-ui.com/img/qhgtb.png"
			}, {
				img: "https://oss.color-ui.com/img/qhgtb.png"
			}],
			functionList : ['超市','电器','服装','水果','京东到家','生活服务','领京豆','领券','借钱','会员','京东国际','京东生鲜']
		};
	},
	onLoad() {
		_this = this;
	},
	methods: {}
};
</script>

<style lang="scss">
	.swiper{
		width: 100%;
		margin-top: 20rpx;
		.swiper_img{
			width: calc(100vw - 40rpx);
			border-radius: 20rpx;
			margin-left: 20rpx;
		}
	}
	.function_text{
		font-size: 20rpx;
	}
</style>
