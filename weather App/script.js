const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0dcdfd31ffmsheaa9b63a3e5cae2p109690jsn5d464d29c7d3",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};


const getWeather = (city) => {
  cityName.innerHTML = city
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city, options,
    options
    )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;
      // wind_degree.innerHTML = response.wind_degree;
      // wind_speed.innerHTML = response.wind_speed;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
  }

  submit.addEventListener("click", (e)=> {
    e.preventDefault();
    getWeather(city.value)
  });

  getWeather("Delhi");