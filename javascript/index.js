function updateCity(event) {
  let selectedCity = event.target.value;
  let selectedCityName = selectedCity.replace("_", " ").split("/")[1];
  let selectedHeadingElement = document.querySelector("#selectedCityHeading");
  let selectedCityElement = document.querySelector("#selectedCity");
  let selectedCityDateElement = selectedCityElement.querySelector(".date");
  let selectedCityTimeElement = selectedCityElement.querySelector(".time");

  setInterval(() => {
    let selectedCityTimeZone = moment().tz(selectedCity);
    selectedCityDateElement.innerHTML =
      selectedCityTimeZone.format("MMMM DD YYYY");
    selectedCityTimeElement.innerHTML = `${selectedCityTimeZone.format(
      "h:mm:ss"
    )} <small>${selectedCityTimeZone.format("A")}<small>`;
  }, 1000);

  selectedHeadingElement.innerHTML = selectedCityName;
}

let selectElement = document.querySelector("#selection");
selectElement.addEventListener("change", updateCity);
