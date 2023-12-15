
let categoryContainer = document.querySelector(".card-product-container")
let xhr = new XMLHttpRequest()
xhr.open("get","product.json")
xhr.send()
let data
xhr.addEventListener("load",function(){
    if(xhr.status == 200){
         data = JSON.parse(xhr.response)
    }
})
categoryContainer.addEventListener("click",function(eve){
    if(eve.target.classList.contains("card-product-btn")){
        for(let product of data){
            if(product.category == eve.target.value){
                localStorage.getItem("productCategory",product.category)
                window.location.href="product.html"
            }
        }
    }
})