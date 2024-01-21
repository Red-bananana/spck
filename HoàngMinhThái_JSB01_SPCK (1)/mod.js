let addcart = document.querySelector(".addcart-btn")
let cart = document.querySelector("#goodscount")
let count = 0
cart.innerHTML = count
addcart.addEventListener("click", (e)=> {
        e.preventDefault()  
        count++
})
// addcart.addEventListener("click", (e)=> {
//     e.preventDefault()  
//     count++
// })
