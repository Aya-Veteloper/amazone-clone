// //const cartBtn = document.getElementsByClassName("cart-button")[0];
// const addToCartBtn = document.querySelectorAll(".add-btn")[0];
// const cartList = document.getElementsByTagName("ul")[0];
// //console.log(addToCartBtn);
// //const cartDiv = document.getElementsByClassName("cart-container")[0];

// //document.addEventListener('DOMContentLoaded', function () {

// // });

// //let cart = [];

// addToCartBtn.addEventListener("click", function (event) {
//   const productCardID = event.target.parentElement.id;
//   console.log(productCardID);

//   const xhr = new XMLHttpRequest();

//   xhr.open("GET", "product.json", true);
//   //console.log(xhr);

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       const data = JSON.parse(xhr.responseText);

//       // Filter products based on the search term
//       const productDetails = data.filter((product) => {
//         product.id.toString().includes(productCardID);
//       });

//       console.log(productDetails);

//       ShowInCart(productDetails);
//     }
//   };

//   xhr.send();
// });

// function ShowInCart(productDetails) {
//   cartList.innerHTML = "";

//   if (productDetails.length === 0) {
//     cartList.innerHTML = "<p>Cart is empty.</p>";
//   } else {
//     productDetails.forEach((result) => {
//       const resultCard = createCartItem(result);
//       cartList.appendChild(resultCard);
//     });
//   }

//   window.location.href = "cart.html";
// }

// function createCartItem(result) {
//   const item = document.createElement("li");
//   //item.classList.add("result-card");
//   item.innerHTML = `
//                 <div class="item">
//                     <img src=${result.images} alt="">
//                     <div class="item-details">

//                         <h3>${result.title}</h3>
//                         <p>In Stock</p>
//                         <select name="" id="">
//                             <option value="1">Qty:1</option>
//                             <option value="2">Qty:2</option>
//                             <option value="3">Qty:3</option>
//                             <option value="4">Qty:4</option>
//                             <option value="5">Qty:5</option>
//                         </select>
//                         <button>Delete</button>
//                         <button>Save for later</button>
//                     </div>
//                     <div class="item-price">
//                         <p>$${result.price}</p>
//                         <div class="coupon">
//                             <p>Save 10%</p>
//                             <a href="">Clip Coupon</a>
//                         </div>
//                     </div>
//                 </div>
//     `;
//   return item;
// }
