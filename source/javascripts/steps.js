$("a.go-to-step").click(function(event) {
	event.preventDefault();
	var active = $(this).attr("href");
	$(".content").not(active).css("display", "none");
	$(active).fadeIn();
	window.scrollTo(0, 0);

	if( active === "#step1" ){
		$(".tab-step1").addClass("current");
		$(".tab-step1").siblings().removeClass("current");

	}if( active === "#step2" ){
		$(".tab-step2").addClass("current");
		$(".tab-step2").siblings().removeClass("current");

	}	if( active === "#step3" ){
		$(".tab-step3").addClass("current");
		$(".tab-step3").siblings().removeClass("current");
	}
});

$('input[name=method-of-contact').click(function (e) {
	if ( $(this).is(':checked') ) {
		$(this).siblings().css("display", "block");
	} else {
		$(this).siblings().css("display", "none");
	}

	$('input[name=method-of-contact]').not($(this)).siblings().css("display", "none");
	$(this).siblings().css("display", "block");
});

// final step instructions
$('.pay-method input[value=direct-debit]').click(function (e) {
	$("#last-step").html("<legend>Thank you! We will send you an email with instructions for how to pay via direct Debit.<label><input class='call-to-action' type='submit' name='join' value='Join the Rainmaker Foundation'></input></label></legend>");
});

$('.pay-method input[value=direct-debit]').click(function (e) {
	$("#last-step").css("display", "block");
	$("#last-step").html("<legend>Thank you! We will send you an email with instructions for how to pay via Direct Debit.<label><input class='call-to-action' type='submit' name='join' value='Become a Rainmaker'></input></label></legend>");
});

$('.pay-method input[value=cheque]').click(function (e) {
	$("#last-step").css("display", "block");
	$("#last-step").html("<legend>Thank you! We will send you an email with instructions for how to pay via cheque.<label><input class='call-to-action' type='submit' name='join' value='Become a Rainmaker'></input></label></legend>");
});

$('.pay-method input[value=credit-card]').click(function (e) {
	$("#last-step").css("display", "block");
	$("#last-step").html("<legend>Great! We will now redirect you to a PayPal page where you will be able to pay via Credit Card.<label><input class='call-to-action' type='submit' name='join' value='Become a Rainmaker'></input></label></legend>");
});


// clicking on div selects input
$('.membership-type .option').click(function (e) {
	$(this).siblings().removeClass("selected");
	$(this).addClass("selected");
  $(this).find('.option-radio').prop('checked', true);
});


// donation amount based on frequency and membership-type
function donation(frequency, low, mid, high) {
	$(".donation-amount").html("<label><input type='radio' name='donation-amount' value='" + low + "'>£" + low + " / " + frequency + " </input></label><label><input type='radio' name='donation-amount' value='" + mid + "'>£" + mid + " / " + frequency + " </input></label><label><input type='radio' name='donation-amount' donation-value='" + high + "'>£" + high + " / " + frequency + " </input></label><label><input type='radio' name='donation-amount' value='other-amount'></input>£<input class='other amount' type='text' name='other-amount'></input> / " + frequency + "</label>");
}

$('.membership-type .option').click(function (e) {
	$(this).siblings().removeClass("selected");
	$(this).addClass("selected");
  $(this).find('.option-radio').prop('checked', true);
  $('.personal-details').css("display", "block");
	if( $('.membership-type input[value=individual]').is(':checked')) {
		$('.family').css("display", "block");
		donation("year", "1,000", "1,500", "2,000");

	}if( $('.membership-type input[value=family]').is(':checked')) {
		$('.family').css("display", "none");
		donation("year", "3,000", "4,500", "6,000");

	}if( $('.membership-type input[value=company]').is(':checked')) {
		$('.family').css("display", "none");
		donation("year", "5,000", "7,500", "10,000");
	} else {}
});

$('.frequency input[value=annual]').click(function (e) {
	if( $('.membership-type input[value=individual]').is(':checked')) {
		$('.family').css("display", "block");
		donation("year", "1,000", "1,500", "2,000");

	}if( $('.membership-type input[value=family]').is(':checked')) {
		$('.family').css("display", "none");
		donation("year", "3,000", "4,500", "6,000");

	}if( $('.membership-type input[value=company]').is(':checked')) {
		$('.family').css("display", "none");
		donation("year", "5,000", "7,500", "10,000");
	} else {}
});

$('.frequency input[value=monthly]').click(function (e) {
	if( $('.membership-type input[value=individual]').is(':checked')) {
		$('.family').css("display", "block");
		donation("month", "85", "125", "165");

	}if( $('.membership-type input[value=family]').is(':checked')) {
		$('.family').css("display", "none");
		donation("month", "250", "375", "500");

	}if( $('.membership-type input[value=company]').is(':checked')) {
		$('.family').css("display", "none");
		donation("month", "415", "625", "835");
	} else {}
});


// selecting other text field automatically selects input
$('input.other').click(function (e) {
	$(this).siblings().prop('checked', true);
});


// Selecting whole box on options checks the child radio button 

$('.membership-type .option').click(function (e) {
	$(this).siblings().removeClass("selected");
	$(this).addClass("selected");
  $(this).find('.option-radio').prop('checked', true);
  $('.go-to-step[href="#step2"]').css("display", "block");
  $('#personal-details').css("display", "block");

	if( $('.membership-type input[value=family]').is(':checked')) {	
		$('.family').css("display", "block");
	} else {
		$('.family').css("display", "none");
	}
});

$('input.other').click(function (e) {
	$(this).siblings().prop('checked', true);
});

$('.charity-sectors .option').click(function (e) {
	if( $(this).find('.option-checkbox').is(':checked')) {
		$(this).removeClass("selected");
		$(this).find('.option-checkbox').prop('checked', false);
	} else {
		$(this).addClass("selected");
		$(this).find('.option-checkbox').prop('checked', true);
	}
});

// If donating time, what areas of expertise?

$('.donating-time').click(function (e) {
	if( $(this).is(':checked')) {
		$(".areas-of-expertise").css("display", "block");
	} else {
		$(".areas-of-expertise").css("display", "none");
	}
});

$('.partner-donating-time').click(function (e) {
	if( $(this).is(':checked')) {
		$(".partner-areas-of-expertise").css("display", "block");
	} else {
		$(".partner-areas-of-expertise").css("display", "none");
	}
});


// Shows partner address if address not the same



$('input[name=same-address]').click(function (e) {
	if( $(this).is(':checked')) {
		$(".partner-address").css("display", "none");
	} else {
		$(".partner-address").css("display", "block");
	}
});


// Shows/hides partner and children details on selection

$('input[value=partner]').click(function (e) {
	if( $(this).is(':checked')) {
		$(".partner-details").css("display", "block");
	} else {
		$(".partner-details").css("display", "none");
	}
});

$('input[value=child1]').click(function (e) {
	if( $(this).is(':checked')) {
		$(".child1-details").css("display", "block");
	} else {
		$(".child1-details").css("display", "none");
	}
});

$('input[value=child2]').click(function (e) {
	if( $(this).is(':checked')) {
		$(".child2-details").css("display", "block");
	} else {
		$(".child2-details").css("display", "none");
	}
});

$('input[value=enter-partner-interests-later]').click(function (e) {
	if( $(this).is(':checked')) {
		$(".partner-interests").css("display", "none");
		$(".partner-interests input").prop('checked', false)
		$(".partner-areas-of-expertise").css("display", "none");
		$(".partner-areas-of-expertise").prop('checked', false)
	} else {
		$(".partner-interests").css("display", "block");
	}
});

$('input[value=enter-partner-interests-later]').click(function (e) {
	if( $(this).is(':checked')) {
		$(".partner-interests").css("display", "none");
	} else {
		$(".partner-interests").css("display", "block");
	}
});