(function() {
    window.addEventListener('load', function() {
        const performance = window.performance;
        const loadTime = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
        const footer = document.querySelector('.footer');
        if (footer) {
            const p = document.createElement('p');
            p.textContent = `Время загрузки страницы: ${loadTime / 1000} секунд`;
            footer.appendChild(p);
        }
    });

    const navLinks = document.querySelectorAll('.nav__link');
    const currentPage = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('nav__link--active');
        }
    });
})();
