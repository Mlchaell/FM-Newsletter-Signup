const cardContainer = document.getElementsByClassName("card");
const confoContainer = document.getElementsByClassName("confo");

const emailPlaceholder = document.getElementById("confo-email-field");

document.getElementsByClassName("email-form")[0].addEventListener("submit", e => {
  e.preventDefault()

  const enteredEmail = document.getElementById("email");

  if (enteredEmail.checkValidity() && enteredEmail.value.length > 0) {
    // If email valid & form is not empty
    cardContainer[0].classList.toggle("hidden");
    confoContainer[0].classList.toggle("hidden");
    emailPlaceholder.innerText = enteredEmail.value;

  }
})

document.getElementsByClassName("dismiss-btn")[0].addEventListener("click", e => {
  cardContainer[0].classList.toggle("hidden");
  confoContainer[0].classList.toggle("hidden");
})