window.onload = function () {
    //////////////////////// loading start ///////////////////////////////////////
    setTimeout(function () {
        var wrap_card05 = document.querySelectorAll('.delay--05s');
        wrap_card05.forEach(function (el) {
            if (!el.classList.contains('cards_animation--0-7')) {
                el.classList.add('cards_animation--0-7');
            }
        })
    }, 500)

    setTimeout(function () {
        var wrap_card1 = document.querySelectorAll('.delay--1s');
        wrap_card1.forEach(function (el) {
            if (!el.classList.contains('cards_animation')) {
                el.classList.add('cards_animation');
            }
        })
    }, 800)
    setTimeout(function () {
        var wrap_card2 = document.querySelectorAll('.delay--2s');
        wrap_card2.forEach(function (el) {
            if (!el.classList.contains('cards_animation--1-4')) {
                el.classList.add('cards_animation--1-4');
            }
        })
    }, 500)

    setTimeout(function () {
        var wrap_card2 = document.querySelectorAll('.delay--3s');
        wrap_card2.forEach(function (el) {
            if (!el.classList.contains('cards_animation')) {
                el.classList.add('cards_animation');
            }
        })
    }, 500)
    setTimeout(function () {
        var wrap_card2 = document.querySelectorAll('.back');
        wrap_card2.forEach(function (el) {
            if (!el.classList.contains('cards_animation')) {
                el.classList.add('cards_animation');
            }
        })
    }, 500)
    //////////////////////// loading end ///////////////////////////////////////












    /////////////////////////// variables start /////////////////////////////////////////
    var wrap_card1 = document.querySelector('#open_card1');
    var wrap_card2 = document.querySelector('#open_card2');
    var wrap_card3 = document.querySelector('#open_card3');
    var wrap_card4 = document.querySelector('#open_card4');
    var wrap_card5 = document.querySelector('#open_card5');
    var wrap_card6 = document.querySelector('#open_card6');
    var wrap_card7 = document.querySelector('#open_card7');
    var wrap_back = document.querySelector('.back');
    var close_btn = document.querySelectorAll('.close');
    var card1P = document.querySelector('.card-1__popup');
    var card2P = document.querySelector('.card-2__popup');
    var card3P = document.querySelector('.card-3__popup');
    var card4P = document.querySelector('.card-4__popup');
    var card5P = document.querySelector('.card-5__popup');
    var card6P = document.querySelector('.card-6__popup');
    var card7P = document.querySelector('.card-7__popup');
    var card_all = document.querySelectorAll('.card_all');
    var offset = 0;
    /////////////////////////// variables end /////////////////////////////////////////









    ////////////////////  card wrap function start//////////////////
    function rem() {
        wrap_card1.classList.remove('cards_animation--1-4');
        wrap_card2.classList.remove('cards_animation');
        wrap_card3.classList.remove('cards_animation--0-7');
        wrap_card4.classList.remove('cards_animation');
        wrap_card5.classList.remove('cards_animation--1-4');
        wrap_card6.classList.remove('cards_animation--0-7');
        wrap_card7.classList.remove('cards_animation');
        wrap_back.classList.remove('cards_animation');
    }
    ////////////////////  card wrap function end//////////////////











    ////////////////////////cards unwrapping on click start////////////////////
    document.getElementById('open_card1').onclick = function () {
        rem();
        card1P.classList.toggle('scale1');
    }
    document.getElementById('open_card2').onclick = function () {
        rem();
        card2P.classList.toggle('scale1');
    }
    document.getElementById('open_card3').onclick = function () {
        rem();
        card3P.classList.toggle('scale1');
    }
    document.getElementById('open_card4').onclick = function () {
        rem();
        card4P.classList.toggle('scale1');
    }
    document.getElementById('open_card5').onclick = function () {
        rem();
        card5P.classList.toggle('scale1');
    }
    document.getElementById('open_card6').onclick = function () {
        rem();
        card6P.classList.toggle('scale1');
    }
    document.getElementById('open_card7').onclick = function () {
        rem();
        card7P.classList.toggle('scale1');
    }
    ////////////////////////cards unwrapping on click end////////////////////////










    ///////////////////buttton close start////////////////////////////////////////
    close_btn.forEach((i) => {
        i.addEventListener("click", function (event) {
            event.preventDefault();
            wrap_card1.classList.toggle('cards_animation--1-4');
            wrap_card2.classList.toggle('cards_animation');
            wrap_card3.classList.toggle('cards_animation--0-7');
            wrap_card4.classList.toggle('cards_animation');
            wrap_card5.classList.toggle('cards_animation--1-4');
            wrap_card6.classList.toggle('cards_animation--0-7');
            wrap_card7.classList.toggle('cards_animation');
            wrap_back.classList.toggle('cards_animation');
            document.querySelector('.scroll_wrap').style.left = 0 + "%"
            card_all.forEach((el) => {
                el.classList.remove("scale1");
                offset = 0;
               var scroll_wrap = document.querySelectorAll('.scroll_wrap');
               scroll_wrap.forEach(function(el){
                   el.style.left = "0%";
               })
               
            });
        });
    });
    ///////////////////buttton close end////////////////////////////////////////














    //////////////////////////scroll in cards start //////////////////////////
    var scroll_back = document.querySelectorAll('.exit');
    var scroll_next3 = document.querySelector('.next');
    var scroll_next4 = document.querySelector('.next4');
    var scroll_next6 = document.querySelector('.next6');
    var number_item_3 = document.getElementsByClassName('item3').length
    var number_item_4 = document.getElementsByClassName('item4').length
    var number_item_6 = document.getElementsByClassName('item6').length

    //item_3
    scroll_next3.addEventListener("click", function (event) {
        offset = offset - 100;
        var a = document.querySelectorAll('.scroll_wrap')
        a.forEach(function (el) {
            el.style.left = offset + "%";
            if (offset <= (-100) * number_item_3) {
                el.style.left = (-100 * number_item_3) + 100 + "%";
                offset = (-number_item_3 * 100) + 100;
            }
        })
    })
    //item_4
    scroll_next4.addEventListener("click", function (event) {
        offset = offset - 100;
        var a = document.querySelectorAll('.scroll_wrap')
        a.forEach(function (el) {
            el.style.left = offset + "%";
            if (offset <= (-100) * number_item_4) {
                el.style.left = (-100 * number_item_4) + 100 + "%";
                offset = (-number_item_4 * 100) + 100;
            }
        })
    })
    //item_6
    scroll_next6.addEventListener("click", function (event) {
        offset = offset - 100;
        var a = document.querySelectorAll('.scroll_wrap')
        a.forEach(function (el) {
            el.style.left = offset + "%";
            if (offset <= (-100) * number_item_6) {
                el.style.left = (-100 * number_item_6) + 100 + "%";
                offset = (-number_item_6 * 100) + 100;
            }
        })
    })


    //button back start//

    scroll_back.forEach(function(i){
        i.addEventListener("click", function (event) {
        offset = offset + 100;
        var b = document.querySelectorAll('.scroll_wrap')
        b.forEach(function (el) {
            el.style.left = offset + "%"
            if (offset >= 100) {
                el.style.left = 0 + "%"
                offset = 0;
            }
        })
    })
    })
    //button back start//
    //////////////////////////scroll in cards end //////////////////////////
















}