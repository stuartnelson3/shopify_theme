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
$(document).ready(function(){
	$('ul.slides li:first-child').addClass("slideActive");
	$("ul.indices li:first-child").addClass("indexActive");
	$("div.wear_details div").eq(0).addClass("detailActive");
	$("div.swatch-popup div").eq(0).fadeIn();
	$("ul.swatch li:first-of-type").addClass("active");
	$("div.selector-wrapper").eq(2).hide();
	$("#product-select-option-2").val($("#product-select-option-2 option").eq(1).val()).change();
	$("p.color").append($("#product-select-option-2").val());
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
  // function slideshowIndexGen() {
  //     var i,
  //         indices = $("div#slideshow2 ul.slides li").length,
  //         ul = $("div.wear_details nav ul");
  //     for (i = 0; i < indices; i++) {
  //         ul.append("<li>" + i + "</li>");
  //     }
  //     
  //   }
  fancyDropdown(0);
  fancyDropdown(1);
  fancyContact(2);
  //slideshowIndexGen();  
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
                    target.eq(index).find("select").val($(this).text()).change();
                  }
                  else if ( div_index.hasClass("bottom")) {
                    index = 1;
                    target = $("form.variants div div");
                    target.eq(index).find("select").val($(this).text()).change();
                  }
                  else if ( div_index.hasClass("fq")) {
                    div_index.next().val($(this).text());
                  }
                  else{
                    index = 2;
                    target = $("div.contact_form ul>li");
                    target.eq(index).find("select").val($(this).text()).change();
                  }
                  obj.find('span.info').empty().append($(this).text());
                  obj.find('.selector').fadeOut(200);
                  //target.eq(index).find("select").val($(this).text()).change(); //.parent().prev().val($(this).html());

              });
            
          });
      };
  })(jQuery);
  $(function() {
      $('.select-box').styleddropdown();
      $('.pselect-box').styleddropdown();
  });
  // LOOKS
  // PAGE
  $("img.hero").click(function(){
    var ul = $(this).parent().next("ul");
    $("section.collection_looks ul").slideUp(700);
    if (ul.is(":visible")) {}
    else {
      ul.slideDown(700);
    }
  });
  $("div.description input").click(function(){
    var ul = $(this).parent().parent().next("ul");
    $("section.collection_looks ul").slideUp(700);
    if (ul.is(":visible")) {}
    else {
      ul.slideDown(700);
    }
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
	// SIZE CHART
  $("a.size-chart").click(function(){
    $("section.size-chart").show();
  });
  $("a.size_chart_close").click(function(){
    $("section.size-chart").hide();
  });
  // SLIDESHOWS
	var slides = $('#slideshow ul.slides li'),
	    slides2 = $("#slideshow2 ul.slides li"),
		  current = 0,
		  current2 = 0,
		  slideshow = {width:0,height:0},
		  nextIndex = 0;
    // I-SWIPE
    $("#slideshow").swipe({
      swipeLeft:function(event, direction, distance, duration, fingerCount) {
          nextIndex = current < slides.length - 1 ? nextIndex + 1 : 0;
          slides.eq(nextIndex).addClass("slideActive").show("slide", { direction: "right" }, 500);
          slides.eq(current).removeClass('slideActive').hide("slide", { direction: "left"}, 500);
          current = nextIndex;
          $("#slideshow ul.indices li").removeClass("indexActive");
  				$("#slideshow ul.indices li").eq(nextIndex).addClass("indexActive"); 
        },
      swipeRight:function(event, direction, distance, duration, fingerCount) {
        nextIndex = current === 0 ? slides.length - 1 : nextIndex - 1;
        slides.eq(nextIndex).addClass("slideActive").show("slide", { direction: "left" }, 500);
        slides.eq(current).removeClass('slideActive').hide("slide", { direction: "right"}, 500);
        current = nextIndex;
        $("#slideshow ul.indices li").removeClass("indexActive");
				$("#slideshow ul.indices li").eq(nextIndex).addClass("indexActive");
      }
    });
    // $("#slideshow2").swipe({
    //       swipeLeft:function(event, direction, distance, duration, fingerCount) {
    //           nextIndex = current2 < slides2.length - 1 ? nextIndex + 1 : 0;
    //           slides2.eq(nextIndex).addClass("slideActive").show("slide", { direction: "right" }, 500);
    //           slides2.eq(current2).removeClass('slideActive').hide("slide", { direction: "left"}, 500);
    //           current2 = nextIndex;
    //           $(".wear_details ul.indices li").removeClass("indexActive");
    //          $(".wear_details ul.indices li").eq(nextIndex).addClass("indexActive");
    //         },
    //       swipeRight:function(event, direction, distance, duration, fingerCount) {
    //         nextIndex = current2 === 0 ? slides2.length - 1 : nextIndex - 1;
    //         slides2.eq(nextIndex).addClass("slideActive").show("slide", { direction: "left" }, 500);
    //         slides2.eq(current2).removeClass('slideActive').hide("slide", { direction: "right"}, 500);
    //         current2 = nextIndex;
    //         $(".wear_details ul.indices li").removeClass("indexActive");
    //        $(".wear_details ul.indices li").eq(nextIndex).addClass("indexActive");
    //       }
    //     });
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
		  $("p.color").empty().append($("#product-select-option-2").val());
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
    // // SLIDESHOW2 ARROWS
    //    $('.wear_details .arrow').click(function(){
    //      var li      = slides2.eq(current2);
    //      
    //      if($(this).hasClass('next')){
    //        nextIndex = current2 >= slides2.length-1 ? 0 : current2+1;
    //      }
    //      else {
    //        nextIndex = current2 <= 0 ? slides2.length-1 : current2-1;
    //      }
    // 
    //      var next = slides2.eq(nextIndex);
    //        
    //        current2 = nextIndex;
    //        if ($(this).hasClass('next')) {
    //          next.addClass('slideActive').show("slide", { direction: "right"});
    //          li.removeClass('slideActive').hide("slide");
    //        }
    //        else {
    //          next.addClass('slideActive').show("slide", { direction: "left"});
    //          li.removeClass('slideActive').hide("slide", { direction: "right"});
    //        }
    //        $(".wear_details ul.indices li").removeClass("indexActive");
    //        $(".wear_details ul.indices li").eq(nextIndex).addClass("indexActive");
    //        $(".wear_details div").removeClass("detailActive");
    //        $(".wear_details div").eq(nextIndex).addClass("detailActive");
    //    });
    //    // SLIDESHOW2 INDICES
    //    $(".wear_details ul.indices li").click(function(){
    //      var index = $(this).index(),
    //          li = $('#slideshow2 ul.slides li.slideActive');
    //      
    //      $(".wear_details ul.indices li").removeClass("indexActive");
    //      $(this).addClass("indexActive");
    //      if ($(this).index() === li.index()) {} //DO NOTHING
    //      else if ($(this).index() > li.index()) {
    //        slides2.eq(index).addClass('slideActive').show("slide", { direction: "right"});
    //        li.removeClass('slideActive').hide("slide");
    //      }
    //      else {
    //        slides2.eq(index).addClass('slideActive').show("slide", { direction: "left"});
    //        li.removeClass('slideActive').hide("slide", { direction: "right"});
    //      }
    //      current2 = index;
    //      $(".wear_details div").removeClass("detailActive");
    //      $(".wear_details div").eq(index).addClass("detailActive");
    //    });
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
		// FIT QUIZ
		var fields = $("input[type=radio]").serializeArray();

    function pageNumber(newNumber) {
        $(".page-number").html(newNumber);
    }
    $("div.page2, div.page2_5, div.page3").hide();

    $("button.next1").click(function() {
        if ($("#bust_size option:selected").val() == "select" || $("#dress_size option:selected").val() == "select" || $("#cup_size option:selected").val() == "select" || $("#pant_size option:selected").val() == "select" || $("#feet option:selected").val() == "select" || $("#inches option:selected").val() == "select" || $("#weight option:selected").val() == "select") {
            $("span.validation").show();
            $("div.select-box a.field span").each(function() {
                if ($(this).html() == "Select") {
                    $("span.validation").show();
                    $(this).parent().addClass("notValid");
                }
                else {
                    $(this).parent().removeClass("notValid");
                }
            });
        }
        else {
            $("div.select-box a.field").removeClass("notValid");
            $("span.validation").hide();
            $("div.page1").slideUp("slow");
            $("div.page2").slideDown("slow", function() {
                pageNumber("2 of 3");
            });
        }
    });
    $(".next2").click(function() {
        if ($("div.page2 input[type=radio]").serializeArray().length < 3) {
            $("span.validation").show();
            $("div.quincy div.radio").each(function() {
                if ($(this).find("input").serializeArray().length < 1) {
                    $(this).closest("div").addClass("notValid");
                }
                else {
                    $(this).closest("div").removeClass("notValid");
                }
            });
            $("div.select-box a.field span").each(function() {
                if ($(this).html() == "Select") {
                    $(this).parent().addClass("notValid");
                }
                else {
                    $(this).parent().removeClass("notValid");
                }
            });
        }
        else {
            $("div.select-box a.field, div.radio").removeClass("notValid");
            $("span.validation").hide();
            $("div.page2").slideUp("slow");
            $("div.page2_5").slideDown("slow", function() {
                pageNumber("3 of 3");
            });
        }
    });
    $(".next2_5").click(function() {
        if ($("div.page2_5 input[type=radio]").serializeArray().length < 5) {
            $("span.validation").show();
            $("div.quincy div.radio").each(function() {
                if ($(this).find("input").serializeArray().length < 1) {
                    $(this).closest("div").addClass("notValid");
                }
                else {
                    $(this).closest("div").removeClass("notValid");
                }
            });
        }
        else {
            $("div.select-box a.field, div.radio").removeClass("notValid");
            $("span.validation").hide();
            $("div.page2_5").slideUp("slow");
            $("div.page3").slideDown("slow", function() {
                pageNumber(" ");
                //$("form#quiz").submit();
            });
        }
    });
    $("button.previous1").click(function() {
        $(this).closest('div').slideUp("slow");
        $("div.page1").slideDown("slow", function() {
            pageNumber("1 of 3");
        });
    });
    $("button.previous2").click(function() {
        $(this).closest('div').slideUp('slow');
        $("div.page2").slideDown('slow', function() {
            pageNumber("2 of 3");
        });
    });
    $("button.previous2_5").click(function() {
        $(this).closest('div').slideUp('slow');
        $("div.page2_5").slideDown('slow', function() {
            pageNumber("3 of 3");
        });
    });

    $("input.groovierbutton").click(function() {
        var dress_size = parseInt($("select#dress_size option:selected").val(), 10),
            bust_size = parseInt($("select#bust_size option:selected").val(), 10),
            cup_size = $("select#cup_size option:selected").val(),
            pant_size = parseInt($("select#pant_size option:selected").val(), 10);
        var pet1 = $("div#dart input[value=3]").is(":checked");
        var pet2 = $("div#sleeve input[value=3]").is(":checked");
        var pet3 = $("div#torso input[value=3]").is(":checked");
        var tal1 = $("div#dart input[value=4]").is(":checked");
        var tal2 = $("div#sleeve input[value=2]").is(":checked");
        var tal3 = $("div#torso input[value=2]").is(":checked");
        var length = 0;
        var textFieldsFeet = $("#feet option:selected");
        var textFieldsInches = $("#inches option:selected");
        var textFieldsWeight = $("#weight option:selected");
        var dress_size_norm, dress_size_rec, dress_size_cup_rec, dress_size_primary, bust_size_norm, bust_size_rec, bust_size_primary, cup_size_norm, cup_size_rec, cup_size_primary, length_primary, length_rec, pant_rec, pants_fit = $("div#pants-fit select").val();

        //Normalize dress size so it can be compared to bust size
        switch (dress_size) {
        case 00:
            dress_size_norm = 32;
            break;
        case 0:
            dress_size_norm = 32;
            break;
        case 2:
            dress_size_norm = 34;
            break;
        case 4:
            dress_size_norm = 34;
            break;
        case 6:
            dress_size_norm = 36;
            break;
        case 8:
            dress_size_norm = 36;
            break;
        case 10:
            dress_size_norm = 38;
            break;
        case 12:
            dress_size_norm = 38;
            break;
        case 14:
            dress_size_norm = 40;
            break;
        case 16:
            dress_size_norm = 40;
            break;
        }
        //Compare normalized dress size to bust size
        //Larger size taken as main recommendation
        if (dress_size_norm > bust_size) {
            dress_size_primary = dress_size_norm;
        }
        else if ((bust_size > dress_size_norm) || (bust_size == dress_size_norm)) {
            dress_size_primary = bust_size;
        }
        else {}
        //Depending on which 00-14 dress size, alternate recommendation is closest 32-40 size
        //Depending on size up or size down, include alternate cup size with recommendation
        //if customer wears B or C
        if (dress_size % 4 === 0) {
            dress_size_cup_rec = 1;
            dress_size_rec = dress_size_primary + 2;
        }
        else {
            dress_size_cup_rec = -1;
            dress_size_rec = dress_size_primary - 2;
        }
        //Recommend primary cup size
        if (cup_size == "AA" || cup_size == "A" || cup_size == "B") {
            if (cup_size == "B" && dress_size_cup_rec === -1) {
                cup_size_rec = "C/D";
            }
            else {
                cup_size_rec = "A/B";
            }
            if (cup_size == "B" && $("#dart input:radio:checked").val() == 2) {
                cup_size_primary = "C/D";
                cup_size_rec = "C/D";
            }
            else {
                cup_size_primary = "A/B";
            }
        }
        else {
            if (cup_size == "C" && dress_size_cup_rec === 1) {
                cup_size_rec = "A/B";
            }
            else {
                cup_size_rec = "C/D";
            }
            if (cup_size == "C" && $("#dart input:radio:checked").val() == 1) {
                cup_size_primary = "A/B";
                cup_size_rec = "A/B";
            }
            else {
                cup_size_primary = "C/D";
            }
        }
        //Add up length indicators
        //Final tally decides length recommendation
        if (pet1) {
            length -= 1;
        }
        if (pet2) {
            length -= 1;
        }
        if (pet3) {
            length -= 1;
        }
        if (tal1) {
            length += 1;
        }
        if (tal2) {
            length += 1;
        }
        if (tal3) {
            length += 1;
        }
        if (length < -1) {
            length_primary = "Petite";
            if (textFieldsFeet.val() >= 5 && textFieldsInches.val() > 4) {
                length_rec = "Regular";
            }
        }
        else if (length > 1) {
            length_primary = "Tall";
            if (textFieldsFeet.val() < 6 && textFieldsInches.val() < 10) {
                length_rec = "Regular";
            }
        }
        else {
            length_primary = "Regular";
            if (textFieldsFeet.val() >= 5 && textFieldsInches.val() >= 10) {
                length_rec = "Tall";
            }
            else if (textFieldsFeet.val() < 6 && textFieldsInches.val() <= 4) {
                length_rec = "Petite";
            }
        }
        //Recommending waist size
        switch (pant_size) {
        case 00:
            pant_rec = 24;
            break;
        case 0:
            pant_rec = 25;
            break;
        case 2:
            pant_rec = 26;
            break;
        case 4:
            pant_rec = 27;
            break;
        case 6:
            pant_rec = 28;
            break;
        case 8:
            pant_rec = 29;
            break;
        case 10:
            pant_rec = 30;
            break;
        case 12:
            pant_rec = 31;
            break;
        case 14:
            pant_rec = 32;
            break;
        case 16:
            pant_rec = 33;
            break;
        }
        //Storing data based on pants fit
        //Doesn't figure into quiz currently
        if ($("div#pants1 input[value=2]").is(":checked") || ($("div#pants1 input[value=1]").is(":checked") && $("div#pants0 input[value=1]").is(":checked"))) {
            $("div#pants-fit select").val("Straight");
        }
        else if ($("div#pants2 input[value=2]").is(":checked") || $("div#pants3 input[value=2]").is(":checked") || ($("div#pants2 input[value=1]").is(":checked") && $("div#pants3 input[value=1]").is(":checked"))) {
            $("div#pants-fit select").val("Curvy");
        }
        else {
            $("div#pants-fit select").val("Classic");
        }
        //RESULTS
        //FOR
        //QUIZ
        if ((dress_size + 2) < $("select#pant_size").val()) {
            $("span.dress-warning").show();
        }
        else {
            $("span.dress-warning").hide();
        }
        if ($("select#cup_size option:selected").index() >= 7) {
            $("span.hagrid").show();
            $("#primary, #rec_1, #rec_2, #rec_3").empty();
        }
        else if ($("select#dress_size option:selected").val() > 16) {
            $("span.hagrid").show();
            $("#primary, #rec_1, #rec_2, #rec_3").empty();
        }
        else if ($("select#bust_size option:selected").val() > 40) {
            $("span.hagrid").show();
            $("#primary, #rec_1, #rec_2, #rec_3").empty();
        }
        else {
            $("span.hagrid").hide();
            $("#primary, #rec_1, #rec_2, #rec_3, #pant_rec").empty();
            $("#primary").append(dress_size_primary, " ", cup_size_primary, " ", length_primary);
            $("#rec_1").append(dress_size_rec, " ", cup_size_rec, " ", length_primary);
            if (length_rec) {
                $("#rec_2").append(dress_size_primary, " ", cup_size_primary, " ", length_rec);
            }
            if (cup_size_rec) {
                $("#rec_3").append(dress_size_primary, " ", cup_size_rec, " ", length_primary);
            }
            $("#pant_rec").append(pant_rec);
            send_fit_data();
        }
/*REMEMBER TO POST DATA TO CUSTOMER ACCNTS DB
          WHEN ADAM GIVES YOU THE ADDRESS FOR IT */

        function send_fit_data() {
            var params = {
                type: 'POST',
                //url: GET URL FROM ADAM,
                dataType: 'json',
                data: {
                    primary_rec: dress_size_primary + " " + cup_size_primary + " " + length_primary,
                    secondary_rec: dress_size_rec + " " + cup_size_rec + " " + length_primary,
                    tertiary_rec: dress_size_primary + " " + cup_size_primary + " " + length_rec,
                    quaternary_rec: dress_size_primary + " " + cup_size_rec + " " + length_primary,
                    bottoms_rec: pant_rec + " " + pants_fit
                },
                success: function() {}
            };
            jQuery.ajax(params);
        }
    });
    
    
    // CART AJAX
    
    function reloadSmallCart(form_id) {
        var params = {
          type: 'POST',
          url: '/cart/add.js',
          data: "quantity=1&id="+form_id,
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
    $("section.collection_looks ul input").click(function(){
      var v = $(this).parent().parent().find('select').val();
      reloadSmallCart(v);
    });
});
function purchaseItem(form_id) {
    var params = {
      type: 'POST',
      url: '/cart/add.js',
      data: $("#"+form_id).serialize(),
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