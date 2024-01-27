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