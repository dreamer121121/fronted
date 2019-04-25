// 实例化对象
new Vue({
	el: "#app",     //指定将实例对象装载的位置
	template: "<div>{{fruit}}</div>",
	data: {
		fruit: 'apple'
	}
})

//组件
new Vue({
	el: "body",
	components: {app}
})