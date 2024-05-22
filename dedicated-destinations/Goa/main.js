// 'js/mian.js'

let slider_img = document.querySelector('.slider-img');
let images = ['Goa1.jpg', 'Goa2.jpg', 'Goa3.jpg', 'Goa4.jpg', 'Goa5.jpg', 'Goa6.jpg', 'Goa7.jpg', 'Goa8.jpg'];
let i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "./gallery/"+images[i]);
	
}

const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=goa';
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
    .catch(error => console.error('Error fetching weather data:', error));