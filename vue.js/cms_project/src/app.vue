<template>
        <div class="content">
       		<!--  头部内容 开始-->
        	<mt-header title="信息管理系统"></mt-header>
        	<!--  头部内容 结束-->
			
			<!-- 主页内容 开始 -->
        	<router-view></router-view>
        	<!-- 主页内容 结束 -->

      		<!-- 底部内容 开始-->
  			<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" :to="{name:'home'}">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" :to="{name:'member'}">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" :to="{name:'shopcart'}">
				<span class="mui-icon mui-icon-contact"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" :to="{name:'search'}">
				<span class="mui-icon mui-icon-gear"></span>
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
	        // created(){
	        // 	this.$ajax.get('http://182.254.146.100:8899/api/getlunbotu').then(res=>{
	        // 			  console.log(res);
	        // 	})
	        // }
      }
</script>
<style scoped>
	.content {
		width: 600px;
		position: absolute;
		left: 50%;
		margin-left: -300px;
	}
	.mui-bar-tab {
		width: 600px;
		margin-left: 660px;
	}
</style>