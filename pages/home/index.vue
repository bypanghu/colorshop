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
			<scroll-view scroll-x="true" >
				<view class="ui-grid grid-square ui-cols-6 p-3" style="width: 120vw;height: 100%;overflow-x: scroll;">
					<view class="ui-item radius " v-for="(item,index) in fun_list" :key="index">
						 <view class="flex-center position-center">
						 	<view style="text-align: center;">
								<image class="function_img" :src="item.img" mode="widthFix"></image>
								<view class="function_text">{{item.item}}</view>
							</view>
						 </view> 
					</view>
				</view>
			</scroll-view>
			<view class="">
			</view>
		</block>
		<!-- 功能区域结束 -->
		
		<!-- 口碑推荐 -->
		<block>
			<div class="pl-2">
				<ui-title class="mt-3" title="口碑推荐" titleColor="text-blue" tpl="center-column" hasDot></ui-title>
			</div>
			<view class="goodList">
				<view class="goodList_left ">
					<view class="goodList_left_title">爆款鲜花</view>
					<image class="goodList_left_img" mode="heightFix" src="https://cdn.jsdelivr.net/gh/bypanghu/assests@master/xianhua.jpeg"></image>
				</view>
				<view class="goodList_right">
					<image class="goodList_right_img" mode="heightFix" src="https://cdn.jsdelivr.net/gh/bypanghu/assests@master/goodList_right.jpeg"></image>
					<image class="goodList_right_img" mode="heightFix" src="https://cdn.jsdelivr.net/gh/bypanghu/assests@master/goodList_right_2.jpeg"></image>
				</view>
			</view>
		</block>
		<!-- 口碑推荐结束 -->
		
		<!-- 套餐区域 -->
		<block>
			<div class="pl-2">
				<ui-title class="mt-3" title="精选推荐" titleColor="text-blue" tpl="center-column" hasDot></ui-title>
			</div>
			<view class="cardList">
				<shopCardItem :wallList='wallList' @handleClick='handleClick'></shopCardItem>
			</view>
		</block>
		<!-- 套餐区域结束 -->
	
	</ui-sys>
</template>

<script>
	import shopCardItem from './components/shopcardItem.vue'
let _this = null;
export default {
	components:{
		shopCardItem	
	},
	data() {
		return {
			swiperList: [{
				img: "https://cdn.jsdelivr.net/gh/bypanghu/assests@master/colorShop/banner1.png"
			}, {
				img: "https://oss.color-ui.com/img/qhgtb.png"
			}, {
				img: "https://oss.color-ui.com/img/qhgtb.png"
			}],
			fun_list : [
				{
					item : '超市',
					img : 'https://cdn.jsdelivr.net/gh/bypanghu/assests@master/colorShop/file.png'
				},
				{
					item : '电器',
					img : 'https://cdn.jsdelivr.net/gh/bypanghu/assests@master/colorShop/luyin.png'
				},
				{
					item : '服装',
					img : 'https://cdn.jsdelivr.net/gh/bypanghu/assests@master/colorShop/gift.png'
				},
				{
					item : '水果',
					img : 'https://cdn.jsdelivr.net/gh/bypanghu/assests@master/colorShop/star.png'
				},
				{
					item : '京东到家',
					img : 'https://cdn.jsdelivr.net/gh/bypanghu/assests@master/colorShop/location.png'
				},
				{
					item : '生活服务',
					img : 'https://cdn.jsdelivr.net/gh/bypanghu/assests@master/colorShop/notice.png'
				},
				{
					item : '领京豆',
					img : 'https://cdn.jsdelivr.net/gh/bypanghu/assests@master/colorShop/list.png'
				},
				{
					item : '领券',
					img : 'https://cdn.jsdelivr.net/gh/bypanghu/assests@master/colorShop/dangan.png'
				},
				{
					item : '借钱',
					img : 'https://cdn.jsdelivr.net/gh/bypanghu/assests@master/colorShop/pay.png'
				},
				{
					item : '会员',
					img : 'https://cdn.jsdelivr.net/gh/bypanghu/assests@master/colorShop/music.png'
				},
				{
					item : '京东国际',
					img : 'https://cdn.jsdelivr.net/gh/bypanghu/assests@master/colorShop/shenpi.png'
				},
				{
					item : '京东生鲜',
					img : 'https://cdn.jsdelivr.net/gh/bypanghu/assests@master/colorShop/gift.png'
				},
			],
			wallList :[
				{
					img : 'https://oss.color-ui.com/img/dkarj.png',
					title : 'colorShop',
					content : 'colorshop一个船新版本的shop，基于colorui3.0的商城模版',
					lable : '近7天热销好物',
					nowPrice : 4999,
					oldPrice : 6000
				},
				{
					img : 'https://cdn.jsdelivr.net/gh/bypanghu/assests@master/47b32f22-e958-4e3c-bd37-1230c483514e.jpeg',
					title : 'colorShop',
					content : 'colorshop一个船新版本的shop，基于colorui3.0的商城模版',
					lable : '近7天热销好物',
					nowPrice : 4999,
					oldPrice : 6000
				},
				{
					img : 'https://oss.color-ui.com/img/dkarj.png',
					title : 'colorShop',
					content : 'colorshop一个船新版本的shop，基于colorui3.0的商城模版',
					lable : '降价幅度最大',
					nowPrice : 4999,
					oldPrice : 6000
				},
				{
					img : 'https://oss.color-ui.com/img/dkarj.png',
					title : 'colorShop',
					content : 'colorshop一个船新版本的shop，基于colorui3.0的商城模版',
					lable : '近7天热销好物',
					nowPrice : 4999,
					oldPrice : 6000
				},
				{
					img : 'https://cdn.jsdelivr.net/gh/bypanghu/assests@master/47b32f22-e958-4e3c-bd37-1230c483514e.jpeg',
					title : 'colorShop',
					content : 'colorshop一个船新版本的shop，基于colorui3.0的商城模版',
					lable : '近7天热销好物',
					nowPrice : 4999,
					oldPrice : 6000
				},
				{
					img : 'https://oss.color-ui.com/img/dkarj.png',
					title : 'colorShop',
					content : 'colorshop一个船新版本的shop，基于colorui3.0的商城模版',
					lable : '近7天热销好物',
					nowPrice : 4999,
					oldPrice : 6000
				},
				{
					img : 'https://oss.color-ui.com/img/dkarj.png',
					title : 'colorShop',
					content : 'colorshop一个船新版本的shop，基于colorui3.0的商城模版',
					lable : '近7天热销好物',
					nowPrice : 4999,
					oldPrice : 6000
				},
				{
					img : 'https://oss.color-ui.com/img/dkarj.png',
					title : 'colorShop',
					content : 'colorshop一个船新版本的shop，基于colorui3.0的商城模版',
					nowPrice : 4999,
					oldPrice : 6000
				}
			]
		};
	},
	onLoad() {
		_this = this;
	},
	methods: {
		handleClick(e){
			console.log(e)
			uni.navigateTo({
				url : '/pages/home/pages/product/product'
			})
		}
	}
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
		color: #555;
	}
	.function_img{
		margin: 0 auto;
		width: 80rpx;
		height: 80rpx;
	}
	.cardList{
		background-color: var(--ui-BG-1) !important;
		min-height: 400rpx;
	}
	.goodList{
		display: flex;
		align-items: center;
		
		overflow: hidden;
		.goodList_left{
			width: 60vw;
			overflow: hidden;
			padding: 20rpx;
			border-radius: 10rpx;
			position: relative;
			height: 400rpx;
			.goodList_left_title{
				width: calc(100%);
				position: absolute;
				bottom: 0rpx;
				z-index: 2;
				background-image: linear-gradient(rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.4), black);
				max-height: 80rpx;
				height: 80rpx;
				color: #fff;
				line-height: 90rpx;
				font-size: 32rpx;
				font-weight: 700;
				padding-left: 10rpx;
				border-radius:  10rpx;
			}
			.goodList_left_img{
				width: 100%;
			}
		}
		.goodList_right{
			width: 40vw;
			padding: 20rpx;
			overflow: hidden;
			height: 400rpx;
			.goodList_right_img{
				height: 190rpx;
				border-radius: 10rpx;
				width: 100% !important;
			}
		}
	}
</style>
