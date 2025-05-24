(function () {
    emailjs.init("qpfkzVoCBGN1pT3yE");
})();

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const submitBtn = this.querySelector('button[type="submit"], input[type="submit"]');

    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.classList.add("disabled");
    }
    emailjs.sendForm("service_hx4yqcd", "template_q3677v5", this)
        .then(() => {
            alert("Your message has been sent successfully!");
            document.getElementById("contact-form").reset();

            submitBtn.disabled = false;
            submitBtn.classList.remove("disabled");
        })
        .catch((error) => {
            console.error("Error sending email:", error);
            alert("There was an error sending your message. Please try again later.");
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.classList.remove("disabled");
            }
        });


});
