document.addEventListener("DOMContentLoaded", function() {
    const blogPosts = [
        {
            title: "Arriving in Kashmir",
            date: "March 1, 2024",
            content: `
                Today I arrived in Kashmir, known as "Paradise on Earth," and it has already exceeded my expectations. The snow-capped mountains, serene lakes, and lush valleys make it a breathtaking destination.
                <br><br>
                As I drove through the picturesque landscapes, the beauty of Kashmir unfolded before my eyes. The Dal Lake shimmered under the clear blue sky, and the surrounding gardens were a riot of colors.
                <br><br>
                I settled into a houseboat on the Dal Lake, where the hospitality of Kashmiri culture welcomed me. The warm chai and traditional Kashmiri cuisine made me feel at home. I can't wait to explore more of this enchanting region.
            `,
            imageUrl: "https://img.veenaworld.com/wp-content/uploads/2023/01/shutterstock_2044050407.jpg"
        },
        {
            title: "Exploring Srinagar",
            date: "March 2, 2024",
            content: `
                Today was spent exploring the vibrant city of Srinagar, the summer capital of Jammu and Kashmir. The Mughal gardens, with their terraced lawns and ornamental shrubs, were a testament to the region's rich history.
                <br><br>
                I visited Nishat Bagh and Shalimar Bagh, where the symmetrical layout and cascading fountains left me in awe. The Chashme Shahi garden, with its natural spring and panoramic views of the Dal Lake, offered a tranquil retreat.
                <br><br>
                In the evening, I took a shikara ride on the Dal Lake, gliding past floating gardens and houseboats adorned with intricate woodcarvings. The sunset painted the sky in hues of orange and pink, creating a magical atmosphere.
            `,
            imageUrl: "https://www.ekashmirtourism.com/wp-content/uploads/2022/12/dal-lake-kashmir-in-winter.jpg"
        },
        {
            title: "Journey to Gulmarg",
            date: "March 3, 2024",
            content: `
                Today's journey took me to Gulmarg, a pristine hill station nestled in the Pir Panjal range. The snow-covered slopes and dense pine forests made it a paradise for adventure enthusiasts.
                <br><br>
                I took the Gulmarg Gondola, one of the highest cable cars in the world, to reach Kongdoori Mountain. From there, I was treated to panoramic views of the snow-capped peaks and the Kashmir Valley below.
                <br><br>
                After descending, I indulged in winter sports like skiing and snowboarding. The fresh powder and wide slopes provided the perfect playground for both beginners and experienced skiers alike.
                <br><br>
                Gulmarg's charm extends beyond its winter activities. The Gulmarg Biosphere Reserve, with its diverse flora and fauna, offered a peaceful escape into nature's embrace.
            `,
            imageUrl: "https://hblimg.mmtcdn.com/content/hubble/img/gulmarg/mmt/destination/m_Gulmarg_activity_mountains_l_460_690.jpg"
        },
        {
            title: "Exploring Pahalgam",
            date: "March 4, 2024",
            content: `
                Today I ventured into Pahalgam, a picturesque town known for its lush green meadows and pristine rivers. The Lidder River, with its crystal-clear waters, meandered through the valley, creating a serene ambiance.
                <br><br>
                I hiked through the Aru Valley, surrounded by towering pine trees and snow-capped peaks. The valley echoed with the melodies of colorful birds, adding to its natural charm.
                <br><br>
                Betaab Valley, named after the Bollywood movie "Betaab" filmed here, offered panoramic views of the Himalayan range. The lush greenery and blooming flowers painted a picture-perfect setting.
                <br><br>
                Pahalgam is not just a haven for nature lovers but also a gateway to the revered Amarnath Cave, where pilgrims trek to worship the ice lingam. The spiritual energy of the place was palpable.
            `,
            imageUrl: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/19/b2/88.jpg"
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
