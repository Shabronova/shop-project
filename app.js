// add to cart

let productsCountEl = document.getElementById("products-count");
let addToCartButtons = document.querySelectorAll(".button_cart");

for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", function(){
        // let prevProductsCount = +productsCountEl.textContent;
        // productsCountEl.textContent = prevProductsCount + 1;
        productsCountEl.textContent = +productsCountEl.textContent + 1;
    });
}

// modal

let modal = document.querySelector(".modal");
let moreDetailsButton = document.querySelectorAll(".button_det");
let closeBtn = document.querySelector(".btn-close");

moreDetailsButton.forEach ( item  => {
    item.addEventListener("click", openModal); 
});

function openModal () {
    modal.classList.add("show");
    modal.classList.remove("hide");
}

function closeModal () {
    modal.classList.remove("show");
    modal.classList.add("hide");
}

closeBtn.addEventListener ("click", closeModal);

modal.addEventListener("click", function(e) {
    if  (e.target === modal) {
        closeModal();
    }
});

function showModalByScroll () {
    if (window.pageYOffset > document.documentElement.scrollHeight/2) {
        openModal ();
        window.removeEventListener("scroll", showModalByScroll);
    }
}

window.addEventListener ("scroll", showModalByScroll);

// change like button state

let likeButtons = document.querySelectorAll(".like");

likeButtons.forEach( item => item.addEventListener("click", function () {
    // if (item.classList.contains('liked')) {
    //     item.classList.remove('liked')
    // } else {
    //     item.classList.add('liked')
    // }
    item.classList.toggle('liked');
}));

// counter

let decrementButtons = document.querySelectorAll(".decrement-button");
let incrementButtons = document.querySelectorAll(".increment-button");
let quantityValue = document.querySelectorAll(".product-quanity > input");

function Counter (incrementButton, decrementButton, inputField, minCount = 1, maxCount = 10) {
    this.domRefs = {
        incrementButton,
        decrementButton,
        inputField
    }

    this.toggleButtonState = function () {
        const count = this.domRefs.inputField.value;
        this.domRefs.decrementButton.disabled = count <= minCount;
        this.domRefs.incrementButton.disabled = count >= maxCount;
    }

    this.toggleButtonState ();

    this.increment = function () {
        this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
        this.toggleButtonState ();
    }

    this.decrement = function () {
        this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
        this.toggleButtonState ();
    }

    this.domRefs.incrementButton.addEventListener("click",this.increment.bind(this));
    this.domRefs.decrementButton.addEventListener("click",this.decrement.bind(this));
}

let counter1 = new Counter (incrementButtons, decrementButtons, quantityValue);