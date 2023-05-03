
function increment() {
    var quantityInput = document.getElementById("quantity");
    var quantity = parseInt(quantityInput.value);
    quantityInput.value = quantity + 1;
    updateTotals();
}

function decrement() {
    var quantityInput = document.getElementById("quantity");
    var quantity = parseInt(quantityInput.value);
    if (quantity > 0) {
        quantityInput.value = quantity - 1;
        updateTotals();
    }
}

function updateTotals() {
    var quantityInput = document.getElementById("quantity");
    var quantity = parseInt(quantityInput.value);
    var shippingInput = document.getElementById("shipping");
    var shipping = parseFloat(shippingInput.value);
    if (isNaN(shipping)) {
        shipping = 0;
    }
    var items = quantity * 15.97;
    var shippings = shipping;
    var totalBeforeTax = quantity * 15.97 + shipping;
    var estimatedTax = totalBeforeTax * 0.1;
    var totalOrder = totalBeforeTax + estimatedTax;
    var itemsInput = document.getElementById("items");
    var shippingInputs = document.getElementById("shippings");
    var totalBeforeTaxInput = document.getElementById("total-before-tax");
    var estimatedTaxInput = document.getElementById("estimated-tax");
    var totalOrderInput = document.getElementById("total-order");
    itemsInput.value = items.toFixed(2);
    shippingInputs.value = shippings.toFixed(2);
    totalBeforeTaxInput.value = totalBeforeTax.toFixed(2);
    estimatedTaxInput.value = estimatedTax.toFixed(2);
    totalOrderInput.value = totalOrder.toFixed(2);
}
