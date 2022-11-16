const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    const formData = {
        email: formElements.email.value,
        password: formElements.password.value,
    }

    console.log(formData);

    if (formData.email === "" || formData.password === "") {
        alert("Будь ласка, заповніть всі поля!");
    }

    event.currentTarget.reset();
}

