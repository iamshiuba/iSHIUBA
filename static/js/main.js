function loadVideos() {
  const videos = [
    {
      title: "OVER-THINKING",
      videoId: "Ct5kE8KGnQM",
      url: "https://www.youtube.com/watch?v=Ct5kE8KGnQM",
    },
    {
      title: "Childhood Nostalgia",
      videoId: "2jfeauEQx7w",
      url: "https://www.youtube.com/watch?v=2jfeauEQx7w",
    },
    {
      title: "This Perfect World",
      videoId: "kFSdn2X1Ttw",
      url: "https://www.youtube.com/watch?v=kFSdn2X1Ttw",
    },
    {
      title: "Tragic Ending",
      videoId: "uf6PZ9WisZQ",
      url: "https://www.youtube.com/watch?v=uf6PZ9WisZQ",
    },
  ];

  const videoContainer = document.getElementById("videoContainer");

  if (!videoContainer) {
    console.warn("videoContainer não encontrado.");
    return;
  }

  videos.forEach((video) => {
    const colDiv = document.createElement("div");
    colDiv.className = "col";

    colDiv.innerHTML = `
        <iframe
          src="https://www.youtube.com/embed/${video.videoId}?si=dca-S4qIp2txXlSA"
          title="${video.title}"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <div class="video-links">
          <a
            rel="noopener"
            class="link"
            href="${video.url}"
            target="_blank"
          >
            <strong>${video.title}</strong>
          </a>
        </div>
      `;

    videoContainer.appendChild(colDiv);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initializeLanguage();
  initializeTheme();
  loadVideos(); 
});

// Funções de inicialização do idioma e tema
function initializeLanguage() {
  const selectedLanguage = localStorage.getItem("selectedLanguage") || "en";
  setLanguage(selectedLanguage);

  // Atualizar o botão de idioma selecionado
  const radioButton = document.querySelector(
    `input[name="btnradio"][value="${selectedLanguage}"]`
  );
  if (radioButton) {
    radioButton.checked = true;
  }
}

function initializeTheme() {
  const themeSwitcher = document.getElementById("theme-switcher");
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeSwitcher.checked = true;
  } else {
    // Remove a classe "dark" se estiver presente e assume o tema claro como padrão
    document.body.classList.remove("dark");
    themeSwitcher.checked = false;
  }

  themeSwitcher.addEventListener("change", function () {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", this.checked ? "dark" : "light");
  });
}


// Função para alterar o idioma
function setLanguage(language) {
  const elementsToTranslate = document.querySelectorAll("[data-translate]");
  elementsToTranslate.forEach((element) => {
    const translationKey = element.getAttribute("data-translate");
    const translation =
      translations[language][translationKey] || translationKey;
    element.innerHTML = translation;
  });

  localStorage.setItem("selectedLanguage", language);

  // Atualizar o atributo de idioma da página
  document.documentElement.setAttribute("lang", language);
}

// Evento para os botões de rádio de seleção de idioma
document.querySelectorAll('input[name="btnradio"]').forEach((radio) => {
  radio.addEventListener("change", function () {
    setLanguage(this.value);
  });
});
