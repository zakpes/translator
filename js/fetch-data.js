const contactForm = document.getElementById("main-contact-form")
const formStatusContainer = document.getElementById("form-status-container");
const formStatus = document.getElementById("formStatus");
const submitBtn = document.getElementById("formSubmitBtn");
const url = "contact-email-test.php";

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    submitBtn.innerHTML = "<i class='fa fa-spinner fa-spin'></i> Sending...";

    fetch(url, {
        method: "POST",
        body: new FormData(contactForm)
    })
    .then(response => {
        
        if (response.ok) {
            return response.text();
        }

        throw new Error("Request failed!");
    }, networkError => console.log(networkError.message)
    )
    .then(result => {

        submitBtn.innerHTML = "Message Sent!";
        submitBtn.classList.add("disabled");

        console.log("Success:", result);
        
    })
    .catch((error) => {
        console.error("Error:", error)
    });
});

