$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

// $(document).ready(function() {
 
//     var owl = $("#owl-demo");
   
//     owl.owlCarousel({
//         items : 1, //10 items above 1000px browser width
//         itemsDesktop : [1000,3], //5 items between 1000px and 901px
//         itemsDesktopSmall : [900,3], // betweem 900px and 601px
//         itemsTablet: [600,2], //2 items between 600 and 0
//         itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
//     });
   
//     // Custom Navigation Events
//     $(".next").click(function(){
//       owl.trigger('owl.next');
//     })
//     $(".prev").click(function(){
//       owl.trigger('owl.prev');
//     })
//     $(".play").click(function(){
//       owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
//     })
//     $(".stop").click(function(){
//       owl.trigger('owl.stop');
//     })
   
// });