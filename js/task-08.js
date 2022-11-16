const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    const formData = {
        email,
        password,
    }

    console.log(formData);

    if (email === "" || password === "") {
        alert("Будь ласка, заповніть всі поля!");
    }

    event.currentTarget.reset();
}

