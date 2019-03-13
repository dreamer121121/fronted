function $my(element) {
    return document.getElementById(element)
}


function animate(element, target) {
    //先清理定时器
    clearInterval(element.timeId);
    //一会要清理定时器(只产生一个定时器)
    element.timeId = setInterval(function () {
        //获取div的当前的位置(关键点）
        var current = element.offsetLeft;//数字类型,没有px
        //div每次移动多少像素---步数
        var step = 10;
        step = current < target ? step : -step;
        //每次移动后的距离
        current += step;
        //判断当前移动后的位置是否到达目标位置
        if (Math.abs(target - current) > Math.abs(step)) {
            element.style.left = current + "px";
        } else {
            //清理定时器
            clearInterval( element.timeId );
            element.style.left = target + "px";
        }
    }, 20);
}

