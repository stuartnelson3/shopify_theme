function create_user(){
    var fq_sizes = $.cookie('fq_size');
	var fq_data = $.cookie('fq_data');
	var fq_bust = $.cookie('fq_top').substr(0,2)+$.cookie('fq_bust');
    var fq_length = $.cookie('fq_length');
	var fq_tmp;
	function usr_success(){ $('#customer-login-wrap').empty().html("<div id='contrats' style='margin-bottom: 40px;'><h3 style='color: rgb(211, 1, 141); font-style: normal; font-size: 14pt; font-weight: 600; margin: 40px 0px 0px;'>Your size information has been saved!</h3><p>You will receive an email within 24 hours with a link to activate your profile and select a password.</p><p style='font-size: 10pt;'>Get <span style='font-weight: bold; color: rgb(211, 1, 141);'>15% off</span> your first order with the code <span style='font-weight: bold; color: rgb(211, 1, 141);'>FALLINTOQUINCY</span>.</p></div>");}
	
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
	request.done(function(){usr_success();});
	request.fail(function(){usr_success();});
    return false;
} // end save_fq
function validateEmail($email) { var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; return emailReg.test( $email );} // email check

$(document).ready(function(){
	$('#createEmail').focusin(function(){$('.result').empty();});
    $('#CreateProfile').submit(function(){
	if($('#createEmail').val() == ''){
		$('#createEmail').addClass('notValid');
		$('.result').empty().html('<span style="color:#D3018D;">Email address is not valid.');
	} else {
		$('#createEmail').removeClass('notValid');
		create_user();
	
	}
	return false;
});
});