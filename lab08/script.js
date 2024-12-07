const form = document.getElementById("hogwarts-form");

form.house.addEventListener("change", (event) => {
    const houseColor = 
        form.house.options[form.house.selectedIndex].dataset.colorPrimary;
    console.log(`The color is: ${houseColor}`);
    document.body.style.backgroundColor = houseColor;
})