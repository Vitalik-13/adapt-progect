
let video = document.querySelector('.my-video');
let playPauseBtn = document.querySelector('.play-pause');
let progressContainer = document.querySelector('.progress-container');
let progressBar = document.querySelector('.progress');
let currentTime = document.querySelector('.current-time');
let duration = document.querySelector('.duration');

function togglePlayPause() {
  if (video.paused) {
    video.play();
    playPauseBtn.classList.add('pause');
  } else {
    video.pause();
    playPauseBtn.classList.remove('pause');
  }
}

function updateProgressBar() {
  let percentage = (video.currentTime / video.duration) * 100;
  progressBar.style.width = percentage + '%';
}

function updateTime() {
  let current = formatTime(video.currentTime);
  let total = formatTime(video.duration);
  currentTime.textContent = current;
  duration.textContent = total;
}

function formatTime(time) {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60);
  return padZero(minutes) + ':' + padZero(seconds);
}

function padZero(number) {
  return (number < 10 ? '0' : '') + number;
}

playPauseBtn.addEventListener('click', togglePlayPause);
video.addEventListener('timeupdate', updateProgressBar);
video.addEventListener('timeupdate', updateTime);
progressContainer.addEventListener('click', function(event) {
  let progressWidth = progressContainer.offsetWidth;
  let clickX = event.offsetX;
  let duration = video.duration;
  video.currentTime = (clickX / progressWidth) * duration;
});



video.addEventListener('click', function() {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  });
 
  
  
  
  
  
  