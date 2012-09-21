function create_user(){
  var fq_sizes = $.cookie('fq_size');
	var fq_data = $.cookie('fq_data');
	var fq_bust = $.cookie('fq_top').substr(0,2)+$.cookie('fq_bust');
  var fq_length = $.cookie('fq_length');
	var fq_tmp;
	var usr_success = function() {  
	  $('#customer-login-wrap').fadeOut().empty().html("<div id='contrats' style='margin-bottom: 40px;'><h3 style='color: rgb(211, 1, 141); font-style: normal; font-size: 14pt; font-weight: 600; margin: 40px 0px 0px;'>Your size information has been saved!</h3><p class='em-top'>You will receive an email within 24 hours with a link to activate your profile and select a password.</p><p>Get <span style='font-weight: bold; color: rgb(211, 1, 141);'>15% off</span> your first order with the code <span style='font-weight: bold; color: rgb(211, 1, 141);'>FALLINTOQUINCY</span>.</p><a class='blue serif-thin em-top' href='/collections/shop' title='Shop now!' style='font-size: 24px; display: inline-block;'>View the Collection &gt;</a></div>").fadeIn();
	};
	
	var fq_waist = fq_sizes.slice(fq_sizes.lastIndexOf(':')+1,fq_sizes.lastIndexOf(';'));

	// Send to the FQ_APP
	var request = $.ajax({
		type: 'POST',
		url: 'http://fitquiz.quincyapparel.com/cfq.php',
		data: {
			shop: Shopify.shop,
			email: $('#CreateProfile input[name=email]').val(),
			fq_bust: fq_bust,
			fq_length: fq_length,
			fq_waist: fq_waist,
			fq_data: fq_data
			}
	});
    
  var gdoc = 'https://script.google.com/a/macros/quincyapparel.com/s/AKfycbxodm9nex12FC0agcd1ZYyRhYEzTvwdWZpvdSl0NNOYrT2ggRo/exec';
  var post_data = 'email='+$('#CreateProfile input[name=email]').val()+'&name='+$('#CreateProfile input#name').val();
  var params = {
      type: 'POST',
      url: gdoc,
      data:  post_data,
      dataType: 'json',
      success: function() {},
      error: function(jqXHR, textStatus, errorThrown) {}
      };
  
  
	request.done(function(data){
    if(data.indexOf('1') > -1 ){
        usr_success();
        $.ajax(params);
    } else if(data.indexOf('3') > -1 ){
        $('.result').fadeOut().empty().html('<span style="color:#D3018D;">This Email Address has already been added!').fadeIn();
    }
    });
    return false;
} // end save_fq
var validateEmail = function($email) { 
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailReg.test( $email );
}; // email check
var email_check = $('#CreateProfile input[name=email]').val();
$(document).ready(function(){
	$('#createEmail').focusin(function(){$('.result').empty();});
    $('#CreateProfile').submit(function(){
	if($('#CreateProfile input[name=email]').val() === '' || $('#CreateProfile input#name').val() === '' || validateEmail($('#CreateProfile input[name=email]').val()) === false ){
		$('#createEmail').addClass('notValid');
		$('.result').fadeOut().empty().html('<span style="color:#D3018D;">Please enter your name and valid email.').fadeIn();
	} else {
		$('#createEmail').removeClass('notValid');
		create_user();	
	}
	return false;
});
});