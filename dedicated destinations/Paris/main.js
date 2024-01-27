// 'js/mian.js'London

let slider_img = document.querySelector('.slider-img');
let images = ['Paris1.jpg', 'Paris2.jpg', 'Paris3.jpg', 'Paris4.jpg', 'Paris5.jpg', 'Paris6.jpg', 'Paris7.jpg', 'Paris8.jpg'];
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