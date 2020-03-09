var btnle = document.getElementsByClassName("btn_left");
var btnri = document.getElementsByClassName("btn_right");
var ull = document.getElementById("yidong")
// console.log(ull)
var le = document.getElementById("btnleft");
var rig = document.getElementById("btnright");
// var lii = document.getElementsByClassName("yidong").children("li")
const yid = document.querySelectorAll(".yidong li")
var clickbumber = 0;
// console.log(yid)
rig.onclick=function(){
    //  clickbumber++
     if(clickbumber>=10){
         clickbumber=0
         yid[0].className="cur"
     }else{
         clickbumber++
         yid[clickbumber].className="cur"
         yid[clickbumber-1].classList.remove("cur")
     }
     console.log(clickbumber)

    if(parseInt(ull.style.right)>=650){
        ull.style.right="0px"
    }else{
        ull.style.right=parseInt(ull.style.right)+180+"px"
    }
}
   le.onclick=function(){

       console.log(ull)
      if(parseInt(ull.style.right)>=-100){
          ull.style.right="0px"
      }else{
          ull.style.left=parseInt(ull.style.right)-100+"px"
      }
   }
  


$(document).ready(function(){
    $('.btn_left').hover(function(){
        // console.log(12152)
$(this).addClass('btn_left_hov')
    },function(){
        $(this).removeClass('btn_left_hov')
    })
    // $('.btn_left').click(function(){
    // //     var this1=this.index()
    // //  $('.year').children('ul').children('li').addClass('cur').siblings('li').removeClass('cur')
    // $(".yidong").css({"left":"-100px"})
    // $(".cur").css({"left":"-100px"})
    // })
    // $('.btn_right').click(function(){
    //     //     var this1=this.index()
    //     //  $('.year').children('ul').children('li').addClass('cur').siblings('li').removeClass('cur')
    //     $(".yidong").css({"left":"100px"})
    //     })
    $(".left").hover(function(){
       $(this).children("img").css({"transform":"scale(1.2)"})
    },function(){
        $(this).children("img").css({"transform":"scale(1.0)"})
    })
    
   $('.btn_right').hover(function(){
$(this).css({"background":"url(../img/btnright.png) no-repeat center center"})
   },function(){
    $(this).css({"background":" url(../img/chronicle_right.png) no-repeat center center"})
   })
   
})


