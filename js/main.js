var url = 'https://script.google.com/macros/s/AKfycbxI8sa-AmQFg3Wl2FU_S7-JSYbKs3Eszqp_UGe4LIOVkHZ_xWZq/exec'

$('#conatct-us-submit-form').on('click', function(e) {
	var name = $('.name').val();
	var email = $('.email').val();
	var message = $('.message').val();
	console.log(name + ' ' + email + ' ' + message);
  e.preventDefault();
  if(name == '' || email == '' || message == '') {
  	alert('plz fill your details and message');
  }
  else {
		$.ajax({
		  url: url,
	    method: "GET",
	    dataType: "json", 
		  data: { 
	  		"name": name,
	  		"email": email, 
	  		"message": message
	  	}
	  })
	  alert('Thank you we will keep in touch with you');
	  location.reload();
	}
});
