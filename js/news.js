$(document).ready(function(){
    
 $('.news_text').hover(function(){
    $(this).children('a').children('.img_').children('img').css({"transform":"scale(1.2)"})
    $(this).children('a').children('.img_').children('.move').children('i').addClass('rot1')
    $(this).children('a').children('.img_').children('.move').children('span').css({"color":"#fff"})
     },function(){
        $(this).children('a').children('.img_').children('img').css({"transform":"scale(1.0)"})
        $(this).children('a').children('.img_').children('.move').children('i').removeClass('rot1')
        $(this).children('a').children('.img_').children('.move').children('span').css({"color":"#b20000"})
     })



})

function parseNum(num){  
    var list = new String(num).split('').reverse(); //把传入的实参用split（）分开，然后赋值反转
    // console.log(list) 
    for(var i = 0; i < list.length; i++){//便利每一个
        if( i % 4 == 3){  //如果取模等于三
            list.splice(i, 0, ',');  //就在这个下标后添加逗号
        }  
    }  
    return list.reverse().join('');  //在反转回来链接成字符串，return回去
}  
console.log(parseNum(88888888));  //调用
console.log(3%4)