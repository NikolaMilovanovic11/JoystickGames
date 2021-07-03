listProducts();

function listProducts() {
    const redovi = document.querySelectorAll('.small-container .red');
    redovi.forEach((e) => e.remove());

    let cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
    if (!cartProducts) {
        cartProducts = [];
    }

    if (cartProducts.length > 0) {
        cartProducts.forEach((e) => listProduct(e));
        calculateTotalPrice(cartProducts);

        setDisplayNoProducts('none');
        setDisplayTotalPrice('');
        setDisplayBuyNow('');
    } else {
        setDisplayNoProducts('');
        setDisplayTotalPrice('none');
        setDisplayBuyNow('none')
    }
}

function setDisplayNoProducts(value) {
    const paragraph = document.getElementById('no-products');
    paragraph.style.display = value;
}

function setDisplayTotalPrice(value) {
    const paragraph = document.getElementById('total-price-container');
    paragraph.style.display = value;
}

function setDisplayBuyNow(value) {
    const paragraph = document.getElementById('buy-now');
    paragraph.style.display = value;
}

function listProduct(product) {
    const smallContainerDiv = document.querySelector('.small-container');
    const redDiv = document.createElement('div');
    redDiv.classList.add('red');
    smallContainerDiv.appendChild(redDiv);
    const kolDiv = document.createElement('div');
    kolDiv.classList.add('kol-4');
    redDiv.appendChild(kolDiv);
    const imageLink = document.createElement('a');
    kolDiv.appendChild(imageLink);
    const slikaDiv = document.createElement('div');
    slikaDiv.classList.add('slika_4');
    imageLink.appendChild(slikaDiv);
    const image = document.createElement('img');
    image.src = product.img;
    slikaDiv.appendChild(image);
    const naslovLink = document.createElement('a');
    kolDiv.appendChild(naslovLink);
    const naslov = document.createElement('h4');
    naslov.classList.add('naslov_igrice');
    naslov.innerText = product.name;
    naslovLink.appendChild(naslov);
    const cenaDiv = document.createElement('div');
    cenaDiv.classList.add('cena');
    kolDiv.appendChild(cenaDiv);
    const cenaSpan = document.createElement('span');
    cenaSpan.innerText = product.price.toFixed(2) + product.currency;
    cenaDiv.appendChild(cenaSpan);
    const icon = document.createElement('i');
    icon.classList.add('fas', 'fa-trash-alt');
    icon.onclick = () => { removeProduct(product.id); };
    cenaDiv.appendChild(icon);
}

function removeProduct(id) {
    const cartProducts = JSON.parse(localStorage.getItem('cartProducts'));

    if (cartProducts) {
        const productIndex = cartProducts.findIndex((p) => p.id === id);

        if (productIndex !== -1) {
            cartProducts.splice(productIndex, 1);
        }

        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));

        listProducts();
    }
}

function calculateTotalPrice(cartProducts) {
    const totalPrice = cartProducts.reduce((prev, curr) => prev + curr.price, 0);
    const totalPriceSpan = document.getElementById('total-price');
    totalPriceSpan.innerText = totalPrice.toFixed(2) + '€';
}

function buyNow() {
    localStorage.removeItem('cartProducts');
    listProducts();
    showToast();
}

function showToast() {
    $('#liveToast').toast('show');
}