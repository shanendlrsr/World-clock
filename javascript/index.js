function currentCity() {
  let currentCityTimezone = moment.tz.guess();
  let currentCityName = moment.tz.zone(currentCityTimezone).name;
  let cityName = currentCityName.replace("_", " ").split("/")[1];

  let currentCityElement = document.querySelector("#currentCity");
  let currentCityHeadingElement = document.querySelector("#currentCityHeading");
  let currentCityDateElement = currentCityElement.querySelector(".date");
  let currentCityTimeElement = currentCityElement.querySelector(".time");

  currentCityHeadingElement.innerHTML = cityName;
  currentCityDateElement.innerHTML = moment()
    .tz(currentCityTimezone)
    .format("MMMM DD YYYY");
  currentCityTimeElement.innerHTML = `${moment()
    .tz(currentCityTimezone)
    .format("h:mm:ss")} <small>${moment()
    .tz(currentCityTimezone)
    .format("A")}</small>`;
}

currentCity();
setInterval(currentCity, 1000);

function updateCity(event) {
  clearInterval(timeInterval);
  let selectedCity = event.target.value;
  let selectedCityName = selectedCity.replace("_", " ").split("/")[1];
  let selectedHeadingElement = document.querySelector("#selectedCityHeading");
  let selectedCityElement = document.querySelector("#selectedCity");
  let selectedCityDateElement = selectedCityElement.querySelector(".date");
  let selectedCityTimeElement = selectedCityElement.querySelector(".time");

  timeInterval = setInterval(() => {
    let selectedCityTimeZone = moment().tz(selectedCity);
    selectedCityDateElement.innerHTML =
      selectedCityTimeZone.format("MMMM DD YYYY");
    selectedCityTimeElement.innerHTML = `${selectedCityTimeZone.format(
      "h:mm:ss"
    )} <small>${selectedCityTimeZone.format("A")}<small>`;
  }, 1000);

  selectedHeadingElement.innerHTML = selectedCityName;
}
let timeInterval = ' ';

let selectElement = document.querySelector("#selection");
selectElement.addEventListener("change", updateCity);
