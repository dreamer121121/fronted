<template>
        <div>
        </div>
</template>
<script>
      export default {
      	filters:{
      		myFilter:function(value){
      			//字符串翻转
      			//字符串转换为数组，翻转数组 转换为字符串
      			return value.split('').reverse().join('');
      		}
      	},
	     data(){
	          return {  
	          text:''      
	            }
	        },
      }
</script>
<style>
</style>