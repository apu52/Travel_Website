document.addEventListener("DOMContentLoaded", function() {
    const blogPosts = [
        {
            title: "First Impressions of Varanasi",
            date: "January 1, 2024",
            content: `
                Today I arrived in Varanasi, one of the oldest cities in the world. The bustling streets, vibrant colors, and rich culture immediately captivated me.
                <br><br>
                As I navigated through the narrow lanes, known as 'galis', the sights, sounds, and smells overwhelmed my senses. The constant hum of activity, from vendors selling colorful textiles to the aroma of street food, created an unforgettable atmosphere.
                <br><br>
                My first stop was the ghats along the Ganges River. The sacred riverbank was bustling with devotees performing rituals, sadhus meditating under ancient trees, and boats gently gliding on the water. The spiritual energy of Varanasi is palpable, and I can't wait to explore more of this mystical city.
            `,
            imageUrl: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6f/12/a3.jpg"
        },
        {
            title: "Exploring the Ghats",
            date: "January 2, 2024",
            content: `
                Today was dedicated to exploring the famous ghats of Varanasi. Each ghat has its own unique character and significance, reflecting different aspects of life and spirituality.
                <br><br>
                I started at Dashashwamedh Ghat, where the Ganga Aarti ceremony at sunset was a mesmerizing spectacle of lights, music, and devotion. The rhythmic chants and the synchronized movements of the priests left a lasting impression.
                <br><br>
                Walking along the ghats, I encountered countless temples, each with its own stories and legends. The intricate architecture and colorful decorations added to the spiritual ambiance of Varanasi.
                <br><br>
                Varanasi's ghats are not just places of worship but also centers of social and cultural activities. From morning yoga sessions to evening boat rides, each experience offered a deeper insight into the city's soul.
            `,
            imageUrl: "https://images.adsttc.com/media/images/6486/f324/7870/7215/2fd6/dbf5/large_jpg/varanasis-ghats-the-adaptable-riverscapes-of-india_1.jpg?1686565718"
        },
        {
            title: "Savoring Varanasi Cuisine",
            date: "January 3, 2024",
            content: `
                Today was all about indulging in Varanasi's rich culinary delights. From street food to traditional thalis, every bite offered a taste of the city's diverse flavors.
                <br><br>
                I started my day with a steaming cup of chai and crispy kachoris at a local tea stall. The flavors of spices and herbs danced on my palate, setting the tone for a day filled with gastronomic adventures.
                <br><br>
                For lunch, I sampled the famous Benarasi chaat, a delightful mix of tangy, spicy, and sweet flavors. The bustling alleys of Godowlia Market offered endless options, each dish bursting with local ingredients and age-old recipes.
                <br><br>
                In the evening, I dined at a rooftop restaurant overlooking the Ganges. The serene view paired perfectly with traditional dishes like baati chokha and malaiyyo, creating a memorable culinary experience.
            `,
            imageUrl: "https://img.traveltriangle.com/blog/wp-content/uploads/2019/12/cover-for-Restaurants-In-Varanasi_11th-dec.jpg"
        },
        {
            title: "Morning Boat Ride on the Ganges",
            date: "January 4, 2024",
            content: `
                Today started with a serene boat ride on the Ganges River at sunrise. The calm waters mirrored the soft hues of the sky, creating a surreal atmosphere.
                <br><br>
                As the boat glided along the river, I witnessed life unfolding on the ghats. From morning rituals to locals bathing in the holy waters, every moment was a glimpse into the daily rhythm of Varanasi.
                <br><br>
                The boat ride offered panoramic views of the city's skyline dotted with temples and palaces. The gentle breeze and the soft chants of prayers added to the tranquility of the experience.
                <br><br>
                Varanasi revealed itself in the golden light of dawn, a city steeped in spirituality and tradition. The boat ride was a poignant reminder of the sacred bond between the people and the river that sustains them.
            `,
            imageUrl: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/72/68/de.jpg"
        },
        {
            title: "Visiting Sarnath",
            date: "January 5, 2024",
            content: `
                Today I visited Sarnath, a sacred Buddhist site just outside Varanasi. The peaceful surroundings and ancient stupas offered a serene contrast to the bustling city.
                <br><br>
                Sarnath is where Lord Buddha delivered his first sermon after attaining enlightenment. The Dhamek Stupa, dating back to the 5th century, stood as a testament to the region's rich spiritual heritage.
                <br><br>
                Walking through the ruins and monasteries, I felt a profound sense of peace and introspection. The beautifully preserved artifacts and sculptures narrated stories of a bygone era.
                <br><br>
                Sarnath provided a tranquil retreat from the hustle and bustle of Varanasi. The expansive grounds and lush gardens were a perfect place for quiet contemplation and meditation.
            `,
            imageUrl: "https://static.toiimg.com/thumb/width-600,height-400,msid-68814312.cms"
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
