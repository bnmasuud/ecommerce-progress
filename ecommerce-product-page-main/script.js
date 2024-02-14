const closeIcon = document.querySelector("[alt=icon-close]");
const modalContainer = document.querySelector(".modal-container");
const cartContainer = document.querySelector(".cart-container");
const cartDropdown = document.getElementById("cart-dropdown");
const cartIcon = document.querySelector("[alt=icon-cart]");
const thumbnailImages = document.querySelectorAll(".thumbnails img");
const mainImage = document.querySelector("#main-image");
const cartCount = document.querySelector("#cart-count");
const minusIcon = document.querySelector("[alt=icon-minus]");
const plusIcon = document.querySelector("[alt=icon-plus]");
const cartCounter = document.querySelector(".cart-counter");
const addToCartBtn = document.getElementById("cart-btn");
const cartPriceP = document.getElementById("cart-price-p");
const cartDetails = document.querySelector("#cart-details");
const emptyCart = document.getElementById("empty-cart");
const deleteIcon = cartDetails.querySelector("[alt=icon-delete]");
const modalMainImage = modalContainer.querySelector(".modal > div > img");
const modalThumbnailImages = modalContainer.querySelectorAll(".modal-thumbnails span");
const navigationButton = modalContainer.getElementByclassName(".navigation-button");

let cartItems = 0;
if (cartItems < 1) {
  cartCounter.style.display = "none";
}

// close cart dropdown
closeIcon.addEventListener("click", () => {
  modalContainer.style.display = "none";
})

cartIcon.addEventListener("click", () => {
  if (cartDropdown.style.display === "block") {
    cartDropdown.style.display = "none";
  } else {
    cartDropdown.style.display = "block"
  }
})

window.onclick = function (event) {
  if (!event.target.closest(".cart-container")) {
    cartDropdown.style.display = "none";
  }
}

for (let i = 0; i < thumbnailImages.length; i++) {
  const thumbnails = thumbnailImages[i];
  thumbnails.onclick = () => {
    mainImage.src = thumbnails.src.replace("-thumbnail", "");

    for (let i = 0; i < thumbnailImages.length; i++) {
      thumbnailImages[i].classList.remove("active-thumbnail");

    }
    thumbnails.classList.add("active-thumbnail");
  }

}

// handle cart add and remove event

minusIcon.addEventListener("click", () => {
  if (cartItems > 0) {
    cartItems -= 1;
    cartCount.innerText = cartItems;
  }
})

plusIcon.addEventListener("click", () => {
  if (cartItems >= 0) {
    cartItems++;
    cartCount.innerText = cartItems;
  }
})

addToCartBtn.onclick = function () {
  if (cartItems !== 0) {
    cartCounter.style.display = "inline-block";
    cartCounter.innerText = cartItems;
    cartDetails.style.display = "block";
    cartPriceP.innerHTML = `$125.00 x ${cartItems} <span>$${(125 * cartItems).toFixed(2)}</span>`;
    emptyCart.style.display = "none";
  } else {
    cartCounter.style.display = "none";
    cartDetails.style.display = "none";
    emptyCart.style.display = "block";
  }
}

deleteIcon.onclick = () => {
  cartItems = 0;
  cartCount.innerText = cartItems;
  cartCounter.style.display = "none";
  cartDetails.style.display = "none";
  emptyCart.style.display = "block";
}

mainImage.onclick = () => {
  modalContainer.style.display = "flex";
}

for (let i = 0; i < modalThumbnailImages.length; i++) {
  const thumbnails = modalThumbnailImages[i];
  thumbnails.onclick = () => {
    modalMainImage.src = thumbnails.firstElementChild.src.replace("-thumbnail", "");

    for (let i = 0; i < thumbnailImages.length; i++) {
      modalThumbnailImages[i].firstElementChild.classList.remove("active-thumbnail");

    }
    thumbnails.firstElementChild.classList.add("active-thumbnail");
  }

}

navigationButton[i].onclick = () => {
  let currentImagePosition = Array.from(modalThumbnailImages).findIndex((thumb) => thumb.firstElementChild.className === "active-thumbnail");

  if (currentImagePosition > i) {
    for (let i = 0; i < modalThumbnailImages.length; i++) {

    }
  }
}