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

$('.option').click(function (e) {
	$(this).siblings().removeClass("selected");
	$(this).addClass("selected");
    $(this).find('.option-radio').prop('checked', true);
 });