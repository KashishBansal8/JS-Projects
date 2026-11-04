const productCardWrapper = document.getElementById("productCardWrapper");
const cartItems = document.getElementById("cartItems");
const showCartItems = document.getElementById("showCartItems");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const noResultError = document.querySelector(".no-result-error");
const url = "https://fakestoreapi.com/products";

// Fetch Products from API
const fetchProducts = async () => {
    const data = await fetch(url);
    const json = await data.json();
    return json;
}

// Create Product Cards
const createProductCard = (id, title, imgSrc, price) => {
    const divElem = document.createElement("div");
    divElem.id = "product" + id;
    divElem.classList.add("product-card");
    divElem.classList.add("flex");

    // Product Title
    const titleElem = document.createElement("p");
    titleElem.innerText = title;
    titleElem.classList.add("product-title");

    // Product image
    const imgElem = document.createElement("img");
    imgElem.src = imgSrc;

    // Product price
    const priceElem = document.createElement("span");
    priceElem.innerText = "$" + price;
    priceElem.classList.add("product-price");

    // Add to Cart Button
    const addToCartBtn = document.createElement("button");
    addToCartBtn.innerText = "Add to Cart";
    addToCartBtn.classList.add("add-to-cart-btn");

    divElem.appendChild(imgElem);
    divElem.appendChild(titleElem);
    divElem.appendChild(priceElem);
    divElem.appendChild(addToCartBtn);
    return divElem;
}

// Show Cards
const showProductCard = async () => {
    const response = await fetchProducts();
    response.map((data) => {
        const cardElem = createProductCard(data.id, data.title, data.image, data.price)
        productCardWrapper.appendChild(cardElem);
    })
}

// On clicking any product card
const onProductCardsClick = (e) => {
    const cartItemsValue = cartItems.textContent;
    let duplicateItem = false;

    if (e.target.classList.contains("add-to-cart-btn")) {
        let productTitle = "", productPrice = "", productId = "";
        productId = e.target.parentElement.id;
        productTitle = e.target.parentElement.childNodes[1].textContent;
        productPrice = e.target.parentElement.childNodes[2].textContent;

        let itemsInLocalStorage = localStorage.length ? JSON.parse(localStorage.getItem("products")) : [];
        itemsInLocalStorage.forEach((item) => {
            if (item.productTitle === productTitle) {
                alert("Item already present!");
                duplicateItem = true;
                return;
            }
            else {
                duplicateItem = false;

            }
        })

        if (!duplicateItem) {
            setItemsInLocalStorage(productId, productTitle, productPrice);
            cartItems.textContent = +cartItemsValue + 1;
        }
    }
}

// Set Items in local storage
const setItemsInLocalStorage = (productId, productTitle, productPrice) => {
    let itemsInLocalStorage = localStorage.length ? JSON.parse(localStorage.getItem("products")) : [];
    itemsInLocalStorage.push({ productId, productTitle, productPrice });
    localStorage.setItem("products", JSON.stringify(itemsInLocalStorage));
}

// Show Items In Cart
const showItemsInCart = () => {
    let getItemsFromStorage = JSON.parse(localStorage.getItem("products"));
    cartItems.textContent = getItemsFromStorage.length;

    getItemsFromStorage.map((item) => {
        const cartItem = createCartItems(item.productTitle, item.productPrice);
        showCartItems.appendChild(cartItem);
    })
}

// Add Item Details in Cart
const createCartItems = (productTitle, productPrice) => {
    const divElem = document.createElement("div");
    divElem.classList.add("cart-item");
    divElem.classList.add("flex");

    const productTitleElem = document.createElement("p");
    productTitleElem.innerText = productTitle;

    const productPriceElem = document.createElement("span");
    productPriceElem.innerText = productPrice;

    divElem.appendChild(productTitleElem);
    divElem.appendChild(productPriceElem);
    return divElem;
}

// Clear all product cards
const clearItems = () => {
    let productCards = document.querySelectorAll(".product-card");
    productCards.forEach((card) => card.remove());
}

// Search By Title
const onSearchBtnClick = async () => {
    const cards = document.querySelectorAll(".product-card");
    const searchInputVal = searchInput.value;
    let isSearchfound = false;
    let isSearchFoundArr = [];

    if (!searchInputVal.length) {
        clearItems();
        showProductCard();
        noResultError.style.display = "none";
        return;
    }

    cards.forEach((card) => {
        isSearchFoundArr.push(card.childNodes[1].textContent.toLowerCase().indexOf(searchInputVal.toLowerCase()));
        if (card.childNodes[1].textContent.toLowerCase().indexOf(searchInputVal.toLowerCase()) > -1) {
            card.style.display = "flex";
            isSearchfound = true;
        }
        else {
            card.style.display = "none";
            isSearchfound = false;
        }
    })

    if (isSearchFoundArr.some((val) => val > -1)) {
        noResultError.style.display = "none";
    }
    else {
        noResultError.style.display = "block";
    }
}

// Init
const init = () => {
    // localStorage.clear();
    showProductCard();
    productCardWrapper.addEventListener("click", onProductCardsClick);
    searchBtn.addEventListener("click", onSearchBtnClick);
    showItemsInCart();
}

init();