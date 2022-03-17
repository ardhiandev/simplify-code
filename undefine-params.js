// Hint : ??

function getTotalPrice(price, tax, product){
    tax = tax ?? 0.01
    product = product ?? "Unknown item"
    var total = price * (1+tax)
    console.log("Total price",product, "with tax : "+total)
}

getTotalPrice(10000,0.05,"Pinaple Juice")
getTotalPrice(10000,0,"Apple juice")
getTotalPrice(10000,undefined,undefined)