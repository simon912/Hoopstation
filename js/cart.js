var removeCartItem = document.getElementsByClassName('remove-item');
for (var i = 0; i< removeCartItem.length; i++){
    var remove = removeCartItem[i]
    remove.addEventListener('click', function(event) {
        var removeClicked = event.target
        removeClicked.parentElement.parentElement.remove()
        updateCartTotal()
    })
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    for (var i = 0; i< cartRows.length; i++){
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity')[0]
        console.log(priceElement, quantityElement)
    }

}
$(".add-cart").click(function(){
    var size = $("#select-size").val();
    var quantity = $("#quantity").val();
  
    if(size == 'Select Size' || quantity <= 0 ){
  
        alert("Please select a size or quantity")
    }else{
        alert("Added to cart!")
    }
  })
  
  //[STEP 0]: Make sure our document is A-OK
  $(document).ready(function () {
  //what kind of interface we want at the start 
  const APIKEY = "620c06a134fd62156585861a";
  
  //[STEP 1]: Create our submit form listener
  $(".add-cart").on("click", function (e) {
    //prevent default action of the button 
    e.preventDefault();
  
    //[STEP 2]: let's retrieve form data
    //for now we assume all information is valid
    //you are to do your own data validation
    let productImage = $("#MainImage").attr('src');
    let productTitle = $("#product-title").text();
    let productQuantity = $("#quantity").val(); // works
    let productSize = $("#select-size").val(); // works
    let productPrice = $("#price").text();
  
    //[STEP 3]: get form values when user clicks on send
    //Adapted from restdb api
    let jsondata = {
      "image": productImage,
      "title": productTitle,
      "quantity": productQuantity,
      "size": productSize,
      "price": productPrice
    };
  
    //[STEP 4]: Create our AJAX settings. Take note of API key
    let settings = {
      "async": true,
      "crossDomain": true,
      "url": " https://hoopstation-1336.restdb.io/rest/products",
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


  