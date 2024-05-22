// 'js/mian.js'

let slider_img = document.querySelector('.slider-img');
let images = ['Machu Picchu ,Peru.1.jpg', 'Machu Picchu ,Peru.2.jpg', 'Machu Picchu ,Peru.3.jpg', 'Machu Picchu ,Peru.4.jpg', 'Machu Picchu ,Peru.5.jpg', 'Machu Picchu ,Peru.6.jpg', 'Machu Picchu ,Peru.7.jpg', 'Machu Picchu ,Peru.8.jpg'];
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
	return slider_img.setAttribute('src', "./gallery_Machu/"+images[i]);
	
}

const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=peru&country=peru';
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
        <h3>Current Climate:</h3>
            <p>Maximum Temperature: ${max_temp}&deg;C</p>
            <p>Minium Temperature: ${min_temp}&deg;C</p>
            <p>Humidity: ${humidity}%</p>
        `;
        
        weatherInfoContainer.innerHTML = weatherInfoHTML;
    })
    .catch(error => console.error('Error fetching weather data:', error));
    