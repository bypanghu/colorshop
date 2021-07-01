<template>
	<view class="time_buy card bg-white">
		<view class="time_buy_head">
			<view class="head_item_title">
				限时抢购
			</view>
			<view class="head_item_time">
				<span class='head_item_time_item'>{{h}}</span>:
				<span class='head_item_time_item'>{{m}}</span>:
				<span class='head_item_time_item'>{{s}}</span>
			</view>
		</view>
		<scroll-view scroll-x="true" class="">
			<view class="time_buy_content">
				<view class="time_buy_content_item" v-for="item , index in 4" :key='index'>
					<image class="time_buy_content_image" lazy-load v-if="item %2 === 0" src="https://consumer-img.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/pdp/laptops/matebook-16/matebook16.png" mode="aspectFit"></image>
					<image class="time_buy_content_image" lazy-load v-if="item %2 !== 0" src="https://img11.360buyimg.com/img/s150x150_jfs/t1/122505/19/15070/68848/5f861494Ebe330db5/24bc162f493ec940.jpg!cc_150x150.webp" mode="aspectFit"></image>
					<view class="time_buy_price">
						<view class="time_buy_price_now text-price text-red">4999</view>
						<view class="time_buy_price_old text-price text-del">6000</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default{
		name :'timeBuy',
		data(){
			return {
				h:23,//时
				m:59,//分
				s:59,//秒
				timer : null
			}
		},
		mounted() {
			this.timer = setInterval(()=>{
				this.timeCount()
			},1000)
		},
		methods:{
			 timeCount(){
				--this.s;
				if(this.s<0){
					--this.m;
					this.s=59;
				}
				if(this.m<0){
					--this.h;
					this.m=59
				}
				if(this.h<0){
					this.s=0;
					this.m=0;
				}
					// this.countdown = this.h+":"+this.m+":"+this.s
					this.h =  this.h > 9 ? this.h : "0"+ this.h 
					this.m =  this.m > 9 ? this.m : "0"+ this.m
					this.s =  this.s > 9 ? this.s : "0"+ this.s
				},
		}
	}
</script>

<style lang="scss" scoped>
	.time_buy_head{
		display: flex;
		align-items: center;
		margin: 20rpx;
		.head_item_title{
			font-size: 32rpx;
			font-weight: 700;
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
		.head_item_time{
			margin-left: 20rpx;
			.head_item_time_item{
				width: 30rpx;
				height: 30rpx;
				line-height: 30rpx;
				background-color: rgba(0,129,255,0.1);
				padding: 4rpx;
				border: 1px solid rgba(0,129,255,0.2);
				color:rgba(0,129,255,1) ;
				text-align: center;
				border-radius: 10rpx;
			}
		}
		
	}
	.time_buy_content{
		padding: 10rpx;
		height: 260rpx;
		display: flex;
		.time_buy_content_item{
			width: 260rpx;
			margin: 10rpx;
			box-shadow: 0 0 10px 0 rgba(0,0,0,0.06);
			border-radius: 20rpx;
			.time_buy_content_image{
				width: 240rpx;
				height: 180rpx;
				border-radius: 10rpx;
			}
			.time_buy_price{
				display: flex;
				align-items: center;
				justify-content: space-around;
				.time_buy_price_old{
					font-size: 20rpx;
					color: #999;
				}
				.time_buy_price_now{
					font-size: 32rpx;
				}
			}
		}
	}
</style>
