fetch("index.json")
    .then(res => res.json())
    .then(data => showData(data))

function showData(products) {
    let singleProduct = document.getElementById("grid-product");
    products.forEach((product) => {
        let productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
        <img src=${product.img} alt="">
        <h1>${product.name}</h1>
        <h4>Price: ${product.price}</h4>
        <p>${product.description}</p>
        <h2>${product.category}</h2>
        <h3>${product.inStock}</h3>
        <p>${product.tags}</p>
        <p><span> Ratings: ${product.rating}</span></p>
        <button>Add to cart </button>


        `
        singleProduct.appendChild(productDiv)
    })
    console.log(products)
};      