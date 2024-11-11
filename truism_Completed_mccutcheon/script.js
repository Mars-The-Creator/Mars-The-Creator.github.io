// Array to hold the list of videos
var videos = ["videos/video1.mp4", "videos/video2.mp4", "videos/video3.mp4", "videos/video4.mp4"];

// DOM elements
var videoPlayer = document.getElementById("videoPlayer");

// Initialize by loading the first video in the array
var currentVideoIndex = 0;
videoPlayer.src = videos[currentVideoIndex];

// Mute the first video to allow autoplay
videoPlayer.muted = true;

// Start playing the first video automatically when the page loads
videoPlayer.play();

// Array to store the current time for each video to resume playback
var videoProgress = [0, 0, 0, 0];

// Function to change video sequentially
function changeVideo() {
    // Save current playback time for the current video
    videoProgress[currentVideoIndex] = videoPlayer.currentTime;

    // Move to the next video index in sequence, loop back to 0 after the last video
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;

    // Set the new video source
    videoPlayer.src = videos[currentVideoIndex];

    // Set the new video to start from the saved playback time
    videoPlayer.currentTime = videoProgress[currentVideoIndex];

    // Unmute the video after the first one
    videoPlayer.muted = false;

    // Play the video
    videoPlayer.play();
}

// Ensure video loops continuously
videoPlayer.onended = function() {
    videoPlayer.currentTime = 0;
    videoPlayer.play();
};
