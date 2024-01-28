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