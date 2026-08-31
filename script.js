/* =========================================================
   A LITTLE BIRTHDAY
   COMPLETE JAVASCRIPT
   ========================================================= */


/* =========================================================
   BIRTHDAY DATA
   ========================================================= */

const birthday = {
    name: "",
    age: "",
    theme: "pink",

    cake: {
        shape: "round",
        flavour: "strawberry",
        colour: "#e9a8b9",
        decoration: "flowers",
        message: ""
    },

    gift: {
        item: "teddy"
    },

    flowers: [],

    ribbon: "Blush Pink"
};


/* =========================================================
   FLOWER DATA
   ========================================================= */

const flowers = [
    {
        name: "Pink Rose",
        emoji: "🌹",
        meaning: "Love & sweetness"
    },

    {
        name: "Tulip",
        emoji: "🌷",
        meaning: "Perfect love"
    },

    {
        name: "Sunflower",
        emoji: "🌻",
        meaning: "Happiness"
    },

    {
        name: "Daisy",
        emoji: "🌼",
        meaning: "Innocence"
    },

    {
        name: "Cherry Blossom",
        emoji: "🌸",
        meaning: "New beginnings"
    },

    {
        name: "Lavender",
        emoji: "💜",
        meaning: "Calmness"
    },

    {
        name: "Lily",
        emoji: "🌺",
        meaning: "Purity"
    },

    {
        name: "Hibiscus",
        emoji: "🌺",
        meaning: "Beauty"
    },

    {
        name: "Orchid",
        emoji: "🪻",
        meaning: "Elegance"
    }
];


/* =========================================================
   GIFT DATA
   ========================================================= */

const gifts = [
    {
        id: "teddy",
        emoji: "🧸",
        name: "Teddy Bear"
    },

    {
        id: "perfume",
        emoji: "🌸",
        name: "Pretty Surprise"
    },

    {
        id: "jewelry",
        emoji: "💎",
        name: "Little Jewel"
    },

    {
        id: "headphones",
        emoji: "🎧",
        name: "Headphones"
    },

    {
        id: "book",
        emoji: "📖",
        name: "A Book"
    },

    {
        id: "camera",
        emoji: "📷",
        name: "Camera"
    },

    {
        id: "star",
        emoji: "✨",
        name: "Something Magical"
    },

    {
        id: "custom",
        emoji: "🎁",
        name: "My Own Choice"
    }
];


/* =========================================================
   RIBBONS
   ========================================================= */

const ribbons = [
    {
        name: "Blush Pink",
        colour: "#d99aaa"
    },

    {
        name: "Dusty Rose",
        colour: "#b9798b"
    },

    {
        name: "Lavender",
        colour: "#a993c7"
    },

    {
        name: "Sage Green",
        colour: "#91a58c"
    },

    {
        name: "Baby Blue",
        colour: "#9dbbd3"
    },

    {
        name: "Cream",
        colour: "#eee1c8"
    }
];


/* =========================================================
   SCREEN ELEMENTS
   ========================================================= */

const screens = [
    document.getElementById("screen-0"),
    document.getElementById("screen-1"),
    document.getElementById("screen-2"),
    document.getElementById("screen-3"),
    document.getElementById("screen-4"),
    document.getElementById("screen-5"),
    document.getElementById("screen-6")
].filter(Boolean);


let currentScreen = 0;


/* =========================================================
   SAFE ELEMENT HELPER
   ========================================================= */

function $(id) {
    return document.getElementById(id);
}


/* =========================================================
   SCREEN NAVIGATION
   ========================================================= */

function showScreen(number) {

    if (!screens[number]) {
        console.warn("Screen does not exist:", number);
        return;
    }

    screens.forEach((screen, index) => {

        screen.classList.toggle(
            "active",
            index === number
        );

    });

    currentScreen = number;

    updateProgress();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   PROGRESS
   ========================================================= */

function updateProgress() {

    const progress =
        $("progressFill");

    if (!progress) return;

    const percentage =
        (currentScreen /
        Math.max(screens.length - 1, 1)) * 100;

    progress.style.width =
        `${percentage}%`;
}


/* =========================================================
   TOAST
   ========================================================= */

function showToast(message) {

    const toast =
        $("toast");

    if (!toast) return;

    toast.textContent =
        message;

    toast.classList.add("show");

    clearTimeout(
        showToast.timer
    );

    showToast.timer =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 2200);
}


/* =========================================================
   START BUTTON
   ========================================================= */

const startButton =
    $("startButton");

if (startButton) {

    startButton.addEventListener(
        "click",
        () => {

            showScreen(1);

        }
    );

}


/* =========================================================
   PERSONAL DETAILS
   ========================================================= */

const detailsNext =
    $("detailsNext");

if (detailsNext) {

    detailsNext.addEventListener(
        "click",
        () => {

            const name =
                $("personName")
                ?.value
                .trim();

            const age =
                $("personAge")
                ?.value
                .trim();

            const theme =
                $("birthdayTheme")
                ?.value || "pink";

            const error =
                $("detailsError");


            if (!name) {

                if (error) {
                    error.textContent =
                        "Tell me your name first ♡";
                }

                $("personName")?.focus();

                return;
            }


            if (
                !age ||
                Number(age) < 1 ||
                Number(age) > 120
            ) {

                if (error) {
                    error.textContent =
                        "And what age are you turning? 🎂";
                }

                $("personAge")?.focus();

                return;
            }


            birthday.name =
                name;

            birthday.age =
                Number(age);

            birthday.theme =
                theme;


            if (error) {
                error.textContent = "";
            }


            updateName();

            createNumberCandles();

            showScreen(2);

        }
    );

}


/* =========================================================
   ENTER KEY ON FORM
   ========================================================= */

$("personName")?.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {
            $("personAge")?.focus();
        }

    }
);


$("personAge")?.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {
            detailsNext?.click();
        }

    }
);


/* =========================================================
   UPDATE NAME EVERYWHERE
   ========================================================= */

function updateName() {

    const name =
        birthday.name || "YOU";


    const elements = [
        $("partyName"),
        $("cakePreviewName"),
        $("finalName")
    ];


    elements.forEach(
        element => {

            if (element) {
                element.textContent =
                    name;
            }

        }
    );

}


/* =========================================================
   NUMBER CANDLES
   ========================================================= */

function createNumberCandles() {

    const containers = [
        $("numberCandles"),
        $("previewCakeCandles"),
        $("finalCandles")
    ];


    containers.forEach(
        container => {

            if (!container) return;

            container.innerHTML = "";


            const digits =
                String(
                    birthday.age
                ).split("");


            digits.forEach(
                digit => {

                    const candle =
                        document.createElement("div");

                    candle.className =
                        container.id === "finalCandles"
                            ? "final-number-candle"
                            : container.id === "previewCakeCandles"
                                ? "preview-number-candle"
                                : "number-candle";


                    candle.textContent =
                        digit;


                    container.appendChild(
                        candle
                    );

                }
            );

        }
    );

}


/* =========================================================
   LIGHTS BUTTON
   ========================================================= */

const lightsButton =
    $("lightsButton");

if (lightsButton) {

    lightsButton.addEventListener(
        "click",
        () => {

            document.body.classList.add(
                "lights-on"
            );

            showScreen(3);

            setTimeout(
                createConfetti,
                350
            );

        }
    );

}


/* =========================================================
   PARTY SCREEN
   ========================================================= */

const partyNext =
    $("partyNext");

if (partyNext) {

    partyNext.addEventListener(
        "click",
        () => {

            showScreen(4);

            buildCakeBuilder();

        }
    );

}


/* =========================================================
   CAKE BUILDER
   ========================================================= */

function buildCakeBuilder() {

    setupCakeChoices();

    setupCakeColours();

    setupCakeDecorations();

    setupCakeMessage();

    updateCakePreview();

}


/* =========================================================
   CAKE SHAPE
   ========================================================= */

function setupCakeChoices() {

    const choices =
        document.querySelectorAll(
            ".cake-shape-choice, [data-shape]"
        );


    choices.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    choices.forEach(
                        item =>
                            item.classList.remove(
                                "selected"
                            )
                    );

                    button.classList.add(
                        "selected"
                    );


                    birthday.cake.shape =
                        button.dataset.shape;


                    updateCakePreview();

                }
            );

        }
    );

}


/* =========================================================
   CAKE FLAVOUR
   ========================================================= */

function setupCakeFlavour() {

    const choices =
        document.querySelectorAll(
            ".cake-flavour-choice, [data-flavour]"
        );


    choices.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    choices.forEach(
                        item =>
                            item.classList.remove(
                                "selected"
                            )
                    );

                    button.classList.add(
                        "selected"
                    );


                    birthday.cake.flavour =
                        button.dataset.flavour;


                    updateCakePreview();

                }
            );

        }
    );

}


/* =========================================================
   CAKE COLOURS
   ========================================================= */

function setupCakeColours() {

    const choices =
        document.querySelectorAll(
            ".colour-choice, [data-colour]"
        );


    choices.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    choices.forEach(
                        item =>
                            item.classList.remove(
                                "selected"
                            )
                    );

                    button.classList.add(
                        "selected"
                    );


                    birthday.cake.colour =
                        button.dataset.colour;


                    updateCakePreview();

                }
            );

        }
    );

}


/* =========================================================
   CAKE DECORATIONS
   ========================================================= */

function setupCakeDecorations() {

    const choices =
        document.querySelectorAll(
            ".decor-choice, [data-decor]"
        );


    choices.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    choices.forEach(
                        item =>
                            item.classList.remove(
                                "selected"
                            )
                    );

                    button.classList.add(
                        "selected"
                    );


                    birthday.cake.decoration =
                        button.dataset.decor;


                    updateCakePreview();

                }
            );

        }
    );

}


/* =========================================================
   CAKE MESSAGE
   ========================================================= */

function setupCakeMessage() {

    const input =
        $("cakeMessage");


    if (!input) return;


    input.addEventListener(
        "input",
        () => {

            birthday.cake.message =
                input.value
                .trim();

            updateCakePreview();

        }
    );

}


/* =========================================================
   CAKE PREVIEW
   ========================================================= */

function updateCakePreview() {

    const body =
        $("previewCakeBody");

    const top =
        $("previewCakeTop");

    const decor =
        $("previewCakeDecor");


    if (!body || !top) return;


    const colour =
        birthday.cake.colour;


    body.style.background =
        colour;


    top.style.background =
        getLighterColour(colour);


    if (birthday.cake.shape === "heart") {

        body.style.borderRadius =
            "45% 45% 12px 12px";

        top.style.borderRadius =
            "45%";

    }

    else if (
        birthday.cake.shape === "tiered"
    ) {

        body.style.height =
            "55px";

        body.style.borderRadius =
            "10px 10px 14px 14px";

    }

    else {

        body.style.borderRadius =
            "10px 10px 14px 14px";

    }


    if (decor) {

        const decorationMap = {

            flowers:
                "🌸　✿　🌸",

            hearts:
                "♡　♥　♡",

            pearls:
                "○　○　○",

            sprinkles:
                "✦　•　✦　•"

        };


        decor.textContent =
            decorationMap[
                birthday.cake.decoration
            ] ||
            "✿　♡　✿";

    }


    const message =
        $("cakePreviewMessage");


    if (message) {

        message.textContent =
            birthday.cake.message ||
            birthday.name ||
            "";

    }

}


/* =========================================================
   LIGHTER COLOUR
   ========================================================= */

function getLighterColour(hex) {

    if (!hex || hex[0] !== "#") {
        return "#ffe8eb";
    }


    const number =
        parseInt(
            hex.slice(1),
            16
        );


    const r =
        Math.min(
            255,
            ((number >> 16) & 255) + 35
        );

    const g =
        Math.min(
            255,
            ((number >> 8) & 255) + 35
        );

    const b =
        Math.min(
            255,
            (number & 255) + 35
        );


    return `rgb(${r}, ${g}, ${b})`;
}


/* =========================================================
   CAKE NEXT
   ========================================================= */

const cakeNext =
    $("cakeNext");

if (cakeNext) {

    cakeNext.addEventListener(
        "click",
        () => {

            showScreen(5);

            buildGiftShop();

        }
    );

}


/* =========================================================
   GIFT SHOP
   ========================================================= */

function buildGiftShop() {

    const grid =
        $("giftGrid");


    if (!grid) return;


    grid.innerHTML = "";


    gifts.forEach(
        gift => {

            const button =
                document.createElement("button");


            button.type =
                "button";


            button.className =
                "gift-choice";


            if (
                gift.id ===
                birthday.gift.item
            ) {

                button.classList.add(
                    "selected"
                );

            }


            button.dataset.gift =
                gift.id;


            button.innerHTML = `
                <span>${gift.emoji}</span>
                <span>${gift.name}</span>
            `;


            button.addEventListener(
                "click",
                () => {

                    document
                        .querySelectorAll(
                            ".gift-choice"
                        )
                        .forEach(
                            item =>
                                item.classList.remove(
                                    "selected"
                                )
                        );


                    button.classList.add(
                        "selected"
                    );


                    birthday.gift.item =
                        gift.id;


                    updateGiftPreview();

                }
            );


            grid.appendChild(
                button
            );

        }
    );


    updateGiftPreview();

}


/* =========================================================
   GIFT PREVIEW
   ========================================================= */

function updateGiftPreview() {

    const preview =
        $("giftPreview");


    if (!preview) return;


    const gift =
        gifts.find(
            item =>
                item.id ===
                birthday.gift.item
        );


    if (!gift) return;


    preview.textContent =
        gift.emoji;


    const name =
        $("giftPreviewName");


    if (name) {

        name.textContent =
            gift.name;

    }

}


/* =========================================================
   GIFT NEXT
   ========================================================= */

const giftNext =
    $("giftNext");

if (giftNext) {

    giftNext.addEventListener(
        "click",
        () => {

            showScreen(6);

            buildFlowerShop();

        }
    );

}


/* =========================================================
   FLOWER SHOP
   ========================================================= */

function buildFlowerShop() {

    const grid =
        $("flowerGrid");


    if (!grid) return;


    grid.innerHTML = "";


    flowers.forEach(
        flower => {

            const card =
                document.createElement("div");


            card.className =
                "flower-card";


            const currentCount =
                birthday.flowers.filter(
                    item =>
                        item.name ===
                        flower.name
                ).length;


            if (currentCount > 0) {

                card.classList.add(
                    "selected"
                );

            }


            card.innerHTML = `

                <div class="flower-photo">

                    <span class="flower-emoji">
                        ${flower.emoji}
                    </span>

                    <span
                        class="flower-quantity"
                    >
                        ${currentCount}
                    </span>

                </div>

                <div class="flower-info">

                    <h3>
                        ${flower.name}
                    </h3>

                    <p>
                        ${flower.meaning}
                    </p>

                </div>

                <button
                    class="add-button"
                    type="button"
                    aria-label="Add ${flower.name}"
                >
                    +
                </button>

            `;


            const addButton =
                card.querySelector(
                    ".add-button"
                );


            addButton.addEventListener(
                "click",
                event => {

                    event.stopPropagation();


                    birthday.flowers.push(
                        flower
                    );


                    updateFlowerCard(
                        card,
                        flower
                    );


                    showToast(
                        `${flower.name} added 🌸`
                    );

                }
            );


            grid.appendChild(
                card
            );

        }
    );

}


/* =========================================================
   UPDATE FLOWER CARD
   ========================================================= */

function updateFlowerCard(
    card,
    flower
) {

    const count =
        birthday.flowers.filter(
            item =>
                item.name ===
                flower.name
        ).length;


    card.classList.toggle(
        "selected",
        count > 0
    );


    const quantity =
        card.querySelector(
            ".flower-quantity"
        );


    if (quantity) {

        quantity.textContent =
            count;

    }

}


/* =========================================================
   FLOWER NEXT
   ========================================================= */

const flowerNext =
    $("flowerNext");

if (flowerNext) {

    flowerNext.addEventListener(
        "click",
        () => {

            buildRibbonShop();

            showScreen(7);

        }
    );

}


/* =========================================================
   RIBBON SHOP
   ========================================================= */

function buildRibbonShop() {

    const grid =
        $("ribbonGrid");


    if (!grid) return;


    grid.innerHTML = "";


    ribbons.forEach(
        ribbon => {

            const button =
                document.createElement("button");


            button.type =
                "button";


            button.className =
                "ribbon-choice";


            if (
                ribbon.name ===
                birthday.ribbon
            ) {

                button.classList.add(
                    "selected"
                );

            }


            button.innerHTML = `

                <span
                    class="ribbon-swatch"
                    style="
                        background:
                        ${ribbon.colour};
                    "
                ></span>

                <strong>
                    ${ribbon.name}
                </strong>

            `;


            button.addEventListener(
                "click",
                () => {

                    document
                        .querySelectorAll(
                            ".ribbon-choice"
                        )
                        .forEach(
                            item =>
                                item.classList.remove(
                                    "selected"
                                )
                        );


                    button.classList.add(
                        "selected"
                    );


                    birthday.ribbon =
                        ribbon.name;


                    updateRibbonPreview(
                        ribbon
                    );

                }
            );


            grid.appendChild(
                button
            );

        }
    );


    const selectedRibbon =
        ribbons.find(
            item =>
                item.name ===
                birthday.ribbon
        );


    if (selectedRibbon) {

        updateRibbonPreview(
            selectedRibbon
        );

    }

}


/* =========================================================
   RIBBON PREVIEW
   ========================================================= */

function updateRibbonPreview(
    ribbon
) {

    const preview =
        $("ribbonPreview");


    const name =
        $("ribbonPreviewName");


    if (preview) {

        preview.style.background =
            ribbon.colour;

    }


    if (name) {

        name.textContent =
            ribbon.name;

    }

}


/* =========================================================
   FINISH BUTTON
   ========================================================= */

const finishButton =
    $("finishButton");

if (finishButton) {

    finishButton.addEventListener(
        "click",
        () => {

            createFinalBirthday();

            showScreen(8);

            setTimeout(
                createConfetti,
                400
            );

        }
    );

}


/* =========================================================
   FINAL BIRTHDAY
   ========================================================= */

function createFinalBirthday() {

    updateName();

    createNumberCandles();

    updateFinalGift();

    updateFinalFlowers();

    updateFinalDetails();

    updateFinalMessage();

}


/* =========================================================
   FINAL GIFT
   ========================================================= */

function updateFinalGift() {

    const giftElement =
        $("finalGift");


    const giftName =
        $("finalGiftName");


    const gift =
        gifts.find(
            item =>
                item.id ===
                birthday.gift.item
        );


    if (!gift) return;


    if (giftElement) {

        giftElement.textContent =
            gift.emoji;

    }


    if (giftName) {

        giftName.textContent =
            gift.name;

    }

}


/* =========================================================
   FINAL FLOWERS
   ========================================================= */

function updateFinalFlowers() {

    const container =
        $("finalBouquet");


    if (!container) return;


    container.innerHTML = "";


    if (
        birthday.flowers.length === 0
    ) {

        container.innerHTML =
            `<span class="final-flower">🌷</span>`;

        return;

    }


    const displayed =
        birthday.flowers.slice(
            -9
        );


    displayed.forEach(
        flower => {

            const span =
                document.createElement("span");


            span.className =
                "final-flower";


            span.textContent =
                flower.emoji;


            container.appendChild(
                span
            );

        }
    );

}


/* =========================================================
   FINAL DETAILS
   ========================================================= */

function updateFinalDetails() {

    const container =
        $("finalDetails");


    if (!container) return;


    const flowerCount =
        birthday.flowers.length;


    const gift =
        gifts.find(
            item =>
                item.id ===
                birthday.gift.item
        );


    container.innerHTML = `

        <div class="final-detail-item">

            <span>🎂</span>

            <strong>
                ${birthday.age}
            </strong>

            <small>
                years young
            </small>

        </div>


        <div class="final-detail-item">

            <span>🌸</span>

            <strong>
                ${flowerCount}
            </strong>

            <small>
                flowers chosen
            </small>

        </div>


        <div class="final-detail-item">

            <span>
                ${gift ? gift.emoji : "🎁"}
            </span>

            <strong>
                Gift
            </strong>

            <small>
                ${gift ? gift.name : "Surprise"}
            </small>

        </div>

    `;

}


/* =========================================================
   FINAL MESSAGE
   ========================================================= */

function updateFinalMessage() {

    const message =
        $("finalMessage");


    if (!message) return;


    if (birthday.cake.message) {

        message.innerHTML =
            `"${escapeHTML(
                birthday.cake.message
            )}"`;

    }

    else {

        message.innerHTML =
            `A little birthday world made
             especially for <span>
             ${escapeHTML(
                 birthday.name
             )}
             </span>.`;

    }

}


/* =========================================================
   HTML ESCAPE
   ========================================================= */

function escapeHTML(text) {

    return String(text)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


/* =========================================================
   CONFETTI
   ========================================================= */

function createConfetti() {

    const symbols = [
        "♡",
        "✦",
        "✿",
        "❀",
        "•"
    ];


    for (
        let i = 0;
        i < 35;
        i++
    ) {

        const piece =
            document.createElement("span");


        piece.className =
            "confetti-piece";


        piece.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        piece.style.left =
            `${Math.random() * 100}%`;


        piece.style.fontSize =
            `${8 + Math.random() * 13}px`;


        piece.style.animationDelay =
            `${Math.random() * .8}s`;


        document.body.appendChild(
            piece
        );


        setTimeout(
            () => {
                piece.remove();
            },
            5000
        );

    }

}


/* =========================================================
   MUSIC
   ========================================================= */

let audioContext = null;

let musicPlaying = false;

let musicTimer = null;


const musicButton =
    $("musicButton");


if (musicButton) {

    musicButton.addEventListener(
        "click",
        toggleMusic
    );

}


function toggleMusic() {

    if (!musicPlaying) {

        startBirthdayMusic();

    }

    else {

        stopBirthdayMusic();

    }

}


/* =========================================================
   SIMPLE BIRTHDAY MELODY
   ========================================================= */

function startBirthdayMusic() {

    try {

        audioContext =
            new (
                window.AudioContext ||
                window.webkitAudioContext
            )();


        musicPlaying = true;

        musicButton.textContent =
            "♫";


        playMelody();


    }

    catch (error) {

        console.warn(
            "Audio unavailable.",
            error
        );

        showToast(
            "Your browser blocked the music ♡"
        );

    }

}


/* =========================================================
   MELODY
   ========================================================= */

function playMelody() {

    if (
        !musicPlaying ||
        !audioContext
    ) {
        return;
    }


    const notes = [
        261.63,
        261.63,
        293.66,
        261.63,
        349.23,
        329.63,

        261.63,
        261.63,
        293.66,
        261.63,
        392.00,
        349.23
    ];


    let time =
        audioContext.currentTime;


    notes.forEach(
        (frequency, index) => {

            const oscillator =
                audioContext.createOscillator();


            const gain =
                audioContext.createGain();


            oscillator.type =
                "sine";


            oscillator.frequency.value =
                frequency;


            gain.gain.setValueAtTime(
                0.0001,
                time
            );


            gain.gain.exponentialRampToValueAtTime(
                0.09,
                time + .03
            );


            gain.gain.exponentialRampToValueAtTime(
                0.0001,
                time + .35
            );


            oscillator.connect(
                gain
            );


            gain.connect(
                audioContext.destination
            );


            oscillator.start(
                time
            );


            oscillator.stop(
                time + .38
            );


            time += .42;

        }
    );


    musicTimer =
        setTimeout(
            playMelody,
            5200
        );

}


/* =========================================================
   STOP MUSIC
   ========================================================= */

function stopBirthdayMusic() {

    musicPlaying =
        false;


    clearTimeout(
        musicTimer
    );


    if (audioContext) {

        audioContext.close();

        audioContext =
            null;

    }


    if (musicButton) {

        musicButton.textContent =
            "♫";

    }

}


/* =========================================================
   RESTART
   ========================================================= */

const restartButton =
    $("restartButton");


if (restartButton) {

    restartButton.addEventListener(
        "click",
        () => {

            birthday.name = "";
            birthday.age = "";

            birthday.cake = {
                shape: "round",
                flavour: "strawberry",
                colour: "#e9a8b9",
                decoration: "flowers",
                message: ""
            };

            birthday.gift = {
                item: "teddy"
            };

            birthday.flowers = [];

            birthday.ribbon =
                "Blush Pink";


            if ($("personName")) {
                $("personName").value =
                    "";
            }


            if ($("personAge")) {
                $("personAge").value =
                    "";
            }


            showScreen(0);

        }
    );

}


/* =========================================================
   INITIALISE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateProgress();

        setupCakeFlavour();

        updateCakePreview();

    }
);
