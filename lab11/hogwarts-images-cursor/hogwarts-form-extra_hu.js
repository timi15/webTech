function calculateYearsSince(dateString) {
  const date = new Date(dateString);
  const diff = Date.now() - date.getTime();
  return new Date(diff).getUTCFullYear() - 1970;
}

console.log("Életkor:" + calculateYearsSince("1961-07-04"));

const form = document.getElementById("hogwarts-form");

form.dob.addEventListener("input", function (event) {
  console.log("Megadott születési dátum:" + form.dob.value);
  const ageInYears = calculateYearsSince(form.dob.value);
  console.log("Életkor:" + ageInYears);
  if (ageInYears >= 11) {
    form.dob.setCustomValidity("");
  } else {
    form.dob.setCustomValidity(
      "Túl fiatal vagy még Roxforthoz, az alsó korhatár 11 év"
    );
  }
});

form.house.addEventListener("change", function (event) {
  const houseColor =
    form.house.options[form.house.selectedIndex].dataset.colorPrimary;
  console.log(
    `A ${form.house.value} ház került kiválasztásra, melynek színe ${houseColor}`
  );
  document.body.style.backgroundColor = houseColor;
});

// Extra +3/2/1 százalékért (10-12)
const password = document.getElementById("password");
const passwordAgain = document.getElementById("passwordAgain");

function validatePassword() {
  if (password.value != passwordAgain.value) {
    passwordAgain.setCustomValidity("A megadott jelszavak nem egyeznek!");
  } else {
    passwordAgain.setCustomValidity("");
  }
}
password.onchange = validatePassword;
passwordAgain.onkeyup = validatePassword;

// Extra +3/2/1 százalékért (16-18)
const randomHouseCheck = document.getElementById("randomHouse");
const houses = ["gryffindor", "hufflepuff", "ravenclaw", "slytherin"];
randomHouseCheck.addEventListener("change", () => {
  if (randomHouseCheck.checked) {
    const randomIndex = Math.floor(Math.random() * houses.length);
    const newHouse = houses[randomIndex];
    form.house.value = newHouse;
    form.house.dispatchEvent(new Event("change"));
    form.house.disabled = true;
  } else {
    form.house.disabled = false;
  }
});
