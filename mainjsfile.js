window.addEventListener("load",function () {
    

    displaycartItems();
    removebtn = this.document.getElementsByClassName("removebtn");
    for (i = 0; i < removebtn.length; i++){
        removebtn[i].addEventListener("click",function (e) {
            e.target.parentElement.parentElement.remove();
        })
    }

let _productArray = [];
let _cartbtn = document.getElementsByClassName("putincart");

for (let i = 0; i < _cartbtn.length; i++) {
    
    _cartbtn[i].addEventListener("click",function (ev) {
        if ((localStorage.getItem('RegisterfromArray'))==null)  {
            alert("please you have to register first"); return;
        }
        else {
            alert("Product Added");
            ev.preventDefault();
        }
        

        let _productData = {
                _id : i+1,
                _title : ev.target.parentElement.getElementsByClassName("_productTitle")[0].innerText,
                _price : ev.target.parentElement.getElementsByClassName("_productPrice")[0].innerText,
            _image: ev.target.parentElement.parentElement.getElementsByClassName("_productImage")[0].src,
            _itemdetails: ev.target.parentElement.getElementsByClassName("_details")[0].innerText,
            _quantity: 0,

        }
        console.log(_productData);
        
        

        sortItem(_productData);
        TotalCost(_productData);
    })


}
})

function sortItem(_product) {

    let _cart = JSON.parse(localStorage.getItem("productArray"));
    if (_cart != null) {
            // console.log(_cart[_product._title]._title);
        
        if (_cart[_product._title] == undefined) {
        
            _cart = {
                ..._cart,
                [_product._title]: _product,
            }
        }
        _cart[_product._title]._quantity += 1;
        console.log(_cart);
    }
    
        else
        {
            _product._quantity = 1;
            _cart = {
                [_product._title]: _product,
        }
        }
    
    localStorage.setItem("productArray", JSON.stringify(_cart));
    console.log(_product._title);
    console.log(_cart[_product._title]._quantity);
}





function TotalCost(product) {
    console.log(product._price)
    let price = product._price.replace('$', '');
    console.log(price);
    let _totalCost =(localStorage.getItem("TotalCost"));
    if (_totalCost != null) {
        _totalCost = parseInt(_totalCost);
        localStorage.setItem("TotalCost", _totalCost + parseInt(price));
        // console.log(_totalCost)
    }
    else {
        localStorage.setItem("TotalCost", parseInt(price))
        console.log(_totalCost)
        
    }
    
}
function displaycartItems() {
    
    let theproducts = JSON.parse(localStorage.getItem("productArray"));
    
    
    let content = document.querySelector(".cartcontent");
    if (theproducts && content) {
        content.innerHTML = `
<div class="head" >
<div class="styimg">Image</div>

<div class="styname">Name</div>

<div class="stydetail">Details</div>
<div class="styprice">PRICE</div>
<div class="styqunantity">Quantity</div>
<div class="stytotal">Total</div>
<div class="stydelete">Delete</div>
</div>`

Object.values(theproducts).map(item => {
itemprice = item._price.replace('$', '');
console.log(itemprice);
console.log(item._itemdetails)

content.innerHTML += `

<div class="container">

<div class="item-image" ><img src="${item._image}" width="140" alt=""></div>
<div class="item-name">${item._title}</div>
<div  class ="item-detail">${item._itemdetails}</div>
<div  class="item-price">${item._price}</div>
<div  class="item-quantity">${item._quantity}</div>
<div  class="total-price">${item._quantity * itemprice}</div>
<div  class="removebtn"><button class="removebtn1" type="button">Remove</button></div><hr/>
</div>

`
})

}
}
function clicking() {
    if ((localStorage.getItem('RegisterfromArray')) == null) {
        alert("please login first");
        return;
    }
    else {
        location.href = "http://127.0.0.1:5500/Gallery.html"
    }

}
// -------------------------------------------------------


