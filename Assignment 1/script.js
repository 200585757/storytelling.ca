// Arrays for the story parts
const heroes = ["a brave knight", "an explorer", "a space traveler", "a pirate", "a detective"];
const actions = ["fought", "discovered", "rescued", "escaped", "investigated"];
const adjectives = ["mysterious", "dangerous", "ancient", "magical", "hidden"];
const objects = ["treasure", "alien", "artifact", "monster", "clue"];
const places = ["in the dark forest", "on a distant planet", "in the haunted castle", "under the sea", "in the city of gold"];

// Variables to store selected words
let selectedHero = "", selectedAction = "", selectedAdjective = "", selectedObject = "", selectedPlace = "";
let textToSpeak = "";

// Function to get a random word from an array
function getRandomWord(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Button event listeners
document.getElementById('heroBtn').addEventListener('click', () => {
    selectedHero = getRandomWord(heroes);
    updateStory();
});

document.getElementById('actionBtn').addEventListener('click', () => {
    selectedAction = getRandomWord(actions);
    updateStory();
});

document.getElementById('adjectiveBtn').addEventListener('click', () => {
    selectedAdjective = getRandomWord(adjectives);
    updateStory();
});

document.getElementById('objectBtn').addEventListener('click', () => {
    selectedObject = getRandomWord(objects);
    updateStory();
});

document.getElementById('placeBtn').addEventListener('click', () => {
    selectedPlace = getRandomWord(places);
    updateStory();
});

// Function to update the story text
function updateStory() {
    // Use a blank space or placeholder if a part hasn't been selected yet
    const hero = selectedHero || "___";
    const action = selectedAction || "___";
    const adjective = selectedAdjective || "___";
    const object = selectedObject || "___";
    const place = selectedPlace || "___";

    // Create the story string
    textToSpeak = `${hero} ${action} a ${adjective} ${object} ${place}.`;
    
    // Display the story in the story section
    document.getElementById('story').textContent = textToSpeak;
}

// Speak the story
document.getElementById('speakBtn').addEventListener('click', () => {
    if (textToSpeak.includes("___")) {
        alert("Please complete the story by selecting words from all categories.");
    } else {
        speakNow(textToSpeak);
    }
});

// Text-to-Speech function
function speakNow(text) {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
}
