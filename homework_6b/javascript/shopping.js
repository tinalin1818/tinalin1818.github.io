let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        flavor: 'Original',
        tag: 'og',
        price: 5.99,
        inCart: 0
    }
]

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNum() {
    let prodNum = localStorage.getItem('cartNumbers');
    if (prodNum) {
        document.querySelector('.cart span').textContent=prodNum;
    }
}

function cartNumbers(product) {
    let prodNum = localStorage.getItem('cartNumbers');
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
    }
    else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify (cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');
    
    if (cartCost != null) {
        cartCost = parseFloat(cartCost);
        localStorage.setItem('totalCost', cartCost + product.price);
    }
    else {
        localStorage.setItem('totalCost', product.price);
    }
    
}

// function displayCart() {
//     let cartItems = localStorage.getItem('productsInCart');
//     cartItems = JSON.parse(cartItems);
//     let prodContainer = document.querySelector('.products-container');
//     if (cartItems && prodContainer) {
//         prodContainer.innerHTML = '';
//         Object.values(cartItems).map(item => {
//             prodContainer.innerHTML += `
//             <div class='product'>
//                 <ion-icon name='close-circle'></ion-icon>
//                 <img src='./images/${item.tag}.jpg'>
//                 <span>${item.name}</span>
//             </div>
//             `
//         })
//     }
// }
onLoadCartNum();
displayCart();