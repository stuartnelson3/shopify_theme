// JavaScript Document
$(document).ready(function(){
if($.cookie('fq_top') && $.cookie('fq_length') && $.cookie('fq_waist')){
    var fq_top = $.cookie('fq_top').substring(0,2);
    var fq_bust = $.cookie('fq_top').substr(2);
    fq_bust = fq_bust.substr(0,1)+'/'+fq_bust.substr(1,2);
	var fq_length = $.cookie('fq_length');
	var fq_waist = $.cookie('fq_waist');
	
	if ($("label[for=product-select-option-0]").text() == "Length") {
      	$('#product-actions .top .field .info').empty().text(fq_length);
	  
	  	$('#product-select-option-0 option').each(function(){ // Change Length
			var pval = $(this).val();
			var pdata = $(this).text();
			if(pdata.indexOf(fq_length) > -1 || pdata.indexOf(fq_waist) > -1){
				$(this).attr('selected',true);
				return false;
			}
		});
	} // end Length Select
	
	if ($("label[for=product-select-option-1]").text() == "Bust") {
		$('#product-actions .bottom .field .info').empty().text(fq_top+' '+fq_bust);
		
		$('#product-select-option-1 option').each(function(){ // Change Length
			var pval = $(this).val();
			var pdata = $(this).text();
			if((pdata.indexOf(fq_top) > -1 && pdata.indexOf(fq_bust) > -1) || pdata.indexOf(fq_waist) > -1){
				$(this).attr('selected',true);
				return false;
			}
		});
	
	// select the variant
	$('#product-select option').each(function(index, element) {
			var pval = $(this).val();
			var pdata = $(this).text();
			if(pdata.indexOf(fq_bust) > -1 && pdata.indexOf(fq_top) != -1 && pdata.indexOf(fq_length) != -1){
				$(this).attr('selected',true);
				return false;
			}
		});
	} // end Bust Select
	
	if ($("label[for=product-select-option-0]").text() == "Waist") {
	  $('#product-actions .top .field .info').empty().text(fq_waist);
	  
	  $('#product-select-option-0 option').each(function(){ // Change Length
			var pval = $(this).val();
			var pdata = $(this).text();
			if((pdata.indexOf(fq_top) > -1 && pdata.indexOf(fq_bust) > -1) || pdata.indexOf(fq_waist) > -1){
				$(this).attr('selected',true);
				return false;
			}
	  });
	} else{}
	
	
  var prod_sel0 = $("#product-select-option-0");
  var prod_sel1 = $("#product-select-option-1");
    if(prod_sel0.val() !== "Length" && prod_sel1.val() !== "Bust" && prod_sel0.val() !== "Waist" && prod_sel1.val() !== "Inseam" && prod_sel1.val() !== "Length" && prod_sel1.val() !== "Waist" && prod_sel0.val() !== "Inseam"){
	  $('#product-select').removeAttr('disabled');
  	$('#add-to-cart').removeAttr('disabled').removeClass('disabled').removeClass('default');
	}
	
	if ($(":contains(32)", this).is(":selected")) {
		$("div.fits-like p").eq(0).show();
	}
	else if ($(":contains(34)", this).is(":selected")) {
		$("div.fits-like p").eq(1).show();
	}
	else if ($(":contains(36)",	 this).is(":selected")) {
		$("div.fits-like p").eq(2).show();
	}
	else if ($(":contains(38)", this).is(":selected")) {
		$("div.fits-like p").eq(3).show();
	}
	else if ($(":contains(40)", this).is(":selected")) {
		$("div.fits-like p").eq(4).show();
	}
	else {}
	
}
});