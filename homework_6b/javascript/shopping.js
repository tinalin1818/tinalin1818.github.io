let carts = document.querySelectorAll('.add-cart');
let products = [
    {
        flavor: 'Original',
        tag: 'og',
        count: 0,
        glazing: 'No Glaze',
        price: 4.99,
        inCart: 0
    },
    {
        flavor: 'Blackberry',
        tag: 'bb',
        count: 0,
        glazing: 'No Glaze',
        price: 4.99,
        inCart: 0
    },
    {
        flavor: 'Walnut',
        tag: 'wn',
        count: 0,
        glazing: 'No Glaze',
        price: 4.99,
        inCart: 0
    },
    {
        flavor: 'Original (Gluten-Free)',
        tag: 'gf',
        count: 0,
        glazing: 'No Glaze',
        price: 4.99,
        inCart: 0
    },
    {
        flavor: 'Pumpkin Spice',
        tag: 'ps',
        count: 0,
        glazing: 'No Glaze',
        price: 4.99,
        inCart: 0
    },
    {
        flavor: 'Caramel Pecan',
        tag: 'cp',
        count: 0,
        glazing: 'No Glaze',
        price: 4.99,
        inCart: 0
    }
]

// updating cart number through clicks
for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        // totalCost(products[i]);
    })
}

function onLoadCartNum() {
    let prodNum = localStorage.getItem('cartNumbers');
    if (prodNum) {
        document.querySelector('.cart span').textContent=prodNum;
    }
}

function cartNumbers(product) {
    let prodNum = localStorage.getItem('cartNumbers'); // get num in cart
    prodNum = parseInt(prodNum);
    if (prodNum) {
        localStorage.setItem('cartNumbers', prodNum + 1);
        document.querySelector('.cart span').textContent=prodNum+1;
    }
    else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent=1;
    }
    setItems(product);
}

// all that is shown within one label of shopping cart
function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
        let glaze = document.getElementById("glazing1");
        cartItems[product.tag].glazing = glaze.options[glaze.selectedIndex].value;
        let quantity = document.getElementById("rolls1");
        cartItems[product.tag].count = quantity.options[quantity.selectedIndex].value;
        cartItems[product.tag].price = product.count * 4.99;

    }
    else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
        let glaze = document.getElementById("glazing1");
        cartItems[product.tag].glazing = glaze.options[glaze.selectedIndex].value;
        let quantity = document.getElementById("rolls1");
        cartItems[product.tag].count = quantity.options[quantity.selectedIndex].value;
        cartItems[product.tag].price = product.count * 4.99;

    }
    localStorage.setItem("productsInCart", JSON.stringify (cartItems));
}

// update the cost of the product on the modal of the product page
function costOnProduct() {
    let quantity = document.getElementById("rolls1");
    let selectedValue = quantity.options[quantity.selectedIndex].value;
    let cost = selectedValue * 4.99;
    let productCost = document.getElementsByClassName("price");
    productCost[0].innerHTML = "Price: $" + cost;
}

// function totalCost(product) {
//     let quantity = document.getElementById("rolls1");
//     product.count = quantity.options[quantity.selectedIndex].value;
//     let glaze = document.getElementById("glazing1");
//     product.glazing = glaze.options[glaze.selectedIndex].value;
//     product.price = product.quantity * 4.99;

    // let ordersInCart = localStorage.getItem("orders");
    // JSON.parse(ordersInCart);
    // if (ordersInCart == null)
    //     ordersInCart = [];
    // ordersInCart.push(order);
    // console.log(ordersInCart);
    // localStorage.setItem("orders", JSON.stringify(ordersInCart));
    // var cartNum = document.getElementsByClassName("cart-num");
    // cartNum[0].innerHTML = ordersInCart.length; 

//     let cartCost = localStorage.getItem('totalCost');
//     if (cartCost != null) {
//         cartCost = parseFloat(cartCost);
//         localStorage.setItem('totalCost', cartCost + product.price);
//     }
//     else {
//         localStorage.setItem('totalCost', product.price);
//     }
// }

function clickedBtn(clicked) {
    parseInt(clicked);
    // custVals(clicked);
    let quantity = document.getElementById("rolls"+clicked);
    localStorage.setItem("rolls"+clicked, JSON.stringify(quantity.value));
    let glazing = document.getElementById("glazing"+clicked);
    localStorage.setItem("glazing"+clicked, JSON.stringify(glazing.value));
}

function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let prodContainer = document.querySelector('.prods');
    if (cartItems && prodContainer) {
        
        prodContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            prodContainer.innerHTML += `
            <div class="prod">
                <img src='images/roll.png'>
                <span>${item.flavor}</span>
            <div class="glaze"><span>${item.glazing}</span></div>
                <div class="price">${item.price}</div>
                <div class="quantity">
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <span>${item.count}</span>
                    <ion-icon name="add-circle-outline"></ion-icon>
                </div>
                <ion-icon onclick="removeFromCart('+ i +');" name="trash-outline"></ion-icon>
            </div>
            `
            prodContainer.innerHTML += `
            <div class="cartTotal">
                <h4>Total</h4>
                <h4>$${item.price}</h4>
            </div>
            `
        })
        
    }
}


// function that removes a particular item (obj) from the shopping cart
// function removeItem(obj) {
    // retrieve the stored value of the cart items so that we can modify it
    // var cartItemsString = localStorage.getItem("cartItems")
    // if (cartItemsString !== null) {
    //   var cartItems = JSON.parse(cartItemsString) // successfully loaded in the cart items
      
      // find the index of the input object in the list
    //   var ind = cartItems.findIndex(function (item) {
    //     return item.glaze === obj.glaze && item.quantity === obj.quantity
    //   })
    //   console.log("ind " + ind)
    //   if (ind !== -1) {
        // remove item from the list
        // cartItems.splice(ind, 1)
        // update the stored value
        // localStorage.setItem("cartItems", JSON.stringify(cartItems))
        // re-render the page to reflect changes
//         updatePage()
//       }
//     }
// }
function removeFromCart(product) {
    localStorage.clear();
    location.reload()
}
onLoadCartNum();
displayCart();