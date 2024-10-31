const images = [
    // changes
    "./gallery/NewYork1.jpg",
    "./gallery/NewYork2.jpg",
    "./gallery/NewYork3.jpg",
    "./gallery/NewYork4.jpg",
    "./gallery/NewYork5.jpg",
    "./gallery/NewYork6.jpg",
    "./gallery/NewYork7.jpg",
    ];
  
  let currentIndex = 0;
  const sliderImage = document.getElementById("slider-image");
  const thumbnailsContainer = document.getElementById("thumbnails-container");
  const descriptionText = document.getElementById("description-text");
  const ptext = document.getElementById("p-text");
  
  let dtext = descriptionText.innerText;
  // console.log(dtext);
  let text = dtext.slice(0, 100);
  console.log(text);
  ptext.innerText = text + "...";
  
  // Generate Thumbnails Dynamically
  images.forEach((src, index) => {
    const thumbnail = document.createElement("img");
    thumbnail.src = src;
    thumbnail.onclick = () => selectSlide(index);
    thumbnailsContainer.appendChild(thumbnail);
  });
  
  function updateImage() {
    // sliderImage.style.opacity = 0;
    sliderImage.classList.remove("show");
    sliderImage.style.opacity = 0;
    setTimeout(() => {
      sliderImage.src = images[currentIndex];
      sliderImage.style.opacity = 1;
      sliderImage.classList.add("show");
    }, 500);
  
    // Update Active Thumbnail
    const thumbnails = thumbnailsContainer.querySelectorAll("img");
    thumbnails.forEach((thumbnail, index) => {
      thumbnail.classList.toggle("active", index === currentIndex);
    });
  }
  
  function moveSlide(step) {
    currentIndex = (currentIndex + step + images.length) % images.length;
    updateImage();
  }
  
  function selectSlide(index) {
    currentIndex = index;
    updateImage();
  }
  
  // Auto-Slide Every 5 Seconds
  setInterval(() => {
    moveSlide(1);
  }, 5000);
  
  // Initialize the First Image
  updateImage();
  
  
  // change
  const url =
  "https://api.shecodes.io/weather/v1/forecast?query=New-York&key=057314561f8344abb8d5d80t6761o6ae&units=metric";
axios.get(url).then(weather);
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
      */
  
      