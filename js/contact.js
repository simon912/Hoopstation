$(document).ready(function () {
  const APIKEY = "620c06a134fd62156585861a";

  // Create submit form listener
  $("#contact-submit").on("click", function (e) {
    //prevent default action of the button 
    e.preventDefault();

    let contactName = $("#contact-name").val();
    let contactEmail = $("#contact-email").val();
    let contactMessage = $("#contact-message").val();

    if(contactName == '' || contactMessage == '' || contactEmail == '' || !contactEmail.includes("@") || !contactEmail.includes(".")){

      alert("Please check the missing field(s)")

      }else{
          
          alert("Message submitted!");

      }


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
      "url": "https://hoopstation-1336.restdb.io/rest/contact",
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache"
      },
      "processData": false,
      "data": JSON.stringify(jsondata),
      "beforeSend": function(){
        setTimeout("location.reload(true);",1500);
      }
    };

    //[STEP 5]: Send our ajax request over to the DB and print response of the RESTDB storage to console.
    $.ajax(settings).done(function (response) {
      
      console.log(response);
    });
  });//end click 
});
