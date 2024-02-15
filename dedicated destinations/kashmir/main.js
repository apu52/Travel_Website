// 'js/mian.js'

let slider_img = document.querySelector('.slider-img');
let images = ['kashmir1.png', 'kashmir2.png', 'kashmir3.png', 'kashmir14.png'];
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