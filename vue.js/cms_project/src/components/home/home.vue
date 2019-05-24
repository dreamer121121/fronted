<template>
        <div class="content"> 
        	<!-- 轮播图 开始-->
        	<mt-swipe :auto="4000">
			  <mt-swipe-item><a href="#"><img src="../../static/img/room.jpg" alt=""></a></mt-swipe-item>
			  <mt-swipe-item><a href="#"><img src="../../static/img/car.jpg" alt=""></a></mt-swipe-item>
			  <mt-swipe-item><a href="#"><img src="../../static/img/cat.jpg" alt=""></a></mt-swipe-item>
			</mt-swipe>
			<!-- 轮播图 结束-->

			<!-- 九宫格 开始-->
			<div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            <router-link :to="{name:'news.list'}">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻资讯</div>
		            </router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            <router-link :to="{name:'pic.share'}" >
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">图文分享</div>
		            </router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">商品展示</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">搜索资讯</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div></a></li>

		        </ul> 
		</div>
			<!-- 九宫格 结束-->
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
}
/*轮播图样式 开始*/
.mint-swipe {
		height: 375px;
		text-align: center;
		margin-top: 0px;
	}
.mint-swipe img {
		width: 100%;
		height: 375px;
	}

/*轮播图样式 结束*/

/*九宫格样式 开始*/

.mui-content ul {
		margin-top: 0px;
	}
.mui-table-view.mui-grid-view.mui-grid-9 {
	background-color: white;
	margin: 0;
	border: 0;
}
.mui-table-view.mui-grid-view.mui-grid-9 li {
	border: 0;
}

/*清除九宫格字体图标 开始*/
.mui-icon-home:before,
.mui-icon-email:before,
.mui-icon-chatbubble:before,
.mui-icon-location:before,
.mui-icon-search:before,
.mui-icon-phone:before {
	content: '';
}

/*清除九宫格字体图标 结束*/

/*设置九宫格字体图标*/
.mui-icon-home {
	background-image: url('../../static/img/news.png');
	background-repeat: round;
}
.mui-icon-email {
	background-image: url('../../static/img/picShare.png');
	background-repeat: round;
}

.mui-icon-chatbubble {
	background-image: url('../../static/img/goodShow.png');
	background-repeat: round;
}
.mui-icon-location {
	background-image: url('../../static/img/feedback.png');
	background-repeat: round;
}
.mui-icon-search {
	background-image: url('../../static/img/search.png');
	background-repeat: round;
}

.mui-icon-phone {
	background-image: url('../../static/img/callme.png');
	background-repeat: round;
}
.mui-icon {
	height: 80px;
	width: 80px;
}
/*九宫格样式 结束*/

</style>