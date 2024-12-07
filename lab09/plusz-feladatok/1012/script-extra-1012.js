const form = document.getElementById("hogwarts-form");

// 9. gyakorlat
function calculateYearsSince(dateString) {
  const date = new Date(dateString);
  const diff = Date.now() - date.getTime();
  return new Date(diff).getUTCFullYear() - 1970;
}

console.log("Életkor:" + calculateYearsSince("1961-07-04"));

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

const password = document.getElementById("password");
const passwordAgain = document.getElementById("passwordAgain");

function validatePassword() {
  if (password.value !== passwordAgain.value) {
    passwordAgain.setCustomValidity("A megadott jelszavak nem egyeznek!");
  } else {
    passwordAgain.setCustomValidity("");
  }
}
password.onchange = validatePassword;
passwordAgain.onkeyup = validatePassword;

// Plussz feladat (10-12)

document.querySelectorAll("input[type=radio]").forEach((radio) => {
  radio.addEventListener("change", (event) => {
    console.log("Changed radio");
    const color = event.target.dataset.colorPrimary;
    document.body.style.backgroundColor = color;
  });
});
