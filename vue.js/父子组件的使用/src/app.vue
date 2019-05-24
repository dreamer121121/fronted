<template>
    <div>
        <header-vue></header-vue>
        <body-vue></body-vue>
        <foot-vue></foot-vue>
    </div>
</template>
<script>
import headerVue from './components/header.vue';
import bodyVue from './components/body.vue';
import footVue from './components/foot.vue';

    export default {
        data(){
            return {
             
            }
        },

        //声明函数，属于组件对象的
        methods:{

               },
        //声明组件，必须声明才能使用
        components:{
            headerVue,
            bodyVue,
            footVue,
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