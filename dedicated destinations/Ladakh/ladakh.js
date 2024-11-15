// 'js/mian.js'

// let slider_img = document.querySelector('.slider-img');
// let images = ['bali1.png', 'bali2.png', 'bali3.png', 'bali4.png'];
// let i = 0;

// function prev(){
// 	if(i <= 0) i = images.length;	
// 	i--;
// 	return setImg();			 
// }

// function next(){
// 	if(i >= images.length-1) i = -1;
// 	i++;
// 	return setImg();			 
// }

// function setImg(){
// 	return slider_img.setAttribute('src', "./gallery/"+images[i]);
	
// }

const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=bali&country=bali';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '86715c3ce3msh290fe3d7d871fd4p122649jsn2309c0ae43db',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

// Fetch weather information and update HTML
fetch(url, options)
    .then(res => res.json())
    .then(data => {
		console.log(data)
        const weatherInfoContainer = document.getElementById('weatherInfo');
        
        const humidity = data.humidity;
		const max_temp = data.max_temp;
		const min_temp = data.min_temp;

        const weatherInfoHTML = `
            <p>Maximum Temperature: ${max_temp}&deg;C</p>
            <p>Minium Temperature: ${min_temp}&deg;C</p>
            <p>Humidity: ${humidity}%</p>
        `;
        
        weatherInfoContainer.innerHTML = weatherInfoHTML;
    })
    .catch(error => console.error('Error fetching weather data:', error));

const apiKey = 'e4636933701791149c0636b03c135f71';
const cityName = 'Ladakh';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=35.1526&lon=77.5771&appid=e4636933701791149c0636b03c135f71&units=metric`;

// Function to fetch weather data
function fetchWeather() {
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Extract data from the API response
      const temperature = data.main.temp; // Temperature in Celsius
      const feelsLike = data.main.feels_like; // Feels-like temperature in Celsius
      const humidity = data.main.humidity; // Humidity in %
      const weatherDescription = data.weather[0].description; // Weather description
      const iconCode = data.weather[0].icon; // Icon code for weather condition
      const windSpeed = data.wind.speed; // Wind speed in m/s
      const windGust = data.wind.gust; // Wind gust in m/s
      const cloudiness = data.clouds.all; // Cloudiness in %
      const pressure = data.main.pressure; // Atmospheric pressure in hPa
      const seaLevelPressure = data.main.sea_level; // Sea level pressure
      const snowVolume = data.snow ? data.snow['1h'] : 0; // Snow volume in last 1 hour
      
      // Update HTML elements with the fetched data
      document.getElementById('city-name').textContent = cityName;
      document.getElementById('temperature').innerHTML = `<span class="heading">Temperature: </span> <span class = "value">${temperature}°C`;
      document.getElementById('feels-like').innerHTML = `<span class="heading">Feels Like: </span> <span class = "value">${feelsLike}°C`;
      document.getElementById('humidity').innerHTML = `<span class="heading">Humidity: </span> <span class = "value">${humidity}%`;
      document.getElementById('weather-description').textContent = weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);
      document.getElementById('wind-speed').innerHTML = `<span class="heading">Wind Speed: </span> <span class = "value">${windSpeed} m/s`;
      document.getElementById('wind-gust').innerHTML = `<span class="heading">Wind Gust: </span> <span class = "value">${windGust || 'N/A'} m/s`;
      document.getElementById('cloudiness').innerHTML = `<span class="heading">Cloudiness: </span> <span class = "value">${cloudiness}%`;
      document.getElementById('pressure').innerHTML = `<span class="heading">Pressure: </span> <span class = "value">${pressure} hPa`;
      document.getElementById('sea-level-pressure').innerHTML = `<span class="heading">Sea Level Pressure: </span> <span class = "value">${seaLevelPressure || 'N/A'} hPa`;
      document.getElementById('snow-volume').innerHTML = `<span class="heading">Snow Volume (1h): </span> <span class = "value">${snowVolume} mm`;

      // Set the weather icon (from OpenWeatherMap's icon set)
      const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
      document.getElementById('weather-icon').innerHTML = `<img src="${iconUrl}" alt="Weather Icon" class="weather-icon">`;
    })
    .catch(error => console.error('Error fetching weather data:', error));
}

// Call the function to load weather data when the page loads
window.onload = fetchWeather;