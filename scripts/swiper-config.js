document.addEventListener('DOMContentLoaded', function () {
    const swipers = document.querySelectorAll('.swiper-container');

    swipers.forEach((swiperContainer) => {
        new Swiper(swiperContainer, {
            loop: true,
            pagination: {
                el: swiperContainer.querySelector('.swiper-pagination'),
                clickable: true,
            },
            autoplay: {
                delay: 3000,
            },
            effect: 'fade',
            speed: 600,
        });
    });
});
