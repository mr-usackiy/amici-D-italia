 //анимация при скроллинеге 

/*  const down = document.querySelector('.section-2');
 const header_nav = document.querySelector('.header_nav'); */
 const scrollContent_wrap = document.querySelectorAll('.card-text');
 const scrollContent_wrap_2 = document.querySelectorAll('.s1');
 const scrollContent_wrap_card1 = document.querySelectorAll('.card-1');
 const scrollContent_wrap_card2 = document.querySelectorAll('.card-2');
 const scrollContent_wrap_card3 = document.querySelectorAll('.card-3');
 const scrollContent_wrap_card4 = document.querySelectorAll('.card-4');
 /* const scrollContent_wrap_3 = document.querySelectorAll('.content_wrap_3'); */

/*  const headerFixed = () => {
     window.addEventListener('scroll', () => {
         let scrollTop = window.scrollY;
         let downCenter = down.offsetHeight / 2;

         if (scrollTop >= downCenter) {
             $('.header_nav').addClass('fixed')
             down.style.marginTop = '${header_nav.offsetHeight}px';
         } else {
             header_nav.classList.remove('fixed')
             down.style.marginTop = '0px';
         }

     });
 }; */



 const scrollContent_wrap_ = () => {
     let windowCenter = (window.innerHeight / 2) + window.scrollY;
     scrollContent_wrap.forEach(el => {
        let scrollOffset = el.offsetTop + el.offsetHeight/2.5;
         if (windowCenter >= scrollOffset) {
             el.classList.add('wrap_animation');
         } else {
            el.classList.remove('wrap_animation');
         }
     })
 }



 const scrollContent_wrap_2_ = () => {
     let windowCenter = (window.innerHeight / 2) + window.scrollY;
     scrollContent_wrap_2.forEach(el => {
         let scrollOffset = el.offsetTop + el.offsetHeight/2.5;
         if (windowCenter >= scrollOffset) {
             el.classList.add('wrap_animation--2');
         } else {
            el.classList.remove('wrap_animation--2');
         }
     })
 }





//grid start
const scrollContent_wrap_card1_= () => {
    let windowCenter = (window.innerHeight / 2) + window.scrollY;
    scrollContent_wrap_card1.forEach(el => {
        let scrollOffset = el.offsetTop + el.offsetHeight/20;
        if (windowCenter >= scrollOffset) {
            el.classList.add('wrap_animation_card1');
        } else {
           el.classList.remove('wrap_animation_card1');
        }
    })
}
const scrollContent_wrap_card2_= () => {
    let windowCenter = (window.innerHeight / 2) + window.scrollY;
    scrollContent_wrap_card2.forEach(el => {
        let scrollOffset = el.offsetTop + el.offsetHeight/5;
        if (windowCenter >= scrollOffset) {
            el.classList.add('wrap_animation_card2');
        } else {
           el.classList.remove('wrap_animation_card2');
        }
    })
}
const scrollContent_wrap_card3_= () => {
    let windowCenter = (window.innerHeight / 2) + window.scrollY;
    scrollContent_wrap_card3 .forEach(el => {
        let scrollOffset = el.offsetTop + el.offsetHeight/5;
        if (windowCenter >= scrollOffset) {
            el.classList.add('wrap_animation_card3');
        } else {
           el.classList.remove('wrap_animation_card3');
        }
    })
}
const scrollContent_wrap_card4_= () => {
     let windowCenter = (window.innerHeight / 2) + window.scrollY;
     scrollContent_wrap_card4.forEach(el => {
         let scrollOffset = el.offsetTop + el.offsetHeight/110;
         if (windowCenter >= scrollOffset) {
             el.classList.add('wrap_animation_card4');
         } else {
            el.classList.remove('wrap_animation_card4');
         }
     })
 }
// grid end

























































 /* const scrollContent_wrap_3_ = () => {
     let windowCenter = (window.innerHeight / 2) + window.scrollY;
     scrollContent_wrap_3.forEach(el => {
         let scrollOffset1 = el.offsetTop + el.offsetHeight / 200;
         if (windowCenter >= scrollOffset1) {
             el.classList.add('wrap_animation');
         } else {

         }
     })
 }



 $(".icon_down").on("click", "a", function (event) {
     event.preventDefault();
     var icon_down = $(this).attr('href'),
         top = $("#qw").offset().top;
     $('body,html').animate({ scrollTop: top }, 1500);
 });
 */




 scrollContent_wrap_2_();
 scrollContent_wrap_();
 scrollContent_wrap_card1_();
 scrollContent_wrap_card2_();
 scrollContent_wrap_card3_();
 scrollContent_wrap_card4_();
 /* scrollContent_wrap_2_();
 scrollContent_wrap_3_(); */

 window.addEventListener('scroll', () => {
     /* headerFixed(); */
     scrollContent_wrap_();
     scrollContent_wrap_2_();
     scrollContent_wrap_card1_();
     scrollContent_wrap_card2_();
     scrollContent_wrap_card3_();
     scrollContent_wrap_card4_();
     

     /* scrollContent_wrap_3_(); */
 });
