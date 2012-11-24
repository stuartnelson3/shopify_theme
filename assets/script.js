// HIDES MODAL POPUPS
$(".js-modal-close").on("click", function(){
  $(this).closest(".js-modal-container").fadeOut("medium");
  return false;
});
// SIZE CHART
// REVEALS SIZE CHART MODAL ON PRODUCT PAGE
$(".js-size-chart").on("click", function(){
  $("section.size-chart").fadeIn("medium");
});
// HIDDEN SWATCH WINDOW BECOMES VISIBLE ON CLICK
$("a.swatch, a.swatch_close").on("click", function(){
  $(".swatch-popup").toggleClass("box-shadow-bump");
  return false;
});
// SHOWS UL OF ITEMS IF IT IS NOT VISIBLE, OTHERWISE SLIDES UP
$(".js-looks-div").on("click", function(){
  var $looks = $(".js-looks-page");
  var $ul = $(this).next(".js-looks-page");
  var $this = $(this);
  var $button = $this.find(".js-looks-button");
  var speed = 500;
  
  $looks.slideUp(speed);
  $(".js-looks-button").val("Buy This Outfit");
  if (!$ul.is(":visible")) {
    $button.val("Close");
    $ul.slideDown(speed, function(){
      var opts = {
        scrollTop: $this.offset().top 
      };
      $('html,body').animate(opts ,'slow');
    });
  }
  
});

// FUNCTION TO BUY ON PRODUCT PAGES
var purchaseItem = function($form_id) {
    var params = {
      type: 'POST',
      url: '/cart/add.js',
      data: $form_id.serialize(),
      dataType: 'json',
      success: function() {
        $("section.second-size-modal").fadeIn("medium");
        $("#add-to-cart").val("Added!");
        $(".cart-container").load("/ .login-box, section.inline-cart", function(){
          $("section.inline-cart").slideDown().delay(2000).slideUp();
        });
      },
      error: function(XMLHttpRequest, textStatus) {}
    };
    $.ajax(params);    
};
$(document).on("click", ".js-buy-button", function(){
  var $id = $(this).closest(".variants");
  purchaseItem($id);
});
// BUY ITEMS FROM LOOKS PAGE
$(".js-looks-add-product").on("click", function(){
  var v = $(this).closest("form.variants").find('select').val();
  var $button = $(this);
  var params = {
    type: 'POST',
    url: '/cart/add.js',
    data: "quantity=1&id="+v,
    dataType: 'json',
    success: function() {
      $button.val("Added!");
      $(".cart-container").load("/ .login-box, section.inline-cart", function(){
        $("section.inline-cart").slideDown().delay(2000).slideUp();
      });
    },
    error: function(XMLHttpRequest, textStatus) {}
  };
  $.ajax(params);
});
// DELEGATED HANDLER TO REMOVE ITEMS ON /CART PAGE
$(document).on("click", ".js-remove-button", function(e){
    var id = $(this).data("id");
    var params = {
    type: 'POST',
    url: '/cart/change.js',
    data:  'quantity=0&id='+id,
    dataType: 'json',
    success: function() {
      $("div.cart").load("/cart #cartform");
        $(".cart-container").load("/ .login-box, section.inline-cart");
    },
    error: function(XMLHttpRequest, textStatus) {}
  };
  $.ajax(params);
  e.preventDefault();
});

// DELEGATED HANDLER FOR UPDATE QUANTITY BUTTON ON /CART PAGE
$(document).on("click", ".update", function(){
  var id = $(this).attr("id");
  var number = $(this).prev().val();
  var params = {
    type: 'POST',
    url: '/cart/change.js',
    data:  'quantity='+number+'&id='+id,
    dataType: 'json',
    success: function() {
      $("div.cart").load("/cart #cartform");
      $(".cart-container").load("/ .login-box, section.inline-cart");
    },
    error: function(XMLHttpRequest, textStatus) {}
  };
  $.ajax(params);
});

// DELEGATED HANDLER FOR HOVERING OVER INLINE CART
$(document).on('mouseenter mouseleave', '.cart-container', function(e) {
  var $inlinecart = $("section.inline-cart"); 
  if (e.type === 'mouseenter') {
    $inlinecart.slideDown();
  }
  else if (e.type === 'mouseleave') {
    $inlinecart.slideUp();
  }
});

// DELEGATED HANDLER FOR CLICKING ON CART LINK TO SHOW CART
$(document).on("click", "a.inline-cart", function(){
  $("section.inline-cart").slideToggle();
});

// submit email, product, and size to be notified
// of when it's back in stock
var validatecheck = function (email) { 
  var emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailReg.test(email);
}
$(document).on("click", ".js-notify-me", function() {
  var email = $(".js-notify-email").val();
  var product = $(".product-title").text();
  var sku = $(".variant-sku").text();
  var $invalidemail = $(".js-invalid-email");
  var url = "http://salty-reef-8691.herokuapp.com/back-in-stock";
  var test_server_url = "http://localhost:4567/back-in-stock";
  var size;
  $(".single-option-selector").each(function() { size += $(this).val(); });
  size = size.replace("undefined","")
  
  $invalidemail.hide();
  var params = {
    type: "GET",
    url: url,
    data: "email=" + email + "&product=" + product + "&size=" + size + "&sku=" + sku,
    dataType: 'text',
    success: function() {},
    error: function(jqXHR, textStatus, errorThrown) {}
  };
  
  if (validatecheck(email)) {
    $invalidemail.hide();
    $(".js-notify-me").val("Sending");
    $.ajax(params);
    setTimeout(function(){
      $(".notify-me").fadeOut();
      $(".notify-me-success").fadeIn();
      $(".js-notify-me").val("Sent");
    },1500);
  }
  else {
    $invalidemail.show();
  }
});
$(document).on("click", ".js-notify-hook", function() {
  $(".notify-me").fadeIn();
});

// open giftcard modal form
$(document).on("click", ".js-open-gift-card-modal", function() {
  var $id = $(this).closest(".variants");
  var $select_box = $(".pselect-box .info");
  
  if ($select_box.text() === "Select") {
    $select_box.closest(".field").addClass("invalid-gift-card-input");
  }
  else {
    $select_box.closest(".field").removeClass("invalid-gift-card-input");
    $(".js-buy-gift-card").fadeIn();
    purchaseItem($id);
  }
  
});

// send buyers and receivers info to giftcard gdoc
$(document).on("click", ".js-send-gift-data", function() {
  var gifter_name = $(".js-gifter-name").val();
  var gifter_email = $(".js-gifter-email").val();
  var giftee_name = $(".js-giftee-name").val();
  var giftee_email = $(".js-giftee-email").val();
  var deliver_date = $("#datepicker").val();
  var amount = $("#product-select-option-0").val();
  var message = $(".gift-card-message").val();
  // url that is receiving get request
  var url = "http://salty-reef-8691.herokuapp.com/gift-card";
  var test_url = "http://localhost:4567/gift-card";
  var gifter_data = "gifter_name=" + gifter_name + "&gifter_email=" + gifter_email;
  var giftee_data = "&giftee_name=" + giftee_name + "&giftee_email=" + giftee_email;
  var date_and_amount = "&deliver_date=" + deliver_date + "&amount=" + amount + "&message=" + message;
  var data = gifter_data + giftee_data + date_and_amount;
  // want to validate form fields, so make sure they can't
  // purchase until it has passed
  
  // params for get request to sinatra site
  var params = {
    type: "GET",
    url: url,
    data: data,
    dataType: 'text',
    success: function() {},
    error: function(jqXHR, textStatus, errorThrown) {}
  };

  // validation checks
  $(".js-gifter-name, .js-giftee-name, #datepicker, .gift-card-message").each(function() {
    if ($(this).val() === "") {
      $(this).addClass("invalid-gift-card-input");
    }
    else {
      $(this).removeClass("invalid-gift-card-input");
    }
  });
  
  $(".js-gifter-email, .js-giftee-email").each(function() {
    var email_address = $(this).val();
    if (!validatecheck(email_address) || email_address === "") {
      $(this).addClass("invalid-gift-card-input");
    }
    else {
      $(this).removeClass("invalid-gift-card-input");
    }
  });
  
  if ($(".invalid-gift-card-input").length) {
    $(".gift-card-validation-message").addClass("show-validation");
  }
  else {
    $(".gift-card-validation-message").removeClass("show-validation");
    $(".js-send-gift-data").empty().append("Added!");
    
    $.ajax(params);
    setTimeout(function() {
      $(".js-buy-gift-card").fadeOut();
      }, 1500);
  }
});

// gift card details accordion
$(".js-gift-card-accordion").on("click", function() {
    var $div = $($(this).data("name")),
	    $h3  = $(this),
	    speed = 700;
	
	$div.slideToggle(speed, "swing");
	$h3.toggleClass("pink").find(".js-plus").toggle();
});

// navigate through gift card modal form
$(".js-gift-next-button").on("click", function() {
  var $current_div = $(this).closest(".gift-card-form"),
      $next_div = $(".gift-card-form").eq($current_div.index() + 1);
  
  $current_div.fadeOut(function() {
    $next_div.fadeIn();
  });
  
});

$(".js-gift-previous-button").on("click", function() {
  var $current_div = $(this).closest(".gift-card-form"),
      $previous_div = $(".gift-card-form").eq($current_div.index() - 1);
  
  $current_div.fadeOut(function () {
    $previous_div.fadeIn();
  });
  
});

//==================
// BEGIN DOC READY CODE
//==================

$(document).ready(function(){
  
  // DATEPICKER FOR GIFTCARD
  var options = {
      maxDate: "+3m",
  	  minDate: "+0d"
    };
  $("#datepicker").datepicker(options);
  
  // SETS ACTIVE TO FIRST SLIDE, CORRESPONDING LI, AND SWATCH ON PRODUCT PAGE
  $('ul.slides li:first-child').addClass("slideActive");
	$("ul.indices li:first-child").addClass("indexActive");
	$("div.swatch-popup div").eq(0).fadeIn();
	$("ul.swatch li").eq(0).addClass("active");
	
  // POPULATES STYLED DROPDOWNS ON PRODUCT AND CONTACT PAGES WITH OPTIONS FROM THEIR SELECT BOXES
  var fancyDropdown = function(index) {
      var i,
          div = $("div.selector-wrapper").eq(index).find("select option"),
          ul = $("form#product-actions").find("ul").eq(index);
      for (i = 1; i < div.length; i++) {
          ul.append('<li>'+ div.eq(i).html()+'</li>');
      }
  };
  var fancyContact = function(index) {
      var i,
          div = $("div.contact_form li").eq(index).find("select option"),
          ul = $("div.contact_form ul.selector");
      for (i = 0; i < div.length; i++) {
          ul.append('<li>'+ div.eq(i).html()+'</li>');
      }
  };
  var fancyLooksPage = function() {
    var i;
    var $select = $(".js-looks-page-selector");
    $select.each(function(){
      var $option = $(this).find("option");
      var $ul = $(this).siblings(".js-looks-select").find(".selector");
      for (i = 0; i < $option.length; i++) {
          $ul.append('<li>'+ $option.eq(i).html() +'</li>');
      }
    });   
  };
  fancyDropdown(0);
  fancyDropdown(1);
  fancyDropdown(2);
  fancyContact(2);
  fancyLooksPage();
  
  // HIDES UNHEMMED SELECTION FROM FANCY DROPDOWN FOR PANTS/SKIRTS
  $(".selector").each(function(){
    $(this).find(":contains(Unfinished)").hide();
  });
  // TEMP FIX TO DISABLE UNFINISHED OPTIONS
  $(".variants select").each(function(){
    $(this).find(":contains(Unfinished)").prop("disabled", "disabled");
  });  
  // CREATES FUNCTIONALITY FOR STYLED DROPDOWNS  
  (function($) {
      $.fn.styleddropdown = function() {
          return this.each(function() {
              var $obj = $(this);
              var speed = 10;
              $obj.find('.field').click(function() { //onclick event, 'list' fadein
                  if ($obj.find('ul').is(":visible")) {
                    $obj.find('ul').fadeOut(speed);
                  }
                  else{
                    $('.selector').fadeOut(speed);
                    $obj.find('ul').fadeIn(speed);
                  }
            
                  $(document).keyup(function(event) { //keypress event, fadeout on 'escape'
                      if (event.keyCode == 27) {
                          $obj.find('.selector').fadeOut(speed);
                      }
                  });
                  
                  $obj.on("mouseleave", function(){
                    $obj.find(".selector").fadeOut(speed);
                  });
              });

              $obj.find('.selector li').click(function() { //onclick event, change field value with selected 'list' item and fadeout 'list'
                  var $div_index = $(this).closest(".pselect-box"),
                      index,
                      $target;
                  if ($div_index.hasClass("top") || $div_index.hasClass("gift-card")) {
                    index = 0;
                    $target = $(".selector-wrapper");
                    $target.eq(index).find("select").val($(this).text()).change();
                  }
                  else if ($div_index.hasClass("bottom")) {
                    index = 1;
                    $target = $(".selector-wrapper");
                    $target.eq(index).find("select").val($(this).text()).change();
                  }
                  else if ($div_index.hasClass("color")) {
                    index = 2;
                    $target = $(".selector-wrapper");
                    $target.eq(index).find("select").val($(this).text()).change();
                  }
                  else if ($div_index.hasClass("js-looks-select")) {
                    $target = $div_index.siblings(".js-looks-page-selector");
                    var $selected = $(this);
                    $target.find("option").each(function(){
                      if ($(this).text() == $selected.text()){
                        $(this).prop("selected","selected");
                      }
                    });
                  }
                  else{
                    $target = $("#subject");
                    $target.val($(this).text()).change();
                  }
                  $obj.find('.info').empty().append($(this).text());
                  $obj.find('.selector').fadeOut(speed);
              });
            
          });
      };
  })(jQuery);
  $('.pselect-box').styleddropdown();
	
  // PRODUCT DESCRIPTION ACCORDION
  // SHOWS CORRESPONDING DROPDOWN ON CLICK FOR PRODUCT DESCRIPTION SECTION
	$(".js-details-accordion").click(function() {
		var $div = $($(this).data("name")),
		    $h3  = $(this),
		    $details = $(".details"),
		    speed = 700;
		    
		if ($div.is(":visible")) {
		  $details.slideUp(speed,"swing");
		  $h3.find(".js-plus").show();
		  $h3.removeClass("pink");
		} 
		else{
		  $(".js-plus").show();
		  $details.slideUp(speed,"swing");
		  $div.slideToggle(speed,"swing");
		  $(".js-details-accordion").removeClass("pink");
		  $h3.addClass("pink").find(".js-plus").hide();
		}
	});
  
  // SLIDESHOW FOR PRODUCT PAGE
	var $slides = $('#slideshow ul.slides li'),
	    slides2 = $("#slideshow2 ul.slides li"),
		  current = 0,
		  current2 = 0,
		  slideshow = {width:0,height:0},
		  nextIndex = 0,
		  $indices = $("#slideshow ul.indices li");
    // I-SWIPE
    $("#slideshow").swipe({
      swipeLeft:function(event, direction, distance, duration, fingerCount) {
          nextIndex = current < $slides.length - 1 ? nextIndex + 1 : 0;
          $slides.eq(nextIndex).addClass("slideActive").show("slide", { direction: "right" }, 500);
          $slides.eq(current).removeClass('slideActive').hide("slide", { direction: "left"}, 500);
          current = nextIndex;
          $indices.removeClass("indexActive").eq(nextIndex).addClass("indexActive"); 
        },
      swipeRight:function(event, direction, distance, duration, fingerCount) {
        nextIndex = current === 0 ? $slides.length - 1 : nextIndex - 1;
        $slides.eq(nextIndex).addClass("slideActive").show("slide", { direction: "left" }, 500);
        $slides.eq(current).removeClass('slideActive').hide("slide", { direction: "right"}, 500);
        current = nextIndex;
        $indices.removeClass("indexActive").eq(nextIndex).addClass("indexActive");
      }
    });
    
    // USING ARROWS 
		$('#slideshow .arrow').click(function(){
			var li = $slides.eq(current);

			// Depending on whether this is the next or previous
			// arrow, calculate the index of the next slide accordingly.
			
			if($(this).hasClass('next')){
				nextIndex = current >= $slides.length-1 ? 0 : current+1;
			}
			else {
				nextIndex = current <= 0 ? $slides.length-1 : current-1;
			}

			var next = $slides.eq(nextIndex);
				
				current = nextIndex;
				if ($(this).hasClass('next')) {
				  next.addClass('slideActive').show("slide", { direction: "right"});
				  li.removeClass('slideActive').hide("slide");
				}
				else {
				  next.addClass('slideActive').show("slide", { direction: "left"});
				  li.removeClass('slideActive').hide("slide", { direction: "right"});
				}
				$indices.removeClass("indexActive")
			          .eq(nextIndex).addClass("indexActive");
			
		});
    // USING INDICES
		$indices.click(function(){
			var index = $(this).index(),
			    li = $('#slideshow .slideActive'),
			    popup = $("div.swatch-popup div"),
			    ul = $("ul.swatch li");
			
			$("#slideshow ul.indices li").removeClass("indexActive");
			$(this).addClass("indexActive");
      
			if ($(this).index() === li.index()) {} //DO NOTHING
			else if ($(this).index() > li.index()) {
			  $slides.eq(index).addClass('slideActive').show("slide", { direction: "right"});
			  li.removeClass('slideActive').hide("slide");
			}
			else {
			  $slides.eq(index).addClass('slideActive').show("slide", { direction: "left"});
			  li.removeClass('slideActive').hide("slide", { direction: "right"});
			}
			current = index;
			
		});
		
    // SWATCH CLICK AND POPUP WINDOW UPDATE
    $("ul.swatch li").click(function(){
	  var li = $('#slideshow ul.slides li.slideActive');
      var index = $(this).index() - 1;
      var $div = $("div.swatch-popup div").eq(index);
      
      if (!$div.is(":visible")) {
    	    $div.fadeIn().siblings("div").fadeOut();
		    $("#slideshow ul.slides li").removeClass("slideActive")
	                                  .eq(index)
	                                  .addClass("slideActive")
	                                  .show("slide", { direction: "right"});
	      li.removeClass('slideActive').hide("slide");
          $indices.removeClass("indexActive")
                  .eq(index)
                  .addClass("indexActive");
		    current = index;
	    }
	
	});
});