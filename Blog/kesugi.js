document.addEventListener("DOMContentLoaded", function() {
    const blogPosts = [
        {
            title: "First Day at Kesugi Ridge",
            date: "June 1, 2024",
            content: `
                Today I arrived at Kesugi Ridge and the view is absolutely stunning. The serene environment is just what I needed to unwind.
                <br><br>
                The drive here was long but worth every moment. As I crossed the bridge, I could feel the tranquility of the place enveloping me. The air is fresh, and the sound of the river below is incredibly soothing.
                <br><br>
                After settling in, I took a walk along the trails. The lush greenery and the vibrant flora made it a feast for the senses. I can't wait to explore more in the coming days.
            `,
            imageUrl: "https://www.pariaoutdoorproducts.com/cdn/shop/articles/Kesugi_Ridge_Trail.jpg?v=1483048098"
        },
        {
            title: "Hiking Adventures",
            date: "June 2, 2024",
            content: `
                Went on a hiking trail today and the experience was exhilarating. The lush greenery and the sound of the river made it unforgettable.
                <br><br>
                The trail was well-marked and offered a variety of landscapes. From dense forests to open meadows, each section had its own unique charm. I even spotted some wildlife along the way, including a curious deer.
                <br><br>
                The highlight of the hike was reaching the viewpoint. From there, I had a panoramic view of the surrounding area. The mountains in the distance looked majestic, and I spent a good hour just taking in the scenery.
            `,
            imageUrl: "https://live.staticflickr.com/6077/6124901205_712a4c7bf4_b.jpg"
        },
        {
            title: "Sunset at Kesugi Ridge",
            date: "June 3, 2024",
            content: `
                Witnessed the most beautiful sunset at Kesugi Ridge today. The sky turned into a canvas of vibrant colors.
                <br><br>
                As the sun dipped below the horizon, the sky transformed into shades of orange, pink, and purple. The reflection on the river added to the beauty, creating a picture-perfect moment.
                <br><br>
                I sat by the Ridge, capturing the moment with my camera. It's moments like these that make traveling so rewarding. The peace and beauty of this place are unparalleled.
            `,
            imageUrl: "https://uploads.alaska.org/suppliers/_1600xAUTO_crop_center-center_65_none/Kesugi4-nuuc4g.jpg"
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
