const textInput = document.querySelector("#validation-input");
const quantitySymbols = document.querySelector('[data-length="6"]');

textInput.addEventListener("blur", () => {

    textInput.classList.remove('valid');
    textInput.classList.remove('invalid');

  textInput.textContent = textInput.value.length >= quantitySymbols.dataset.length ?
        textInput.classList.add('valid') : textInput.classList.add('invalid');
});