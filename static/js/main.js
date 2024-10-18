function showSection(sectionId) {
  const carousel = document.querySelector("#carouselExample");
  const activeItem = carousel.querySelector(".carousel-item.active");
  const newItem = carousel.querySelector(`#${sectionId}`);

  if (activeItem !== newItem) {
    activeItem.classList.remove("active");
    newItem.classList.add("active");
  }
}

function loadComponent(componentId, filePath) {
  fetch(filePath)
    .then(response => response.text())
    .then(data => {
      console.log(`${componentId} loaded`);
      document.getElementById(componentId).innerHTML = data;
    })
    .catch(error => console.error(`Erro ao carregar ${componentId}:`, error));
}


// Carregar os componentes
loadComponent('nav', '../templates/partials/nav.html');
loadComponent('main', '../templates/content/main.html');
loadComponent('footer', '../templates/partials/footer.html');


// LANG
function setLanguage(language) {
  const elementsToTranslate = document.querySelectorAll("[data-translate]");
  elementsToTranslate.forEach((element) => {
    const translationKey = element.getAttribute("data-translate");
    const translation = translations[language][translationKey] || translationKey;
    element.innerHTML = translation;
  });

  const languageDropdownButton = document.getElementById("languageDropdown");
  languageDropdownButton.innerHTML =
    language === "en" ? "EN" : language === "br" ? "BR" : "JP";

  localStorage.setItem("selectedLanguage", language);
}

function initializeLanguage() {
  const selectedLanguage = localStorage.getItem("selectedLanguage") || "en";
  setLanguage(selectedLanguage);
}

document.addEventListener("DOMContentLoaded", function () {
  initializeLanguage();
});


// theme switcher
document.addEventListener('DOMContentLoaded', function() {
  const themeSwitcher = document.getElementById('theme-switcher');

  // Load saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    themeSwitcher.checked = true;
  }

  // Detect OS preference if no saved preference
  else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add('dark');
    themeSwitcher.checked = true;
  }

  // Handle toggle switch
  themeSwitcher.addEventListener('change', function() {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', this.checked ? 'dark' : 'light');
  });
});
