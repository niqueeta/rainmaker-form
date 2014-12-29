// Tabs show/hide steps

// $(document).ready(function() {
//     $(".steps a").click(function(event) {
//         event.preventDefault();
//         $(this).parent().addClass("current");
//         $(this).parent().siblings().removeClass("current");

//         var active = $(this).attr("href");
//         $(".content").not(active).css("display", "none");
//         $(active).fadeIn();
//     });
// });


// Selecting whole box on options checks the child radio button 

$('.option').click(function (e) {
	$(this).siblings().removeClass("selected");
	$(this).addClass("selected");
    $(this).find('.option-radio').prop('checked', true);
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

$('.family-member input[value=partner]').click(function (e) {
	if( $(this).is(':checked')) {
		$(".partner-details").css("display", "block");
	} else {
		$(".partner-details").css("display", "none");
	}
});

$('.family-member input[value=child1]').click(function (e) {
	if( $(this).is(':checked')) {
		$(".child1-details").css("display", "block");
	} else {
		$(".child1-details").css("display", "none");
	}
});

$('.family-member input[value=child2]').click(function (e) {
	if( $(this).is(':checked')) {
		$(".child2-details").css("display", "block");
	} else {
		$(".child2-details").css("display", "none");
	}
});