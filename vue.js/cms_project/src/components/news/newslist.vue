<template>
    <div>
        <!--引入子组件 -->
        <nav-bar title='新闻列表'></nav-bar>

    <!-- MUI 图文列表 -->
        <ul class="mui-table-view" style="height:300px;">
            <li v-for="news in newsList" :key="news.id" class="mui-table-view-cell mui-media">
                <router-link :to="{name:'news.detail',query:{id:news.id} }">
                    <img class="mui-media-object mui-pull-left" :src="news.img_url"alt=""> 
              <!--       在没有使用vue-for进行遍历时img的src属性之前不能加冒号否则会报错 -->
                    <div class="mui-media-body">
                        <span v-text="news.title"></span>
                        <div class="news-desc">
                            <p>点击数:{{news.click}}</p>
                            <p>发表时间:{{news.add_time | convertDate}}</p>
                        </div>
                    </div>
                </router-link>

            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            newsList:[],//新闻列表数据
        }
    },
    created(){
        //发起请求
        this.$ajax.get('NewsList')
        .then(res=>{
            this.newsList = res.data.message;
        })
        .catch(err=>{
            console.log(err);
        })
    }
}
</script>
<style scoped>
.mui-media-body p {
    color: #0bb0f5;
}

.news-desc p:nth-child(1) {
    float: left;
}

.news-desc p:nth-child(2) {
    float: right;
}

</style>
