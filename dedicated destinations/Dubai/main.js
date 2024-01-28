// 'js/mian.js'

let slider_img = document.querySelector('.slider-img');
let images = ['Dubai1.jpg', 'Dubai2.webp', 'Dubai3.jpg', 'Dubai4.jpg', 'Dubai5.jpg', 'Dubai6.jpg', 'Dubai7.jpg', 'Dubai8.webp'];
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