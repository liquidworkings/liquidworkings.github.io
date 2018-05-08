// file: script.js
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDikvTmeaviCcpNXpxBuy32yE7FO9t1dKg",
  authDomain: "caravellabs-contact.firebaseapp.com",
  databaseURL: "https://caravellabs-contact.firebaseio.com",
  projectId: "caravellabs-contact",
  storageBucket: "caravellabs-contact.appspot.com",
  messagingSenderId: "635063450313"
};
firebase.initializeApp(config);

//create firebase database reference
var dbRef = firebase.database();
var contactsRef = dbRef.ref('contacts');

// email validation
var emailFlag = false;
$('.email').on("focusout", function( event ) {
	var reg_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  	if($('.email').val().match(reg_email)) {
  		emailFlag = true;
  		$('.email-alert').text('');
		}
		else {
			$('.email-alert').text('Format: exampe@domain.com');
		}
}); 

// save contact
$('.addValue').on("click", function( event ) {  
  event.preventDefault();
  if( $('.name').val() != '' && $('.email').val() != '' && $('.message').val() != '') {
  	if(emailFlag === true) {
	    contactsRef.push({
	      name: $('.name').val(),
	      email: $('.email').val(),
	      message: $('.message').val()
	    })
	    swal({
			  text: "Your message has been sent. We'll get back to you as soon as possible.",
			  icon: "success",
			  button: {
			  	text: "ok",
			  	value: true
			  },
			})
			.then((value) => {
				if(value == true) {
					location.href = '/'
				}
			})  	} else {
  		$('.form-alert').addClass("formalert");
  		$('.form-alert').text('Check your email');
  	}
  } else {
  	$('.form-alert').addClass("formalert");
    $('.form-alert').text('Please fill all the fields!');
  }
});

