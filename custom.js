var slideIndex =0;
showslides();
function showslides() {
    var i;
    var slides=document.getElementsByClassName("myslides");
    for (i=0; i<slides.length; i++){
    slides[i].style.display="none";}
    slideIndex++;
    if (slideIndex>slides.length)
    {
        slideIndex=1
    }
    slides[slideIndex-1].style.display="block";
    setTimeout(showslides,2000);//
}

$(document).ready(function(){
    $('.food-slider').slick({
    autoplay:true,
    autoplaySpeed: 2000,  
    slidesToShow:3,
    slidesToscroll:1,
    prevArrow:".prev-btn",
    nextArrow:".next-btn",
    responsive:[
        {
            breakpoint:992,
            settings:{
                slidesToShow:2, 
            }
        },
        {
            breakpoint:500,
            settings:{
                slidesToShow:1, 
            }
        }
    ]
    });
  });

window.addEventListener('scroll', function(){
    var scroll=document.querySelector('.to-top');
    scroll.classList.toggle('active',window.scrollY > 300)
})

$('.nav-trigger').click(function(){
    $('.site-content-wrapper').toggleClass('scaled');
    $(".main-wrapper").toggleClass('main-overflow');
    $(".maincont").toggleClass('radius');
    $(this).toggleClass('active');
})