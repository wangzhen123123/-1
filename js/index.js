$(document).ready(function () {
    $('.magnifying').click(function () {
        // console.log(123)
        $('.search').css({ "display": "block" })
    })
    $('.left').children('i').click(function () {
        // console.log(123)
        $('.search').css({ "display": "none" })
    })
    $(".burger").click(function () {
        $('nav_menu').children("li")
    })

    $(".one_hov").hover(function () {
        // console.log(123)
        $(this).children('.bg_').css({ "opacity": "0" })
        $(this).children('.but').children().children().css({ "width": "50%" })
    }, function () {
        $('.bg_').css({ "opacity": "1" })
        $('.but').children().children().css({ "width": "0%" })
    })
    $(".tow_hov").hover(function () {
        // console.log(123)
        $(this).children('.bg_').css({ "opacity": "0" })
        $(this).children('.but').children().children().css({ "width": "50%" })
    }, function () {
        $('.bg_').css({ "opacity": "1" })
        $('.but').children().children().css({ "width": "0%" })
    })
    $(".three_hov").hover(function () {
        // console.log(123)
        $(this).children('.bg_').css({ "opacity": "0" })
        $(this).children('.but').children().children().css({ "width": "50%" })
    }, function () {
        $('.bg_').css({ "opacity": "1" })
        $('.but').children().children().css({ "width": "0%" })
    })
    $(".four_hov").hover(function () {
        // console.log(123)
        $(this).children('.bg_').css({ "opacity": "0" })
        $(this).children('.but').children().children().css({ "width": "50%" })
    }, function () {
        $('.bg_').css({ "opacity": "1" })
        $('.but').children().children().css({ "width": "0%" })
    })
    $(".five_hov").hover(function () {
        // console.log(123)
        $(this).children('.bg_').css({ "opacity": "0" })
        $(this).children('.but').children().children().css({ "width": "50%" })
    }, function () {
        $('.bg_').css({ "opacity": "1" })
        $('.but').children().children().css({ "width": "0%" })
    })
    $(".six_hov").hover(function () {
        // console.log(123)
        $(this).children('.bg_').css({ "opacity": "0" })
        $(this).children('.but').children().children().css({ "width": "50%" })
    }, function () {
        $('.bg_').css({ "opacity": "1" })
        $('.but').children().children().css({ "width": "0%" })
    })
    $('.cate_con').hover(function () {
        $(this).children('a').children('.one1').children('img').css({ "transform": "scale(1.2)" })
        $(this).children('a').children('.one1').children('.tit').children('.move').children('i').addClass('rot')
        $(this).children('a').children('.one1').children('.tit').children('.move').children('span').css({ "color": "#fff" })
    }, function () {
        $(this).children('a').children('.one1').children('img').css({ "transform": "scale(1.0)" })
        $(this).children('a').children('.one1').children('.tit').children('.move').children('i').removeClass('rot')
        $(this).children('a').children('.one1').children('.tit').children('.move').children('span').css({ "color": "#97938f" })
    })
    $('.ersw').hover(function () {
        $(this).children('img').css({ "transform": "scale(1.2)" })
        $(this).children('.img_tit').children('.move').children('i').addClass('rot')
        $(this).children('a').children('.one1').children('.tit').children('.move').children('span').css({ "color": "#fff" })

    }, function () {
        $(this).children('img').css({ "transform": "scale(1.0)" })
        $(this).children('.img_tit').children('.move').children('i').removeClass('rot')
        $(this).children('a').children('.one1').children('.tit').children('.move').children('span').css({ "color": "#97938f" })
    })
    var i = 0;
    var timer;
    bann()
    function bann() {
        timer = setInterval(function () {
            i++;
            if (i == 3) {
                i = 0;
            }
            show()
        }, 2000)
        function show() {
            $(".show").children().eq(i).css({ "opacity": "1" }).siblings().css({ "opacity": "0" })
            $(".in_show").children().eq(i).css({ "opacity": "1" }).siblings().css({ "opacity": "0" })
            $(".sp").children().eq(i).css({ "background": "#fff" }).siblings().css({ "background": "" })
            $()
        }
    }
    // $(window).scroll(function () {
    //     
    // })
    $(window).scroll(function () {
        var winhe = parseInt($(window).height())
        var dovu = parseInt($(document).height())
        console.log(dovu)
        // console.log( $(window).scrollTop()+winhe)
        // console.log(dovu)
        if (($(window).scrollTop() < 500)) {
            $(".fix_right").css({ "opacity": "0" })
        }
        if ($(window).scrollTop() > 500) {
            $(".fix_right").css({ "opacity": "1" })
        } if ($(window).scrollTop() + winhe == dovu) {
            var hh = $(".fooetr").children(".content").children("ul")
            for (var l = 0; l < hh.length; l++) {
                var kk = l * 0.2 + 0.3;
                if (hh[l].style.animation) {
                    hh[l].style.animation = ""
                }else{
                    hh[l].style.animation = " 1s fot ease-in forwards " + kk + "s ";
                }
            }

        }

    })
    $(".fix_right").on("click", function () {
        //   $("body").scrollTop(0)
        $('html,body').animate({ scrollTop: '0px' }, 2000);
    })
})
const burger = document.querySelector(".burger")
const nav = document.querySelector(".nav_menu")
const navilem = document.querySelectorAll(".nav_menu li")
burger.addEventListener("click", function () {
    burger.classList.toggle('active')
    nav.classList.toggle("open")
    for (var k = 0; k < navilem.length; k++) {
        //  console.log(k)
        var dd = k * 0.1 + 0.3;
        console.log(dd)
        if (navilem[k].style.animation) {
            navilem[k].style.animation = "";
        } else {
            navilem[k].style.animation = "0.3s  slideIn ease-in forwards " + dd + "s ";
        }
    }
})

// function Foo(){
//     getName = function(){
//         console.log(1)
//     }
//     return this;
// }
// Foo.getName = function(){
//     console.log(2)
// }
// Foo.prototype.getName = function(){
//     console.log(3)
// }
// var getName = function(){
//     console.log(4)
// }
// function getName(){
//     console.log(5)
// }
// Foo.getName();
// getName();
// Foo().getName();
// getName();
// new Foo.getName();
// new Foo().getName();
// new new Foo().getName();