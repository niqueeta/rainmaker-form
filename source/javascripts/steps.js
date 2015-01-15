// Tabs show/hide steps

$(document).ready(function() {
    $(".steps a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");

        var active = $(this).attr("href");
        $(".content").not(active).css("display", "none");
        $(active).fadeIn();
    });
});


// Selecting whole box on options checks the child radio button 

$('.membership-type .option').click(function (e) {
	$(this).siblings().removeClass("selected");
	$(this).addClass("selected");
    $(this).find('.option-radio').prop('checked', true);
 });

$('.membership-type .option').click(function (e) {
	if( $('.membership-type input[value=family]').is(':checked')) {
		$('.partner').css("diplay", "block");
		$('.child1').css("diplay", "block");
		$('.chold2').css("diplay", "block");

	} else {
		$('.partner').css("diplay", "block");
		$('.child1').css("diplay", "block");
		$('.chold2').css("diplay", "block");
	}

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