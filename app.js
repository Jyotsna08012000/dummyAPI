let mainbox=document.getElementById("mainbox")
let searchinput=document.getElementById("searchinput")
let search=document.getElementById("search")

let apiUrl="https://dummyjson.com/products"
console.log(apiUrl);

async function filterallPrd() {
try {
    let data= await fetch(apiUrl)
  console.log(data);
   let finaldata= await data.json()
    console.log(finaldata);
    let prd=finaldata.products
    console.log(prd);
    allprd(prd)

    search.addEventListener("click",()=>{
        let value=searchinput.value
        prd.filter(({title})=>{
        return title.toLowerCase().includes(value.toLowerCase())
        


    }).map(({brand,category,description,discountPercentage,images,price,rating,title})=>{
        mainbox.innerHTML=""
        mainbox.innerHTML+=
        ` <div id="card">
        <div id="content">
        <img src=${images[0]} height="100%" width="100%">
        <div id="brand">
            <div id="title">
            <h1>${title}, ${brand}</h1>
            <p id="rating">${rating} <i class="fa-solid fa-star"></i></p>
            </div>
            <h3>${category}</h3>
            <p>${description}</p>
            <p id="price"><sup>₹</sup>${price}</p>
            <p id="dis">discount:-${discountPercentage}%</p>
            
        </div>
        <button id="buy">Buy Now</button>

    </div>
    </div>`

    })

    })

} catch (error) {
    
}
    
    
}
filterallPrd()

function allprd(prd) {
    prd.map(({brand,category,description,discountPercentage,images,price,rating,title})=>{
        mainbox.innerHTML+=
        ` <div id="card">
        <div id="content">
        <img src=${images[0]} height="100%" width="100%">
        <div id="brand">
            <div id="title">
            <h1>${title}, ${brand}</h1>
            <p id="rating">${rating} <i class="fa-solid fa-star"></i></p>
            </div>
            <h3>${category}</h3>
            <p>${description}</p>
            <p id="price"><sup>₹</sup>${price}</p>
            <p id="dis">discount:-${discountPercentage}%</p>
            
        </div>
        <button id="buy">Buy Now</button>

    </div>
    </div>`
})

    
}

