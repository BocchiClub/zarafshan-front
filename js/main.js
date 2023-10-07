var mySwiper;

function initSwiper() {
    var slidesPerView = window.innerWidth > 768 ? 5 : 1; // Устанавливаем количество слайдов в зависимости от размера экрана

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