

// Setup form validation.
$.validate({
	form: '#apply',
	onSuccess: function () {
		//console.log($(this).serialize());
		$.post('application-form.php', $('#apply').serialize())
			.done(function(data){
				// Paypal submit
				alert('Thank you! We Will be in touch soon');
				if ( $('input[value=credit-card]').is(':checked') ) {
					// console.log('not creditcard');
					$('form#paypal').submit();
					location.href="https://www.rainmakerfoundation.org/";
				} else {
					location.href="https://www.rainmakerfoundation.org/";
				}
			})
			.fail(function(data){
				// console.error('something went wrong :(');
				alert('Apologies but something has gone wrong, please contact us at friends@rainmakerfoundation.org.');
			});
		return false;
	}
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


// selecting other text field automatically selects input
function radioActions(frequency, low) {
	$('input[type=text]').focus(function (e) {
		$(this).siblings().prop('checked', true);
	});

	$('input[name="donation-amount"]').click(function (e) {
		$(".minimum-donation-alert").remove();
	});

	$('input.other.amount').focus(function (e) {		
		$(this).parent().after("<div class='minimum-donation-alert form-error blue'>Please note the suggested minimum donation is £"+low+" / "+frequency+"</div>");
	});
}

radioActions();


// donation amount based on frequency and membership-type
function donation(frequency, low, mid, high) {
	$(".donation-amount").html("<label><input type='radio' name='donation-amount' value='" + low + "'>£" + low + " / " + frequency + " </input></label><label><input type='radio' name='donation-amount' value='" + mid + "' checked>£" + mid + " / " + frequency + " </input></label><label><input type='radio' name='donation-amount' donation-value='" + high + "'>£" + high + " / " + frequency + " </input></label><label><input type='radio' name='donation-amount' value='other-amount'></input>£<input class='other amount' type='text' name='other-amount'></input> / " + frequency + "</label>");
	radioActions(frequency, low);
}

function AnnualValues() {
	donation("year", "1,000", "1,500", "2,000");
}

function MonthlyValues() {
	donation("month", "85", "125", "165");
}

$('.frequency input[value=annual]').click(function (e) {
	AnnualValues();
});

$('.frequency input[value=monthly]').click(function (e) {
	MonthlyValues();
});


// Selecting whole box on options checks the child radio button 
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
