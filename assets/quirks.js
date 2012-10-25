function create_user(){
  var fq_sizes = $.cookie('fq_size');
	var fq_data = $.cookie('fq_data');
	var fq_bust = $.cookie('fq_top').substr(0,2)+$.cookie('fq_bust');
  var fq_length = $.cookie('fq_length');
	var fq_tmp;  
	var fq_waist = fq_sizes.slice(fq_sizes.lastIndexOf(':')+1,fq_sizes.lastIndexOf(';'));

	// Send to the FQ_APP
	var request = $.ajax({
		type: 'GET',
		url: 'http://fitquiz.quincyapparel.com/cfq.php',
    dataType: 'text',
		data: {
			shop: Shopify.shop,
      fname:$('#CreateProfile input[name=fname]').val(),
      lname:$('#CreateProfile input[name=lname]').val(),
			email: $('#CreateProfile input[name=email]').val(),
			fq_bust: fq_bust,
			fq_length: fq_length,
			fq_waist: fq_waist,
			fq_data: fq_data
			}
	});
    
    var gdoc = 'https://script.google.com/a/macros/quincyapparel.com/s/AKfycbxodm9nex12FC0agcd1ZYyRhYEzTvwdWZpvdSl0NNOYrT2ggRo/exec';
    var post_data = 'email='+$('#CreateProfile input[name=email]').val()+'&name='+$('#CreateProfile input#fname').val()+' '+$('#CreateProfile input#lname').val();
    var params = {
        type: 'POST',
        url: gdoc,
        data:  post_data,
        dataType: 'json',
        success: function() {},
        error: function(jqXHR, textStatus, errorThrown) {}
        };
    
    
	request.done(function(data){
        if(data.indexOf('4') >= 0){
          $('.result').fadeOut().empty().html('<span style="color:#D3018D;">This Email Address exists!<br/> Please login Now.').fadeIn();
        } else if(data.indexOf('3') >= 0){
          $('.result').fadeOut().empty().html('<span style="color:#D3018D;">This Email Address exists!<br/> You will receive an email shortly to active your account.').fadeIn();
        } else if(data.indexOf('2') >= 0){
          $("#ajaxLoader").remove();
          $(".js-user-create-modal").fadeIn();
          $.ajax(params);
        } 
        else if(data.indexOf('1') >= 0){ // account creation failed
          $('.result').fadeOut().empty().html('<span style="color:#D3018D;">There has been an issue confirming your account!<br/> Your information has been saved! Please be patient while we fix this issue.').fadeIn();
        }
    });
    return false;
} // end save_fq
function validateEmail($email) { 
  var emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailReg.test( $email );
} // email check
var email_check = $('#CreateProfile input[name=email]').val();
$(document).ready(function(){
	$('#createEmail').focusin(function(){
	  $('.result').empty();
	});
  $('#CreateProfile').submit(function(){
    $('#CreateProfile button[type=submit]').attr('disabled',true);
    $('#CreateProfile').append('<p id="ajaxLoader" style="position: relative; left: 0px; top: 5px;"><span>Please Wait...</span><img src="https://static.shopify.com/s/files/1/0103/5102/t/59/assets/ajax-loader.gif?25047" style="top: 2px; left: -10px;"></p>');
    var i = 0 ; //This is validity
    $('#CreateProfile input').each(function(){
      if($(this).val() ===''){
        $(this).addClass('notValid');
        i++;
      } 
      else {
        $(this).removeClass('notValid');
      }
    });
    if(validateEmail($('#CreateProfile input[name=email]').val()) === false){
      $('#createEmail').addClass('notValid');
      i++;
    } 
    else {
      $('#createEmail').removeClass('notValid');
    }
    if(i === 0){ // Check to see if we ended up with 0
	    create_user();
	  } 
	  else{
      $("#ajaxLoader").remove();
      $('#CreateProfile button[type=submit]').removeAttr('disabled');
      $('.result').fadeOut().empty().html('<span style="color:#D3018D;">Please enter your name and valid email.').fadeIn();   
	  }
	  return false;
  });
});