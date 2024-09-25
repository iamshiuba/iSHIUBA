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

const audio = document.getElementById('music');

const playPauseButton = document.getElementById('playPauseButton');
playPauseButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

const volumeSlider = document.getElementById('volumeSlider');
volumeSlider.addEventListener('input', (e) => {
  audio.volume = e.target.value / 100;
});

const seekSlider = document.getElementById('seekSlider');
seekSlider.addEventListener('input', (e) => {
  audio.currentTime = e.target.value / 100 * audio.duration;
});

audio.addEventListener('play', () => {
  console.log('Audio started playing');
});

audio.addEventListener('pause', () => {
  console.log('Audio paused');
});

audio.addEventListener('ended', () => {
  console.log('Audio ended');
});

audio.addEventListener('timeupdate', () => {
  console.log(`Current time: ${audio.currentTime}`);
});