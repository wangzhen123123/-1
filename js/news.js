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

