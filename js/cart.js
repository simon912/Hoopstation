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