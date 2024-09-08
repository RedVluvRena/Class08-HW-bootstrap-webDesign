import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js';


// header dropdown
$(".dropdown-menu .open").on("mouseenter", function() {
    $(".second").addClass("d-block");
  });
  
  $(".dropdown-menu .open, .second").on("mouseleave", function() {
    setTimeout(() => {
      if (!$(".dropdown-menu .open").is(":hover") && !$(".second").is(":hover")) {
        $(".second").removeClass("d-block");
      }
    }, 100);
  });


console.log("Hello world!");