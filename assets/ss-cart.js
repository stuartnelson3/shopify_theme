$(document).ready(function(){
// Initialize the second size DOM
  $('#second-size .field').click(function(){$(this).next().show();});
  $('#second-size ul').hover(function(){},function(){$(this).hide();});
	$('#second-size .selector li').click(function(){
	  var txt = $(this).text();
	  $(this).closest('.pselect-box').find('.info').empty().text(txt);
	  $(this).closest('ul').hide();
  });
  $('#second-size .ss-nothanks-lnk').click(function(){
      console.log('clicked');
      $('#second-size').fadeOut(1000,function(){
        $(this).remove();
      });
  });
            
  $('#second-size a.field').click(function(){
  	$(this).removeClass('error');
      return false;	
  });
  
  $('#second-size .selector_0 li').click(function(){
		var topsel = '#second-size';
		
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
  $('#second-size .selector_1 li').click(function(){
  	var topsel = '#second-size';
		
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
  
  $('#second-size .ss-add-lnk').click(function(){
    var topsel = '#second-size';
    var origID = $('#ss-prodid').val(); // the associated id.
    var selected = $(topsel+' #ss option:selected').val();
    var seltxt = $(topsel+' #ss option:selected').text().replace('/','').replace('/','');
    
    if(selected !== 'select'){
      $('#ssval').val(selected);
      $('#ssname').val(seltxt);
      var params = {
      	url: 	'/cart/update.js',
      	type: 'post',
      	data:	$('#cartform').serialize(),
      	dataType: 'json',
      	async:	false
      };
      $.ajax(params).done(function(){
      	console.log('added attributes');
      });
    $('#second-size #header').empty().text('You have successfully added a second size!');
    $('#second-size #header').animate({paddingTop: "33px",paddingBottom:"48px"});
    $('#second-size').delay(5000).slideUp();
    return false;
          
    } else {
    	$(topsel+ ' .pselect-box .field').each(function(){
    		$(this).addClass('error');
    	});
        $('#second-size #header').animate({paddingTop: "15px",paddingBottom:"15px"}); 
    }
    return false;
	}); // ss-add-lnk
});