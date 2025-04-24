document.addEventListener('DOMContentLoaded', function() {
  // Модальное окно поиска гостиницы
  const searchButton = document.querySelector('.search-link');
  const modalContainer = document.querySelector('.modal-container');
  const modalCloseButton = document.querySelector('.modal-close-button');

  // Открытие модального окна
  if (searchButton && modalContainer) {
    searchButton.addEventListener('click', function(e) {
      e.preventDefault();
      modalContainer.style.display = 'block';
    });
  }

  // Закрытие модального окна
  if (modalCloseButton && modalContainer) {
    modalCloseButton.addEventListener('click', function() {
      modalContainer.style.display = 'none';
    });
  }

  // Закрытие модального окна при клике вне его
  modalContainer.addEventListener('click', function(e) {
    if (e.target === modalContainer) {
      modalContainer.style.display = 'none';
    }
  });

  // Кнопки увеличения/уменьшения количества
  const countButtons = document.querySelectorAll('.count-number');

  countButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const input = this.parentElement.querySelector('.count-input');
      if (!input) return;

      let value = parseInt(input.value);

      if (this.classList.contains('count-less')) {
        if (value > 0) {
          input.value = value - 1;
        }
      } else if (this.classList.contains('count-more')) {
        input.value = value + 1;
      }
    });
  });

  // Валидация дат
  const arrivalInput = document.getElementById('date-arrival');
  const departureInput = document.getElementById('date-departure');
  const arrivalAlert = document.querySelector('.alert-error');

  if (arrivalInput && departureInput) {
    arrivalInput.addEventListener('change', validateDates);
    departureInput.addEventListener('change', validateDates);
  }

  function validateDates() {
    const arrivalDate = new Date(arrivalInput.value);
    const departureDate = new Date(departureInput.value);
    const today = new Date();

    if (arrivalDate < today) {
      arrivalAlert.style.display = 'inline';
    } else {
      arrivalAlert.style.display = 'none';
    }

    if (departureDate < arrivalDate) {
      // Можно добавить обработку для даты выезда
    }
  }

  // Кнопка "Хочу сюда!"
  const wantHereButton = document.querySelector('.navigation-button');
  if (wantHereButton) {
    wantHereButton.addEventListener('click', function(e) {
      e.preventDefault();
      // Можно добавить плавную прокрутку к форме поиска
      document.querySelector('.search').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Подсказка (tooltip)
  const tooltipToggle = document.querySelector('.tooltip-toggle');
  const tooltipText = document.querySelector('.tooltip-text');

  if (tooltipToggle && tooltipText) {
    tooltipToggle.addEventListener('click', function(e) {
      e.preventDefault();
      tooltipText.classList.toggle('active');
    });

    // Закрытие подсказки при клике вне ее
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.tooltip-toggle') && !e.target.closest('.tooltip-text')) {
        tooltipText.classList.remove('active');
      }
    });
  }
});
// Календарь для даты заезда
flatpickr("#date-arrival", {
  dateFormat: "d F Y", // Формат "27 апреля 2024"
  minDate: "today",   // Запретить выбор прошедших дат
  locale: "ru",       // Русский язык
});

// Календарь для даты выезда
flatpickr("#date-departure", {
  dateFormat: "d F Y",
  minDate: "today",
  locale: "ru",
});
