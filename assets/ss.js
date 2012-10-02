// javascript
function ssRefreshCart(){
  setTimeout(function(){location.reload(true);},4000); // wait 3 seconds to refresh the page
}
$(document).ready(function(){
    $('#cart-ss .ss-add-lnk').click(function(){
      var top = $(this).closest('.product').attr('id'); // top of the second size item
      var topsel = '#'+top;
	    var origID = top.substr(3); // the associated id.
	    var selected = $('#'+top+' #ss option:selected').val();
	    var seltxt = $('#'+top+' #ss option:selected').text().replace('/','').replace('/','');
	    
      $("body").addClass("ajax"); // change cursor to "progress"
      
	    if(selected !== 'select'){
	      $('#ss-'+origID+'-v').val(selected);
	      $('#ss-d-'+origID).val(seltxt);
        ssRefreshCart();
		  } 
		  else {
			  $(topsel+ ' .pselect-box .field').each(function(){
				  $(this).addClass('error');
			  });
			return false;
		}
	}); // ss-add-lnk
    
    $('#cart-ss .ss-nothanks-lnk').click(function(){
        var top = $(this).closest('.product').attr('id'); // top of the second size item
        var origID = top.substr(3); // the associated id.

		$('#'+top).fadeOut();
        return false;
    });
     
    var speed = 500;   
    $('#cart-ss .ss-edit-lnk').click(function(){
    	var top = $(this).closest('.product').attr('id'); // top of the second size item
			var topsel = '#'+top;
			$(topsel+' .view').fadeOut(speed, function(){ $(topsel+' .edit').fadeIn(speed); });
			return false;
    });
		$('#cart-ss .ss-cancel-lnk').click(function(){
			var top = $(this).closest('.product').attr('id'); // top of the second size item
			var topsel = '#'+top;
			
			$(topsel+' .edit').fadeOut(speed, function(){ $(topsel+' .view').fadeIn(speed); });
            return false;
    });
    
    $('#ss-cart-details-lnk').click(function(){
        $('.js-cart-details').fadeIn();
        return false;
    });
    $('#cart-ss a.field').click(function(){
    	$(this).removeClass('error');
        return false;	
    });
    
    $('#cart-ss .selector_0 li').click(function(){
    	var top = $(this).closest('.product').attr('id'); // top of the second size item
			var topsel = '#'+top;
			
			var myvar = $(this).text();
			var mvsel = [];
			
			$(topsel+' #ss option').each(function(){
				var eachtxt =$(this).text();
				if(eachtxt.indexOf(myvar) >= 0){
					mvsel.push(eachtxt.substr(eachtxt.length-6));
				}
			});
			
			$(topsel+' ul.selector_1 li').each(function(){
				if(mvsel.indexOf($(this).text()) >= 0){
					$(this).show();
				}
			});
			$(topsel+' .item2 .info').text($(topsel+' .item2 .sslabel').text()); // Reset field 2
			$(topsel+' #ss option:selected').removeAttr('selected');
			$(topsel+' #ss option:first').attr('selected', true);
    });
    $('#cart-ss .selector_1 li').click(function(){
    	var top = $(this).closest('.product').attr('id'); // top of the second size item
			var topsel = '#'+top;
			
			var dtxt = $(topsel+' .item1 .sslabel').text();
			var link = $(topsel+' .item1 .info').text();
			var link2 = $(this).text();
			
			$(topsel+' #ss option:selected').removeAttr('selected');
			
    	if(link !== dtxt){
    		$(topsel+' #ss option').each(function(){
    			if($(this).text().indexOf(link)>=0 && $(this).text().indexOf(link2) >=0){
    				$(this).attr('selected',true);
    				console.log('selected: ' + $(topsel+' #ss option:selected').val());
    			}
    		});
    	} else {
    		$(topsel+' .item1 .field').addClass('error');
    	}
    });    
});