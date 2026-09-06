
const products=[
{name:"Classic Oversized T-Shirt",price:799,old:999,icon:"👕",cat:"Men"},
{name:"Women Summer Dress",price:1299,old:1599,icon:"👗",cat:"Women"},
{name:"Elegant Necklace",price:599,old:799,icon:"💎",cat:"Jewellery"},
{name:"Casual Sneakers",price:1499,old:1999,icon:"👟",cat:"Men"},
{name:"Stylish Handbag",price:999,old:1299,icon:"👜",cat:"Women"},
{name:"Fashion Watch",price:1199,old:1499,icon:"⌚",cat:"Accessories"},
{name:"Denim Jacket",price:1799,old:2199,icon:"🧥",cat:"Men"},
{name:"Pearl Earrings",price:499,old:699,icon:"📿",cat:"Jewellery"}
];
function addToCart(name){
 let cart=JSON.parse(localStorage.getItem("kanhanCart")||"[]");
 const p=products.find(x=>x.name===name)||{name,price:0,icon:"🛍️"};
 const found=cart.find(x=>x.name===name);
 if(found) found.qty++; else cart.push({...p,qty:1});
 localStorage.setItem("kanhanCart",JSON.stringify(cart)); alert("Product cart me add ho gaya!");
}
function cartCount(){
 let c=JSON.parse(localStorage.getItem("kanhanCart")||"[]");
 return c.reduce((a,b)=>a+b.qty,0);
}
document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll("[data-cart-count]").forEach(x=>x.textContent=cartCount())});
function renderProducts(target,filter="All"){
 const el=document.querySelector(target); if(!el)return;
 const arr=filter==="All"?products:products.filter(p=>p.cat===filter);
 el.innerHTML=arr.map(p=>`<div class="card"><div class="pic">${p.icon}</div><div class="card-body"><span class="tag">${p.cat}</span><h3>${p.name}</h3><div class="price">₹${p.price}<span class="old">₹${p.old}</span></div><button class="btn" onclick="addToCart('${p.name.replace(/'/g,"\\'")}')">Add to Cart</button></div></div>`).join("");
}
function renderCart(){
 const el=document.querySelector("#cartItems"); if(!el)return;
 const cart=JSON.parse(localStorage.getItem("kanhanCart")||"[]");
 if(!cart.length){el.innerHTML='<p class="muted">Cart abhi empty hai.</p>';document.querySelector("#total").textContent="₹0";return}
 el.innerHTML=cart.map((p,i)=>`<div class="cart-row"><div class="thumb">${p.icon}</div><div><b>${p.name}</b><div class="muted">₹${p.price} × ${p.qty}</div></div><div class="qty"><button onclick="changeQty(${i},-1)">−</button> ${p.qty} <button onclick="changeQty(${i},1)">+</button></div><b>₹${p.price*p.qty}</b></div>`).join("");
 document.querySelector("#total").textContent="₹"+cart.reduce((s,p)=>s+p.price*p.qty,0);
}
function changeQty(i,d){let c=JSON.parse(localStorage.getItem("kanhanCart")||"[]");c[i].qty+=d;if(c[i].qty<=0)c.splice(i,1);localStorage.setItem("kanhanCart",JSON.stringify(c));renderCart()}
