// <--- RESPONSIVE NAVBAR --->

let hamburger = document.querySelector(".hamburger");
let hamburger_menu = document.querySelectorAll(".hamburger-icon");
let responsive_nav = document.querySelector(".responsive-nav");

hamburger_menu[0].addEventListener("click", () => {
    hamburger_menu[0].classList.toggle("is-not-active");
    hamburger_menu[1].classList.toggle("is-not-active");
    responsive_nav.classList.toggle("hide-nav");
});
hamburger_menu[1].addEventListener("click", () => {
    hamburger_menu[0].classList.toggle("is-not-active");
    hamburger_menu[1].classList.toggle("is-not-active");
    responsive_nav.classList.toggle("hide-nav");
});

// DONATE PAGE

// Path: donate.html

let donate_currencies = document.getElementById("donate-currencies");
let donate_amount = document.getElementById("donate-amount");

donate_currencies.addEventListener("change", (event) => {

    let selectedCurrency = event.target.value;

    console.log(selectedCurrency);

});