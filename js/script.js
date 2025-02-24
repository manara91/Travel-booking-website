// scroll indicator

const progressBarEl = document.getElementById('progress-bar');
window.addEventListener('scroll', () => {
  let height = document.body.scrollHeight - window.innerHeight;
  let scrollPosition = document.documentElement.scrollTop;
  let width = (scrollPosition / height) * 100;
  progressBarEl.style.width = `${width}%`;
});

// Calendar
  $( function() {
    $( "#inputCheckIn" ).datepicker();
    $( "#inputCheckOut" ).datepicker();



// slick slider
    $(document).ready(function() {
      function adjustSliderWidth() {
        var sliderWidth = $('.level-slider').width();
        

        if (sliderWidth <= 425) {
          $('.level-slider').slick('slickSetOption', 'slidesToShow', 1);
        } else {
          $('.level-slider').slick('slickSetOption', 'slidesToShow', 2);
        }
      }
    
      $(window).on('resize', adjustSliderWidth); 
      adjustSliderWidth(); 
    
      $('.level-slider').slick({
        dots: true,
        slidesToShow: 2, 
        slidesToScroll: 1,
        arrows: false,
      });

    });
    $('.level-slider').slick({
      dots: true,
      slidesToShow:2,
      slidesToScroll: 1,
      arrows: false,
    });


  } );



//  Text Effect
const textEffect = (element, text, i = 0) => {
  element.textContent += text[i];
  if (i < text.length - 1) {
      setTimeout(() => textEffect(element, text, i + 1), 50);
  }
};

const div1 = document.querySelector(".logo-h5");
const text1 = "For Special Trips";
textEffect(div1, text1);

const div2 = document.querySelector(".text-effect");
const text2 = "Search the Trip of Your Dreams";
textEffect(div2, text2);
