var shopProduct = document.querySelectorAll(".shop")
var cart = document.querySelector("#cart")
var btnClear = document.getElementById("clear")
var btnShowPrice = document.getElementById("showPrice")
var contBtn = document.getElementById("contBtn")
var cartPrice = document.getElementById("cartPrice")
// var itemName = document.querySelectorAll(".name")
totalPrice = 0
var search = document.getElementById("search")
var allProducts = document.querySelectorAll(".list li")
var error = document.getElementById("error")




shopProduct.forEach(function(item){
    
    item.onclick = function(){
        
        totalPrice += +this.getAttribute("price")
        
        var productName = item.parentElement.querySelector(".name").textContent
        cart.innerHTML += productName + "<br/>"
        
        cart.style.display = "block"
        contBtn.style.display = "block"
    }
})

btnClear.addEventListener("click" , () => {
    cart.innerHTML = ""
    cart.style.display = "none"
    contBtn.style.display = "none"
    cartPrice.style.display = "none"
    totalPrice = 0
})

btnShowPrice.addEventListener("click" , () =>{
    
    if(totalPrice > 30000){
        alert("مبروك عليك يزميلي الخصم 30%")
        totalPrice -= 3000
    }
    
    cartPrice.innerHTML = "Total Price : " + totalPrice
    cartPrice.style.display = "block"
})


search.addEventListener("input" , () =>{
    var searchValue = search.value
    var z = false

    allProducts.forEach(ele =>{
        if (ele.textContent.toLowerCase().includes(searchValue)) {
            ele.style.display = "block"
            ele.style.margin = "auto"
            z = true
        }else{
            ele.style.display = "none"
            cart.style.display = "none"
            contBtn.style.display = "none"
            cartPrice.style.display = "none"
        }
    })
    error.style.display = z ? "none" : "block"
})
