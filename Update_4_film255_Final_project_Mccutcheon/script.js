// Get references to the two video elements and the text boxes
const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');
const startText = document.getElementById('startText');
const centerText = document.getElementById('centerText');

// Store the playback positions
const videoPositions = {
  video1: 0, // Default start position for video1
  video2: 0, // Default start position for video2
};

// Function to start a specific video
function startVideo(videoToPlay) {
  // Hide text elements
  startText.style.display = 'none';
  centerText.style.display = 'none';

  // Ensure the video to play is visible and starts playing
  videoToPlay.classList.add('active');
  videoToPlay.muted = false; // Ensure sound is on
  videoToPlay.play().catch(error => console.warn('Autoplay error:', error));
}

// Function to switch videos
function switchVideo(currentVideo, nextVideo, currentKey, nextKey) {
  // Save the current video's playback position
  videoPositions[currentKey] = currentVideo.currentTime;

  // Pause and hide the current video
  currentVideo.pause();
  currentVideo.classList.remove('active');

  // Restore the saved playback position for the next video
  nextVideo.currentTime = videoPositions[nextKey];

  // Show and play the next video
  nextVideo.classList.add('active');
  nextVideo.play().catch(error => console.warn('Playback error:', error));
}

// Event listener to start video2 when text or video is clicked
startText.addEventListener('click', () => startVideo(video2));
centerText.addEventListener('click', () => startVideo(video2));
video1.addEventListener('click', () => startVideo(video2));

// Add click event to video2 to switch back to video1
video2.addEventListener('click', () => {
  switchVideo(video2, video1, 'video2', 'video1');
});

// Add click event to video1 to switch to video2
video1.addEventListener('click', () => {
  switchVideo(video1, video2, 'video1', 'video2');
});
