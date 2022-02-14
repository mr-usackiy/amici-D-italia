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
    //////////////////////// loading end ///////////////////////////////////////












    /////////////////////////// open cards start /////////////////////////////////////////
    var wrap_card1 = document.querySelector('#open_card1');
    var wrap_card2 = document.querySelector('#open_card2');
    var wrap_card3 = document.querySelector('#open_card3');
    var wrap_card4 = document.querySelector('#open_card4');
    var wrap_card5 = document.querySelector('#open_card5');
    var wrap_card6 = document.querySelector('#open_card6');
    var wrap_card7 = document.querySelector('#open_card7');
    var close_btn = document.querySelectorAll('.close');
    var card1P = document.querySelector('.card-1__popup');
    var card2P = document.querySelector('.card-2__popup');
    var card3P = document.querySelector('.card-3__popup');
    var card4P = document.querySelector('.card-4__popup');
    var card5P = document.querySelector('.card-5__popup');
    var card6P = document.querySelector('.card-6__popup');
    var card7P = document.querySelector('.card-7__popup');
    var card_all = document.querySelectorAll('.card_all');

    function rem(){
        wrap_card1.classList.remove('cards_animation--1-4');
        wrap_card2.classList.remove('cards_animation');
        wrap_card3.classList.remove('cards_animation--0-7');
        wrap_card4.classList.remove('cards_animation');
        wrap_card5.classList.remove('cards_animation--1-4');
        wrap_card6.classList.remove('cards_animation--0-7');
        wrap_card7.classList.remove('cards_animation');
    }


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
            card_all.forEach((el) => {
                el.classList.remove("scale1");
            });
        });
    });
}