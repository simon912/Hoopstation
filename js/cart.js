var carts = document.querySelectorAll('.add-cart');
var removeItem = document.querySelectorAll('.remove-item');

var products = [
  {
    name: 'Nike Precison 5',
    tag: 'precision-5-1',
    price: 99,
    inCart: 0
  },
  {
    name: 'Lebron 19',
    tag: 'lebron19',
    price: 279,
    inCart: 0
  },
  {
    name: 'Air Jordan XXXVI',
    tag: 'airjordanxxxvi',
    price: 205,
    inCart: 0
  },
  {
    name: 'Curry Flow 9',
    tag: 'curryflow9',
    price: 239,
    inCart: 0
  },
  {
    name: 'Lakers Icon Edition 2020',
    tag: 'lakersiconedition2020',
    price: 129,
    inCart: 0
  }
];


for (let i=0; i < carts.length; i++){
  carts[i].addEventListener('click', (e) => {
    e.preventDefault();
    cartNumbers(products[i]);
    totalCost(products[i]);
  });
}


for (let i=0; i < removeItem.length; i++){
  removeItem[i].addEventListener('click', (e) => {
    cartNumbers(products[i]);
    totalCost(products[i]);
  });
}

function cartNumbers(product){

  let productNumbers  = localStorage.getItem('cartNumbers');
  alert('Added to cart');
  productNumbers = parseInt(productNumbers);

  if(productNumbers){
    localStorage.setItem('cartNumbers', productNumbers + 1);
    
  } else {
    localStorage.setItem('cartNumbers', 1);

  }  

  setItems(product);
}

function setItems(product){
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  console.log('My cartitems are', cartItems);

  if(cartItems != null){

    if(cartItems[product.tag] == undefined){ //(TO ADD ANOTHER PRODUCT)
      cartItems = {
        ...cartItems,
        [products.tag]: product
      }
      
    }
    cartItems[product.tag].inCart += 1
  } else {
      product.inCart = 1;

      cartItems = {
        [product.tag]: product
      }
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product){
  let cartCost = localStorage.getItem('totalCost');
  
  console.log(cartCost);

  if(cartCost != null){
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  } else{
    localStorage.setItem("totalCost", product.price);
  }
  
}

function displayCart(){
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".cart-items");
  if (cartItems && productContainer){
    productContainer.innerHTML = '';
    Object.values(cartItems).map(item => {
      productContainer.innerHTML += `
      <div class="cart-row">
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="images/product-image//${item.tag}.jfif" width="100" height="100">
            <span class="cart-item-title">${item.name}</span>
        </div>
        <span class="cart-price cart-column">$${item.price}.00</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="${item.inCart}">
            <button class="btn remove-item" type="button">REMOVE</button>
        </div>
      </div>
      `;

    });
  }

}

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName('cart-items')[0];
  var cartRows = cartItemContainer.getElementsByClassName('cart-row');
  var total = 0;
  for (var i = 0; i< cartRows.length; i++){
      var cartRow = cartRows[i];
      var priceElement = cartRow.getElementsByClassName('cart-price')[0];
      var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
      var price = parseFloat(priceElement.innerText.replace('$',''));
      var quantity = quantityElement.value;
      total = total + (price * quantity);
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName('cart-total-price')[0].innerHTML = '$' + total;

}

function removeItem() {
  localStorage.removeItem('productsInCart');
}
displayCart();
updateCartTotal();
$(document).ready(function () {
  //[STEP 1]: Create our submit form listener
  $("#btn-purchase").on("click", function (e) {
    alert("Payment made!");
    localStorage.clear();
    location.reload();
    e.preventDefault();
    });
});


