document.addEventListener('DOMContentLoaded', function () {
    const reviewsContainer = document.getElementById('reviews-container');
    const preloader = document.getElementById('preloader');
    const errorMessage = document.getElementById('error-message');

    function getRandomCommentsUrl() {
        const randomId = Math.floor(Math.random() * 100) + 1;
        return `https://jsonplaceholder.typicode.com/comments?postId=${randomId}`;
    }

    function loadReviews() {
        fetch(getRandomCommentsUrl())
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                preloader.style.display = 'none';
                displayReviews(data);
            })
            .catch(error => {
                preloader.style.display = 'none';
                errorMessage.style.display = 'block';
                console.error('There has been a problem with your fetch operation:', error);
            });
    }

    function displayReviews(reviews) {
        reviews.forEach(review => {
            const reviewElement = document.createElement('article');
            reviewElement.classList.add('review');

            const titleElement = document.createElement('h3');
            titleElement.textContent = review.name;

            const bodyElement = document.createElement('p');
            bodyElement.textContent = review.body;

            reviewElement.appendChild(titleElement);
            reviewElement.appendChild(bodyElement);

            reviewsContainer.appendChild(reviewElement);
        });
    }

    loadReviews();
});
