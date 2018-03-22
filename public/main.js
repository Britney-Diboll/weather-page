// let apiKey = "5b2ad56ba51c92f16b554f7715c4c010";
// let city = "portland";
// let weatherUrl = "http://api.openweathermap.org/data/2.5/forecast?id=apiKey";

// let apiKey = "5b2ad56ba51c92f16b554f7715c4c010";
// let weatherUrl = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=apiKey";
// let weatherUrl = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=5b2ad56ba51c92f16b554f7715c4c010";


const api = "https://api.openweathermap.org/data/2.5/weather?";
const apiKey = "&APPID=5b2ad56ba51c92f16b554f7715c4c010";
const units = "&units=imperial";

// let weatherUrl = api + input.value + apiKey + units;

const search = () => {
  input = document.querySelector("#input").value;
  let weatherUrl = "";
  if (isNaN(input)) {
    weatherUrl = api + "q=" + input + apiKey + units;
  } else {
    weatherUrl = api + "zip=" + input + apiKey + units;
  }
  fetch (weatherUrl).then((response) => {
    return response.json()
  }).then((result) => {
    console.log(result);
    let location = document.querySelector("#location");
    let temp = document.querySelector("#temperature");

    location.textContent = "The current temperature for " + result.name + " is: ";
    console.log(location);
    temp.textContent = result.main.temp + " Degrees Fahrenheit";
    console.log(temp);
  })
}
