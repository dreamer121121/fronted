<template>
        <div id="">
   		<header class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="goBack"></a>
			<h1 class="mui-title">{{title}}</h1> <!-- 需要外部传递 -->
		</header>
        </div>
</template>
<script>
      export default {
	     data(){
	          return {        
	            }
	        },
	        props:['title'], //接收父组件参数
	        methods:{
	        	goBack(){
	        		this.$router.go(-1)//根据浏览器记录返回上一层
	        	}
	        },
      }
</script>
<style scoped>
.mui-bar.mui-bar-nav {
    position: relative;
    background-color: #fff;
    box-shadow:0 0px 1px #ccc;
}
</style>