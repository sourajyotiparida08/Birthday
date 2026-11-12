
// ===================================
// 1. SURPRISE BUTTON
// ===================================

const surpriseBtn = document.getElementById("surpriseBtn");
const messageSection = document.getElementById("message");

surpriseBtn.addEventListener("click", function () {

    messageSection.scrollIntoView({
        behavior: "smooth"
    });

});


// ===================================
// 2. FLOATING HEARTS
// ===================================

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
        (Math.random() * 3 + 3) + "s";

    heart.style.fontSize =
        (Math.random() * 15 + 15) + "px";

    document.body.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 6000);

}

// Create a heart every 500 milliseconds.

setInterval(createHeart, 500);


// ===================================
// 3. MAKE A BIRTHDAY WISH
// ===================================

const wishBtn = document.getElementById("wishBtn");

const wishMessage = document.getElementById("wishMessage");

wishBtn.addEventListener("click", function () {

    wishMessage.innerHTML =
        "May your every dream come true! ✨❤️";

    wishBtn.innerHTML = "Wish Made! 💖";

    wishBtn.disabled = true;

    celebrate();

});


// ===================================
// 4. CONFETTI CELEBRATION
// ===================================

function celebrate() {

    const emojis = ["🎉", "🎊", "✨", "💖", "🌸"];

    for (let i = 0; i < 60; i++) {

        const confetti = document.createElement("div");

        confetti.classList.add("confetti");

        confetti.innerHTML =
            emojis[Math.floor(Math.random() * emojis.length)];

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.animationDuration =
            (Math.random() * 2 + 2) + "s";

        document.body.appendChild(confetti);

        setTimeout(function () {
            confetti.remove();
        }, 4500);

    }

}



// ===================================
// 5. BACKGROUND MUSIC
// ===================================

const music = document.getElementById("birthdayMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", async function () {

    if (music.paused) {

        try {
            await music.play();
            musicBtn.innerHTML = "⏸ Pause Music 🎵";
        } catch (error) {
            console.log("Music could not be played:", error);
        }

    } else {

        music.pause();
        musicBtn.innerHTML = "▶ Play Music 🎵";

    }

});


// ===================================
// 6. OPEN BIRTHDAY LETTER
// ===================================

const envelope = document.getElementById("envelope");
const openLetterBtn = document.getElementById("openLetterBtn");

openLetterBtn.addEventListener("click", function () {

    envelope.classList.toggle("open");

    if (envelope.classList.contains("open")) {
        openLetterBtn.innerHTML = "Close Letter 💌";
    } else {
        openLetterBtn.innerHTML = "Open Your Letter 💌";
    }

});


// ===================================
// 7. BLOW OUT BIRTHDAY CANDLES
// ===================================

const blowBtn = document.getElementById("blowBtn");
const cake = document.querySelector(".cake");
const cakeMessage = document.getElementById("cakeMessage");

blowBtn.addEventListener("click", function () {

    cake.classList.add("blown");

    cakeMessage.innerHTML =
        "Happy Birthday! May all your wishes come true! ❤️✨";

    blowBtn.innerHTML = "Wish Granted! 🎉";

    blowBtn.disabled = true;

    celebrate();

});


// ===================================
// SECRET WELCOME SCREEN
// ===================================

const welcomeScreen =
    document.getElementById("welcomeScreen");

const unlockBtn =
    document.getElementById("unlockBtn");

unlockBtn.addEventListener("click", function () {

    // Hide the welcome screen
    welcomeScreen.classList.add("hide");

    // Start the birthday experience from the top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

