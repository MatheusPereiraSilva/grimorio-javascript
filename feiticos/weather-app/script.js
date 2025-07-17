const apiKey = "827ccc3c36a986fe9459cea2f9696366";
const weatherData = document.querySelector("#weather-data");
const cityInputEL = document.querySelector("#city-input");
const formEl = document.querySelector('form');

async function getWeatherData(cityValue){
  try{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`);
    if(!response.ok){
      throw new Error("Network response was not ok!")
    }
    const data = await response.json();
    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;
    const details = [
      `Feels like: ${Math.round(data.main.feels_like)}`,
      `Humidity: ${Math.round(data.main.humidity)}%`,
      `Wind speed: ${Math.round(data.wind.speed)} m/s`,
    ];
    weatherData.querySelector('.icon').innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather icon">`;
    weatherData.querySelector('.temperature').textContent = `${temperature}°C`;
    weatherData.querySelector('.description').textContent = description;
    weatherData.querySelector('.details').innerHTML = details.map((detail)=>`<div>${detail}</div>`).join("");
  } catch (error) {
    weatherData.querySelector('.icon').innerHTML = '';
    weatherData.querySelector('.temperature').textContent = '';
    weatherData.querySelector('.description').textContent = 'An error happened, please try again later!';
    weatherData.querySelector('.details').innerHTML = '';
  }
}

formEl.addEventListener('submit', (event)=>{
  event.preventDefault();
  const cityValue = cityInputEL.value;
  getWeatherData(cityValue)
})