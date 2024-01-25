// 'js/mian.js'

let slider_img = document.querySelector('.slider-img');
let images = ['Santorini ,Aegean Sea.1.jpg', 'Santorini ,Aegean Sea.2.jpg', 'Santorini ,Aegean Sea.3.jpg', 'Santorini ,Aegean Sea.4.jpg', 'Santorini ,Aegean Sea.5.jpg', 'Santorini ,Aegean Sea.6.jpg', 'Santorini ,Aegean Sea.7.jpg', 'Santorini ,Aegean Sea.8.jpg'];
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