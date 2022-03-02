//анимация при скроллинеге 
window.onload = function () {

    /* //preloader start
        setTimeout(function() {
            var preloader = document.getElementById('p_preloader');
            if( !preloader.classList.contains('done') )
            {
            preloader.classList.add('done');
            }
        }, 1200);
    //preloader end */


    /*  const down = document.querySelector('.section-2');
     const header_nav = document.querySelector('.header_nav'); */
    const scrollContent_wrap = document.querySelectorAll('.card-text');
    const scrollContent_wrap_2 = document.querySelectorAll('.s1');
    const scrollContent_wrap_4 = document.querySelectorAll('.s2');
    const scrollContent_menu = document.querySelectorAll('.menu__2');
    const scrollContent_wrap_map = document.querySelectorAll('.map');

    /* const scrollContent_wrap_3 = document.querySelectorAll('.content_wrap_3'); */

    //запрет submit start
    const form = document.getElementById('footer__submit'); //ID формы , если их много присваиваем этот id всем , можно по классу
    form.addEventListener('submit', formSend);
    async function formSend(e) {
        e.preventDefault();
    }
    //запрет submit end



    const popup = document.querySelector('.popup-bg');
    const popup_ = document.querySelector('.popup');
    const body = document.querySelector('.body');

    document.querySelector('.book-table').addEventListener('click', function () {
        popup.classList.add('popup_animate');
        popup_.classList.add('popup-a');
        body.classList.add('body_fixed');
    });
    document.querySelector('.close__img').addEventListener('click', function () {
        popup.classList.remove('popup_animate');
        popup_.classList.remove('popup-a');
        body.classList.remove('body_fixed');
    });

    //section-2 stat
    const scrollContent_wrap_ = () => {
        let windowCenter = (window.innerHeight / 2) + window.scrollY;
        scrollContent_wrap.forEach(el => {
            let scrollOffset = (el.offsetTop / 1.1) + el.offsetHeight / 2.5;
            if (windowCenter >= scrollOffset) {
                el.classList.add('wrap_animation');
            }
        })
    }

    const scrollContent_wrap_2_ = () => {
        let windowCenter = (window.innerHeight / 1) + window.scrollY;
        scrollContent_wrap_2.forEach(el => {
            let scrollOffset = el.offsetTop + el.offsetHeight / 4;
            if (windowCenter >= scrollOffset) {
                el.classList.add('wrap_animation--2');
            }
        })
    }
    //section-2 end

    // section-3 grid start
    /////////////////////////// variables start ////////////////////////////////
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
    var offset = 0;
    /////////////////////////// variables end /////////////////////////////////
    //////////////////////// loading start ///////////////////////////////////////
    const scrollContent_menu_ = () => {
        let windowCenter = (window.innerHeight / 2) + window.scrollY;
        scrollContent_menu.forEach(function (el) {
            let scrollOffset = (el.offsetTop) + el.offsetHeight / 15;
            var wrap_card05s = document.querySelectorAll('.delay--05s');
            var wrap_card1s = document.querySelectorAll('.delay--1s');
            var wrap_card2s = document.querySelectorAll('.delay--2s');
            var wrap_card3s = document.querySelectorAll('.delay--3s');
            if (windowCenter >= scrollOffset) {
                setTimeout(function () {
                    wrap_card05s.forEach(function (el) {
                        el.classList.add('cards_animation--0-7');
                    })
                }, 200)
                setTimeout(function () {
                    wrap_card1s.forEach(function (el) {
                        el.classList.add('cards_animation--0-7');
                    })
                }, 400)
                setTimeout(function () {
                    wrap_card2s.forEach(function (el) {
                        el.classList.add('cards_animation--0-7');
                    })
                }, 600)
                setTimeout(function () {
                    wrap_card3s.forEach(function (el) {
                        el.classList.add('cards_animation--0-7');
                    })
                }, 100)
            }
        })
    }
    //////////////////////// loading end ///////////////////////////////////////
    //////////////////////card wrap function start//////////////////////////////
    function rem() {
        wrap_card1.classList.remove('cards_animation--0-7');
        wrap_card2.classList.remove('cards_animation--0-7');
        wrap_card3.classList.remove('cards_animation--0-7');
        wrap_card4.classList.remove('cards_animation--0-7');
        wrap_card5.classList.remove('cards_animation--0-7');
        wrap_card6.classList.remove('cards_animation--0-7');
        wrap_card7.classList.remove('cards_animation--0-7');
    }
    //////////////////// card wrap function end /////////////////////////////////
    //////////////////////// cards unwrapping on click start ////////////////////
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
    ////////////////////////cards unwrapping on click end/////////////////////////
    ///////////////////buttton close start////////////////////////////////////////
    close_btn.forEach((i) => {
        i.addEventListener("click", function (event) {
            event.preventDefault();
            wrap_card1.classList.add('cards_animation--0-7');
            wrap_card2.classList.add('cards_animation--0-7');
            wrap_card3.classList.add('cards_animation--0-7');
            wrap_card4.classList.add('cards_animation--0-7');
            wrap_card5.classList.add('cards_animation--0-7');
            wrap_card6.classList.add('cards_animation--0-7');
            wrap_card7.classList.add('cards_animation--0-7');
            document.querySelector('.scroll_wrap').style.left = 0 + "%"
            card_all.forEach((el) => {
                el.classList.remove("scale1");
                offset = 0;
                var scroll_wraps = document.querySelectorAll('.scroll_wrap');
                scroll_wraps.forEach(function (el) {
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
    var scroll_next7 = document.querySelector('.next7');
    var number_item_3 = document.getElementsByClassName('item3').length
    var number_item_4 = document.getElementsByClassName('item4').length
    var number_item_6 = document.getElementsByClassName('item6').length
    var number_item_7 = document.getElementsByClassName('item7').length

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
    //item_7
    scroll_next7.addEventListener("click", function (event) {
        offset = offset - 100;
        var a = document.querySelectorAll('.scroll_wrap')
        a.forEach(function (el) {
            el.style.left = offset + "%";
            if (offset <= (-100) * number_item_7) {
                el.style.left = (-100 * number_item_7) + 100 + "%";
                offset = (-number_item_7 * 100) + 100;
            }
        })
    })
    //button back start//

    scroll_back.forEach(function (i) {
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

    // section-3 grid end



    //section-4 stat
    const scrollContent_wrap_4_ = () => {
        let windowCenter = (window.innerHeight / 2) + window.scrollY;
        scrollContent_wrap_4.forEach(el => {
            let scrollOffset = el.offsetTop + el.offsetHeight / 2.5;
            if (windowCenter >= scrollOffset) {
                el.classList.add('wrap_animation_s4');
            }
        })
    }
    //section-4 end

    //section-5 stat
    const scrollContent_wrap_map_ = () => {
        let windowCenter = (window.innerHeight / 2) + window.scrollY;
        scrollContent_wrap_map.forEach(el => {
            let scrollOffset = (el.offsetTop / 1.1) + el.offsetHeight / 2.5;
            if (windowCenter >= scrollOffset) {
                el.classList.add('wrap_animation_map');
            }
        })
    }
    //section-5 end

    ////////////////////////////////////////// swipe start /////////////////////////////////////////////////////////
    var logBlock = document.querySelectorAll('.scroll_wrap');
    logBlock.forEach(function (el) {
        el.addEventListener('touchstart', handleTouchStart, false);
        el.addEventListener('touchmove', handleTouchMove, false);

    })



    let x1 = null;
    let y1 = null;

    function handleTouchStart(event) {
        const firstTouch = event.touches[0];
        x1 = firstTouch.clientX;
        y1 = firstTouch.clientY;

    }
    /* 3467 */
    function handleTouchMove(event) {
        /*  if (document.getElementById('open_card3').classList.contains('scale1')) {
             var b = number_item_3;
         }
         if (document.getElementById('open_card4').classList.contains('scale1')) {
             var b = number_item_4;
         }
         if (document.getElementById('open_card6').classList.contains('scale1')) {
             var b = number_item_6;
         }
         if (document.getElementById('open_card7').classList.contains('scale1')) {
             var b = number_item_7;
         } */
        if (!x1 || !y1) {
            return false;
        }



        let x2 = event.touches[0].clientX;
        let y2 = event.touches[0].clientY;
        let xDiff = x2 - x1;
        let yDiff = y2 - y1;



        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) {
                offset = offset + 100;
                var b = document.querySelectorAll('.scroll_wrap');
                b.forEach(function (el) {
                    el.style.left = offset + "%"
                    if (offset >= 100) {
                        el.style.left = 0 + "%"
                        offset = 0;
                    }
                })
            } else {
                offset = offset - 100;
                var a = document.querySelectorAll('.scroll_wrap');
                var b = 0;

                a.forEach(function (el) {
                    el.style.left = offset + "%";
                    if (offset <= (-100) * number_item_3) {

                        el.style.left = (-100 * number_item_3) + 100 + "%";
                        offset = (-number_item_3 * 100) + 100;

                    }
                })

            }
        } else {
            if (yDiff > 0) {
                console.log("down");
            } else {
                console.log("top");
            }
        }
        x1 = null;
        y1 = null;

    }
    ////////////////////////////////////////// swipe end /////////////////////////////////////////////////////////












































    scrollContent_wrap_2_();
    scrollContent_wrap_4_();
    scrollContent_wrap_();
    scrollContent_wrap_map_();
    scrollContent_menu_();
    /* scrollContent_wrap_2_();
    scrollContent_wrap_3_(); */

    window.addEventListener('scroll', () => {
        /* headerFixed(); */
        scrollContent_wrap_();
        scrollContent_wrap_4_();
        scrollContent_wrap_2_();
        scrollContent_wrap_map_();
        scrollContent_menu_();
        /* scrollContent_wrap_3_(); */
    });



































}