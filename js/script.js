console.log('Hello, World!');

jQuery(function($){
	
	$('.copyright span').on('click', function(e){
			console.log('test');
			console.log($(e.target));
			
			$target = $(e.target);
			$target.toggleClass('spinny');
		}
	);
	
});