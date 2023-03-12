console.log("jehh");

async function showWeather() {
  // let latitude = 15.33;
  // let longitude = 74.85;
  let city = "goa";
  let key = "1fa5471a6cac4f2635d1df0f8a714025";

  const response = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
  );

  const data = await response.json();
  console.log("weather", data);
  let num = document.createElement("p");
  num.textContent = `${data?.main?.temp.toFixed(2)} *C`;
  document.body.appendChild(num);
}

// api call for locaation
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("NO geolocation Sytem");
  }
}
function showPosition(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  console.log(lat);
  console.log(long);
}
