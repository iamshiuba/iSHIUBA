// Get the video player element
const videoPlayer = document.querySelector('.video-player');

// Set the video player width and height based on the screen size
function setVideoPlayerSize() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  videoPlayer.style.width = `${screenWidth}px`;
  videoPlayer.style.height = `${screenHeight * 0.6}px`;
}

// Call the function on window resize
window.addEventListener('resize', setVideoPlayerSize);

// Call the function on page load
setVideoPlayerSize();

// Get the video elements
const videos = document.querySelectorAll('.video');

// Function to lazy load a video
function lazyLoadVideo(video) {
  const videoSrc = video.querySelector('iframe').getAttribute('src');
  video.querySelector('iframe').setAttribute('src', '');
  video.querySelector('iframe').setAttribute('src', videoSrc);
}

// Call the function on scroll
window.addEventListener('scroll', () => {
  videos.forEach(video => {
    const videoTop = video.offsetTop;
    const videoBottom = videoTop + video.offsetHeight;
    const scrollPosition = window.scrollY + window.innerHeight;
    if (scrollPosition >= videoTop && scrollPosition <= videoBottom) {
      lazyLoadVideo(video);
    }
  });
});