let currentScreen = 0;
const screens = document.querySelectorAll(".screen");

const bgMusic = document.getElementById("bgMusic");
const heartBeat = document.getElementById("heartBeat");
const typedText = document.getElementById("typedText");

const LETTER = [
  "Dear Cherry 🍒",
  "",
  "I love you so much more than I could ever fully explain and being with you is one of the greatest gifts in my life.",
  "You mean everything to me.",
  "You are incredibly beautiful and absolutely gorgeous inside and out.",
  "Love your smile, your eyes and the whole you baby.",
  "",
  "Lucky to call you mine.",
  "I love you, always and forever ♾️",
  "",
  "Your Daddy"
];

let line = 0;
let char = 0;
let typingStarted = false;

/* NEXT SCREEN */
function nextScreen() {
  screens[currentScreen].classList.remove("active");
  currentScreen++;

  if (currentScreen < screens.length) {
    screens[currentScreen].classList.add("active");
  }

  /* Start music once */
  if (currentScreen === 1) {
    bgMusic.play();
    heartBeat.play();
  }

  /* Start typing on letter screen */
  if (screens[currentScreen].id === "letter" && !typingStarted) {
    typingStarted = true;
    typeLetter();
  }
}

/* SHOW PLEASE */
function showPlease() {
  document.getElementById("please").classList.remove("hidden");
}

/* TYPEWRITER EFFECT */
function typeLetter() {
  typedText.innerHTML = "";
  line = 0;
  char = 0;

  const typing = setInterval(() => {
    if (line < LETTER.length) {
      if (char < LETTER[line].length) {
        typedText.innerHTML += LETTER[line][char];
        char++;
      } else {
        typedText.innerHTML += "<br><br>";
        line++;
        char = 0;
      }
    } else {
      clearInterval(typing);
    }
  }, 35);
}
