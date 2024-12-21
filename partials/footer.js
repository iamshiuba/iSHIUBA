document.addEventListener("DOMContentLoaded", function () {
  const footer = document.getElementById("footer");
  footer.innerHTML = `
        <div class="col-6" id="checkOut">
            <a
                href="https://github.com/iamshiuba"
                target="_blank"
                title="GitHub"
                rel="noopener"
            >
                <i class="fa-brands fa-github"></i>
            </a>
            <a
                href="https://x.com/iamshiuba"
                target="_blank"
                title="X (Twitter)"
                rel="noopener"
            >
                <i class="fa-brands fa-x-twitter"></i>
            </a>
            <a
                href="https://www.youtube.com/@iamshiuba"
                target="_blank"
                title="YouTube"
                rel="noopener"
            >
                <i class="fa-brands fa-youtube"></i>
            </a>
            <a
                href="https://soundcloud.com/iamshiuba"
                target="_blank"
                title="SoundCloud"
                rel="noopener"
            >
                <i class="fa-brands fa-soundcloud"></i>
            </a>
            </div>
            <div class="col-5 text-center" id="footer">
            <div class="container text-center" id="tospriv">
                <p class="mb-0">
                <span data-translate="prdBy"></span>  &copy; ${new Date().getFullYear()}.
                <span data-translate="footer"></span>
                </p>
            </div>
        </div>
`;
});
