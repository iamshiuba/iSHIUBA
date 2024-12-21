/* This JavaScript code snippet is used to add an "active" class to the navigation link that
corresponds to the current page. Here's a breakdown of what it does: */
const currentPage = window.location.pathname;
document.querySelectorAll(".nav-link").forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});

const pages = ["index", "streaming", "about", "news"];
const content = document.getElementById("content");

function loadPage(page) {
  fetch(`/pages/${page}.html`)
    .then((response) => response.text())
    .then((html) => {
      content.innerHTML = html;
      document.querySelectorAll(".nav-link").forEach((link) => {
        if (link.getAttribute("data-page") === page) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
      // Execute any scripts included in the loaded HTML
      const scripts = content.getElementsByTagName("script");
      for (let script of scripts) {
        const newScript = document.createElement("script");
        newScript.src = script.src;
        document.body.appendChild(newScript);
      }
    })
    .catch((error) => {
      console.error("Error loading page:", error);
    });
}

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetPage = link.getAttribute("href").split("/").pop().replace(".html", "");
    loadPage(targetPage);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Initially display the index page
  loadPage("index");
});