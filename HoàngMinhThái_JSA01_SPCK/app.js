let stocks = {
    data: [
        {
            name: "Tet Photo Props | Decorative Banners for Tet (2 pieces per order)",
            price: "0.70 $",
            image: "img/i2.jpg"
        },
        {
            name: "3 Pack Red Dragon, Spring Character, Koi Fish Hanging Light",
            price: "0.70 $",
            image: "img/i3.jpg"
        },
        {
            name: "36 Pieces Chinese Lantern Hanging Red Paper Lanterns(5 Lanterns)",
            price: "0.70 $",
            image: "img/i4.jpg"
        },
        {
            name: "AMS 3D Chinese New Year Paper Dragon Garland(100cm)",
            price: "0.70 $",
            image: "img/i5.jpg"
        },
        {
            name: "8 Pack 26.2' Long Chinese New Year Spring Felt String Garland",
            price: "0.70 $",
            image: "img/i6.png"
        },
        {
            name: "Chinese New Year Decorations Jointed Dragon Cut Outs for Asian",
            price: "0.70 $",
            image: "img/i7.jpg"
        },
        {
            name: "Chinese New Year Plastic Tablecloth Chinese Spring Festival Waterproof",
            price: "0.70 $",
            image: "img/i8.jpg"
        },
        {
            name: "168 Pcs Chinese New Year Tableware",
            price: "0.70 $",
            image: "img/i9.jpg"
        },
    ]
}
for (let items of stocks.data) {
    let item = document.createElement("a")
    item.classList.add("item")
    item.href = ""

    let img = document.createElement("img")
    img.setAttribute("src", items.image)
    item.appendChild(img)

    let text = document.createElement("div")
    text.classList.add("text")

    let iname = document.createElement("div")
    iname.classList.add("iname")
    iname.innerText = items.name
    text.appendChild(iname)

    let cost = document.createElement("div")
    cost.classList.add("cost")
    cost.innerHTML = items.price
    text.appendChild(cost)
    item.appendChild(text)

    // let btn = document.createElement("button")
    // btn.classList.add("addcart-btn")
    // btn.innerText = "Add to Cart"
    // item.appendChild(btn)

    document.getElementById("goods").appendChild(item);
}

for (let i of stocks.data){
    let stock = JSON.parse(localStorage.stock) //gọi stock từ localStorage
    //đưa dữ liệu vào stock

    stock.push({
        name: i.name,
        price: i.price , 
        images: i.image
    })

    //cất lại vào localStorage
    localStorage.setItem("stock", JSON.stringify(stock))
}
document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input")
    let cards = document.querySelectorAll(".item")
    let productsName = document.querySelectorAll(".iname")

    productsName.forEach((items, index) => {
        if (items.innerText.includes(searchInput)){
            cards[index].classList.remove("hide")
        } else{
            cards[index].classList.add("hide")
        }
    })
})