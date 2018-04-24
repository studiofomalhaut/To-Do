// Check Off Specific To-Do's By Clicking
$('ul').on("click", "li", function(){
	$(this).toggleClass("completed");
});


//Click X to delete To-do entry
$('ul').on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();		//because span is embedded in a cascade of code
});

//Add new entry
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});


//Toggle plus button
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})