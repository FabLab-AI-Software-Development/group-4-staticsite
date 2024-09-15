// script for gallery page 8.27.24 TG

// Note C
const NoteC = () => {
  const hoverImage = document.getElementById("imgC");
  const hoverSound = document.getElementById("hoverSoundC");

  hoverImage.addEventListener("mouseover", function () {
    hoverSound.currentTime = 0; // Reset sound to start
    hoverSound.play(); // Play sound
  });

//   const audio = document.getElementById("pianoSoundC");
//   const playButton = document.getElementById("playButtonC");

  // playButton.addEventListener("click", function () {
  // audio.currentTime = 0; // Reset to the beginning
  // audio.play(); // Play the sound
  // });
};

// Note D
const NoteD = () => {
  const hoverImage = document.getElementById("imgD");
  const hoverSound = document.getElementById("hoverSoundD");

  hoverImage.addEventListener("mouseover", function () {
    hoverSound.currentTime = 0; // Reset sound to start
    hoverSound.play(); // Play sound
  });

//   const audio = document.getElementById("pianoSoundD");
//   const playButton = document.getElementById("playButtonD");

//   playButton.addEventListener("click", function () {
//   audio.currentTime = 0; // Reset to the beginning
//   audio.play(); // Play the sound
//   });
};

// Note E
export function NoteE() {
  const hoverImage = document.getElementById("imgE");
  const hoverSound = document.getElementById("hoverSoundE");

  hoverImage.addEventListener("mouseover", function () {
    hoverSound.currentTime = 0; // Reset sound to start
    hoverSound.play(); // Play sound
  });

//   const audio = document.getElementById("pianoSoundE");
//   const playButton = document.getElementById("playButtonE");

//   playButton.addEventListener("click", function () {
//   audio.currentTime = 0; // Reset to the beginning
//   audio.play(); // Play the sound
//   });
}

//Note Low C
function NoteClo() {
  const hoverImage = document.getElementById("imgClo");
  const hoverSound = document.getElementById("hoverSoundClo");

  hoverImage.addEventListener("mouseover", function () {
    hoverSound.currentTime = 0; // Reset sound to start
    hoverSound.play(); // Play sound
  });

//   const audio = document.getElementById("pianoSoundClo");
//   const playButton = document.getElementById("playButtonClo");

//   playButton.addEventListener("click", function () {
//   audio.currentTime = 0; // Reset to the beginning
//   audio.play(); // Play the sound
//   });
}

//Note G
function NoteG() {
  const hoverImage = document.getElementById("imgG");
  const hoverSound = document.getElementById("hoverSoundG");

  hoverImage.addEventListener("mouseover", function () {
    hoverSound.currentTime = 0; // Reset sound to start
    hoverSound.play(); // Play sound
  });

//   const audio = document.getElementById("pianoSoundG");
//   const playButton = document.getElementById("playButtonG");

//   playButton.addEventListener("click", function () {
//   audio.currentTime = 0; // Reset to the beginning
//   audio.play(); // Play the sound
//   });
}

export default NoteC;
export { NoteD, NoteClo, NoteG };
