const searchLink = document.querySelector(".user-navigation .search-link");
const searchForm = document.querySelector(".search-form");
const loginLink = document.querySelector(".user-navigation .login-link");
const loginForm = document.querySelector(".login-form");
const showFeedbackFormButton = document.querySelector(".contacts-feedback .button");
const feedbackForm = document.querySelector(".modal-feedback");
const closeFeedbackFormButton = document.querySelector(".modal-feedback .modal-close");
const showCartLink = document.querySelector(".user-navigation .cart-link");

const checkoutForm = showCartLink.classList.contains("cart-loaded") ?
    document.querySelector(".checkout-form") : 
    null;

/* TODO: close popups when mouse on site navigation menu */

searchLink.addEventListener("mouseover", (event) => {
    loginForm.style.display = "none";
    if (checkoutForm !== null) {
        checkoutForm.style.display = "none";
    }

    searchForm.style.display = "block";
});

searchForm.addEventListener("mouseleave", (event) => {
    if (event.relatedTarget !== null) {
        searchForm.style.display = "none";
    }
});

loginLink.addEventListener("mouseover", (event) => {
    searchForm.style.display = "none";
    if (checkoutForm !== null) {
        checkoutForm.style.display = "none";
    }

    loginForm.style.display = "block";
});

loginForm.addEventListener("mouseleave", (event) => {
    if (event.relatedTarget !== null) {
        loginForm.style.display = "none";
    }
});

if (showFeedbackFormButton !== null) {
    showFeedbackFormButton.addEventListener("click", (event) => {
        event.preventDefault();
        feedbackForm.style.display = "block";
    });
    
    closeFeedbackFormButton.addEventListener("click", (event) => {
        feedbackForm.style.display = "none";
    });
}

showCartLink.addEventListener("mouseover", (event) => {
    loginForm.style.display = "none";
    searchForm.style.display = "none";
    
    if (checkoutForm !== null) {
        checkoutForm.style.display = "block";     
    }
});

if (checkoutForm !== null) {
    checkoutForm.addEventListener("mouseleave", (event) => {
        if (event.relatedTarget !== null) {
            checkoutForm.style.display = "none";
        }
    });
}
