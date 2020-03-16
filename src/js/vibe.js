const vibes= [
    "... and you're awesome!",
    "... have a wonderful day!",
    "... and you got this!",
    "... and so is this puppy! 🐶"
];

// choose a random vibe
let vibe = vibes[Math.floor(Math.random() *  Math.floor(vibes.length))];

// display a good vibe
document.querySelector(".vibe").append(vibe);