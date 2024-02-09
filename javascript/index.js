function defaultCities() {
  //Melbourne
  let melbourneCityTimezone = moment().tz("Australia/Melbourne");
  let melbourneCityElement = document.querySelector("#melbourne");
  let melbourneCityDateElement = melbourneCityElement.querySelector(".date");
  let melbourneCityTimeElement = melbourneCityElement.querySelector(".time");

  melbourneCityDateElement.innerHTML =
    melbourneCityTimezone.format("MMMM DD YYYY");
  melbourneCityTimeElement.innerHTML = `${melbourneCityTimezone.format(
    "h:mm:ss"
  )} <small>${melbourneCityTimezone.format("A")}</small>`;

  //Manila
  let manilaCityTimezone = moment().tz("Asia/Manila");
  let manilaCityElement = document.querySelector("#manila");
  let manilaCityDateElement = manilaCityElement.querySelector(".date");
  let manilaCityTimeElement = manilaCityElement.querySelector(".time");

  manilaCityDateElement.innerHTML = manilaCityTimezone.format("MMMM DD YYYY");
  manilaCityTimeElement.innerHTML = `${manilaCityTimezone.format(
    "h:mm:ss"
  )} <small>${manilaCityTimezone.format("A")}</small>`;

  //New York
  let newyorkCityTimezone = moment().tz("America/New_York");
  let newyorkCityElement = document.querySelector("#newyork");
  let newyorkCityDateElement = newyorkCityElement.querySelector(".date");
  let newyorkCityTimeElement = newyorkCityElement.querySelector(".time");

  newyorkCityDateElement.innerHTML = newyorkCityTimezone.format("MMMM DD YYYY");
  newyorkCityTimeElement.innerHTML = `${newyorkCityTimezone.format(
    "h:mm:ss"
  )} <small>${newyorkCityTimezone.format("A")}</small>`;
}

defaultCities();
setInterval(defaultCities, 1000);

function updateCity(event) {
  clearInterval(timeInterval);
  let selectedCity = event.target.value;
  if (selectedCity === "current") {
    selectedCity = moment.tz.guess();
  }
  let selectedCityName = selectedCity.replace("_", " ").split("/")[1];
  let citiesElement = document.querySelector(".cities");
  let homepageElement = document.querySelector(".homepage");

  timeInterval = setInterval(() => {
    let selectedCityTimeZone = moment().tz(selectedCity);
    citiesElement.innerHTML = `<div class="city">
            <div>
              <h2>${selectedCityName}</h2>
              <div class="date">${selectedCityTimeZone.format(
                "MMMM DD YYYY"
              )}</div>
            </div>
            <div class="time">${selectedCityTimeZone.format(
              "h:mm:ss"
            )} <small>${selectedCityTimeZone.format("A")}</small></div>
  </div>`;
  }, 1000);

  homepageElement.innerHTML = `<a href="/"> << Back to Current Location</a>`;
}

let timeInterval = "";

let selectElement = document.querySelector("#selection");
selectElement.addEventListener("change", updateCity);
