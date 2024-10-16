// Array of sentences about the image
const sentences = [
    "A band plays in a dark vibrantly colored room on an indoor stage.",
    
	"My father plays in the band. This was my first time documenting one of his concerts. This represents untapped potential and pure motives.",
    
	"I remember always liking the music my father made and created. I would go to concerrs in my teenage years and younger. I grew more distant from that side of myself.",
    
	"Community is growth!",
    
	"Acknowledging what people before you have valued is a homage to the ones who made it possible for you to be here today"
];

// Track the current sentence index
let currentIndex = 0;

// Get the image and text display elements
const image = document.getElementById("clickableImage");
const textDisplay = document.getElementById("textDisplay");

// Function to update the text
function updateText() {
    currentIndex = (currentIndex + 1) % sentences.length;
    textDisplay.textContent = sentences[currentIndex];
}

// Event listener to call updateText on image click
image.addEventListener("click", updateText);