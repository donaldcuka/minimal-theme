$(document).ready(function(){
  $(".owl-carousel").owlCarousel({

  	items:1,
  	loop:true,
  	nav:true,
  	autoplay:true,
  	pagination:true,
  	center: true,
  	// responsiveClass:true,

	animateOut: 'fadeOut'

   });
});



// NEW GALLERY

$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });

});