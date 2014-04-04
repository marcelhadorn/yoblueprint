/*
#################################################
App: Blueprint, Author: Marcel Hadorn (@marc3llo)
#################################################
All the Blueprint Magic
*/
$(document).ready(function(){
	// SETTINGS!
	var showgrid = true;

	if(showgrid == true){
		$('html').addClass('showgrid');
	}

	//Getting data from the data.json file
	var data = $.getJSON( "scripts/data.json", function(d) {
		// define the view from data
		var view = d;

  		$('[unit]').each(function(){
  			var unit = $(this).attr('unit');
			// Routing the data and units
			$(this).load("units/"+ unit +".html",function(){
    			var template = this.innerHTML;
    			var output = Mustache.render(template, view);
    			$('[unit="'+ unit +'"]').html(output);
  			});
  		});

		// login and local storage
  		$(document).on('click', '#signinbtn', function(){
  			event.preventDefault();
  			// Get input from loginform
			var inputpass = $("input#password").val();
			var inputuser = $("input#user").val();

			$.each(d.users, function(){
				//get logins from data.json
				password = this['password'];
				username = this['username'];
				// verifiy user
				if(inputpass == password && inputuser == username) {
					// Put the object into storage
					var signin = { 'user': username };
					localStorage.setItem('signin', JSON.stringify(signin));
					// Retrieve the object from storage
					var retrievedObject = localStorage.getItem('signin');
					//console.log('retrievedObject: ', JSON.parse(retrievedObject));
					window.location.reload();
				} else {
					$('#signinform').effect( "shake" );
				}
			});
		});

  		// Show user is logged in
  		var retrievedObject = localStorage.getItem('signin');
		var localusername = JSON.parse(retrievedObject);
		if(retrievedObject){
			// add class to body from logged in user
			$.each(d.users, function(){
				username = this['username'];
				if(localusername.user == username ) {
					$('body').addClass(username);
				}
			});
			// add class to body when signed in
			$('body').addClass('signedin');
		}
	});
	
	// sign out by clearing localStorage
	$(document).on('click', '#signout', function(){
		console.log(this);
		localStorage.clear('signin');
		window.location.reload();
	});
});
  