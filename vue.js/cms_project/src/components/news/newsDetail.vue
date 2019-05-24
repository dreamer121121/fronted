<template>
    <div class="tmpl">
        <nav-bar title="新闻详情"></nav-bar> <!-- 使用子组件 -->
        <div class="news-title">
            <p v-text="newsDetail.title"></p>
            <div>
                <span>{{newsDetail.click}}次点击</span>
                <span>分类:民生经济</span>
                <span>添加时间:{{newsDetail.add_time | convertDate}}</span>
            </div>
        </div>
        <div class="news-content" >{{newsDetail.content}}</div>
    </div>
</template>
<script>
      export default {
	     data(){
	          return {   
	          newsDetail:[],//象征性的表示数据的类型     
	            }
	        },
	     created(){
	     	//1.获取路由参数
	     	let id = this.$route.query.id;
	     	//2.拼接路由参数成为后台请求URL
	     	var url = 'News/detail?id='+id
	     	this.$ajax.get(url)
	     	.then(res=>{
	     		 //3.将获取的数据渲染到页面中
	     		 this.newsDetail = res.data.message[0];
	     		 console.log(this.newsDetail)
	     	})
	 
	     }
      }
</script>
<style>
.news-title p {
    color: #0a87f8;
    font-size: 20px;
    font-weight: bold;
}

.news-title span {
    margin-right: 30px;
}

.news-title {
    margin-top: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}


/*主体文章的左右距离*/

.news-content {
    padding: 10 5;
}
</style>