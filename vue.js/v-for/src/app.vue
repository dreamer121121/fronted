<template>
    <div>
        <ul>
          <li v-for="(stu,index) in stus" v-bind:key="index">
            index:{{index}} stu:{{stu}}
          </li>
        </ul>
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
                stus:[{name:'jack',score:'A'},{name:'rose',score:'B'}]
                
            }
        },

        //声明函数，属于组件对象的
        methods:{

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
.big{
    font-size: 30px;
}
</style>