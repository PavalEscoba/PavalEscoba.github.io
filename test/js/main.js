$(document).ready(function(){
	(function(){		
		$('.checkbox').on('click', function(e){
				 
			var $this = $(this),
				card = $this.closest('.courses__item'),
				courses = $('.courses__item');

				if(courses.length == 1){
					card.slideUp(1000, function(){
							card.remove();						
						});
					$('.done').fadeIn(2000, function(){
						$('.done').css("display", "block")
					});					
				}
				else{
					card.slideUp(1000, function(){
						card.remove();						
					});
				}
		});
	}());
});

