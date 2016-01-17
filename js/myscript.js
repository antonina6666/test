$(document).ready(function(){
	///script not included to ng-include/////
			$(".button-collapse").sideNav();
			 $('.modal-trigger').leanModal({
				dismissible: true, 
				opacity: .5, 
				in_duration: 300, 
				out_duration: 200, 
				ready: function() {  }, 
				complete: function() {  } 
				}
			);
			// $('.tooltipped').tooltip({delay: 50});
		});