function buy() {
  let name = prompt("what is your name?");
  let email = prompt("what is your email address?");
  let cellphoneNumber = prompt("what is your cellphone number");
  let distance = prompt(
    "What is the distance in kilometers from your place to Savanna hills?"
  );
  if (distance <= 5) {
    alert(
      "Thank you " +
        name +
        "! Your parcel qualify's for free delivery. We will be in touch via email"
    );
  } else {
    alert("Thank you " + name + "! Your delivery fee will be R100");
  }
}

let buyButton = document.querySelector(".buy-button");
buyButton.addEventListener("click", buy);
