// CAROUSEL
function showSection(sectionId) {
  const carousel = document.querySelector("#carouselExample");
  const items = carousel.querySelectorAll(".carousel-item");

  items.forEach((item) => {
    item.classList.remove("active");
    if (item.id === sectionId) {
      item.classList.add("active");
    }
  });
}

// NAV
fetch('../templates/partials/nav.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('nav').innerHTML = data;
  })
  .catch(error => console.error('Erro ao carregar o nav:', error));

// MAIN
fetch('../templates/partials/main.html')
  .then(response => response.text())
  .then(data => {
    console.log('Main loaded');
    document.getElementById('main').innerHTML = data;
  })
  .catch(error => console.error('Erro ao carregar o main:', error));

// FOOTER
fetch('../templates/partials/footer.html')
  .then(response => response.text())
  .then(data => {
    console.log('Footer loaded');
    document.getElementById('footer').innerHTML = data;
  })
  .catch(error => console.error('Erro ao carregar o footer:', error));


// LANG
function setLanguage(language) {
  const elementsToTranslate = document.querySelectorAll("[data-translate]");
  elementsToTranslate.forEach((element) => {
    const translationKey = element.getAttribute("data-translate");
    element.innerHTML = translations[language][translationKey];
  });
  const languageDropdownButton = document.getElementById("languageDropdown");
  languageDropdownButton.innerHTML =
    language === "en" ? "EN" : language === "br" ? "BR" : "JP";
  localStorage.setItem("selectedLanguage", language);
}

document.addEventListener("DOMContentLoaded", function () {
  const selectedLanguage = localStorage.getItem("selectedLanguage");
  
  if (selectedLanguage) {
    setLanguage(selectedLanguage);
  }
});
