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
// Функция для загрузки и обработки CSV-файла
function loadCSV() {
    Papa.parse("news.csv", {
      header: true,
      dynamicTyping: true,
      download: true,
      complete: function (results) {
        if (results.data && results.data.length > 0) {
          results.data.forEach((news) => {
            const newsItem = document.createElement("div");
            newsItem.className = "news-item";
  
            const dateElement = document.createElement("p");
            dateElement.textContent = news.Дата;
  
            const descriptionElement = document.createElement("h3");
            const newsLink = document.createElement("a");
            newsLink.href = news.Ссылка;
            newsLink.textContent = news.Описание;
            descriptionElement.appendChild(newsLink);
  
            newsItem.appendChild(descriptionElement);
            newsItem.appendChild(dateElement);
  
            if (news.Категория === "Органы власти") {
              const organsColumn = document.getElementById("organs");
              organsColumn.appendChild(newsItem);
            } else if (news.Категория === "Общество") {
              const governorColumn = document.getElementById("society");
              governorColumn.appendChild(newsItem);
            }
          });
        }
      },
    });
  }
  
  // Запустите загрузку CSV-файла и создание новостей
loadCSV();  
initSwiper();

// Обновляем Swiper при изменении размера окна
window.addEventListener("resize", function () {
    if (mySwiper) {
        mySwiper.destroy(); // Уничтожаем текущий Swiper
    }
    initSwiper(); // Инициализируем Swiper с новыми параметрами
});