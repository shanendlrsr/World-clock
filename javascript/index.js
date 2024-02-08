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
  let selectedCityElement = document.querySelector(".cities");

  timeInterval = setInterval(() => {
    let selectedCityTimeZone = moment().tz(selectedCity);
    selectedCityElement.innerHTML = `
        <div class="city">
          <div>
            <h2>${selectedCityName}</h2>
            <div class="date">${selectedCityTimeZone.format(
              "MMMM DD YYYY"
            )}</div>
          </div>
          <div class="time">${selectedCityTimeZone.format(
            "h:mm:ss"
          )} <small>${selectedCityTimeZone.format("A")}<small></div>
        </div>
      </div>`;
  }, 1000);
}
let timeInterval = " ";

let selectElement = document.querySelector("#selection");
selectElement.addEventListener("change", updateCity);
