document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  navbar.innerHTML = `
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand nav-link" data-page="home">
          <img class="logo" src="/static/img/ishiubahor.png" alt="shiuba" />
        </a>
        <div class="collapse navbar-collapse justify-content-end" id="menu">
          <ul id="pageURl" class="nav nav-underline">
            <li class="nav-item">
              <a class="nav-link active" data-page="home" data-translate="Homepage"></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-page="streaming" data-translate="Streaming"></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-page="about" data-translate="About"></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-page="news" data-translate="News"></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-page="TERMS" data-translate="tos"></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-page="PRIVACY" data-translate="privacy"></a>
            </li>
          </ul>
        </div>
        <div class="d-flex col-lg-4">
          <button
            id="langselect"
            class="icon"
            type="button"
            title="Change Language"
            data-bs-toggle="collapse"
            data-bs-target="#language"
            aria-controls="menu"
            aria-expanded="false"
            aria-label="Change Language"
          >
            <span class="fa-solid fa-language"></span>
            <label for="langselect"><span data-translate="Translations"></span></label>
          </button>
          <div class="langclp collapse p-1" id="language">
            <button type="button" data-language="en" title="English" class="fi fi-us"></button>
            <button type="button" data-language="br" title="Português" class="fi fi-br"></button>
            <button type="button" data-language="jp" title="日本語" class="fi fi-jp"></button>
          </div>
        </div>
        <button id="theme-switcher" type="button" class="switch" aria-label="Toggle Theme">
          <i class="fas fa-moon"></i>
        </button>
      </div>
    </nav>
  `;

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const page = link.getAttribute("data-page");
      loadPage(page);
      setActiveLink(link);
    });
  });

  function loadPage(page) {
    const section = document.getElementById(page);
    if (!section) {
      fetch(`/partials/${page}.html`)
        .then((response) => response.text())
        .then((html) => {
          const newSection = document.createElement("section");
          newSection.id = page;
          newSection.innerHTML = html;
          document.getElementById("content").appendChild(newSection);
          showSection(page);
        })
        .catch((error) => console.error("Error loading page:", error));
    } else {
      showSection(page);
    }
  }

  function showSection(page) {
    document.querySelectorAll("main section").forEach((section) => {
      section.style.display = "none";
    });
    document.getElementById(page).style.display = "block";
  }

  function setActiveLink(activeLink) {
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.remove("active");
    });
    activeLink.classList.add("active");
  }

  // Load the default page
  loadPage("home");
  setActiveLink(document.querySelector('.nav-link[data-page="home"]'));
});
