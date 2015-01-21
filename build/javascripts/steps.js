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

$('.membership-type .option').click(function (e) {
	$(this).siblings().removeClass("selected");
	$(this).addClass("selected");
  $(this).find('.option-radio').prop('checked', true);
});

$('.membership-type .option').click(function (e) {
	if( $('.membership-type input[value=family]').is(':checked')) {
		$('#personal-details').css("display", "block");
		$('.family').css("display", "block");
	} else {
		$('#personal-details').css("display", "block");
		$('.family').css("display", "none");
	}
});

$('input.other').click(function (e) {
	$(this).siblings().prop('checked', true);
});


// // Selecting whole box on options checks the child radio button 

$('.membership-type .option').click(function (e) {
	$(this).siblings().removeClass("selected");
	$(this).addClass("selected");
  $(this).find('.option-radio').prop('checked', true);
});

$('.membership-type .option').click(function (e) {
	if( $('.membership-type input[value=family]').is(':checked')) {
		$('#personal-details').css("display", "block");
		$('.family').css("display", "block");
	} else {
		$('#personal-details').css("display", "block");
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
