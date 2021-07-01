<template>
	<view>
		<view class="cardList" >
			<view class="left" >
				<view class="shopCard" v-for="(item ,index)  in leftList" :key='index' @click="clickCard(item)">
					<view class="shopCardHead">
						<image lazy-load :src="item.img" class="shopCard_img" mode="widthFix"></image>
						<view class="shopCardTitle">{{item.title}}</view>
					</view>
					<view class="shopCardFoot">
						<view class="shopCardFoot_item">
							<view class="item_explain">
								<text class="item_explain_lable bg-red-gradient" v-if="item.titleLable">{{item.titleLable}}</text>
								{{item.content}}
							</view>
							<view class="item_label text-light bg-red-thin" v-if="item.lable">{{item.lable}}</view>
							<view class="flex_center">
								<view class="item_nowPrice text-price text-red">{{item.nowPrice}}</view>
								<view class="item_oldPrice text-price text-del">{{item.oldPrice}}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="right" >
				<view class="shopCard" v-for="(item ,index)  in rightList" :key='index' @click="clickCard(item)">
					<view class="shopCardHead">
						<image lazy-load :src="item.img" class="shopCard_img" mode="widthFix"></image>
						<view class="shopCardTitle">{{item.title}}</view>
					</view>
					<view class="shopCardFoot">
						<view class="shopCardFoot_item">
							<view class="item_explain">
								<text class="item_explain_lable bg-red-gradient" v-if="item.titleLable">{{item.titleLable}}</text>
								{{item.content}}
							</view>
							<view class="item_label text-light bg-red-thin" v-if="item.lable">{{item.lable}}</view>
							<view class="flex_center">
								<view class="item_nowPrice text-price text-red">{{item.nowPrice}}</view>
								<view class="item_oldPrice text-price text-del">{{item.oldPrice}}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'shopCard',
		props:{
			cardType : {
				type: String,
				default: 'card'
			},
			cardPosition :{
				type: String,
				default: 'left'
			},
			wallList : {
				type : Array,
				default: []
			}
		},
		data(){
			return {
				tempList : [],
				rightList : [],
				leftList : []
			}
		},
		mounted() {
			this.tempList = this.wallList;
			this.splitData();
		},
		methods:{
			splitData(){
				this.tempList.map((item ,index) =>{
					if(index %2 !== 0){
						this.rightList.push(item)
					}else{
						this.leftList.push(item)
					}
				})
			},
			onImageLoad(e){
				console.log(e)
			},
			clickCard(e){
				this.$emit('handleClick',e)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cardList{
		display: flex;
		align-items: flex-start;
	}
	.left{
		flex: 1;
		flex-direction: column;
		height: auto;
		width: 100%;
	}
	.shopCard{
		background-color: #fff;
		width: calc(50vw - 50rpx);
		overflow: hidden;
		border-radius: 10rpx;
		margin: 10rpx;
		display: inline-block;
		box-shadow: 0 0 20px 3px rgba(0,0,0,0.03);
		.shopCardHead{
			width: 100%;
			position: relative;
		}
		.shopCard_img{
			width: 100%;
		}
		.shopCardTitle{
			width: 100%;
			position: absolute;
			bottom: 0;
			background-image: linear-gradient(0deg,rgba(0, 0, 0, 0.6) 0%, rgba(0,0,0,0.01) 100%);
			background-size: cover;
			max-height: 80rpx;
			height: 80rpx;
			color: #fff;
			line-height: 90rpx;
			font-size: 32rpx;
			font-weight: 700;
			padding-left: 10rpx;
		}
		.shopCardFoot{
			padding: 10rpx;
			background-color: #fff;
			color: #777;
			.item_explain{
				max-height: 60rpx;
				line-height: 30rpx;
				font-size: 24rpx;
				text-overflow: -o-ellipsis-lastline;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				line-clamp: 2;
				-webkit-box-orient: vertical;
				.item_explain_lable{
					font-size: 20rpx;
					border-radius: 5rpx;
					padding: 2rpx 6rpx;
					margin-right: 4rpx;
					line-height: 30rpx;
				}
			}
			.item_label{
				margin-top: 5rpx;
				font-size: 20rpx;
				display: inline-block;
				border-radius: 5rpx;
				padding: 2rpx 10rpx;
			}
			.item_nowPrice{
				font-size: 32rpx;
				margin-top: 5rpx;
			}
			.item_oldPrice{
				font-size: 20rpx;
				color: #999;
				margin-left: 10rpx;
			}
		}
	}
	.flex_center{
		display: flex;
		align-items: flex-end;
	}
</style>
