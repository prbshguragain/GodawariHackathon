var firebaseConfig = {
    apiKey: "AIzaSyCfh5zqjAstnpw5olQm4N1xtGN1qIg9nLs",
    authDomain: "godawari-d9f2e.firebaseapp.com",
    databaseURL: "https://godawari-d9f2e.firebaseio.com",
    projectId: "godawari-d9f2e",
    storageBucket: "godawari-d9f2e.appspot.com",
    messagingSenderId: "755613245852",
    appId: "1:755613245852:web:abae2e25b2d8ff6838a859",
    measurementId: "G-7YT674EEWH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  // reference msg coll //
  var messageRef = firebase.database().ref('message');

  document.getElementById('contactForm').addEventListener('submit', submitForm);

  // submit form //

  function submitForm(e){
    e.preventDefault();

    var gen;
    document.getElementsByName("gender").forEach(function(elm){
      if (elm.checked) {
        gen = elm.value;
      }
    })

    var inte;
    document.getElementsByName("Interest").forEach(function(elm){
      if (elm.checked) {
        inte = elm.value;
      }
    })

    // get values :) //
    var email = getInputVal('email');
    var lname = getInputVal('lname');
    
    var phone = getInputVal('phone');
    var faculty = getInputVal('faculty');
    var year = getInputVal('year');
    
    var fname = getInputVal('fname');

  //save msg in firebass//
    saveMessage(fname, lname, email, phone, faculty, year, gen, inte);


  }

  // func to get form values //

  function getInputVal(id){
    return document.getElementById(id).value;
  }

  // save //

  function saveMessage(fname, lname, email, phone, faculty, year, gen, inte){
    var newMessageRef = messageRef.push();
    newMessageRef.set({
     	
     	faculty: faculty,
      email: email,
      phone: phone,
      lname: lname,
      year: year,
      gender: gen,
      Interest: inte,
      fname: fname
    });
  }