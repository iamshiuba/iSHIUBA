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
            <a
                href="https://ishiuba.fly.dev" 
                target="_blank" 
                title="Alternative ishiuba website using the Django Framework" 
                rel="noopener"
            >
                <svg id="ishiubadj" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
<path d="M11,3v5.1582c-0.347,-0.141 -1.09584,-0.1582 -1.46484,-0.1582c-2.776,0 -5.3457,1.306 -5.3457,5c0,4.42 3.48055,5 5.81055,5c0.92,0 3,-0.09086 4,-0.38086v-14.61914zM16,3v3h3v-3zM16,8v8.70117c0,1.516 -0.922,3.094 -3,4l2.85938,1.29492c2.906,-1 3.14063,-4.29492 3.14063,-5.29492v-8.70117zM9.9707,10.55078c0.32,0 0.6793,0.05867 1.0293,0.13867v4.70313c-0.35,0.08 -0.7093,0.14063 -1.0293,0.14063c-1.31,0 -2.58008,-0.4132 -2.58008,-2.5332c0,-2.12 1.27008,-2.44922 2.58008,-2.44922z"></path>
</svg>
            </a>
        </div
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
