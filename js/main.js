var mySwiper;

function initSwiper() {
    var slidesPerView;

    if (window.innerWidth > 1900) {
        slidesPerView = 3;
    } else if (window.innerWidth > 1500) {
        slidesPerView = 3;
    } else if (window.innerWidth > 1200) {
        slidesPerView = 2;
    } else if (window.innerWidth > 1000) {
        slidesPerView = 2;
    } else {
        slidesPerView = 1;
    }

    mySwiper = new Swiper(".swiper-container", {
        slidesPerView: slidesPerView,
        spaceBetween: 25,
        loop: true,
        speed: 700,
        navigation: {
            nextEl: ".next-slider",
            prevEl: ".last-slider",
        },
        autoplay: {
            delay: 3000,
        },
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
    });
}
initSwiper();

// Обновляем Swiper при изменении размера окна
window.addEventListener("resize", function () {
    if (mySwiper) {
        mySwiper.destroy(); // Уничтожаем текущий Swiper
    }
    initSwiper(); // Инициализируем Swiper с новыми параметрами
});