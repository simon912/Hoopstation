$("#contact-submit").click(function(){

  var name = $("#contact-name").val();
  var email = $("#contact-email").val();
  var message = $("#contact-message").val();

  if(name == '' || message == '' || email == '' || !email.includes("@") || !email.includes(".")){

      alert("Please check the missing field(s)")

  }else{
      
      alert("Message submitted!")

  }

})

//[STEP 0]: Make sure our document is A-OK
$(document).ready(function () {
//what kind of interface we want at the start 
const APIKEY = "620c06a134fd62156585861a";


//[STEP 1]: Create our submit form listener
$("#contact-submit").on("click", function (e) {
  //prevent default action of the button 
  e.preventDefault();

  //[STEP 2]: let's retrieve form data
  //for now we assume all information is valid
  //you are to do your own data validation
  let contactName = $("#contact-name").val();
  let contactEmail = $("#contact-email").val();
  let contactMessage = $("#contact-message").val();

  //[STEP 3]: get form values when user clicks on send
  //Adapted from restdb api
  let jsondata = {
    "name": contactName,
    "email": contactEmail,
    "message": contactMessage
  };

  //[STEP 4]: Create our AJAX settings. Take note of API key
  let settings = {
    "async": true,
    "crossDomain": true,
    "url": " https://hoopstation-1336.restdb.io/rest/contact",
    "method": "POST",
    "headers": {
      "content-type": "application/json",
      "x-apikey": APIKEY,
      "cache-control": "no-cache"
      
    },
    "processData": false,
    "data": JSON.stringify(jsondata)
    
  }

  //[STEP 5]: Send our ajax request over to the DB and print response of the RESTDB storage to console.
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
});//end click 
})



