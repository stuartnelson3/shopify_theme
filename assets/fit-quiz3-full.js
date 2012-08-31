var fqt = new Array('Find your perfect fit','Your measurements','Shape','How your tops fit','How your bottoms fit','Your perfect fit');
function pageNumSwitch(NUM){
    NUM = parseInt(NUM.substring(NUM.length-1,NUM.length),10);
        var currentHeight = $('#fq-'+NUM).css('height');
		var nextHeight = $('#fq-'+(NUM+1)).css('height');
		
		if(currentHeight < nextHeight){
			$('#fit-quiz-top').animate({ height: ($('#fq-'+(NUM+1)).css('height')+78) },function(){
				$('#fq-'+NUM).fadeOut(function(){
							$('#fq-'+(NUM+1)).fadeIn();	
				});
			});
		} else {
			$('#fq-'+NUM).fadeOut(function(){
				$('#fq-'+(NUM+1)).fadeIn();
			});
		}
    if(NUM == 5){
        $('.fqt-0').empty().text(fqt[NUM+1]);
    } else{
    	$('.fqt-0').empty().text((NUM+1)+' / '+fqt[NUM+1]);
    }
        var remVis = '#fqi-'+NUM;
		$(remVis).removeClass('fq-visual-active');
         console.log(remVis);
        var addVis = '#fqi-'+(NUM+1);
        $(addVis).addClass('fq-visual-active');
        console.log(addVis);
	}

$(document).ready(function(){
	$('#cancel-fq').click(function(){
        if(confirm("Are you sure you want to close the Fit Quiz?") == true){
    			$('#fit-quiz-top').slideUp(600);
		}
         return false;
	});
	
$('#fit-quiz-top .selector li').click(function(){
    	var data = $(this).text();
		var fieldID = $(this).closest('.select-box').attr('id');
		fieldID = fieldID.substr((fieldID.indexOf('-')+1),fieldID.length);
		$('#'+fieldID+' option').each(function(index, element) {
			 if($(this).attr('selected') == 'selected'){
				 $(this).removeAttr('selected');
			 }
			 if($(this).val() == data){
				 $(this).attr('selected','selected');
			 }
        });
});
    $('#fq-2 img.fq-check').click(function(){
        $('#fq-2 img.fq-check').each(function(){
            if($(this).hasClass('active')){
                $(this).removeClass('active');
            }
        });
        $(this).addClass('active');
        $('input[name=pants0]').val($(this).attr('title'));
    });
	$('#fq-3 #select-dart img.fq-check').click(function(){
        $('#fq-3 #select-dart img.fq-check').each(function(){
            if($(this).hasClass('active')){
                $(this).removeClass('active');
            }
        });
        $(this).addClass('active');
        $('input[name=dart]').val($(this).attr('title'));
    });
	$('#fq-3 #select-sleeve img.fq-check').click(function(){
        $('#fq-3 #select-sleeve img.fq-check').each(function(){
            if($(this).hasClass('active')){
                $(this).removeClass('active');
            }
        });
        $(this).addClass('active');
        $('input[name=sleeve]').val($(this).attr('title'));
    });
	$('#fq-3 #select-torso img.fq-check').click(function(){
        $('#fq-3 #select-torso img.fq-check').each(function(){
            if($(this).hasClass('active')){
                $(this).removeClass('active');
            }
        });
        $(this).addClass('active');
        $('input[name=torso]').val($(this).attr('title'));
    });
	$('#fq-4 #select-pants1 img.fq-check').click(function(){
        $('#fq-4 #select-pants1 img.fq-check').each(function(){
            if($(this).hasClass('active')){
                $(this).removeClass('active');
            }
        });
        $(this).addClass('active');
        $('input[name=pants1]').val($(this).attr('title'));
    });
	$('#fq-4 #select-pants2 img.fq-check').click(function(){
        $('#fq-4 #select-pants2 img.fq-check').each(function(){
            if($(this).hasClass('active')){
                $(this).removeClass('active');
            }
        });
        $(this).addClass('active');
        $('input[name=pants2]').val($(this).attr('title'));
    });
	$('#fq-4 #select-pants3 img.fq-check').click(function(){
        $('#fq-4 #select-pants3 img.fq-check').each(function(){
            if($(this).hasClass('active')){
                $(this).removeClass('active');
            }
        });
        $(this).addClass('active');
        $('input[name=pants3]').val($(this).attr('title'));
    });
	$('#fq-4 #select-pants4 img.fq-check').click(function(){
        $('#fq-4 #select-pants4 img.fq-check').each(function(){
            if($(this).hasClass('active')){
                $(this).removeClass('active');
            }
        });
        $(this).addClass('active');
        $('input[name=pants4]').val($(this).attr('title'));
    });


//--------
$('#fq-0 button.fq-next').click(function(){
    var level = $(this).closest('.fq-basic').attr('id');
    pageNumSwitch(level);
    return false;
}); // Begin the Fit Quiz


$("#fq-1 button.fq-next").click(function(){ // Step 1
    if ($("#dress_size option:selected").val() == "select" || $("#bust_size option:selected").val() == "select" || $("#cup_size option:selected").val() == "select" || $("#feet option:selected").val() == "select" || $("#inches option:selected").val() == "select" || $("#cup_size option:selected").val() == "select" || $("#pant_size option:selected").val() == "select" || $("#weight option:selected").val() == "select") {
		
		var TIER1_DATA = new Array('Feet','Inches','Pounds','Bust','Cup','Select Answer');
			
		$("#fq-1 div.select-box a.field span").each(function(){
			if($.inArray($(this).html(),TIER1_DATA) !== -1){
				$(this).parent().addClass("notValid");
			} else{
				$(this).parent().removeClass("notValid");
			}
		});
	} else{
		$("div.select-box a.field").removeClass("notValid");
        var level = $(this).closest('.fq-basic').attr('id');
        pageNumSwitch(level);
	}
	return false;
});
$('#fq-2 button.fq-next').click(function(){ // Step 2
    if($('input[name=pants0]').val() == '' ){
       	$('#fq-2 img.fq-check').each(function(index, element) {
            $(this).addClass('notValid');
        });
    } else {
       	$('#fq-2 img.fq-check').each(function(index, element) {
            $(this).removeClass('notValid');
        });
		var level = $(this).closest('.fq-basic').attr('id');
        pageNumSwitch(level);
	}
return false;
});

$('#fq-3 button.fq-next').click(function(){ // Step 3
    if($('input[name=dart]').val() == '' || $('input[name=sleeve]').val() == '' || $('input[name=torso]').val() == ''){
		if($('input[name=dart]').val() == ''){
			$('#fq-3 #select-dart img.fq-check').each(function() {
				if(!$(this).hasClass('active')){			
					$(this).addClass('notValid');
				}
			});
		}
		if($('input[name=sleeve]').val() == ''){
			$('#fq-3 #select-sleeve img.fq-check').each(function() {
				if(!$(this).hasClass('active')){			
					$(this).addClass('notValid');
				}
			});
		}
		if($('input[name=torso]').val() == ''){
			$('#fq-3 #select-torso img.fq-check').each(function() {
				if(!$(this).hasClass('active')){			
					$(this).addClass('notValid');
				}
			});
		}
    } else {
       	$('#fq-3 img.fq-check').each(function() {
            $(this).removeClass('notValid');
        });
		var level = $(this).closest('.fq-basic').attr('id');
        pageNumSwitch(level);
	}
return false;
});

$('#fq-4 button.fq-next').click(function(){ // Step 3
    if($('input[name=pants1]').val() == '' || $('input[name=pants2]').val() == '' || $('input[name=pants3]').val() == ''){
		if($('input[name=pants1]').val() == ''){
			$('#fq-4 #select-pants1 img.fq-check').each(function() {
				if(!$(this).hasClass('active')){			
					$(this).addClass('notValid');
				}
			});
		}
		if($('input[name=pants2]').val() == ''){
			$('#fq-4 #select-pants2 img.fq-check').each(function() {
				if(!$(this).hasClass('active')){			
					$(this).addClass('notValid');
				}
			});
		}
		if($('input[name=pants3]').val() == ''){
			$('#fq-4 #select-pants3 img.fq-check').each(function() {
				if(!$(this).hasClass('active')){			
					$(this).addClass('notValid');
				}
			});
		}
		if($('input[name=pants4]').val() == ''){
			$('#fq-4 #select-pants4 img.fq-check').each(function() {
				if(!$(this).hasClass('active')){			
					$(this).addClass('notValid');
				}
			});
		}
    } else {
       	$('#fq-4 img.fq-check').each(function() {
            $(this).removeClass('notValid');
        });
		var level = $(this).closest('.fq-basic').attr('id');
		processFQ();
		pageNumSwitch(level);
	}
	return false;
});
	
}); // END DOCUMENT READY

// --- Process Info
   function processFQ() {
		var dress_size = parseInt($("select#dress_size option:selected").val(),10),
			 bust_size = parseInt($("select#bust_size option:selected").val(),10),
			  cup_size = $("select#cup_size option:selected").val(),
			 pant_size = parseInt($("select#pant_size option:selected").val(),10);
		var pet1,pet2,pet3,tal1,tal2,tal3;
		if($('input[name=dart]').val() == '3'){ pet1 = '3' };
		if($('input[name=sleeve]').val() == '3'){ pet2 = '3'};
		if($('input[name=torso]').val() == '3'){ pet3 = '3'};
		
		if($('input[name=dart]').val() == '4'){ tal1 = '4'};
		if($('input[name=sleeve]').val() == '2'){ tal2 = '2'};
		if($('input[name=torso]').val() == '2'){ tal3 = '2'};
		
		var length = 0;
		var textFieldsFeet = $("#feet option:selected").val();
		var textFieldsInches = $("#inches option:selected").val();
		var textFieldsWeight = $("#weight option:selected").val();
		var dress_size_norm,
			  dress_size_rec,
			  dress_size_cup_rec,
			  dress_size_primary,
			  bust_size_norm,
			  bust_size_rec,
			  bust_size_primary,
			  cup_size_norm,
			  cup_size_rec,
			  cup_size_primary,
			  length_primary,
			  length_rec,
			  pant_rec,
			  pants_fit; 
			  
		if($("input[name=pants0]").val() == '1') {
			pants_fit = 'Straight';
		} else if ($("input[name=pants0]").val() == '2'){
			pants_fit = 'Curvy';
		} else{
			pants_fit = 'Classic';	
		}
		  
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
		if (dress_size_norm > bust_size){
			dress_size_primary = dress_size_norm;
		}
		else if ((bust_size > dress_size_norm) || (bust_size == dress_size_norm)){
			dress_size_primary = bust_size;
		}
		else {}
		//Depending on which 00-14 dress size, alternate recommendation is closest 32-40 size
		//Depending on size up or size down, include alternate cup size with recommendation
		//if customer wears B or C
		if (dress_size % 4 === 0){
			dress_size_cup_rec = 1;
			dress_size_rec = dress_size_primary + 2;
		} else {
			dress_size_cup_rec = -1;
			dress_size_rec = dress_size_primary - 2;
		}
		//Recommend primary cup size
		if (cup_size == "AA" || cup_size == "A" || cup_size == "B") {
			if (cup_size == "B" && dress_size_cup_rec === -1){
				cup_size_rec = "C/D";
			} else {cup_size_rec = "A/B";}
			if (cup_size == "B" && $("#dart input:radio:checked").val() == 2) {
				cup_size_primary = "C/D";
				cup_size_rec = "C/D";
			}
			else {
				cup_size_primary = "A/B";			
				}   
		}
		else {
			if (cup_size == "C" && dress_size_cup_rec === 1){
				cup_size_rec = "A/B";
			}
			else {cup_size_rec = "C/D";}
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
		if (pet1){
			length -= 1;
		}
		if (pet2){
			length -= 1;
		}
		if (pet3){
			length -= 1;
		}
		if (tal1){
			length += 1;
		}
		if (tal2){
			length += 1;
		}
		if (tal3){
			length += 1;
		}
		if (length < -1){
			length_primary = "Petite";
			if (textFieldsFeet.val() >= 5 && textFieldsInches.val() > 4) {
		        length_rec = "Regular";
		    }
		}
		else if (length > 1){
			length_primary = "Tall";
			if (textFieldsFeet.val() < 6 && textFieldsInches.val() < 10) {
		        length_rec = "Regular";
		    }
		}
		else{
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
		
		/*
		if ($("div#pants1 input[value=2]").is(":checked") || ($("div#pants1 input[value=1]").is(":checked") && $("div#pants0 input[value=1]").is(":checked"))) {
        	$("div#pants-fit select").val("Straight");
    		}
    	else if ($("div#pants2 input[value=2]").is(":checked") || $("div#pants3 input[value=2]").is(":checked") || ($("div#pants2 input[value=1]").is(":checked") && $("div#pants3 input[value=1]").is(":checked"))) {
        	$("div#pants-fit select").val("Curvy");
    		}
    	else {$("div#pants-fit select").val("Classic");}
		*/
		
		//RESULTS
		  //FOR
		   //QUIZ
		if ((dress_size + 2) < $("select#pant_size").val()) {
			// $("span.dress-warning").show();
		} else{
			//$("span.dress-warning").hide();
		}
		
		if ($("select#cup_size option:selected").index() >= 7) {
            // $("span.hagrid").show();
			// $("#primary, #rec_1, #rec_2, #rec_3").empty();
        } else if ($("select#dress_size option:selected").val() > 16) {
        	// $("span.hagrid").show();
		    // $("#primary, #rec_1, #rec_2, #rec_3").empty();
   		} else if ($("select#bust_size option:selected").val() > 40) {
        	// $("span.hagrid").show();
		   //  $("#primary, #rec_1, #rec_2, #rec_3").empty();
    	}else {
			$("span.hagrid").hide();
			// $("#top-size, #rec_1, #rec_2, #rec_3, #pant_rec").empty();
			$("#top-size").empty();
			$("#top-size").append(dress_size_primary, " ", cup_size_primary, " ", length_primary);
			
			/*
			$("#rec_1").append(dress_size_rec, " ", cup_size_rec, " ", length_primary);
			if (length_rec) {
			  $("#rec_2").append(dress_size_primary, " ", cup_size_primary, " ", length_rec);
			}
			if (cup_size_rec) {
			  $("#rec_3").append(dress_size_primary, " ", cup_size_rec, " ", length_primary);
			} */
			$("#bottom-size").empty();
			$("#bottom-size").append(pant_rec);
			// send_fit_data();
		}
		return false;
   	}// end process function
