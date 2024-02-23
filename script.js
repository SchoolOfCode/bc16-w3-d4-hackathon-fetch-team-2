const url = "https://icanhazdadjoke.com"

async function fetchJoke() {

const response = await fetch(url, {
  headers: {
    Accept: "application/json", 
  },
});

if (!response.ok) {
   console.error(response.status);
   console.error(response.text());
   return;
}
const data = await response.json();

console.log(data.joke);
const jokeElement = document.getElementById("joke");
jokeElement.textContent = data.joke;

const jokeHistory = document.getElementById("joke-history");

const originalLog = console.log;
console.log = function() {
  originalLog.apply(console, arguments);
  jokeHistory.innerHTML += `${data.joke}<br>`;
};
}