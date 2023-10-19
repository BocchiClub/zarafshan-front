// events.js

// Загрузка JSON-файла с мероприятиями
fetch('events.json')
  .then(response => response.json())
  .then(events => {
    const eventsByDate = {};

    // Группировка мероприятий по дате
    events.forEach(event => {
      const date = event.date;
      if (!eventsByDate[date]) {
        eventsByDate[date] = [];
      }
      eventsByDate[date].push(event);
    });

    // Создание разделов для каждой даты
    const eventsContainer = document.getElementById('events-container');
    for (const date in eventsByDate) {
      const dateHeading = document.createElement('div');
      dateHeading.classList.add('calendar-heading-date');
      dateHeading.textContent = date;
      eventsContainer.appendChild(dateHeading);

      const eventList = document.createElement('ul');
      eventList.classList.add('calendar-list');
      eventsContainer.appendChild(eventList);

      eventsByDate[date].forEach(event => {
        const eventItem = document.createElement('li');
        eventItem.innerHTML = `
        <div class="calendar-item">
            <p class="event-time">${event.time}</p>
            <div class="event-title">
            <a href="${event.link}">${event.title}</a>
            </div>
            <div class="event-location">
            <p>${event.location}</p>
            <p>${event.contacts}</p>
            </div>
        </div>
        `;
        eventList.appendChild(eventItem);
      });
    }
  })
  .catch(error => console.error('Ошибка загрузки мероприятий: ', error));
