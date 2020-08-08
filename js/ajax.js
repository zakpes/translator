const contactForm = document.getElementById("main-contact-form")
const formStatusContainer = document.getElementById("form-status-container");
// const formStatus = $('<div class="form_status"></div>');
const formStatus = document.getElementById("formStatus");
const submitBtn = document.getElementById("formSubmitBtn");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.querySelector("#contactName").value;
    let email = document.querySelector("#contactEmail").value;
    let message = document.querySelector("#contactMessage").value;


    let jsonData = JSON.stringify({"name": name, "email": email, "message": message});


    submitBtn.innerHTML = "<i class='fa fa-spinner fa-spin'></i> Sending...";

    const xhr = new XMLHttpRequest();

    const url = "contact-email-test.php";

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function() {

        if (xhr.status == 200) {

            // formStatusContainer.innerHTML = "<p class='text-success'>Your message was sent!</p>";

            submitBtn.innerHTML = "Message Sent!";
            submitBtn.classList.add("disabled");

        }
    };

    xhr.onerror = function() {

        console.log("Request error...");
        formStatus.html("<p class='text-danger'>There was a problem with your request.</p>");
    };

    xhr.send(jsonData);

})