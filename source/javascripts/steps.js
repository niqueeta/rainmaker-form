$( document ).ready(function() {

// Setup form validation.
$.validate({
	form: '#apply',
	// validateOnBlur: false,
	onSuccess: function () {
		//console.log($(this).serialize());
		// var mailform = "http://www.rainmakerfoundation.org/send-apply-complete-new.php";
		var mailform = "../application-form.php";
		$.post(mailform, $(this).serialize())
		.done(function(data){
			// Paypal submit
			alert('Thank you! We Will be in touch soon');
			if ( $('input[value=credit-card]').is(':checked') ) {
				console.log('not creditcard');
				$('form#paypal').submit();
				location.href="http://moniq.co";
			} else {
				location.href="http://moniq.co";
			}
		})
		.fail(function(data){
			console.error('something went wrong :(');
		});
		return false;
	}
});

//shows/hides content depending on which step
$("a.go-to-step").click(function(event) {
	function goToStep(stepNumber) {
		if( active === "#step" + stepNumber ){
			$(".tab-step" + stepNumber).addClass("current");
			$(".tab-step" + stepNumber).siblings().removeClass("current"); 
		}
	}

	event.preventDefault();
	var active = $(this).attr("href");
	$(".content").not(active).css("display", "none");
	$(active).fadeIn();
	window.scrollTo(0, 0);
	goToStep("1");	
	goToStep("2");
	goToStep("3");
});

//shows/hides input based on method of content
$('input[name=method-of-contact]').click(function (e) {
	if ( $(this).is(':checked') ) {
		$(this).siblings().css("display", "block");
	} else {
		$(this).siblings().css("display", "none");
	}

	$('input[name=method-of-contact]').not($(this)).siblings().css("display", "none");
	$(this).siblings().css("display", "block");
});


// Message above Submit button changes according to payment method
function payMessage(message) {
	$("#last-step").css("display", "block");
	$("#last-step").html("<legend>" + message + "<label><input id='submit-button' type='submit' name='join' value='Become a Rainmaker'></input></label></legend>");
}

$('.pay-method input[value=direct-debit]').click(function (e) {
	payMessage("Thank you! We will send you an email with instructions for how to pay via Direct Debit.");
});

$('.pay-method input[value=cheque]').click(function (e) {
	payMessage("Thank you! We will send you an email with instructions for how to pay via cheque.");
});

$('.pay-method input[value=credit-card]').click(function (e) {
	payMessage("Thank you! We will now redirect you to a PayPal page where you will be able to pay via Credit Card.");
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

function AnnualValues() {
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
}

function MonthlyValues() {
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
}

$('.membership-type .option').click(function (e) {
	$(this).siblings().removeClass("selected");
	$(this).addClass("selected");
  $(this).find('.option-radio').prop('checked', true);
  $('.personal-details').css("display", "block");
	AnnualValues();
});

$('.frequency input[value=annual]').click(function (e) {
	AnnualValues();
});

$('.frequency input[value=monthly]').click(function (e) {
	MonthlyValues();
});


// selecting other text field automatically selects input
$('input[type=text]').click(function (e) {
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


// Enter partner's interests later
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

});
