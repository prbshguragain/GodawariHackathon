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

    // get values :) //
    var fname = getInputVal('fname');
    var lname = getInputVal('lname');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var faculty = getInputVal('faculty');
    var year = getInputVal('year');
    var gen = getInputVal('gen');
    var inte = getInputVal('inte');

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
      fname: fname,
      lname: lname,
      email: email,
      phone: phone,
      faculty: faculty,
      year: year,
      gender: gen,
      Interest: inte
    });
  }