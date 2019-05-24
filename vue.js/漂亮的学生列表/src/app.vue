<template>
    <div>
        <ul>
          <li v-for="(hero,index) in heros" :key="index" :class="{'A':'red','B':'green','C':'blue','D':'pink'}[hero.score]">
          {{hero.name}},{{hero.score}}
          <button @click="del(index)">删除英雄</button>
          </li>
        </ul>
        英雄姓名：<input type="text" name="" v-model="name"><br />
        英雄成绩：<input type="text" name="" v-model="score">
        <button @click="addHero()">添加英雄</button>
    </div>
</template>
<script>
// class 取一个 返回一个字符串
// 取多个  返回一个对象
// 一个学生列表  每个人都有成绩 AB，根据当前学生的成绩匹配显示不同的颜色
// A-red B-green
    export default {
        data(){
            return {
                // 双向数据绑定
                name:"",score:"" ,
                heros:[{
                    id:1,
                    name:'奥利安娜',
                    score:'A'
                },{
                id:2,
                name:'崔斯特',
                score:'B'
            },{ id:3,
                name:'妲己',
                score:'C'
            },{ 
                id:4,
                name:'阿拉斯加',
                score:'D'
            }]               
            }
        },

        //声明函数，属于组件对象的
        methods:{
            addHero(){
                this.heros.push({
                    name:this.name,
                    score:this.score
                });
                this.name = "";
                this.score = "";
            },
            del(index){
                this.heros.splice(index,1)
            }

               }
           }
</script>
<style>
.red{
    background-color: red;
}
.green{
    background-color: green;
}
.pink{
    background-color: pink;
}
.blue {
    background-color: blue;
}
</style>