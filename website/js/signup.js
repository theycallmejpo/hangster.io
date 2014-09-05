(function(window, _undefined) {

	$(document).ready(function() {

		$('#email-signup').click(function(event) {
			event.preventDefault();
			var signup = new Firebase("https://hangster-launch.firebaseio.com/signup/dev");
			var email = $('.email-input').val();

			if (email) {
				signup.push({
					'email': email
				});
			} else {
				console.debug('No email written');
			}
			
		});

	});

})(window);