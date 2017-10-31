
//Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete ToDo
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(500, function(){
		$this.remove();
	});
	//stops bubbling!!
	e.stopPropagation();

});

$("input[type='text']").on("keypress", function(event){
	if( event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val('');
		//create a new li and add to ul
		$("ul").append('<li><span><i class="fa fa-trash" aria-hidden="true"></i></span> '  + todoText + "</li>");
	}
});

$(".fa-plus").on("click", function(){
	$("input[type='text']").fadeToggle(70);
});