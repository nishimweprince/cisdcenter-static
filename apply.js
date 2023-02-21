// <---- FORM VARIABLES ---->

// INTERN AND VOLUNTEER APPLICATION FORM
let apply_name = document.getElementById("apply-name");
let apply_email = document.getElementById("apply-email");
let apply_phone = document.getElementById("apply-phone");
let apply_school = document.getElementById("apply-school");
let apply_year = document.getElementById("apply-year");
let apply_position = document.getElementById("apply-position");
let apply_cv = document.getElementById("apply-cv");
let apply_letter = document.getElementById("apply-letter");
let apply_awareness = document.getElementById("apply-awareness");
let apply_submit = document.getElementById("apply-submit");

let intern_school = document.getElementById("intern-school");
let intern_year = document.getElementById("intern-year");

// FORMS
let form_apply = document.querySelector(".form-apply");
let form_partner = document.querySelector(".form-partner");

// OPTIONS
let apply_options = document.querySelectorAll(".apply-option");

// <---- FUNCTIONS ---->

let displayForm = (arr) => {

    Array.from(arr).forEach((element, index, arr) => {


        element.addEventListener("click", (e) => {
            e.preventDefault();

            let value = element.textContent.trim();
            
            if (index == 2) {
                form_apply.style.display = "none";
                form_partner.style.display = "flex";
                element.classList.add("apply-active");
                arr[index-1].classList.remove("apply-active");
                arr[index-2].classList.remove("apply-active");
            }

            else if (index == 1) {
                form_apply.style.display = "flex";
                form_partner.style.display = "none";
                intern_school.style.display = "none";
                intern_year.style.display = "none";
                element.classList.add("apply-active");
                arr[index-1].classList.remove("apply-active");
                arr[index+1].classList.remove("apply-active");
            }

            else {
                form_apply.style.display = "flex";
                form_partner.style.display = "none";

                intern_school.style.display = "block";
                intern_year.style.display = "block";

                element.classList.add("apply-active");
                arr[1].classList.remove("apply-active");
                arr[2].classList.remove("apply-active");
            }

            console.log(value, index);

        });

    });

}

displayForm(apply_options);