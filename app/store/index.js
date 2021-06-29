export default {
	state: {
		isTheme: true, // 是否开启多主题（true:会读缓存，能设置对应的主题)
		themeAuto: true, // 跟随系统
		theme: 'light', // 设置默认主题
		main: 'blue', // 设置默认强调色
		homePath: '/pages/home/index', // 设置首页路径(一些组件会用到跳回主页，请每个项目设置好！)
		tabbar: [{
				title: '购物',
				icon: '/static/tab_icon/home.png',
				curIcon: '/static/tab_icon/home_cur.png',
				url: '/pages/home/index',
				type: 'tab'
			},
			{
				title: '购物车',
				icon: '/static/tab_icon/car.png',
				curIcon: '/static/tab_icon/car_cur.png',
				url: '/pages/shopCar/index',
				type: 'tab'
			},
			{
				title: '我的',
				icon: '/static/tab_icon/mine.png',
				curIcon: '/static/tab_icon/mine_cur.png',
				url: '/pages/my/index',
				type: 'tab'
			},
		]
	},
	getters: {
		getCustomTheme: state => {
			return state.theme
		},
		getCustomMain: state => {
			return state.main
		},
		getTabbar: state => {
			return state.tabbar
		},
		
	},
	mutations: {
		
	},
	actions: {}
}
