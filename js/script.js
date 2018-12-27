var searchLink = document.querySelector(".user-navigation .search-link");
var searchForm = document.querySelector(".search-form");
var loginLink = document.querySelector(".user-navigation .login-link");
var loginForm = document.querySelector(".login-form");
var showFeedbackFormButton = document.querySelector(".contacts-feedback .button");
var feedbackForm = document.querySelector(".modal-feedback");
var closeFeedbackFormButton = document.querySelector(".modal-feedback .modal-close");
var feedbackName = document.querySelector(".modal-feedback [name='feedback_name']");
var feedbackEmail = document.querySelector(".modal-feedback [name='feedback_email']");
var feedbackMessage = document.querySelector(".modal-feedback [name='feedback_message']");
var showCartLink = document.querySelector(".user-navigation .cart-link");
var checkoutForm = document.querySelector(".checkout-form");
var siteNavigation = document.querySelector(".site-navigation");
var modalLayer = document.querySelector(".modal-layer");

searchLink.addEventListener("mouseover", function(event) {
    hideForm(loginForm);
    hideForm(checkoutForm);
    showForm(searchForm);
});

searchForm.addEventListener("mouseleave", function(event) {
    if (event.relatedTarget !== null) {
        hideForm(searchForm);
    }
});

loginLink.addEventListener("mouseover", function(event) {
    hideForm(searchForm);
    hideForm(checkoutForm);
    showForm(loginForm);
});

loginForm.addEventListener("mouseleave", function(event) {
    if (event.relatedTarget !== null) {
        hideForm(loginForm);
    }
});

if (showFeedbackFormButton !== null) {
    showFeedbackFormButton.addEventListener("click", function(event) {
        event.preventDefault();
        showModalForm(feedbackForm);
    });
    
    closeFeedbackFormButton.addEventListener("click", function(event) {
        hideModalForm(feedbackForm);
    });

    feedbackForm.addEventListener("submit", function(event) {
        if (!feedbackName.value || !feedbackEmail.value || !feedbackMessage.value) {
            event.preventDefault();
            feedbackForm.classList.remove("modal-error");
            feedbackForm.offsetWidth = feedbackForm.offsetWidth;
            feedbackForm.classList.add("modal-error");
        }
    });
}

showCartLink.addEventListener("mouseover", function(event) {
    hideForm(loginForm);
    hideForm(searchForm);
    showForm(checkoutForm);
});

if (checkoutForm !== null) {
    checkoutForm.addEventListener("mouseleave", function(event) {
        if (event.relatedTarget !== null) {
            hideForm(checkoutForm);
        }
    });
}

siteNavigation.addEventListener("mouseover", function(event) {
    hideForm(loginForm);
    hideForm(searchForm);
    hideForm(checkoutForm);
});

function hideForm(form) {
    if (form !== null) {
        form.classList.add("hidden");
    }
}

function showForm(form) {
    if (form !== null) {
        form.classList.remove("hidden");
    }
}

function showModalForm(form) {
    if (form !== null) {
        form.classList.add("modal-show");
        showModalLayer();
    }
}

function hideModalForm(form) {
    if (form !== null) {
        form.classList.remove("modal-show");
        form.classList.remove("modal-error");
        hideModalLayer();
    }
}

function showModalLayer() {
    modalLayer.style.display = "block";
}

function hideModalLayer() {
    modalLayer.style.display = "none";
}
