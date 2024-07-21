document.addEventListener("DOMContentLoaded", function() {
    const blogPosts = [
        {
            title: "Starting the Tour du Mont Blanc",
            date: "July 1, 2024",
            content: `
                Today marks the beginning of my adventure on the Tour du Mont Blanc. The excitement is palpable as I set out from Les Houches.
                <br><br>
                The trail is well-marked and the views are already stunning. The majestic peaks of Mont Blanc are a constant companion, offering a magnificent backdrop to the journey.
                <br><br>
                After leaving Les Houches, I quickly found myself immersed in the beauty of the French Alps. The trail wound through picturesque alpine meadows filled with wildflowers. The fresh mountain air was invigorating, and the sight of Mont Blanc looming in the distance was awe-inspiring.
                <br><br>
                As the day progressed, I passed charming mountain villages and crossed several suspension bridges over rushing streams. Each turn of the trail brought new and breathtaking views. I reached my first overnight stop, a cozy refuge, just as the sun was setting. It was a perfect end to an exhilarating day.
            `,
            imageUrl: "https://cdn.bookatrekking.com/data/images/2020/06/shutterstock-1013024953.jpg"
        },

        {
            title: "Climbing to Col de la Croix du Bonhomme",
            date: "July 2, 2024",
            content: `
                Today was a challenging climb to the Col de la Croix du Bonhomme, but the panoramic views from the top were absolutely worth the effort.
                <br><br>
                The ascent was steep, and the weather turned colder as I gained altitude. But reaching the top felt like an incredible achievement, and the sweeping views of the surrounding mountains were a perfect reward.
                <br><br>
                The climb to Col de la Croix du Bonhomme was one of the toughest parts of the trek so far. The trail zigzagged up steep slopes, and as I ascended, the temperature dropped noticeably. Despite the physical challenge, the scenery kept me motivated. The higher I climbed, the more expansive the views became.
                <br><br>
                Upon reaching the col, I was greeted by a stunning panorama of snow-capped peaks and deep valleys. The sense of accomplishment was overwhelming. After taking in the views and capturing some photos, I began the descent to the next refuge, where I enjoyed a hearty meal and shared stories with fellow hikers.
            `,
            imageUrl: "https://i0.wp.com/www.cycling-challenge.com/wp-content/uploads/DJI_3131.jpg"
        },
        {
            title: "Exploring Courmayeur",
            date: "July 3, 2024",
            content: `
                Today was a rest day in Courmayeur, a beautiful Italian town nestled in the Alps. It was a perfect opportunity to relax and explore.
                <br><br>
                The town has a charming atmosphere, with narrow streets, traditional architecture, and plenty of cafes and shops. I spent the day wandering around, enjoying the local cuisine, and preparing for the next leg of the trek.
                <br><br>
                Courmayeur offered a delightful contrast to the rugged mountain trails. The town is steeped in history, with its quaint streets and traditional buildings. I started the day with a leisurely stroll through the town center, stopping at a local bakery for some fresh pastries and coffee.
                <br><br>
                The rest of the day was spent exploring Courmayeur's many attractions. I visited the local market, where I picked up some fresh produce and local delicacies. In the evening, I dined at a charming trattoria, savoring a delicious Italian meal. It was a perfect day of relaxation and indulgence before heading back to the trail.
            `,
            imageUrl: "https://www.courmayeurmontblanc.it/wp-content/uploads/2023/09/Primavera_AliceAbbruzzino_for_CourmayeurMontBlanc_n.-86-1-scaled.jpg"
        },
        {
            title: "Crossing the Grand Col Ferret",
            date: "July 4, 2024",
            content: `
                Today's journey took me over the Grand Col Ferret, marking the border between Italy and Switzerland. The views were simply breathtaking.
                <br><br>
                The climb was challenging, but the sense of crossing into a new country on foot was exhilarating. The Swiss side of the trail offered its own unique beauty, with rolling green hills and pristine alpine scenery.
                <br><br>
                Crossing the Grand Col Ferret was a memorable part of the trek. The trail ascended steadily, and the views became more dramatic with each step. Reaching the col, I felt a sense of accomplishment and excitement as I stepped into Switzerland. The landscape changed noticeably, with lush green pastures and picturesque Swiss chalets dotting the hillsides.
                <br><br>
                The descent into the Swiss valley was equally stunning. The pristine alpine scenery, with its rolling hills and clear streams, was picture-perfect. I arrived at the next refuge, where I was welcomed with warm hospitality and a delicious Swiss meal. It was a perfect end to a remarkable day.
            `,
            imageUrl: "https://www.randos-montblanc.com/wp-content/gallery/grand-col-et-tete-de-ferret/ferret21.jpg"
        },
        {
            title: "Reaching Champex-Lac",
            date: "July 5, 2024",
            content: `
                After several days of challenging hiking, I arrived in the picturesque village of Champex-Lac. The tranquil lake and surrounding mountains made it a perfect spot for a well-deserved rest.
                <br><br>
                The village is incredibly charming, and I enjoyed a leisurely day by the lake, soaking in the beauty of the Swiss Alps. The reflections of the mountains in the clear water were mesmerizing.
                <br><br>
                Champex-Lac provided a serene break from the rigors of the trail. The village, nestled by a crystal-clear lake, was like something out of a postcard. I spent the day relaxing by the water, taking in the reflections of the surrounding mountains.
                <br><br>
                In the evening, I took a leisurely walk around the lake, marveling at the tranquil beauty of the place. The sunset cast a golden glow over the water, creating a magical atmosphere. It was a perfect end to a day of rest and rejuvenation.
            `,
            imageUrl: "https://www.novo-monde.com/app/uploads/2020/06/vue-champex.jpg"
        },
        {
            title: "Final Stretch to Chamonix",
            date: "July 6, 2024",
            content: `
                The final day of the Tour du Mont Blanc brought me back to Chamonix. The journey has been incredible, filled with breathtaking views and unforgettable experiences.
                <br><br>
                The descent into Chamonix was bittersweet, marking the end of an amazing adventure. The town's vibrant atmosphere was a perfect contrast to the tranquility of the trail, and I celebrated the completion of the trek with newfound friends.
                <br><br>
                The final stretch of the Tour du Mont Blanc was a mix of emotions. The descent into Chamonix was filled with anticipation and a bit of sadness as the trek came to an end. The views on the way down were stunning, with Mont Blanc providing a majestic backdrop.
                <br><br>
                Arriving in Chamonix, I was greeted by the vibrant energy of the town. The streets were bustling with fellow hikers, climbers, and tourists. I celebrated the completion of the trek with a hearty meal and a toast to the incredible journey. The Tour du Mont Blanc has been an unforgettable experience, filled with breathtaking scenery, challenging climbs, and lasting memories.
            `,
            imageUrl: "https://content.r9cdn.net/rimg/dimg/c5/c2/9f824e3a-city-24428-167bdc2d7c2.jpg?width=1366&height=768&xhint=1384&yhint=1645&crop=true"
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
