document.addEventListener("DOMContentLoaded", function() {
    const blogPosts = [
        {
            title: "First Day on Kepler Track",
            date: "June 1, 2024",
            content: `
                Today I began my journey on the Kepler Track and it has been an incredible experience so far. The scenery is breathtaking.
                <br><br>
                The trail is well-maintained and offers stunning views of the surrounding mountains and lakes. I can't wait to see what tomorrow brings.
                <br><br>
                I started my hike at the Kepler Track car park and the weather was perfect. The first section of the track led me through lush beech forest. The sound of birds chirping and the fresh forest air made the hike even more enjoyable.
                <br><br>
                After a few hours, I reached the shores of Lake Te Anau. The crystal-clear waters of the lake and the reflections of the mountains were simply mesmerizing. I took a short break here to soak in the beauty of the place.
            `,
            imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/c4/ef/37/kepler-track-is-one-of.jpg?w=1200&h=1200&s=1"
        },
        {
            title: "Hiking to Luxmore Hut",
            date: "June 2, 2024",
            content: `
                Today's hike took me to the Luxmore Hut. The climb was challenging but the views from the top were absolutely worth it.
                <br><br>
                The hut is situated in an amazing location, offering panoramic views of the Fiordland mountains and lakes. I spent the evening watching the sunset from the deck.
                <br><br>
                The ascent to Luxmore Hut was steep and strenuous, but the changing landscapes kept me motivated. From dense forests, the trail gradually opened up to alpine tussock fields. The higher I climbed, the more spectacular the views became.
                <br><br>
                Upon reaching Luxmore Hut, I was greeted by friendly fellow hikers. We shared stories and experiences while enjoying the breathtaking scenery. The sunset from the hut was one of the most beautiful I have ever seen, painting the sky in shades of orange and pink.
            `,
            imageUrl: "https://inafarawayland.com/wp-content/uploads/2022/11/Kepler-Track-5-1024x683.jpg"
        },
        {
            title: "Exploring the Caves",
            date: "June 3, 2024",
            content: `
                Today I explored the caves near Luxmore Hut. It was an exciting adventure, and the formations inside the caves were fascinating.
                <br><br>
                The guide provided a lot of interesting information about the geology of the area. It was a great experience and a nice break from the hiking.
                <br><br>
                The caves near Luxmore Hut are a hidden gem. Equipped with a flashlight, I ventured into the dark and cool cave system. Stalactites and stalagmites adorned the cave walls, creating an otherworldly atmosphere.
                <br><br>
                The guided tour was informative and engaging. I learned about the geological history of the area and how these fascinating formations were created over thousands of years. It was a unique experience that added a new dimension to my hike.
            `,
            imageUrl: "https://venturenewzealand.co.nz/uploads/6576b6cd923eb_1702278861.jpg"
        }
    ];

    const postsContainer = document.getElementById("posts");

    blogPosts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");

        const postTitle = document.createElement("h3");
        postTitle.textContent = post.title;

        const postDate = document.createElement("p");
        postDate.classList.add("date");
        postDate.textContent = post.date;

        const postImage = document.createElement("img");
        postImage.src = post.imageUrl;
        postImage.alt = post.title;
        postImage.classList.add("post-image");

        const postContent = document.createElement("p");
        postContent.innerHTML = post.content;

        postElement.appendChild(postTitle);
        postElement.appendChild(postDate);
        postElement.appendChild(postImage);
        postElement.appendChild(postContent);

        postsContainer.appendChild(postElement);
    });
});
