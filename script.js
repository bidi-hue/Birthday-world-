const state = {
    age: 0,
    cake: "chocolate",
    gift: "cozy",
    flower: "rose",
    song: "yes",
    bouquet: []
};


// ============================================
// BASIC HELPERS
// ============================================

const $ = (id) => document.getElementById(id);

const scenes = [
    ...document.querySelectorAll(".scene")
];

const audio = $("birthdayAudio");


function showScene(sceneId) {

    scenes.forEach((scene) => {

        scene.classList.toggle(
            "scene--active",
            scene.id === sceneId
        );

    });

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });
}


// ============================================
// WELCOME → QUESTIONS
// ============================================

document
    .querySelectorAll("[data-next]")
    .forEach((button) => {

        button.addEventListener("click", () => {

            const nextScene = button.dataset.next;

            showScene(nextScene);

        });

    });


// ============================================
// CAKE NAMES
// ============================================

const cakeNames = {

    chocolate: "Chocolate",

    strawberry: "Strawberry",

    vanilla: "Vanilla",

    blueberry: "Blueberry",

    rainbow: "Rainbow"

};


// ============================================
// START THE PARTY
// ============================================

$("startParty").addEventListener(
    "click",
    () => {

        const age = parseInt(
            $("age").value,
            10
        );


        // Check age

        if (
            !age ||
            age < 1 ||
            age > 120
        ) {

            $("age").focus();

            $("age").style.borderColor =
                "#f5b7ca";

            return;

        }


        // Save answers

        state.age = age;

        state.cake =
            $("cake").value;

        state.gift =
            $("gift").value;

        state.flower =
            $("flower").value;

        state.song =
            $("song").value;


        // Create their candles

        buildCake(age);


        // Change cake description

        $("cakeCaption").textContent =
            `${cakeNames[state.cake]} cake, made just for you.`;


        // Go to party

        showScene("party");

    }
);


// ============================================
// CREATE CANDLES
// ============================================

function buildCake(age) {

    const candleHolder =
        $("candles");


    candleHolder.innerHTML = "";


    /*
       We don't want to physically create
       80–100 candles because the cake would
       become ridiculous on a phone.

       Up to 24 candles are displayed.
    */

    const visibleCandles =
        Math.min(age, 24);


    for (
        let i = 0;
        i < visibleCandles;
        i++
    ) {

        const candle =
            document.createElement("span");


        candle.className =
            "candle";


        candleHolder.appendChild(
            candle
        );

    }


    // For older ages

    if (age > 24) {

        $("cakeCaption").textContent =
            `${cakeNames[state.cake]} cake with ${age} candles in spirit. ✨`;

    }

}


// ============================================
// MAKE A WISH
// ============================================

$("wishBtn").addEventListener(
    "click",
    () => {


        // Turn off candles one by one

        const candles =
            document.querySelectorAll(
                ".candle"
            );


        candles.forEach(
            (candle, index) => {

                setTimeout(
                    () => {

                        candle.classList.add(
                            "out"
                        );

                    },
                    index * 25
                );

            }
        );


        // Confetti

        createConfetti();


        // Birthday song

        if (
            state.song === "yes"
        ) {

            /*
              Browsers allow audio after
              a user interaction, so the
              wish button is a good moment
              to start the song.
            */

            audio
                .play()
                .catch(() => {

                    console.log(
                        "Music could not start."
                    );

                });


            $("songText").textContent =
                "🎶 The birthday song is playing just for you.";

        }

        else {

            $("songText").textContent =
                "The whole little room is cheering for you. ✨";

        }


        // Flower preview

        $("miniBouquet").textContent =
            flowerEmoji[state.flower] ||
            "🌷";


        // Move to celebration

        setTimeout(
            () => {

                showScene(
                    "afterWish"
                );

            },
            850
        );

    }
);


// ============================================
// FLOWER EMOJIS
// ============================================

const flowerEmoji = {

    rose: "🌹",

    tulip: "🌷",

    sunflower: "🌻",

    lavender: "🪻",

    daisy: "🌼"

};


// ============================================
// FLOWER SELECTION
// ============================================

document
    .querySelectorAll(
        ".flower-options button"
    )
    .forEach((button) => {


        button.addEventListener(
            "click",
            () => {


                const flower =
                    button.dataset.flower;


                // Toggle flower

                button.classList.toggle(
                    "selected"
                );


                // Add

                if (
                    button.classList.contains(
                        "selected"
                    )
                ) {

                    state.bouquet.push(
                        flower
                    );

                }

                // Remove

                else {

                    state.bouquet =
                        state.bouquet.filter(
                            (item) =>
                                item !== flower
                        );

                }


                renderBouquet();

            }
        );

    });


// ============================================
// DISPLAY BOUQUET
// ============================================

function renderBouquet() {

    const display =
        $("bouquetDisplay");


    display.innerHTML = "";


    // Empty bouquet

    if (
        state.bouquet.length === 0
    ) {

        display.innerHTML = `
            <span class="bouquet-empty">
                Your bouquet will bloom here ♡
            </span>
        `;

        return;

    }


    // Display flowers

    state.bouquet.forEach(
        (flower) => {

            const flowerElement =
                document.createElement(
                    "span"
                );


            flowerElement.textContent =
                flower;


            display.appendChild(
                flowerElement
            );

        }
    );

}


// ============================================
// GIFT TITLES
// ============================================

const giftTitles = {

    cozy:
        "A little comfort, wrapped up.",

    flowers:
        "A bouquet that never wilts.",

    books:
        "A little story for your shelf.",

    stars:
        "A pocketful of magic.",

    surprise:
        "A surprise chosen with care."

};


// ============================================
// GIFT INTRODUCTIONS
// ============================================

const giftIntros = {

    cozy:
        "For the days when you need something soft and kind.",

    flowers:
        "These ones are yours. No returning them. 🌷",

    books:
        "For all the worlds you haven't visited yet.",

    stars:
        "For the part of you that still makes wishes.",

    surprise:
        "Because sometimes the best gift is simply not knowing what's next."

};


// ============================================
// GIFT MESSAGES
// ============================================

const giftMessages = {

    cozy:
        "Your gift is permission to rest. You don't have to earn softness. You deserve a gentle day, a warm drink, and a little peace.",

    flowers:
        "Your gift is a reminder: beautiful things can belong to you too. Keep these flowers as long as you like. 🌷",

    books:
        "Your gift is a story waiting to take you somewhere else. May you always have a place to escape to, and a reason to come back.",

    stars:
        "Your gift is a wish: may something unexpectedly lovely find you this year. ✨",

    surprise:
        "Your surprise is this: somewhere out there, a tiny birthday world was made because someone thought you deserved to be celebrated."

};


// ============================================
// GO TO GIFT
// ============================================

$("giftBtn").addEventListener(
    "click",
    () => {


        // Create final bouquet

        const selectedFlowers =
            state.bouquet.length
                ? state.bouquet.join("")
                : flowerEmoji[state.flower];


        $("finalBouquet").textContent =
            selectedFlowers;


        // Change gift text

        $("giftTitle").textContent =
            giftTitles[state.gift];


        $("giftIntro").textContent =
            giftIntros[state.gift];


        // Reset gift

        $("giftMessage")
            .classList.remove(
                "show"
            );


        $("giftMessage").textContent =
            "";


        $("openGift").style.display =
            "block";


        // Show gift scene

        showScene("gift");

    }
);


// ============================================
// OPEN GIFT
// ============================================

$("openGift").addEventListener(
    "click",
    () => {


        // Hide gift box

        $("openGift").style.display =
            "none";


        // Put message inside

        $("giftMessage").textContent =
            giftMessages[state.gift];


        // Reveal message

        $("giftMessage")
            .classList.add(
                "show"
            );


        /*
          Give the visitor a few seconds
          to read their gift message.
        */

        setTimeout(
            () => {

                showScene("final");

            },
            4200
        );

    }
);


// ============================================
// RESTART
// ============================================

$("restart").addEventListener(
    "click",
    () => {


        // Stop music

        audio.pause();

        audio.currentTime = 0;


        // Reset bouquet

        state.bouquet = [];


        // Remove selected flowers

        document
            .querySelectorAll(
                ".flower-options button"
            )
            .forEach(
                (button) => {

                    button.classList.remove(
                        "selected"
                    );

                }
            );


        renderBouquet();


        // Return to beginning

        showScene("welcome");

    }
);


// ============================================
// CONFETTI
// ============================================

function createConfetti() {

    const layer =
        $("confetti");


    layer.innerHTML = "";


    const symbols = [
        "✦",
        "✧",
        "♡",
        "•"
    ];


    for (
        let i = 0;
        i < 70;
        i++
    ) {

        const piece =
            document.createElement(
                "span"
            );


        piece.className =
            "confetti";


        // Random symbol

        piece.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        // Random horizontal position

        piece.style.left =
            Math.random() * 100 +
            "%";


        // Random size

        piece.style.fontSize =
            8 +
            Math.random() * 14 +
            "px";


        // Soft birthday colours

        const colors = [
            "#f5b7ca",
            "#f4d58d",
            "#c9b7ec",
            "#fff8ee"
        ];


        piece.style.color =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        // Random sideways movement

        piece.style.setProperty(
            "--x",
            Math.random() * 220 -
            110 +
            "px"
        );


        // Random starting delay

        piece.style.animationDelay =
            Math.random() * 0.65 +
            "s";


        layer.appendChild(
            piece
        );

    }


    // Clean everything after animation

    setTimeout(
        () => {

            layer.innerHTML = "";

        },
        3500
    );

}
