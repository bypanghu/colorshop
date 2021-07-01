<script>
	import store from '@/ui/store'
	export default {
		onLaunch: function() {
			uni.hideTabBar();
			console.log('App Launch');
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		onThemeChange: function (res){	
			console.log('onThemeChange',res);
			if(store.state.sys_theme == 'auto'){
				store.commit('setStatusStyle', res.theme == 'light' ? 'dark' : 'light');
			}
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/ui/scss/ui';
	.card{
		margin: 20rpx ;
		padding: 10rpx;
		overflow: hidden;
		width: calc(100vw - 40rpx);
		border-radius: 10rpx;
	}
	
	
	
</style>
