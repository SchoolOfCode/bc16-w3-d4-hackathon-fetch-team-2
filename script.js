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

  let currentTime = Date().split(" ")[4].split(":")[0]

  let currentTemperature = weatherData.hourly.temperature_2m[currentTime]
  
  const weather = document.getElementById("weather");
  weather.textContent = `The temperature is currently ${currentTemperature} °C`;
  weather.style = "color: white";

 }


    // precipitation
    
   // hourly weatehr history
   // future hourly weather


    /*const name = document.createElement("p");
    name.textContent = `Name: ${person.name}`

    const age  = document.createElement("p");
    age.textContent = `Age: ${person.age}`;

    const image = document.createElement("img");
    image.src = person.picture;
    profile.appendChild(name);
    profile.appendChild(age);
    profile.appendChild(image);

    people.appendChild(profile);
  */

    




document.addEventListener("DOMContentLoaded", fetchData);

/*
console.log = function() {
  originalLog.apply(console, arguments);
  jokeHistory.innerHTML += `${data.joke}<br>`;
};

const jokeHistory = document.getElementById("joke-history");

const originalLog = console.log;
*/