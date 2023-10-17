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