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
        <a href="../layout/layout.html" class="navbar-brand">
          <img class="logo" src="../static/img/ishiubahor.png" alt="shiuba" />
        </a>
        <div class="collapse navbar-collapse justify-content-end" id="menu">
          <ul id="pageURl" class="nav nav-underline">
            <li class="nav-item">
              <a href="../pages/index.html" class="nav-link active" data-translate="Homepage"> </a>
            </li>
            <li class="nav-item">
              <a href="../pages/streaming.html" class="nav-link" data-translate="Streaming"></a>
            </li>
            <li class="nav-item">
              <a href="../pages/about.html" class="nav-link" data-translate="About"></a>
            </li>
            <li class="nav-item">
              <a href="../pages/news.html" class="nav-link" data-translate="News"></a>
            </li>
            <li class="nav-item">
              <a href="#" id="tos" class="nav-link" target="_blank" rel="noopener" data-translate="tos"></a>
            </li>
            <li class="nav-item">
              <a href="#" id="privacy" class="nav-link" target="_blank" rel="noopener" data-translate="privacy"></a>
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
});
