var searchLink = document.querySelector(".user-navigation .search-link");
var searchForm = document.querySelector(".search-form");
var loginLink = document.querySelector(".user-navigation .login-link");
var loginForm = document.querySelector(".login-form");
var showFeedbackFormButton = document.querySelector(".contacts-feedback .button");
var feedbackForm = document.querySelector(".modal-feedback");
var closeFeedbackFormButton = document.querySelector(".modal-feedback .modal-close");
var showCartLink = document.querySelector(".user-navigation .cart-link");
var checkoutForm = showCartLink.classList.contains("cart-loaded") ?
    document.querySelector(".checkout-form") : 
    null;
var siteNavigation = document.querySelector(".site-navigation");

searchLink.addEventListener("mouseover", function(event) {
    loginForm.style.display = "none";
    if (checkoutForm !== null) {
        checkoutForm.style.display = "none";
    }

    searchForm.style.display = "block";
});

searchForm.addEventListener("mouseleave", function(event) {
    if (event.relatedTarget !== null) {
        searchForm.style.display = "none";
    }
});

loginLink.addEventListener("mouseover", function(event) {
    searchForm.style.display = "none";
    if (checkoutForm !== null) {
        checkoutForm.style.display = "none";
    }

    loginForm.style.display = "block";
});

loginForm.addEventListener("mouseleave", function(event) {
    if (event.relatedTarget !== null) {
        loginForm.style.display = "none";
    }
});

if (showFeedbackFormButton !== null) {
    showFeedbackFormButton.addEventListener("click", function(event) {
        event.preventDefault();
        feedbackForm.style.display = "block";
    });
    
    closeFeedbackFormButton.addEventListener("click", function(event) {
        feedbackForm.style.display = "none";
    });
}

showCartLink.addEventListener("mouseover", function(event) {
    loginForm.style.display = "none";
    searchForm.style.display = "none";
    
    if (checkoutForm !== null) {
        checkoutForm.style.display = "block";     
    }
});

if (checkoutForm !== null) {
    checkoutForm.addEventListener("mouseleave", function(event) {
        if (event.relatedTarget !== null) {
            checkoutForm.style.display = "none";
        }
    });
}

siteNavigation.addEventListener("mouseover", function(event) {
    loginForm.style.display = "none";
    searchForm.style.display = "none";

    if (checkoutForm !== null) {
        checkoutForm.style.display = "none";
    }
});
