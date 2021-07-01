<template>
	<ui-sys tabbar>
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
			<view class="bg-white card">
				<scroll-view  style="width: calc(100vw - 60rpx);" @scroll="handleScroll" scroll-x="true" >
					<view class="ui-grid grid-square ui-cols-6 p-3" style="width: 140vw;height: 100%;overflow-x: scroll;">
						<view class="ui-item radius " v-for="(item,index) in fun_list" :key="index">
							 <view class="flex-center position-center">
							 	<view style="text-align: center;">
									<image class="function_img"  :src="item.img" mode="widthFix"></image>
									<view class="function_text">{{item.item}}</view>
								</view>
							 </view> 
						</view>
					</view>
					
				</scroll-view>
				<view class="center">
					<view class="tabs_progress">
						<view :style="{marginLeft:`${scrollDiv}rpx`}" class="tabs_progress_cur"></view>
					</view>
				</view>
			</view>
		</block>
		<!-- 功能区域结束 -->
		
		<!-- 广告 -->
		<block>
			<advertisement iamge="https://cdn.jsdelivr.net/gh/bypanghu/assests@master/colorShop/icon/gift.png" title='新人注册享好礼，惊喜红包等你拿'></advertisement>
		</block>
		<!-- 广告结束 -->
		
		<!-- 抢购 -->
		<block>
			<time-buy></time-buy>
		</block>
		<!-- 抢购结束 -->
		
		<!-- 口碑推荐 -->
		<block >
			<view class="card bg-white" >
				<view class="pl-2">
					<view class="title">
						爆款推荐
					</view>
				</view>
				<view class="goodList">
					<view class="goodList_left ">
						<view class="goodList_left_title">Huawei MetaPad10.4英寸</view>
						<image class="goodList_left_img" mode="heightFix" src="https://res3.vmallres.com/shopdc/pic/2021617/e9346254-1191-422f-9598-92c179d9ac3e.png"></image>
					</view>
					<view class="goodList_right">
						<image class="goodList_right_img" mode="aspectFill" src="https://res2.vmallres.com/shopdc/pic/2021617/390d217f-0521-417b-b263-8a61acfac61c.png"></image>
						<image class="goodList_right_img" mode="aspectFill" src="https://res0.vmallres.com/shopdc/pic/2021617/d0541e3c-dd65-434b-be79-0dbe3717be58.png"></image>
					</view>
				</view>
			</view>
		</block>
		<!-- 口碑推荐结束 -->
		
		<!-- 套餐区域 -->
		<block>
			<view class="card bg-white" >
				<view class="pl-2 bg-white">
					<view class="title">
						精选推荐
					</view>
				</view>
				<view class="cardList">
					<shopCardItem :wallList='wallList' @handleClick='handleClick'></shopCardItem>
				</view>
			</view>
		</block>
		<!-- 套餐区域结束 -->
	
	
	
		<!-- 广告弹窗 -->
			<ui-modal name="advertisementModal" transparent iconCancel>
				<view class="pb-4 flex-center">
					<image src="https://oss.color-ui.com/img/qtrr8.png" mode="widthFix" lazy-load></image>
				</view>
			</ui-modal>
		<!-- 广告弹窗结束 -->
	</ui-sys>
</template>

<script>
import shopCardItem from './components/waterShopCard.vue'
import timeBuy from './components/timeBuy.vue'
let _this = null;
export default {
	components:{
		shopCardItem,
		timeBuy
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
					item : '短袖',
					img : 'https://cdn.jsdelivr.net/gh/bypanghu/assests@master/colorShop/icon/T恤.png'
				},
				{
					item : '电器',
					img : 'https://cdn.jsdelivr.net/gh/bypanghu/assests@master/colorShop/icon/accessories.png'
				},
				{
					item : '服装',
					img : 'https://cdn.jsdelivr.net/gh/bypanghu/assests@master/colorShop/icon/m_shirt.png'
				},
				{
					item : '手机配件',
					img : 'https://cdn.jsdelivr.net/gh/bypanghu/assests@master/colorShop/icon/phone.png'
				},
				{
					item : '益智玩具',
					img : 'https://cdn.jsdelivr.net/gh/bypanghu/assests@master/colorShop/icon/bottle.png'
				},
				{
					item : '电脑周边',
					img : 'https://cdn.jsdelivr.net/gh/bypanghu/assests@master/colorShop/icon/computer.png'
				},
				{
					item : '家电',
					img : 'https://cdn.jsdelivr.net/gh/bypanghu/assests@master/colorShop/icon/kitchenware.png'
				},
				{
					item : '智能电器',
					img : 'https://cdn.jsdelivr.net/gh/bypanghu/assests@master/colorShop/icon/smallappliance.png'
				},
				{
					item : '厨具',
					img : 'https://cdn.jsdelivr.net/gh/bypanghu/assests@master/colorShop/icon/tableware.png'
				},
				{
					item : '运动裤',
					img : 'https://cdn.jsdelivr.net/gh/bypanghu/assests@master/colorShop/icon/sportspants.png'
				},
				{
					item : '书籍',
					img : 'https://cdn.jsdelivr.net/gh/bypanghu/assests@master/colorShop/icon/books.png'
				},
				{
					item : '影音制品',
					img : 'https://cdn.jsdelivr.net/gh/bypanghu/assests@master/colorShop/icon/audiovisual.png'
				},
			],
			wallList :[
				{
					img : 'https://oss.color-ui.com/img/dkarj.png',
					title : 'colorShop',
					content : 'colorshop一个船新版本的shop，基于colorui3.0的商城模版',
					titleLable : 'ColorUI',
					lable : '晓港推荐',
					nowPrice : 4999,
					oldPrice : 6000
				},
				{
					img : 'https://consumer-img.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/plp/laptops/02list_02.jpg',
					title : 'Huawei MetaBook X',
					content : '机身轻至 1 kg，纤薄程度超乎想象。出行随身便携，灵感随心而来',
					titleLable : '自营',
					lable : '13英寸',
					nowPrice : 7999,
					oldPrice : 9000
				},
				{
					img : 'https://res3.vmallres.com/shopdc/pic/2021617/e9346254-1191-422f-9598-92c179d9ac3e.png',
					title : 'Huawei MetaPad ',
					content : 'Huawei MetaPad 10.4英寸 wifi6+2K全面屏',
					titleLable : '自营',
					lable : '限时直降100元',
					nowPrice : 1999,
					oldPrice : 2099
				},
				{
					img : 'https://img20.360buyimg.com/babel/s150x150_jfs/t1/163755/4/14481/122877/6059bd24Ef332b056/258fbdcc53851ba4.jpg.webp',
					title : 'Readmi K40 pro',
					titleLable : '自营',
					content : 'Readmi K40 pro旗舰骁龙888 三星E4旗舰120HZ高刷',
					lable : '自营',
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
					img : 'https://cdn.jsdelivr.net/gh/bypanghu/assests@master/iphone12_2.png',
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
			],
			scrollDiv : 0
		};
	},
	onLoad() {
		_this = this;
		this.$Modal.show('advertisementModal')
	},
	methods: {
		handleClick(e){
			console.log(e)
			uni.navigateTo({
				url : '/pages/home/pages/product/product'
			})
		},
		handleScroll(e){
			var that = this
			const width = 
			uni.getSystemInfo({
				success(res) {
					const windowWidth = res.windowWidth
					that.scrollDiv = ((80 / 3) * ((e.detail.scrollLeft) /(windowWidth / 2)))
				}
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
				background-image: linear-gradient(0deg,rgba(0, 0, 0, 0.6) 0%, rgba(0,0,0,0.01) 100%);
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
				box-shadow: 0 0 4px 3px rgba(0,0,0,0.03);
			}
		}
	}
	.center{
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.tabs_progress{
		width: 80rpx;
		height: 10rpx;
		border-radius: 50rpx;
		background-color: rgba(0,0,0,0.08);
		.tabs_progress_cur{
			width: calc(80rpx / 3 * 2);
			height: 10rpx;
			background-color: #37C0FE;
			border-radius: 50rpx;
		}
	}
	.title{
		font-size: 32rpx;
		font-weight: 700;
		margin: 20rpx 0;
		position: relative;
		&::after{
			content: '';
			width: 80rpx;
			position: absolute;
			bottom: 0;
			height: 5rpx;
			left: 40rpx;
			background-color: rgba($color: #0f80ff, $alpha: 0.8);
		}
	}
</style>
