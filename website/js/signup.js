(function(window, _undefined) {

	$(document).ready(function() {

		/*Validation Code */
		var isEmail = function (email) {
  			var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  			return regex.test(email);
		}
		
		$('#email-signup').click(function(event) {
			event.preventDefault();
			var signup = new Firebase("https://hangster-launch.firebaseio.com/signup/dev");
			var email = $('.email-input').val();

			if (isEmail(email)) {
				signup.push({ 'email': email });
			} else {
				console.debug('Email not well formatted');
			}
			
		});

	});

})(window);