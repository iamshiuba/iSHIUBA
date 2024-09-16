const nav = document.querySelector('nav');

// Função para importar o nav
function importNav() {
  const navHtml = fetch('nav.html')
    .then(response => response.text())
    .then(html => {
      nav.innerHTML = html;
    });
}

// Chamar a função para importar o nav
importNav();

function setLanguage(language) {
  const elementsToTranslate = document.querySelectorAll("[data-translate]");
  elementsToTranslate.forEach((element) => {
    const translationKey = element.getAttribute("data-translate");
    element.innerHTML = translations[language][translationKey];
  });

  // Atualizar textos fora do "data-translate"
  document.querySelector(".greetings h1").innerHTML =
    translations[language].greeting;
  document.querySelector(".greetings p").innerHTML =
    translations[language].mainMessage;
  document.querySelector(
    "footer p"
  ).innerHTML = `&copy; 2023 - 2024 IamSHIUBA. ${translations[language].footer}`;

// Alterar o texto do botão do seletor de idioma
const languageDropdownButton = document.getElementById("languageDropdown");
  languageDropdownButton.innerHTML = language === "en" ? "EN" : language === "br" ? "BR" : "JP";
}
