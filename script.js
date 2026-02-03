const heartStage = document.getElementById("heartStage");
const question = document.getElementById("question");
const please = document.getElementById("please");
const choose = document.getElementById("choose");
const letter = document.getElementById("letter");
const typedText = document.getElementById("typedText");
const photos = document.getElementById("photos");
const surprise = document.getElementById("surprise");
const future = document.getElementById("future");
const ending = document.getElementById("ending");

const bgMusic = document.getElementById("bgMusic");
const heartBeat = document.getElementById("heartBeat");

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

/* PHASE 1 */
heartStage.onclick = () => {
  heartBeat.play();
  bgMusic.play();
  heartStage.classList.add("hidden");
  question.classList.remove("hidden");
};

/* PHASE 2 */
function yes() {
  question.classList.add("hidden");
  please.classList.add("hidden");
  choose.classList.remove("hidden");

  setTimeout(() => {
    choose.classList.add("hidden");
    showLetter();
  }, 2000);
}

function no() {
  question.classList.add("hidden");
  please.classList.remove("hidden");
}

/* PHASE 4 */
function showLetter() {
  letter.classList.remove("hidden");
  typeLetter();
  rain("🌸", "flowers");
  rain("💕", "hearts");
}

function typeLetter() {
  typedText.innerHTML = "";
  line = 0;
  char = 0;

  const typing = setInterval(() => {
    if (line < LETTER.length) {
      if (char < LETTER[line].length) {
        typedText.innerHTML += LETTER[line][char++];
      } else {
        typedText.innerHTML += "<br><br>";
        line++;
        char = 0;
      }
    } else {
      clearInterval(typing);
      setTimeout(showPhotos, 2500);
    }
  }, 35);
}

/* PHASE 5 */
function showPhotos() {
  photos.classList.remove("hidden");
  const figs = photos.querySelectorAll("figure");
  let i = 0;
  const reveal = setInterval(() => {
    if (i < figs.length) {
      figs[i].style.opacity = 1;
      i++;
    } else {
      clearInterval(reveal);
      setTimeout(() => surprise.classList.remove("hidden"), 2000);
    }
  }, 1200);
}

/* PHASE 6 */
function revealFuture() {
  surprise.classList.add("hidden");
  future.classList.remove("hidden");

  setTimeout(() => {
    ending.classList.remove("hidden");
  }, 2500);
}

/* EFFECTS */
function rain(emoji, id) {
  setInterval(() => {
    const el = document.createElement("div");
    el.textContent = emoji;
    el.style.left = Math.random() * 100 + "vw";
    el.style.fontSize = 16 + Math.random() * 20 + "px";
    el.style.animationDuration = 6 + Math.random() * 4 + "s";
    document.getElementById(id).appendChild(el);
    setTimeout(() => el.remove(), 9000);
  }, 700);
}
