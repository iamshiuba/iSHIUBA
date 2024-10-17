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
