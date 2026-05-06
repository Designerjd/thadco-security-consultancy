document.addEventListener("DOMContentLoaded", function () {

    // Welcome Message
    alert("Welcome to THADCO Security Consultancy");

    // Contact Form Validation
    const form = document.querySelector("form");

    if(form){

        form.addEventListener("submit", function(event){

            const name = document.querySelector("input[type='text']").value;
            const email = document.querySelector("input[type='email']").value;
            const message = document.querySelector("textarea").value;

            if(name === "" || email === "" || message === ""){

                alert("Please fill in all fields.");
                event.preventDefault();

            } else {

                alert("Message submitted successfully!");

            }

        });

    }

});