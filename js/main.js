$(document).ready(function(){
	(function(){
		$('.about__desc').perfectScrollbar();
	}());
	(function(){
		$('.edu').perfectScrollbar();
	}());
	
	(function(){
		$('.tabs-link').on('click', function(e){
			e.preventDefault();
			 console.log('data')

			var $this 	= $(this),
					item 		= $this.closest('.tabs-item'),
					list 		= $this.closest('.tabs'),
					links		= list.find('.tabs-link'),				
					content = $('.tabs-content'),
					itemPos = item.data('class');

				content.filter('.tabs-content-' + itemPos)
					.add(item)
					.addClass('active')
					.siblings()
					.removeClass('active');
		});
	}());	
})