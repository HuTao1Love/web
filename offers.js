document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('offer-form');
    const offersContainer = document.getElementById('offer-container');

    loadOffers();

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const contact = document.getElementById('contact').value;
        const offerText = document.getElementById('offer').value;

        const result = createOfferElement(username, contact, offerText);
        offersContainer.appendChild(result);

        saveOffer(username, contact, offerText);

        form.reset();
    });

    function createOfferElement(username, contact, reviewText) {
        const offer = document.createElement('div');
        offer.classList.add('offer');

        const offerHeader = document.createElement('h3');
        offerHeader.textContent = username;

        const offerParagraph = document.createElement('p');
        offerParagraph.textContent = reviewText;

        offer.appendChild(offerHeader);
        offer.appendChild(offerParagraph);

        return offer;
    }

    function saveOffer(username, contact, text) {
        let offers = JSON.parse(localStorage.getItem('reviews')) || [];
        offers.push({ username, contact, text });
        localStorage.setItem('reviews', JSON.stringify(offers));
    }

    function loadOffers() {
        let offers = JSON.parse(localStorage.getItem('reviews')) || [];

        offers.forEach(function (offer) {
            const offerElement = createOfferElement(offer.username, offer.contact, offer.text);
            offersContainer.appendChild(offerElement);
        });
    }
});
