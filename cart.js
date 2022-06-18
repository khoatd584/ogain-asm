const decrementBtn = document.querySelectorAll('#decrement');
const quantityElem = document.querySelectorAll('#quantity');
const incrementBtn = document.querySelectorAll('#increment');

function changeAmount() {
    for (let i = 0; i < incrementBtn.length; i++) {
        incrementBtn[i].addEventListener('click', function () {
            let increment = Number(this.previousElementSibling.innerText);
            increment++;
            this.previousElementSibling.innerText = increment;
            updateCartTotal();
        });
        decrementBtn[i].addEventListener('click', function () {
            let decrement = Number(this.nextElementSibling.innerText);
            decrement <= 0 ? 1 : decrement--;
            this.nextElementSibling.innerText = decrement;
            updateCartTotal();
        });
        // console.log(priceItem);
        var totalPriceItems = document.querySelectorAll('.shoping__cart__price');
        var totalPriceItem = totalPriceItems[i].innerText;
        var totalPriceElem = document.querySelectorAll('.shoping__cart__total')[0];
        // console.log(totalPriceItem);
        // var qtyElem = quantityElement[i].innerText;
        // var totalPrice = totalPriceElem.innerText * qtyElem;
        // console.log(totalPrice);
        // // console.log(totalPriceElem.innerText);
        // totalPriceElem.innerText = totalPriceElem * quantityElem;
        // console.log(totalPriceElem * quantityElem);// $110
        // console.log(totalPriceElem);// $110
        // console.log();// $110
    }
}
changeAmount();

const removeCartItem = document.querySelectorAll('.fa-xmark');

for (let i = 0; i < removeCartItem.length; i++) {
    removeCartItem[i].addEventListener('click', function () {
        this.parentElement.parentElement.remove();
        updateCartTotal();
    });
};

function updateCartTotal() {
    const cartItem = document.querySelectorAll('tbody')[0];
    const cartRows = cartItem.querySelectorAll('tr');
    var total = 0;
    for (let i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.querySelectorAll('.shoping__cart__price')[0];
        var quantityElement = cartRow.querySelectorAll('#quantity')[0];
        var price = parseFloat(priceElement.innerText.replace('$', ''));
        var quantity = quantityElement.innerText;
        total = total + (price * quantity);
    }
    document.getElementsByClassName('total-price')[0].innerText = '$' + total.toFixed(2);
    // const input = document.querySelector('.inp');
    // inputValue = input.value;
    // if (inputValue == 'thaitqpc04444') {
    //     document.getElementsByClassName('total-price')[0].innerText = '$' + (total - (total * 0.1)).toFixed(2);
    // } else {
    //     document.getElementsByClassName('total-price')[0].innerText = '$' + total.toFixed(2);
    // }
    // console.log(input);
}