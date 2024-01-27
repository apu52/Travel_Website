// 'js/mian.js'

let slider_img = document.querySelector('.slider-img');
let images = ['London1.jpg', 'London2.jpg', 'London3.jpg', 'London4.jpg', 'London5.jpg', 'London6.jpg', 'London7.jpg', 'London8.webp'];
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