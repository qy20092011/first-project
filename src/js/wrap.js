function getStyle(obj,name){
    if(obj.currentStyle){
        return obj.currentStyle[name];    
    }else{
        return getComputedStyle(obj,false)[name];
    }
}

function startMove(obj, json, fnEnd) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var bStop = true;
        for (var attr in json) {
            var cur = 0;
            if (attr == "opacity") {
                cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
            } else {
                cur = parseInt(getStyle(obj, attr))
            }
            var speed = (json[attr] - cur) / 10;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (cur !== json[attr]) {
                bStop = false;
            };
            if (attr == "opacity") {
                obj.style.opacity = (speed + cur) / 100;
                obj.style.filter = 'alpha(opacity:' + (speed + cur) + ')';
            } else {
                obj.style[attr] = cur + speed + 'px';
            }
        }
        if (bStop) {
            clearInterval(obj.timer);
            if (fnEnd) fnEnd();
        }
    },30)
}


document.addEventListener('DOMContentLoaded',()=>{
    var wrap = document.getElementById('wrap');
    var content = document.getElementById('content');
    var tips = document.getElementById('tips');
    var aLi = tips.getElementsByTagName('li');
    var now = 0;

    for(var i=0;i<aLi.length;i++){
        //把初始状态定义好
        aLi[0].className = 'active';
        content.style.left = 0 +'px';
        
        //自定义属性
        aLi[i].index = i;

        //点击事件
        aLi[i].onclick = function(){
            now = this.index;
            play();
        }
    }

    //play函数
    function play(){
        for(var j=0;j<aLi.length;j++){
            aLi[j].className = '';
        }
        aLi[now].className = 'active';
        startMove(content,{
            left:-1920*now,
        });
    }

    //autoPlay函数
    function autoPlay(){
        now++;
        if(now == aLi.length){
            now = 0;
        }
        play();
    }

    var timer = setInterval(autoPlay,2000);

    wrap.onmouseover = function(){
        clearInterval(timer);
    }

    wrap.onmouseout = function(){
        timer = setInterval(autoPlay,2000);
    }
})