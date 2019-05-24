<template>
        <div id="">
    	<nav-bar title="图文分享"></nav-bar>
        <!-- 引入返回导航 -->
        <div class="photo-header">
            <ul>
                <li v-for="category in categorys" :key="category.id">
                    <a href="javascript:;" @click="loadImg(category.id)">{{category.title}}</a>
                </li>
                
            </ul>
        </div>
        <div class="photo-list">
            <ul>
                <li v-for="img in imgs" :key="img.id">
                    <router-link :to="{name:'photo.detail',params:{id:img.id} }">
                         <!-- <img :src="img.img_url"> -->
                         <!-- 懒加载 -->
                         <img v-lazy="img.img_url">
                        <p>
                            <span v-text="img.title"></span>
                            <br>
                            <span v-text="img.zhaiyao"></span>
                        </p>
                    </router-link>
                </li>
            </ul>
        </div>
        </div>
</template>
<script>
      export default {
	     data(){
	          return {        
	            }
	        },
	        created(){

	        }
      }
</script>
<style>
</style>G