//Endpoint for the API which gets hourly temp & precipitation for London
const url = "https://api.open-meteo.com/v1/forecast?latitude=51.5085&longitude=-0.1257&hourly=temperature_2m,precipitation_probability,precipitation"

// Define fetch function
async function fetchData() {

  //Declare variable which awaits fetch resolution
  const response = await fetch(url);

  //Log error to console if response from server not ok
  if (!response.ok) {
    console.error(response.status);
    console.error(response.text());
    return;
  }

  //Covert json to object and cache as variable
  const data = await response.json();

  //Log object to console
  console.log(data);

// returns the data to be used elsewhere 
return data
}

// a sepereate async function to convert the weather data object into readable text on the webpage
async function displayWeather ()
{
  const weatherData = await fetchData()

  // get current hour from Date object and cache as variable
  let currentTime = Date().split(" ")[4].split(":")[0]

  // use current time to access current temp from API data
  let currentTemperature = weatherData.hourly.temperature_2m[currentTime];
  let precipitationProbability = weatherData.hourly.precipitation_probability[currentTime];
  let precipitation = weatherData.hourly.precipitation[currentTime];
  
  // add text reporting current temp to DOM
  const weather = document.getElementById("weather");
  weather.innerHTML = `
  <p>The temperature is currently ${currentTemperature} °C</p>
  <p>The chance of precipitation is currently ${precipitationProbability} %</p>
  <p>There is currently ${precipitation} mm of precipitation </p>
  `;
  weather.style = "color: white";

 }

 displayWeather();

document.addEventListener("DOMContentLoaded", fetchData);

// accept user's geo-location and convert that into co-ords
// alert("weather-innit would like to know your location") or prompt to text match name of location and get an api to match longitude and altitude of the cit adn get weatehr
// Dynamically change H1 to be the name of the geo-location: 
// const geoLocationName = document.querySelector("h1") >>>>> geoLocationName.textContent(`${geoLocation}`)
