'use strict';


//引入第三方包 开始
import Vue from 'vue';

//VueRouter:引入路由对象
import VueRouter from 'vue-router';
//VueRouter:安装插件
Vue.use(VueRouter);

//Mint:引入mint-ui
import Mint from 'mint-ui';
//Mint:引入css
import 'mint-ui/lib/style.css';
//Mint:安装插件
Vue.use(Mint);
//MUI:引入mui的样式
import './static/vendor/mui/dist/css/mui.css';
//全局样式
import './static/css/global.css';


//Axios:引入axios
import Axios from 'axios';
//挂载原型
Vue.prototype.$ajax = Axios;
//默认配置
Axios.defaults.baseURL = 'http://localhost:8000/api/';
//Moment:引入moment
import Moment from 'moment';

//引入第三方包 结束

//引入自己的vue文件 开始  
import App from './app.vue';
import Home from './components/home/home.vue';
import Member from './components/member/member.vue';
import Shopcart from './components/shopcart/shopcart.vue';
import Search from './components/search/search.vue';
import NewsList from './components/news/newslist.vue';
//引入自己的vue文件 结尾


//VueRouter:创建对象并配置路由规则！！！导航
let router = new VueRouter({
    linkActiveClass:'mui-active', //设置链接激活时使用的样式
    routes: [
        //VueRouter：配置路由规则
        { path: '/', redirect: { name: 'home' } }, //重定向
        { name: 'home', path: '/home', component: Home },//首页
        { name:'member',path:'/member',component: Member}, //会员
        { name: 'shopcart',path:'/shopcart',component:Shopcart}, //购物车
        { name: 'search',path:'/search',component:Search}, //查找
        { name: 'news.list',path:'/news/list',component:NewsList}
    ]
});

//创建vue实例
new Vue({
    el: '#app',
    router,
    render: c => c(App)
})