// Selector
const checkOut = document.querySelector("button");

// Event listener
checkOut.addEventListener("click", order);

// Function
function order() {
    const quantity = prompt("How many cups would you like?");
    const firstName = prompt(" What is your first name?");
    const emailAddress = prompt("What is your email?");

    alert("Thanks ! We'll be in touch soon.");
}
