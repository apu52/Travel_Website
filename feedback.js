const stars = document.querySelectorAll(".stars i");


// Loop through the "stars" NodeList
stars.forEach((star, index1) => {
    //Add the event listener that runs the function when you "click" the event
    star.addEventListener("click",  () => {
        
        // Loop through the "stars" NodeList Repeated
        stars.forEach((star, index2) => {
            // Add the "active" class to the clicked star and any stars with a lower index
            // and remove the "active" class from any stars with a higher index
            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active")
        });
    });
});

