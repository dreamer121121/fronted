<template>
        <div>
       		<!--  头部内容 开始-->
        	<mt-header title="目标检测项目展示系统"></mt-header>
        	<!--  头部内容 结束-->
			
			<!-- 主页内容 开始 -->
        	<router-view class="content"></router-view>
        	<!-- 主页内容 结束 -->

      		<!-- 底部内容 开始-->
  			<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" :to="{name:'home'}">
				<span class="mui-icon icon-shouye"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" :to="{name:'member'}">
				<span class="mui-icon icon-huiyuan"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" :to="{name:'shopcart'}">
				<span class="mui-icon icon-gouwuche"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" :to="{name:'search'}">
				<span class="mui-icon icon-fangdajing"></span>
				<span class="mui-tab-label">查找</span>
			</router-link>
			</nav>
			<!-- 底部内容 结束-->
        </div>
</template>
<script>
      export default {
	     data(){
	          return {        
	            }
	        },
      }
</script>
<style scoped>
.content {
	width: 500px;
	position: absolute;
	left: 50%; /*使得定位元素水平居中的方法*/
	margin-left: -250px;
}
.mui-bar-tab {
	width: 500px;
}
.mui-bar {
	margin: 0 auto;
}
.mint-header {
	background-color: #000;
	width: 500px;
	position: relative;
	margin: auto;
}
</style>