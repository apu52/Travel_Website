// 'js/mian.js'

let slider_img = document.querySelector('.slider-img');
let images = ['Santorini ,Aegean Sea.1.jpg', 'Santorini ,Aegean Sea.2.jpg', 'Santorini ,Aegean Sea.3.jpg', 'Santorini ,Aegean Sea.4.jpg', 'Santorini ,Aegean Sea.5.jpg', 'Santorini ,Aegean Sea.6.jpg', 'Santorini ,Aegean Sea.7.jpg', 'Santorini ,Aegean Sea.8.jpg'];
let i = 0;

function prev() {
    if (i <= 0) i = images.length;
    i--;
    return setImg();
}

function next() {
    if (i >= images.length - 1) i = -1;
    i++;
    return setImg();
}

function setImg() {
    return slider_img.setAttribute('src', "./gallery/" + images[i]);

}
const url =
  "https://api.shecodes.io/weather/v1/forecast?query=Santorini&key=057314561f8344abb8d5d80t6761o6ae&units=metric";
axios.get(url).then(weather);
function weather(response) {
  let max_temp = document.querySelector(".max");
  maximum = Math.round(response.data.daily[0].temperature.maximum);
  max_temp.innerHTML = maximum;
  let min_temp = document.querySelector(".min");
  minimum = Math.round(response.data.daily[0].temperature.minimum);
  min_temp.innerHTML = minimum;
  let hum = document.querySelector(".humidity");
  humidity = Math.round(response.data.daily[0].temperature.humidity);
  hum.innerHTML = humidity;
}
/*
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Santorini';
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
        <h4>Climate Info:</h4>
            <p>Maximum Temperature: ${max_temp}&deg;C</p>
            <p>Minium Temperature: ${min_temp}&deg;C</p>
            <p>Humidity: ${humidity}%</p>
        `;

        weatherInfoContainer.innerHTML = weatherInfoHTML;
    })
    .catch(error => console.error('Error fetching weather data:', error));*/