// show real products
var products=[
   {name:"White Chair",headline:"Solid and Durable",price:"17000",image:"https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
   {name:"Old Chair",headline:"Brown chair with stripes",price:"14000",image:"https://images.unsplash.com/photo-1612372606404-0ab33e7187ee?q=80&w=1278&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
   {name:"Yellow Chair",headline:"Seating Chair for legs to lay",price:"15000",image:"https://plus.unsplash.com/premium_photo-1705169612592-32610774a5d0?q=80&w=1140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
  
];
var popular=[
    {name:"Iphone 6",headline:"256GB ram,1tb storage",price:"40000",image:"https://images.unsplash.com/photo-1599202875854-23b7cd490ff4?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Ipad 6th Gen",headline:"Octa Core Processor,bezel less display",price:"60000",image:"https://images.unsplash.com/photo-1571101628768-6bae026844b6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
   {name:"All Weather AC",headline:"Chills Super Fast",price:"20000",image:"https://plus.unsplash.com/premium_photo-1679943423706-570c6462f9a4?q=80&w=1305&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
]

var cart=[];

function addProduct(){
    var clutter="";
    products.forEach(function(product,index){
     clutter+=`<div class="card">
            <div class="product-img" style="background-image:url('${product.image}')"></div>
            <div class="content">
                <h3>${product.name}</h3>
                <h4>${product.headline}</h4>
                <h5>$${product.price}</h5>
                <i data-index="${index}" class="ri-add-line"></i>
            </div>
        </div>`
    })
    const product=document.querySelector("#products");
    product.innerHTML=clutter;
}

function addPopularProduct(){
    var clutter='';
    popular.forEach(function(product){
        clutter+=`<div class="card1">
            <div class="popular-product-img" style="background-image:url('${product.image}')"></div>
            <div class="content1">
                <h3>${product.name}</h3>
                <h4>${product.headline}</h4>
                <h5>$${product.price}</h5>
            </div>
        </div>`
       })
       document.querySelector("#popular-products").innerHTML=clutter;
}

function addToCart(){
    document.querySelector("#products").addEventListener("click",function(details){
        if(details.target.classList.contains('ri-add-line')){
            cart.push(products[details.target.dataset.index]);
            updateCartDisplay();
        }
    });
}

function updateCartDisplay(){
    const cartElement =document.querySelector("#cart-dropdown");
    if(cart.length === 0){
        cartElement.innerHTML="<p>Your cart is empty.</p>";
    } else{
        let clutter ="";
        cart.forEach(function(item){
            clutter += `<div class="cart-item">
        <div class="cart-item-img" style="background-image:url('${item.image}')"></div>
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <p>$${item.price}</p>
        </div>
      </div>`;
        });
        cartElement.innerHTML=clutter;
    }
}

function toggleCart(){
    const cartElement=document.querySelector("#cart-dropdown");
    cartElement.classList.toggle("visible");
}
function setupCartToggle(){
    document.querySelector(".ri-shopping-bag-2-fill").addEventListener("click",toggleCart);
}
addToCart();
setupCartToggle();
addPopularProduct();
addProduct();