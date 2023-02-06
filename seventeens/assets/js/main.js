//scroll or spyscroll
$(function(){
    $.scrollIt({
    upKey: 38,             // key code to navigate to the next section
    downKey: 40,           // key code to navigate to the previous section
    easing: 'linear',      // the easing function for animation
    scrollTime: 600,       // how long (in ms) the animation takes
    activeClass: 'active-it', // class given to the active nav element
    onPageChange: null,    // function(pageIndex) that is called when page is changed
    topOffset: 0  
    });
  });

  //nav_menu
  $(document).ready(function(){
    let nav = $(".navbar");
    $('#nav-icon').click(function(){
      $(this).toggleClass('open');
    });
  //main slider
  $('#hero_slide').owlCarousel({
    items:1,
    loop:true,
    margin: 0,
    nav:true,
    dots:false,
    autoplay: true,
    smartSpeed: 500,
    autoplayTimeout: 6000,
})

  });


  var wind = $(window);
  wind.on("scroll",function () {
    var bodyScroll = wind.scrollTop(),
        navbar = $(".navbar"),
        logo = $(".navbar .navbar-brand > img");
    if(bodyScroll > 100){
        navbar.addClass("bg-body-tertiary shadow");
        logo.attr('src', 'assets/img/logo_black.png');
    }else{
        navbar.removeClass("bg-body-tertiary shadow-sm");
        logo.attr('src', 'assets/img/logo_white.png');
    }
});


  //light effect
  (function($) { "use strict";
        var textHolder = document.getElementsByClassName('style-text-slider')[0],
          text = textHolder.innerHTML,
          chars = text.length,
          newText = '',
          rnLet;

        for(let item of text){
          newText+= '<i name="light">' + item + '</i>';
        }
  
        textHolder.innerHTML = newText;

        var letters = document.querySelectorAll('[name="light"'),
        flickers = [5, 7, 9, 11, 13, 15, 17],
          randomLetter,
          flickerNumber,
          counter;

        function randomFromInterval(from,to) {
          return Math.floor(Math.random()*(to-from+1)+from);
        }
  
        function hasClass(element, cls) {
          return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
        }
  
        function flicker(elementRef) {		
          counter += 1;
          
          if (counter === flickerNumber) {
            return;
          }
  
          setTimeout(function () {
            if( rnLet.className == '') {
             rnLet.className = 'off';
            }
            else {
              rnLet.className = '';
            }
            flicker();
          }, 30);
        }
  
        (function loop() {
          var rand = randomFromInterval(300,1800);
  
          randomLetter = randomFromInterval(0, letters.length);
          rnLet = letters[randomLetter];
          console.log(rnLet);
          
          flickerNumber = randomFromInterval(0, 7);
          flickerNumber = flickers[flickerNumber];
  
          setTimeout(function() {
              counter = 0;
              flicker();
              loop();  
          }, rand);
        }());
      })(jQuery);