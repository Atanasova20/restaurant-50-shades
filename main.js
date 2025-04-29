// Функция за зареждане на HTML от външен файл
function loadHTML(elementId, fileName) {
  fetch(fileName)
      .then(response => response.text())
      .then(data => document.getElementById(elementId).innerHTML = data)
      .catch(error => console.error('Error loading file:', error));
}

// Зареждаме хедъра, навигацията и футъра
loadHTML('header', 'header.html');
loadHTML('footer', 'footer.html');



// прихващане на класовете за промяна на хедъра при скролване
window.addEventListener('scroll', function () {
  let header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.classList.add('bg-[#0e0f10]', 'shadow-md');
    header.classList.remove('bg-transparent');
  } else {
    header.classList.remove('bg-[#0e0f10]', 'shadow-md');
    header.classList.add('bg-transparent');
  }
});

// формата за резервация (падащите менюта)

const dropdownButton = document.getElementById('dropdownButton');
const dropdownMenu = document.getElementById('dropdownMenu');
const selectedText = document.getElementById('selectedText');
const dropdownIcon = document.getElementById('dropdownIcon');

// Toggle dropdown visibility
dropdownButton.addEventListener('click', () => {
  dropdownMenu.classList.toggle('hidden');
  dropdownIcon.classList.toggle('rotate-180');
});

// Set selected time and close dropdown
const items = document.querySelectorAll('.dropdown-item');
items.forEach((item) => {
  item.addEventListener('click', (e) => {
    selectedText.textContent = e.target.textContent;
    dropdownMenu.classList.add('hidden');
    dropdownIcon.classList.remove('rotate-180');
  });
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!dropdownButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.add('hidden');
    dropdownIcon.classList.remove('rotate-180');
  }
});
