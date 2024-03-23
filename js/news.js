function loadNews() {
  fetch("http://127.0.0.1:5000/news/category/authority")
    .then(response => response.json())
    .then(newsList => {
      if (newsList && newsList.length > 0) {
        newsList.forEach(news => {
          const newsItem = document.createElement("div");
          newsItem.className = "news-item";

          const newsMeta = document.createElement("div");
          newsMeta.className = "news-meta";

          const dateElement = document.createElement("p");
          const newsDate = new Date(news.date);
          const formattedDate = `${padZero(newsDate.getDate())}.${padZero(
            newsDate.getMonth() + 1
          )}.${newsDate.getFullYear()}`;
          dateElement.textContent = formattedDate;

          const tagElement = document.createElement("span");
          tagElement.textContent = `${news.tag}`;
          newsMeta.appendChild(dateElement);
          newsMeta.appendChild(tagElement);

          const descriptionElement = document.createElement("h3");
          const newsLink = document.createElement("a");
          newsLink.href = news.page;
          newsLink.textContent = news.title;
          descriptionElement.appendChild(newsLink);

          newsItem.appendChild(descriptionElement);
          newsItem.appendChild(newsMeta);

          const organsColumn = document.getElementById("organs");
          organsColumn.appendChild(newsItem);
        });
      }
    })
    .catch(error => {
      console.error(error);
    });

  fetch("http://127.0.0.1:5000/news/category/society")
    .then(response => response.json())
    .then(newsList => {
      if (newsList && newsList.length > 0) {
        newsList.forEach(news => {
          const newsItem = document.createElement("div");
          newsItem.className = "news-item";

          const newsMeta = document.createElement("div");
          newsMeta.className = "news-meta";

          const dateElement = document.createElement("p");
          const newsDate = new Date(news.date);
          const formattedDate = `${padZero(newsDate.getDate())}.${padZero(
            newsDate.getMonth() + 1
          )}.${newsDate.getFullYear()}`;
          dateElement.textContent = formattedDate;

          const tagElement = document.createElement("span");
          tagElement.textContent = `${news.tag}`;
          newsMeta.appendChild(dateElement);
          newsMeta.appendChild(tagElement);

          const descriptionElement = document.createElement("h3");
          const newsLink = document.createElement("a");
          newsLink.href = news.page;
          newsLink.textContent = news.title;
          descriptionElement.appendChild(newsLink);

          newsItem.appendChild(descriptionElement);
          newsItem.appendChild(newsMeta);

          const societyColumn = document.getElementById("society");
          societyColumn.appendChild(newsItem);
        });
      }
    })
    .catch(error => {
      console.error(error);
    });
}

function padZero(number) {
  return number.toString().padStart(2, '0');
}

loadNews();  