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

//save contact
$('.addValue').on("click", function( event ) {  
  event.preventDefault();
  if( $('#name').val() != '' || $('#email').val() != '' ){
    contactsRef.push({
      name: $('.name').val(),
      email: $('.email').val(),
      message: $('.message').val()
    })
    alert('Your message has been sent. We\'ll get back to you as soon as possible.');
    location.reload();
  } else {
    alert('Please fill atlease name or email!');
  }
});

