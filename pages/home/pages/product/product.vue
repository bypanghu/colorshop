<template>
	<ui-sys >
		<ui-navbar back opacity shadow>
			<view class="flex-bar p-3" >
				<view class="back" @tap="navback" >
					<view class="back-icon icon-fw text-xl cicon-back" ></view>
				</view>
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
		<!-- 顶部导航栏区域 -->
		<block>
			<swiper class="swiper" autoplay>
				<swiper-item ></swiper-item>
			</swiper>
		</block>
		<!-- 顶部导航栏结束 -->
		<view style="width: 100%;height: 700px;">
			
		</view>
	</ui-sys>
</template>

<script>
let _this = null;
export default {
	data() {
		return {
				swiperList: [
					{
					img: "https://oss.color-ui.com/img/8v2yr.png"
				}, {
					img: "https://oss.color-ui.com/img/qhgtb.png"
				}, {
					img: "https://oss.color-ui.com/img/qhgtb.png"
				}],
		};
	},
	onLoad() {
		_this = this;
	},
	methods: {
		navback(){
			uni.navigateBack()
		}
	}
};
</script>

<style lang="scss"></style>
