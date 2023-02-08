// <-------- CONTACT FORM ------->

let name_input = document.getElementById("name");
let email_input = document.getElementById("email");
let phone_input = document.getElementById("phone");
let message_input = document.getElementById("message");

let submit_button = document.getElementById("submit");

let smtp_username = 'info@cisdcenter.org';
let smtp_password = 'BFFCC289FC8CDAC14D81BD356B20A314D5BE';

let sendMessage = (e) => {

    e.preventDefault();
    console.log(email_input.value)

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : smtp_username,
        Password : smtp_password,
        To : 'info@cisdcenter.org',
        From : smtp_username,
        Subject : "Inquiry from CISD Contact Form",
        Body : `
        ${name_input.value} has sent you a message from the CISD Contact Form: <br>
        <br> ${message_input.value}
        `
    }).then(
      message => alert(message)
    )
    .catch(
        error => console.log(error)
    );

    (name_input.value = ""), (email_input.value = ""), (phone_input.value = ""), (message_input.value = "");
}

submit_button.addEventListener("click", sendMessage);

// <--- RESPONSIVE NAVBAR --->

let hamburger = document.querySelector(".hamburger");
let hamburger_menu = document.querySelector(".hamburger-icon");

hamburger_menu.addEventListener("click", () => {
    hamburger_menu[0].classList.add("is-not-active");
    hamburger_menu[1].classList.remove("is-active");
    console.log(hamburger_menu);

});