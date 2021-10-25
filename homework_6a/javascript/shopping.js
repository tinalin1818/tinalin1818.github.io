let carts = document.querySelectorAll('.add-cart');
let products = [
    {
        flavor: 'Original',
        price: 5.99,
        inCart: 0
    }
]
for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers();
    })
}

function onLoadCartNum() {
    let prodNum = localStorage.getItem('cartNumbers');

    if (prodNum) {
        document.querySelector('.cart span').textContent=prodNum;
    }
}
function cartNumbers() {
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
    
}
onLoadCartNum();