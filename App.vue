<script>
	import store from '@/ui/store'
	export default {
		onThemeChange: function (res){	
			console.log('onThemeChange',res);
			if(store.state.sys_theme == 'auto'){
				store.commit('setStatusStyle', res.theme == 'light' ? 'dark' : 'light');
			}
		}
	}
</script>

<style lang="scss">
	@import '@/ui/scss/ui';
	.card{
		margin: 20rpx ;
		padding: 10rpx;
		overflow: hidden;
		width: calc(100vw - 40rpx);
		border-radius: 10rpx;
	}
	
	
	
</style>
