document.addEventListener("DOMContentLoaded", function() {
    const blogPosts = [
        {
            title: "Exploring Chennai",
            date: "April 1, 2024",
            content: `
                Today I arrived in Chennai, the capital city of Tamil Nadu, known for its rich cultural heritage and vibrant arts scene. The city's bustling streets, historic temples, and serene beaches make it a captivating destination.
                <br><br>
                As I wandered through the city, the iconic Marina Beach stretched along the coast, offering a perfect spot to enjoy the sunrise. The Kapaleeshwarar Temple, with its stunning Dravidian architecture, was a highlight of my visit.
                <br><br>
                I indulged in traditional South Indian cuisine, savoring dishes like dosas, idlis, and filter coffee. The warmth of the locals and the vibrant atmosphere of the city made me feel at home. I can't wait to explore more of Tamil Nadu's cultural treasures.
            `,
            imageUrl: "https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/marina_beach_20210617083007_882.jpg"
        },
        {
            title: "Discovering Mahabalipuram",
            date: "April 2, 2024",
            content: `
                Today was spent exploring the ancient town of Mahabalipuram, a UNESCO World Heritage Site known for its rock-cut temples and intricate sculptures. The Shore Temple, standing majestically by the sea, was a testament to the region's architectural brilliance.
                <br><br>
                I visited the Pancha Rathas, a group of monolithic rock temples carved in the shape of chariots. The detailed carvings and the grandeur of these structures left me in awe. The Arjuna's Penance, a massive rock relief, depicted scenes from Hindu mythology and showcased the artistic prowess of the Pallava dynasty.
                <br><br>
                In the evening, I took a stroll along the sandy shores, with the sound of waves creating a serene ambiance. The sunset painted the sky in hues of orange and pink, adding to the enchanting atmosphere of Mahabalipuram.
            `,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Mahabalipuram_Arjuna_Penance.jpg"
        },
        {
            title: "Journey to Madurai",
            date: "April 3, 2024",
            content: `
                Today's journey took me to Madurai, one of the oldest continuously inhabited cities in the world. The city is home to the magnificent Meenakshi Amman Temple, an architectural marvel with its towering gopurams and intricate sculptures.
                <br><br>
                I participated in the evening aarti ceremony at the temple, witnessing the devotion of the pilgrims and the vibrant rituals. The temple's colorful murals and sculptures depicted stories from Hindu mythology, offering a glimpse into the region's rich cultural heritage.
                <br><br>
                Madurai's bustling bazaars and narrow lanes were a sensory delight, with the aroma of jasmine flowers and traditional spices filling the air. The city's rich history and cultural vibrancy made it a memorable experience.
            `,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/66/Meenakshi_Temple_Tower.JPG"
        },
        {
            title: "Exploring Thanjavur",
            date: "April 4, 2024",
            content: `
                Today I ventured into Thanjavur, a town renowned for its rich history and cultural significance. The Brihadeeswarar Temple, a UNESCO World Heritage Site, stood as a testament to the architectural brilliance of the Chola dynasty.
                <br><br>
                The temple's towering vimana and intricate sculptures were awe-inspiring, showcasing the grandeur of South Indian architecture. The frescoes and murals inside the temple narrated tales of gods and goddesses, offering a glimpse into the region's artistic heritage.
                <br><br>
                Thanjavur is also famous for its classical music and dance forms, particularly Bharatanatyam. I had the opportunity to witness a mesmerizing dance performance, where the dancers' graceful movements and expressive gestures brought the stories to life.
            `,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Brihadisvara_Temple%2C_Thanjavur.jpg"
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
