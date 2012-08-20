$(document).ready(function(){
	$('ul.slides li:first-child').addClass("slideActive");
	//add index active class moved below function
	$("div.wear_details div").eq(0).addClass("detailActive");
	$("div.swatch-popup div").eq(0).fadeIn();
	$("ul.swatch li:first-of-type").addClass("active");
	$("div.selector-wrapper").eq(2).hide();
	$("#product-select-option-2").val($("#product-select-option-2 option").eq(1).val()).change();
  // FANCY DROPDOWNS
  function fancyDropdown(index) {
      var i,
          div = $("div.selector-wrapper").eq(index).find("select option"),
          ul = $("form ul").eq(index);
      for (i = 1; i < div.length; i++) {
          ul.append('<li>'+ div.eq(i).html()+'</li>');
      }
  }
  function fancyContact(index) {
      var i,
          div = $("div.contact_form li").eq(index).find("select option"),
          ul = $("div.contact_form ul.selector");
      for (i = 0; i < div.length; i++) {
          ul.append('<li>'+ div.eq(i).html()+'</li>');
      }
  }
  // CREATE CORRECT AMOUNT OF INDICES FOR WEAR IT SECTION
  function slideshowIndexGen() {
    var i,
        indices = $("div#slideshow2 ul.slides li").length,
        ul = $("div.wear_details nav ul");
    for (i = 0; i < indices; i++) {
        ul.append("<li>" + i + "</li>");
    }
    $("ul.indices li:first-child").addClass("indexActive");
  }
  fancyDropdown(0);
  fancyDropdown(1);
  fancyContact(2);
  slideshowIndexGen();  
  (function($) {
      $.fn.styleddropdown = function() {
          return this.each(function() {
              var obj = $(this);
              obj.find('.field').click(function() { //onclick event, 'list' fadein
                  if (obj.find('ul').is(":visible")) {
                    obj.find('ul').fadeOut(200);
                  }
                  else{
                    $('.selector').fadeOut(200);
                    obj.find('ul').fadeIn(200);
                  }
                  

                  $(document).keyup(function(event) { //keypress event, fadeout on 'escape'
                      if (event.keyCode == 27) {
                          obj.find('.selector').fadeOut(200);
                      }
                  });

                  obj.find('.selector').hover(function() {}, function() {
                      $(this).fadeOut(200);
                  });
              });

              obj.find('.selector li').click(function() { //onclick event, change field value with selected 'list' item and fadeout 'list'
                  var div_index = $(this).parent().parent(),
                      index,
                      target;
                  if ( div_index.hasClass("top")) {
                    index = 0;
                    target = $("form.variants div div");
                  }
                  else if ( div_index.hasClass("bottom")) {
                    index = 1;
                    target = $("form.variants div div");
                  } 
                  else{
                    index = 2;
                    target = $("div.contact_form ul>li");
                  }
                  obj.find('span.info').empty().append($(this).html());
                  obj.find('.selector').fadeOut(200);
                  target.eq(index).find("select").val($(this).html()).change(); //.parent().prev().val($(this).html());

              });
            
          });
      };
  })(jQuery);
  $(function() {
      $('.select-box').styleddropdown();
  });
  // LOOKS
  // PAGE
  $("img.hero").click(function(){
    $(this).next("ul").slideToggle(700);
  });
  // SWATCH
  // REVEAL
  $("a.swatch").click(function(){
      $("div.swatch-popup").css({ 
        'right': 335,
        'box-shadow' : '0px 1px 2px 1px rgba(100, 100, 100, 0.25)',
        '-moz-box-shadow' : '0px 1px 2px 1px rgba(100, 100, 100, 0.25)',
        '-webkit-boxshadow' : '0px 1px 2px 1px rgba(100, 100, 100, 0.25)'
        });
      return false;
      });
  $("a.swatch_close").click(function(){
    $(this).parent().css({
      right: 0,
      'box-shadow' : '0 0 0 0 rgba(100, 100, 100, 0.25)',
      '-moz-box-shadow' : '0 0 0 0 rgba(100, 100, 100, 0.25)',
      '-webkit-boxshadow' : '0 0 0 0 rgba(100, 100, 100, 0.25)'
    });
    return false;
  });
  
  // BUY MENU ACCORDION
	// $("input.get_one").click(function(){
	//     $(this).fadeOut( 500, function() {
	//       $(this).css({ margin: '0' });
	//       $("div.buy-menu form, div.swatch a.close").slideDown(700);
	//       $("div.buy-container").css({ height: "400px" });
	//     });
	//         
	//   });
	//   $("a.close").click(function() {
	//     $(this).hide();
	//     $("div.buy-menu form").slideUp(700, function() {
	//       $("input.get_one").fadeIn(500, function() {
	//         $(this).css({ margin: '' });
	//       });
	//     }); 
	//     $("div.buy-container").css({ height: "340px" });
	//     return false;
	//   });
  // PRODUCT DESCRIPTION ACCORDION
	$("div.about_product h3").click(function() {
		var div = $($(this).attr("name")),
		    h3  = $(this);
		if (div.is(":visible")) {
		  $("div.details").slideUp(700,"swing");
		  h3.find("span").show();
		  h3.css({ color: '#031D48' });
		} 
		else{
		  $("h3 span").show();
		  h3.find("span").hide();
		  $("div.details").slideUp(700,"swing");
		  div.slideDown(700,"swing");
		  $("div.about_product h3").css({ color: '#031D48' });
		  h3.css({ color: '#D3018D' });
		}
	});
	// SIZE CHART FADES
	$("div.bottoms, div.dresses").hide();
	$("ul.size-chart li:first-child").addClass("active");
	$("ul.size-chart li").click(function(){
	  var div = $($(this).attr("name")),
	      li = $(this);
	  
	  if (div.is(":visible")){}
	  else {
	    $("div.size-chart").slideUp("medium");
	    div.slideDown("medium");
	    $("ul.size-chart li").removeClass("active");
	    li.addClass("active");
	  }
	});
  // SLIDESHOWS
	var slides = $('#slideshow ul.slides li'),
	    slides2 = $("#slideshow2 ul.slides li"),
		  current = 0,
		  current2 = 0,
		  slideshow = {width:0,height:0},
		  nextIndex = 0;
    // I-SWIPE
    // $("#slideshow").touchwipe({
    //         wipeLeft: function() { 
    //           var nextIndex = 0,
    //               next = slides.eq(nextIndex),
    //               li = slides.eq(current);
    //           nextIndex = current >= slides.length-1 ? 0 : current+1;
    //           next.addClass('slideActive').show("slide", { direction: "right"});
    //          li.removeClass('slideActive').hide("slide"); 
    //          current = nextIndex;
    //           },
    //         wipeRight: function() { 
    //           alert("right");
    //           nextIndex = current <= 0 ? slides.length-1 : current-1;
    //           next.addClass('slideActive').show();
    //          li.removeClass('slideActive').hide(); 
    //           }
    //     });
    $("#slideshow").swipe({
      swipeLeft:function(event, direction, distance, duration, fingerCount) {
            nextIndex = current < slides.length - 1 ? nextIndex + 1 : 0;
            // if (current < (slides.length - 1)) {
            //               nextIndex += 1;
            //             }
            //             else {
            //               nextIndex = 0; 
            //             }
          slides.eq(nextIndex).addClass("slideActive").show("slide", { direction: "right" });
          slides.eq(current).removeClass('slideActive').hide();
          current = nextIndex;   
        },
      swipeRight:function(event, direction, distance, duration, fingerCount) {
        nextIndex = current === 0 ? slides.length - 1 : nextIndex - 1;
        slides.eq(nextIndex).addClass("slideActive").show("slide", { direction: "left" });
        slides.eq(current).removeClass('slideActive').hide("slide", { direction: "right"});
        current = nextIndex;
      }
    });
    // USING ARROWS 
		$('#slideshow .arrow').click(function(){
			var li        = slides.eq(current);
				  //nextIndex	= 0;

			// Depending on whether this is the next or previous
			// arrow, calculate the index of the next slide accordingly.
			
			if($(this).hasClass('next')){
				nextIndex = current >= slides.length-1 ? 0 : current+1;
			}
			else {
				nextIndex = current <= 0 ? slides.length-1 : current-1;
			}

			var next = slides.eq(nextIndex);
				
				current = nextIndex;
				if ($(this).hasClass('next')) {
				  next.addClass('slideActive').show("slide", { direction: "right"});
				  li.removeClass('slideActive').hide("slide");
				}
				else {
				  next.addClass('slideActive').show("slide", { direction: "left"});
				  li.removeClass('slideActive').hide("slide", { direction: "right"});
				}
						
				// $("#slideshow ul.indices li").each(function(){
				//          $(this).removeClass("indexActive");
				//        });
				$("#slideshow ul.indices li").removeClass("indexActive");
				$("#slideshow ul.indices li").eq(nextIndex).addClass("indexActive");
			
		});
    // USING INDICES
		$("#slideshow ul.indices li").click(function(){
			var index = $(this).index(),
			    li = $('#slideshow ul.slides li.slideActive'),
			    popup = $("div.swatch-popup div"),
			    ul = $("ul.swatch li");
			
			$("#slideshow ul.indices li").removeClass("indexActive");
			$(this).addClass("indexActive");
      
			if ($(this).index() === li.index()) {} //DO NOTHING
			else if ($(this).index() > li.index()) {
			  slides.eq(index).addClass('slideActive').show("slide", { direction: "right"});
			  li.removeClass('slideActive').hide("slide");
			}
			else {
			  slides.eq(index).addClass('slideActive').show("slide", { direction: "left"});
			  li.removeClass('slideActive').hide("slide", { direction: "right"});
			}
			current = index;
			
		});
		
    // SWATCH CLICK AND POPUP WINDOW UPDATE
    $("ul.swatch li").click(function(){
		  var li = $('#slideshow ul.slides li.slideActive');
		  
		  $("ul.swatch li").removeClass("active");
		  $(this).addClass("active");
		  $("select#product-select-option-2").val($(this).html()).change();
		  
		  if ($(this).is(":first-of-type")) {
		    if ($("div.swatch-popup div:first-of-type").is(":visible")){}
		    else {$("div.swatch-popup div").fadeOut().eq(0).fadeIn();}
		    if ($("#slideshow ul.indices li:eq(0)").hasClass("indexActive")) {} 
		    else{
		      $("#slideshow ul.indices li")
		                                  .removeClass("indexActive")
		                                  .eq(0)
		                                  .addClass("indexActive");
		      $("#slideshow ul.slides li")
		                                  .removeClass("slideActive")
		                                  .eq(0)
		                                  .addClass("slideActive")
		                                  .show("slide", { direction: "right"});
		      li.removeClass('slideActive').hide("slide");
		      current = 0;
	      }
		  }
		  else if ($(this).is(":last-of-type")) {
		    if ($("div.swatch-popup div:last-of-type").is(":visible")){}
		    else {$("div.swatch-popup div").fadeOut().eq(1).fadeIn();}
		    if ($("#slideshow ul.indices li:eq(1)").hasClass("indexActive")) {} 
		    else{
		      $("#slideshow ul.indices li")
		                                  .removeClass("indexActive")
		                                  .eq(1)
		                                  .addClass("indexActive");
		      $("#slideshow ul.slides li")
		                                  .removeClass("slideActive")
		                                  .eq(1)
		                                  .addClass("slideActive")
		                                  .show("slide", { direction: "right"});
		      li.removeClass('slideActive').hide("slide");
		      current = 1;
	      }
		  }
		  else if ($(this).index() === 2) {
		    $("div.swatch-popup div").fadeOut().eq(3).fadeIn();
		    if ($("#slideshow ul.indices li:eq(3)").hasClass("indexActive")) {} 
		    else{
		      $("#slideshow ul.indices li")
		                                  .removeClass("indexActive")
		                                  .eq(3)
		                                  .addClass("indexActive");
		      $("#slideshow ul.slides li")
		                                  .removeClass("slideActive")
		                                  .eq(3)
		                                  .addClass("slideActive")
		                                  .show("slide", { direction: "right"});
		      li.removeClass('slideActive').hide("slide");
		      current = 3;
	      }
		  } 
		});
    // SLIDESHOW2 ARROWS
		$('.wear_details .arrow').click(function(){
			var li			= slides2.eq(current2);
				  //nextIndex	= 0;

			// Depending on whether this is the next or previous
			// arrow, calculate the index of the next slide accordingly.
			
			if($(this).hasClass('next')){
				nextIndex = current2 >= slides2.length-1 ? 0 : current2+1;
			}
			else {
				nextIndex = current2 <= 0 ? slides2.length-1 : current2-1;
			}

			var next = slides2.eq(nextIndex);
				
				current2 = nextIndex;
				if ($(this).hasClass('next')) {
				  next.addClass('slideActive').show("slide", { direction: "right"});
				  li.removeClass('slideActive').hide("slide");
				}
				else {
				  next.addClass('slideActive').show("slide", { direction: "left"});
				  li.removeClass('slideActive').hide("slide", { direction: "right"});
				}
        // CHANGE INDICES FOR SS2
				// $(".wear_details ul.indices li").each(function(){
				//          $(this).removeClass("indexActive");
				//        });
				$(".wear_details ul.indices li").removeClass("indexActive");
				$(".wear_details ul.indices li").eq(nextIndex).addClass("indexActive");
        // CHANGE DETAILS FOR SS2
			  // $(".wear_details div").each(function(){
			  //           $(this).removeClass("detailActive");
			  //         });
				$(".wear_details div").removeClass("detailActive");
				$(".wear_details div").eq(nextIndex).addClass("detailActive");
		});
		// SLIDESHOW2 INDICES
		$(".wear_details ul.indices li").click(function(){
			var index = $(this).index(),
			    li = $('#slideshow2 ul.slides li.slideActive');
			
			$(".wear_details ul.indices li").removeClass("indexActive");
			$(this).addClass("indexActive");
			if ($(this).index() === li.index()) {} //DO NOTHING
			else if ($(this).index() > li.index()) {
			  slides2.eq(index).addClass('slideActive').show("slide", { direction: "right"});
			  li.removeClass('slideActive').hide("slide");
			}
			else {
			  slides2.eq(index).addClass('slideActive').show("slide", { direction: "left"});
			  li.removeClass('slideActive').hide("slide", { direction: "right"});
			}
			current2 = index;
			// CHANGE DETAILS FOR SS2
		  // $(".wear_details div").each(function(){
		  //        $(this).removeClass("detailActive");
		  //      });
			$(".wear_details div").removeClass("detailActive");
			$(".wear_details div").eq(index).addClass("detailActive");
		});
		//CART HOVER
		$("div.cart-container a.inline-cart").mouseenter(function(){
		    $("section.inline-cart").slideDown();
		  });
		$("div.cart-container a.inline-cart").click(function(){
		  $("section.inline-cart").slideToggle();
		  return false;
		});
		$("section.inline-cart").mouseenter(function(){
		    $(this).show();
		  });
		$("section.inline-cart").mouseleave(function(){
		  $(this).slideUp();
		});
});
// CART AJAX
function rebind(){
  $("div.cart-container a.inline-cart").mouseenter(function(){
	    $("section.inline-cart").slideDown();
	  });
  $("div.cart-container a.inline-cart").click(function(){
	  $("section.inline-cart").slideToggle();
	  return false;
	});
  $("section.inline-cart").mouseenter(function(){
	    $(this).show();
	  });
	$("section.inline-cart").mouseleave(function(){
	  $(this).slideUp();
  });
}
function reloadSmallCart(form_id) {
    var params = {
      type: 'POST',
      url: '/cart/add.js',
      data: jQuery('#' + form_id).serialize(),
      dataType: 'json',
      success: function() {
        $("div.cart-container").load("/ div.cart-container div", function(){
          rebind();
        });
        $("section.inline-cart").load("/ section.inline-cart form", function(){
      	  $(this).slideDown().delay(2000).slideUp();
      	});
      },
      error: function(XMLHttpRequest, textStatus) {
        //Shopify.onError(XMLHttpRequest, textStatus);
      }
    };
    jQuery.ajax(params);	
}
function remove_item(id) {
    var params = {
    type: 'POST',
    url: '/cart/change.js',
    data:  'quantity=0&id='+id,
    dataType: 'json',
    success: function() {
    	$("div.cart-container").load("/ div.cart-container div", function(){
    	  $("section.inline-cart").load("/ section.inline-cart form");
    	  rebind();
    	});
    	$("section.cart div.cart").load("/cart section.cart div form");
    },
    error: function(XMLHttpRequest, textStatus) {
      //Shopify.onError(XMLHttpRequest, textStatus);
    }
  };
  jQuery.ajax(params);
}