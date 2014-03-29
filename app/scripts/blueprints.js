/*
#################################################
App: Blueprint, Author: Marcel Hadorn (@marc3llo)
#################################################
*/
$(document).ready(function(){
	var data = $.getJSON( "scripts/data.json", function(d) {
		//console.log(d);
		var view = d;

		$('.slice').each(function(){
			var id = $(this).attr('id');
	
			$("#"+ id).load("templates/"+ id +".html",function(){
    			var template = document.getElementById(''+ id +'').innerHTML;
    			var output = Mustache.render(template, view);
    			$("#"+ id).html(output);
  			});
  		});

  		$(document).on('click', '#signinbtn', function(){
  			event.preventDefault();
			var inputpass = $("input#password").val();
			var inputuser = $("input#user").val();

			$.each(d.users, function(){
				password = this['password'];
				username = this['username'];
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


  		var retrievedObject = localStorage.getItem('signin');
		var localusername = JSON.parse(retrievedObject);
		if(retrievedObject){
			$.each(d.users, function(){
				username = this['username'];
				if(localusername.user == username ) {
					$('body').addClass(username);
				}
			});	
			$('body').addClass('signedin');
		}
	});

	$('#signout').click(function(){
		localStorage.clear('signin');
		window.location.reload();
	});
});
  