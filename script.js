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

}




/*
const jokeElement = document.getElementById("joke");
jokeElement.textContent = data.joke;

const jokeHistory = document.getElementById("joke-history");

const originalLog = console.log;
console.log = function() {
  originalLog.apply(console, arguments);
  jokeHistory.innerHTML += `${data.joke}<br>`;
};
*/