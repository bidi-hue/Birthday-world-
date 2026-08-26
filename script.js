/* =========================================================
   A LITTLE BIRTHDAY WORLD
   COMPLETE SCRIPT
   ========================================================= */


/* =========================================================
   DATA
   ========================================================= */

const flowers = [

    {
        name: "Red Rose",
        meaning: "Love",
        type: "rose",
        color: "#c94f67"
    },

    {
        name: "Pink Rose",
        meaning: "Gratitude",
        type: "rose",
        color: "#e69aaa"
    },

    {
        name: "White Rose",
        meaning: "Innocence",
        type: "rose",
        color: "#fff7f5"
    },

    {
        name: "Yellow Rose",
        meaning: "Friendship",
        type: "rose",
        color: "#f2c94c"
    },

    {
        name: "Sunflower",
        meaning: "Joy",
        type: "sunflower",
        color: "#e8ad2f"
    },

    {
        name: "Tulip",
        meaning: "Perfect Love",
        type: "tulip",
        color: "#d95772"
    },

    {
        name: "Lily",
        meaning: "Purity",
        type: "lily",
        color: "#fffaf0"
    },

    {
        name: "Orchid",
        meaning: "Beauty",
        type: "orchid",
        color: "#a77ac5"
    },

    {
        name: "Daisy",
        meaning: "Innocence",
        type: "daisy",
        color: "#fffdf3"
    },

    {
        name: "Peony",
        meaning: "Prosperity",
        type: "peony",
        color: "#e88fa8"
    },

    {
        name: "Carnation",
        meaning: "Admiration",
        type: "carnation",
        color: "#df718c"
    },

    {
        name: "Lavender",
        meaning: "Calmness",
        type: "lavender",
        color: "#aa91c8"
    },

    {
        name: "Lotus",
        meaning: "Peace",
        type: "lotus",
        color: "#e89aaa"
    },

    {
        name: "Cherry Blossom",
        meaning: "New Beginnings",
        type: "cherry",
        color: "#f0a7bd"
    },

    {
        name: "Iris",
        meaning: "Hope",
        type: "iris",
        color: "#7476c7"
    },

    {
        name: "Daffodil",
        meaning: "Happiness",
        type: "daffodil",
        color: "#f4d24f"
    },

    {
        name: "Hydrangea",
        meaning: "Gratitude",
        type: "hydrangea",
        color: "#9b9bd0"
    },

    {
        name: "Baby's Breath",
        meaning: "Innocence",
        type: "babys-breath",
        color: "#fffaf8"
    },

    {
        name: "Freesia",
        meaning: "Trust",
        type: "freesia",
        color: "#f2c7d0"
    },

    {
        name: "Poppy",
        meaning: "Remembrance",
        type: "poppy",
        color: "#e85b62"
    },

    {
        name: "Magnolia",
        meaning: "Nobility",
        type: "magnolia",
        color: "#f3d8df"
    },

    {
        name: "Zinnia",
        meaning: "Lasting Friendship",
        type: "zinnia",
        color: "#e77a91"
    },

    {
        name: "Bluebell",
        meaning: "Humility",
        type: "bluebell",
        color: "#8b91d1"
    },

    {
        name: "Ranunculus",
        meaning: "Charm",
        type: "ranunculus",
        color: "#f1a5a9"
    }

];


const greenery = [

    {
        name: "Eucalyptus",
        type: "eucalyptus",
        color: "#91ad91"
    },

    {
        name: "Fern",
        type: "fern",
        color: "#668c68"
    },

    {
        name: "Baby's Breath",
        type: "baby-green",
        color: "#dce8d8"
    },

    {
        name: "Olive Branch",
        type: "olive",
        color: "#879b72"
    },

    {
        name: "Ivy",
        type: "ivy",
        color: "#668968"
    },

    {
        name: "Ruscus",
        type: "ruscus",
        color: "#718f6c"
    },

    {
        name: "Mint",
        type: "mint",
        color: "#91b99b"
    },

    {
        name: "Pampas Grass",
        type: "pampas",
        color: "#d8c6a9"
    }

];


const ribbons = [

    {
        name: "Blush Pink",
        color: "#d99aaa"
    },

    {
        name: "Dusty Rose",
        color: "#b9798b"
    },

    {
        name: "Lavender",
        color: "#a993c7"
    },

    {
        name: "Sage Green",
        color: "#91a58c"
    },

    {
        name: "Baby Blue",
        color: "#9dbbd3"
    },

    {
        name: "Cream",
        color: "#eee1c8"
    },

    {
        name: "Cherry Red",
        color: "#b94f62"
    },

    {
        name: "Champagne",
        color: "#d3b36c"
    }

];


const wrappings = [

    {
        name: "Blush Pink",
        color: "#e8b7c1"
    },

    {
        name: "Soft Cream",
        color: "#eee5d6"
    },

    {
        name: "Sage Garden",
        color: "#aab9a1"
    },

    {
        name: "Dusty Lavender",
        color: "#c4b5d2"
    },

    {
        name: "Peach",
        color: "#edb49d"
    },

    {
        name: "Kraft Paper",
        color: "#c7a87b"
    },

    {
        name: "Powder Blue",
        color: "#b6cddd"
    },

    {
        name: "Deep Rose",
        color: "#9e6575"
    }

];


/* =========================================================
   STATE
   ========================================================= */

const state = {

    name: "Birthday Star",

    age: "",

    cake: "chocolate",

    mood: "dreamy",

    gift: "comfort",

    song: "yes",

    flowers: {},

    greenery: {},

    ribbon: null,

    wrapping: null

};


/* =========================================================
   ELEMENTS
   ========================================================= */

const rooms =
    document.querySelectorAll(".room");

const progress =
    document.getElementById("progress-fill");

const audio =
    document.getElementById("birthday-audio");

const soundButton =
    document.getElementById("sound-toggle");

const confetti =
    document.getElementById("confetti");


/* =========================================================
   ROOM NAVIGATION
   ========================================================= */

function goToRoom(number) {

    rooms.forEach(room => {

        room.classList.remove("active");

    });


    const target =
        document.getElementById(
            `room-${number}`
        );


    if (!target) return;


    target.classList.add("active");


    const total =
        rooms.length - 1;


    const percentage =
        (number / total) * 100;


    if (progress) {

        progress.style.width =
            `${percentage}%`;

    }


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* =========================================================
   SAVE USER INFORMATION
   ========================================================= */

function saveBirthdayDetails() {

    const nameInput =
        document.getElementById("person-name");

    const ageInput =
        document.getElementById("person-age");

    const cakeInput =
        document.getElementById("cake-choice");

    const moodInput =
        document.getElementById("mood-choice");

    const giftInput =
        document.getElementById("gift-choice");

    const songInput =
        document.getElementById("song-choice");


    const enteredName =
        nameInput.value.trim();


    state.name =
        enteredName || "Birthday Star";


    state.age =
        ageInput.value.trim();


    state.cake =
        cakeInput.value;


    state.mood =
        moodInput.value;


    state.gift =
        giftInput.value;


    state.song =
        songInput.value;


    document.getElementById("banner-name").textContent =
        state.name.toUpperCase();


    document.getElementById("celebration-name").textContent =
        state.name;


    document.getElementById("final-name").textContent =
        state.name;


    updateCake();

}


/* =========================================================
   CAKE
   ========================================================= */

function updateCake() {

    const top =
        document.getElementById("cake-top");

    const middle =
        document.getElementById("cake-middle");

    const bottom =
        document.getElementById("cake-bottom");


    if (!top || !middle || !bottom) return;


    const cakeColors = {

        chocolate: [
            "#f2c8b8",
            "#a96155",
            "#7d433b"
        ],

        strawberry: [
            "#ffd4df",
            "#ee91aa",
            "#d86683"
        ],

        vanilla: [
            "#fff1cc",
            "#e7c47d",
            "#d2a85d"
        ],

        blueberry: [
            "#ddd8f4",
            "#9d91cf",
            "#7165a7"
        ],

        rainbow: [
            "#f7b6bd",
            "#f3d47b",
            "#91b9d8"
        ]

    };


    const colors =
        cakeColors[state.cake] ||
        cakeColors.chocolate;


    top.style.background =
        colors[0];


    middle.style.background =
        colors[1];


    bottom.style.background =
        colors[2];


    createCandles();

}


/* =========================================================
   CANDLES
   ========================================================= */

function createCandles() {

    const container =
        document.getElementById("candle-row");


    if (!container) return;


    container.innerHTML = "";


    let candleCount =
        parseInt(state.age);


    if (
        !Number.isFinite(candleCount) ||
        candleCount < 1
    ) {

        candleCount = 3;

    }


    /*
       Don't put 47 actual candles on the cake.
       We show a visually sensible number while
       preserving the actual age in the message.
    */

    const visibleCount =
        Math.min(
            Math.max(
                Math.ceil(candleCount / 5),
                3
            ),
            9
        );


    for (
        let i = 0;
        i < visibleCount;
        i++
    ) {

        const candle =
            document.createElement("span");


        candle.className =
            "candle";


        candle.innerHTML = `
            <i></i>
        `;


        container.appendChild(candle);

    }

}


/* =========================================================
   LIGHTS
   ========================================================= */

function turnOnLights() {

    const scene =
        document.getElementById("party-scene");

    const darkMessage =
        document.getElementById("dark-message");

    const partyReady =
        document.getElementById("party-ready");


    scene.classList.add("lights-on");


    darkMessage.classList.add("hide");


    setTimeout(() => {

        partyReady.classList.add("show");

    }, 1100);


    const caption =
        document.getElementById("party-caption");


    if (state.age) {

        caption.textContent =
            `Your ${state.age}th birthday cake is ready.`;

    }

}


/* =========================================================
   BLOW CANDLES
   ========================================================= */

function blowCandles() {

    const candles =
        document.querySelectorAll(
            ".candle i"
        );


    candles.forEach(
        (flame, index) => {

            setTimeout(() => {

                flame.classList.add("out");

            }, index * 100);

        }
    );


    launchConfetti();


    setTimeout(() => {

        goToRoom(3);

        updateSongStatus();

    }, 900);

}


/* =========================================================
   SONG
   ========================================================= */

function playBirthdaySong() {

    if (state.song !== "yes") {

        return;

    }


    if (!audio) return;


    audio.currentTime = 0;


    const playPromise =
        audio.play();


    if (
        playPromise &&
        typeof playPromise.catch === "function"
    ) {

        playPromise.catch(() => {

            /*
              Browsers can block autoplay.
              The sound button can be used manually.
            */

        });

    }

}


/* =========================================================
   SONG STATUS
   ========================================================= */

function updateSongStatus() {

    const status =
        document.getElementById("song-status");


    if (!status) return;


    if (state.song === "yes") {

        status.textContent =
            `Happy Birthday, ${state.name}! The whole little room is cheering for you. 🎶`;

    }

    else {

        status.textContent =
            `Happy Birthday, ${state.name}! Make your quiet little wish. ✨`;

    }

}


/* =========================================================
   SOUND BUTTON
   ========================================================= */

soundButton.addEventListener(
    "click",
    () => {

        if (!audio) return;


        if (audio.paused) {

            audio.play().catch(() => {});

            soundButton.textContent =
                "♫";

        }

        else {

            audio.pause();

            soundButton.textContent =
                "🔇";

        }

    }
);


/* =========================================================
   SVG HELPERS
   ========================================================= */

function svgWrap(
    content,
    viewBox = "0 0 100 100"
) {

    return `
        <svg
            viewBox="${viewBox}"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            ${content}
        </svg>
    `;

}


/* =========================================================
   FLOWER SVG
   ========================================================= */

function flowerSVG(
    type,
    color
) {

    let content = "";


    const petal = (
        cx,
        cy,
        rx,
        ry,
        rotation = 0
    ) => {

        return `
            <ellipse
                cx="${cx}"
                cy="${cy}"
                rx="${rx}"
                ry="${ry}"
                fill="${color}"
                transform="
                    rotate(
                        ${rotation}
                        ${cx}
                        ${cy}
                    )
                "
            />
        `;

    };


    const center = `
        <circle
            cx="50"
            cy="50"
            r="8"
            fill="#d59b52"
        />
    `;


    /* ROSE */

    if (type === "rose") {

        content = `

            ${petal(50,25,15,25)}

            ${petal(70,38,22,14,55)}

            ${petal(67,63,22,14,120)}

            ${petal(50,75,15,25)}

            ${petal(33,63,22,14,-120)}

            ${petal(30,38,22,14,-55)}

            <circle
                cx="50"
                cy="50"
                r="18"
                fill="${color}"
            />

            <path
                d="
                    M38 48
                    C45 36 62 39 62 50
                    C62 61 45 64 39 53
                "
                fill="none"
                stroke="#fff"
                stroke-opacity=".35"
                stroke-width="3"
            />

        `;

    }


    /* SUNFLOWER */

    else if (
        type === "sunflower"
    ) {

        for (
            let i = 0;
            i < 12;
            i++
        ) {

            const angle =
                i * 30;


            content += `
                <ellipse
                    cx="50"
                    cy="23"
                    rx="8"
                    ry="24"
                    fill="${color}"
                    transform="
                        rotate(
                            ${angle}
                            50 50
                        )
                    "
                />
            `;

        }


        content += `

            <circle
                cx="50"
                cy="50"
                r="17"
                fill="#70462e"
            />

            <circle
                cx="43"
                cy="44"
                r="3"
                fill="#ad793c"
            />

            <circle
                cx="57"
                cy="52"
                r="3"
                fill="#ad793c"
            />

        `;

    }


    /* TULIP */

    else if (
        type === "tulip"
    ) {

        content = `

            <path
                d="
                    M20 35
                    C28 15 39 25 50 35
                    C61 25 72 15 80 35
                    C80 70 66 82 50 82
                    C34 82 20 70 20 35
                    Z
                "
                fill="${color}"
            />

            <path
                d="
                    M20 35
                    C30 47 39 48 50 35
                    C61 48 70 47 80 35
                "
                fill="none"
                stroke="#fff"
                stroke-opacity=".3"
                stroke-width="3"
            />

        `;

    }


    /* LILY */

    else if (
        type === "lily"
    ) {

        content = `

            ${petal(50,23,13,31)}

            ${petal(73,37,14,27,55)}

            ${petal(67,65,14,27,120)}

            ${petal(33,65,14,27,-120)}

            ${petal(27,37,14,27,-55)}

            ${center}

        `;

    }


    /* ORCHID */

    else if (
        type === "orchid"
    ) {

        content = `

            ${petal(50,27,13,23)}

            ${petal(72,39,20,12,60)}

            ${petal(67,66,19,12,120)}

            ${petal(33,66,19,12,-120)}

            ${petal(28,39,20,12,-60)}

            <circle
                cx="50"
                cy="52"
                r="11"
                fill="#f4c6d3"
            />

            <circle
                cx="50"
                cy="52"
                r="4"
                fill="#c47a96"
            />

        `;

    }


    /* PEONY */

    else if (
        type === "peony"
    ) {

        content = `

            ${petal(50,27,18,22)}

            ${petal(70,38,21,17,50)}

            ${petal(68,62,21,17,110)}

            ${petal(50,73,18,22)}

            ${petal(32,62,21,17,-110)}

            ${petal(30,38,21,17,-50)}

            <circle
                cx="50"
                cy="50"
                r="20"
                fill="${color}"
            />

            <circle
                cx="43"
                cy="46"
                r="7"
                fill="#fff"
                fill-opacity=".2"
            />

        `;

    }


    /* LOTUS */

    else if (
        type === "lotus"
    ) {

        content = `

            <path
                d="
                    M50 76
                    C25 67 23 48 30 34
                    C40 42 48 52 50 76
                "
                fill="${color}"
            />

            <path
                d="
                    M50 76
                    C75 67 77 48 70 34
                    C60 42 52 52 50 76
                "
                fill="${color}"
            />

            <path
                d="
                    M50 76
                    C38 62 38 37 50 22
                    C62 37 62 62 50 76
                "
                fill="${color}"
            />

        `;

    }


    /* IRIS */

    else if (
        type === "iris"
    ) {

        content = `

            ${petal(50,26,15,28)}

            ${petal(72,40,20,13,55)}

            ${petal(64,66,22,12,120)}

            ${petal(36,66,22,12,-120)}

            ${petal(28,40,20,13,-55)}

            <circle
                cx="50"
                cy="52"
                r="8"
                fill="#f1c66c"
            />

        `;

    }


    /* CHERRY */

    else if (
        type === "cherry"
    ) {

        for (
            let i = 0;
            i < 5;
            i++
        ) {

            const angle =
                i * 72;


            const radians =
                angle *
                Math.PI /
                180;


            const x =
                50 +
                Math.cos(radians) *
                22;


            const y =
                50 +
                Math.sin(radians) *
                22;


            content += `
                <circle
                    cx="${x}"
                    cy="${y}"
                    r="16"
                    fill="${color}"
                />
            `;

        }


        content += center;

    }


    /* HYDRANGEA */

    else if (
        type === "hydrangea"
    ) {

        for (
            let i = 0;
            i < 9;
            i++
        ) {

            const angle =
                i * 40;


            const radians =
                angle *
                Math.PI /
                180;


            const x =
                50 +
                Math.cos(radians) *
                25;


            const y =
                50 +
                Math.sin(radians) *
                25;


            content += `

                <circle
                    cx="${x}"
                    cy="${y}"
                    r="14"
                    fill="${color}"
                />

                <circle
                    cx="${x}"
                    cy="${y}"
                    r="4"
                    fill="#f4d6df"
                />

            `;

        }

    }


    /* BABY'S BREATH */

    else if (
        type === "babys-breath"
    ) {

        content = `

            <path
                d="
                    M50 90
                    C50 65 50 45 50 25
                "
                stroke="#7d9b7b"
                stroke-width="3"
                fill="none"
            />

            <path
                d="
                    M50 55 L30 38
                    M50 48 L70 30
                    M50 68 L30 58
                    M50 65 L72 52
                "
                stroke="#7d9b7b"
                stroke-width="2"
                fill="none"
            />

            <g fill="#fffaf8">

                <circle cx="28" cy="36" r="7"/>
                <circle cx="70" cy="28" r="7"/>
                <circle cx="28" cy="57" r="7"/>
                <circle cx="73" cy="50" r="7"/>
                <circle cx="50" cy="23" r="7"/>

            </g>

        `;

    }


    /* SIMPLE FLOWERS */

    else {

        for (
            let i = 0;
            i < 8;
            i++
        ) {

            const angle =
                i * 45;


            content += `
                <ellipse
                    cx="50"
                    cy="25"
                    rx="11"
                    ry="22"
                    fill="${color}"
                    transform="
                        rotate(
                            ${angle}
                            50 50
                        )
                    "
                />
            `;

        }


        content += center;

    }


    return svgWrap(content);

}


/* =========================================================
   GREENERY SVG
   ========================================================= */

function greenerySVG(
    type,
    color
) {

    let content = "";


    if (
        type === "eucalyptus" ||
        type === "olive" ||
        type === "mint"
    ) {

        content = `

            <path
                d="
                    M50 92
                    C48 65 52 42 50 12
                "
                stroke="#657d62"
                stroke-width="3"
                fill="none"
            />

            <ellipse
                cx="38"
                cy="30"
                rx="13"
                ry="7"
                fill="${color}"
                transform="rotate(-25 38 30)"
            />

            <ellipse
                cx="64"
                cy="42"
                rx="13"
                ry="7"
                fill="${color}"
                transform="rotate(25 64 42)"
            />

            <ellipse
                cx="37"
                cy="54"
                rx="13"
                ry="7"
                fill="${color}"
                transform="rotate(-25 37 54)"
            />

            <ellipse
                cx="65"
                cy="67"
                rx="13"
                ry="7"
                fill="${color}"
                transform="rotate(25 65 67)"
            />

            <ellipse
                cx="43"
                cy="76"
                rx="12"
                ry="6"
                fill="${color}"
                transform="rotate(-20 43 76)"
            />

        `;

    }


    else if (
        type === "fern" ||
        type === "ruscus"
    ) {

        content = `

            <path
                d="
                    M50 94
                    C50 65 49 40 50 8
                "
                stroke="#597558"
                stroke-width="3"
                fill="none"
            />

            <path
                d="
                    M50 22 L28 14
                    M50 30 L72 21
                    M50 39 L25 32
                    M50 48 L75 40
                    M50 58 L22 52
                    M50 68 L77 60
                    M50 78 L28 72
                "
                stroke="${color}"
                stroke-width="5"
                fill="none"
                stroke-linecap="round"
            />

        `;

    }


    else if (
        type === "ivy"
    ) {

        content = `

            <path
                d="
                    M50 90
                    C25 70 35 48 62 45
                    C78 43 78 25 62 14
                "
                stroke="#5f805e"
                stroke-width="4"
                fill="none"
            />

            <circle
                cx="38"
                cy="65"
                r="10"
                fill="${color}"
            />

            <circle
                cx="51"
                cy="53"
                r="10"
                fill="${color}"
            />

            <circle
                cx="65"
                cy="44"
                r="10"
                fill="${color}"
            />

            <circle
                cx="68"
                cy="26"
                r="9"
                fill="${color}"
            />

        `;

    }


    else if (
        type === "pampas"
    ) {

        content = `

            <path
                d="
                    M50 92
                    C48 55 43 32 34 8
                "
                stroke="#9a886e"
                stroke-width="3"
                fill="none"
            />

            <path
                d="
                    M50 92
                    C52 55 57 30 67 7
                "
                stroke="#9a886e"
                stroke-width="3"
                fill="none"
            />

            <ellipse
                cx="32"
                cy="15"
                rx="11"
                ry="20"
                fill="${color}"
                opacity=".8"
            />

            <ellipse
                cx="68"
                cy="14"
                rx="11"
                ry="20"
                fill="${color}"
                opacity=".8"
            />

        `;

    }


    else {

        content = `

            <path
                d="
                    M50 92
                    C48 60 52 35 50 10
                "
                stroke="#657d62"
                stroke-width="3"
                fill="none"
            />

            <ellipse
                cx="38"
                cy="35"
                rx="15"
                ry="8"
                fill="${color}"
                transform="rotate(-30 38 35)"
            />

            <ellipse
                cx="64"
                cy="52"
                rx="15"
                ry="8"
                fill="${color}"
                transform="rotate(30 64 52)"
            />

        `;

    }


    return svgWrap(content);

}


/* =========================================================
   RENDER FLOWERS
   ========================================================= */

function renderFlowers() {

    const grid =
        document.getElementById("flower-grid");


    if (!grid) return;


    grid.innerHTML = "";


    flowers.forEach(
        (flower, index) => {

            const quantity =
                state.flowers[flower.name] || 0;


            const card =
                document.createElement("article");


            card.className =
                "flower-card";


            if (quantity > 0) {

                card.classList.add(
                    "selected"
                );

            }


            card.innerHTML = `

                <div class="flower-photo">

                    ${flowerSVG(
                        flower.type,
                        flower.color
                    )}

                    <span
                        class="flower-quantity"
                        id="flower-q-${index}"
                    >
                        ${quantity}
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
                () => {

                    state.flowers[
                        flower.name
                    ] =
                        (state.flowers[
                            flower.name
                        ] || 0) + 1;


                    updateFlowerCard(
                        card,
                        flower,
                        index
                    );


                    updateFlowerCount();

                }
            );


            grid.appendChild(card);

        }
    );

}


/* =========================================================
   UPDATE FLOWER CARD
   ========================================================= */

function updateFlowerCard(
    card,
    flower,
    index
) {

    const quantity =
        state.flowers[
            flower.name
        ] || 0;


    const number =
        card.querySelector(
            ".flower-quantity"
        );


    number.textContent =
        quantity;


    if (quantity > 0) {

        card.classList.add(
            "selected"
        );

    }

}


/* =========================================================
   FLOWER COUNT
   ========================================================= */

function updateFlowerCount() {

    const count =
        Object.values(
            state.flowers
        ).reduce(
            (sum, value) =>
                sum + value,
            0
        );


    const element =
        document.getElementById(
            "flower-count"
        );


    if (element) {

        element.textContent =
            count;

    }

}


/* =========================================================
   RENDER GREENERY
   ========================================================= */

function renderGreenery() {

    const grid =
        document.getElementById(
            "greenery-grid"
        );


    if (!grid) return;


    grid.innerHTML = "";


    greenery.forEach(
        (item, index) => {

            const quantity =
                state.greenery[
                    item.name
                ] || 0;


            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "greenery-card";


            card.innerHTML = `

                <div class="greenery-photo">

                    ${greenerySVG(
                        item.type,
                        item.color
                    )}

                    <span
                        class="greenery-quantity"
                    >
                        ${quantity}
                    </span>

                </div>


                <div class="greenery-info">

                    <h3>
                        ${item.name}
                    </h3>

                </div>


                <button
                    class="add-button greenery-add"
                    type="button"
                >
                    +
                </button>

            `;


            const button =
                card.querySelector(
                    ".greenery-add"
                );


            button.addEventListener(
                "click",
                () => {

                    state.greenery[
                        item.name
                    ] =
                        (state.greenery[
                            item.name
                        ] || 0) + 1;


                    card.querySelector(
                        ".greenery-quantity"
                    ).textContent =
                        state.greenery[
                            item.name
                        ];


                    updateGreeneryCount();

                }
            );


            grid.appendChild(card);

        }
    );

}


/* =========================================================
   GREENERY COUNT
   ========================================================= */

function updateGreeneryCount() {

    const count =
        Object.values(
            state.greenery
        ).reduce(
            (sum, value) =>
                sum + value,
            0
        );


    const element =
        document.getElementById(
            "greenery-count"
        );


    if (element) {

        element.textContent =
            count;

    }

}


/* =========================================================
   RENDER RIBBONS
   ========================================================= */

function renderRibbons() {

    const grid =
        document.getElementById(
            "ribbon-grid"
        );


    if (!grid) return;


    grid.innerHTML = "";


    ribbons.forEach(
        ribbon => {

            const card =
                document.createElement(
                    "button"
                );


            card.type =
                "button";


            card.className =
                "ribbon-card";


            card.style.setProperty(
                "--ribbon-color",
                ribbon.color
            );


            card.innerHTML = `

                <span
                    class="ribbon-swatch"
                ></span>

                <strong>
                    ${ribbon.name}
                </strong>

            `;


            card.addEventListener(
                "click",
                () => {

                    state.ribbon =
                        ribbon;


                    document
                        .querySelectorAll(
                            ".ribbon-card"
                        )
                        .forEach(
                            item =>
                                item.classList.remove(
                                    "chosen"
                                )
                        );


                    card.classList.add(
                        "chosen"
                    );


                    document.getElementById(
                        "ribbon-preview"
                    ).textContent =
                        `${ribbon.name} ribbon selected 🎀`;

                }
            );


            grid.appendChild(card);

        }
    );

}


/* =========================================================
   RENDER WRAPPING
   ========================================================= */

function renderWrapping() {

    const grid =
        document.getElementById(
            "wrapping-grid"
        );


    if (!grid) return;


    grid.innerHTML = "";


    wrappings.forEach(
        wrapping => {

            const card =
                document.createElement(
                    "button"
                );


            card.type =
                "button";


            card.className =
                "wrapping-card";


            card.style.setProperty(
                "--wrap-color",
                wrapping.color
            );


            card.innerHTML = `

                <span
                    class="wrapping-swatch"
                ></span>

                <strong>
                    ${wrapping.name}
                </strong>

            `;


            card.addEventListener(
                "click",
                () => {

                    state.wrapping =
                        wrapping;


                    document
                        .querySelectorAll(
                            ".wrapping-card"
                        )
                        .forEach(
                            item =>
                                item.classList.remove(
                                    "chosen"
                                )
                        );


                    card.classList.add(
                        "chosen"
                    );


                    document.getElementById(
                        "wrapping-preview"
                    ).textContent =
                        `${wrapping.name} wrapping selected 🎁`;

                }
            );


            grid.appendChild(card);

        }
    );

}


/* =========================================================
   BUILD FINAL BOUQUET
   ========================================================= */

function buildBouquet() {

    const stage =
        document.getElementById(
            "bouquet-art"
        );


    if (!stage) return;


    stage.innerHTML = "";


    const flowerEntries =
        Object.entries(
            state.flowers
        );


    const greeneryEntries =
        Object.entries(
            state.greenery
        );


    const wrapperColor =
        state.wrapping
            ? state.wrapping.color
            : "#e8b7c1";


    const ribbonColor =
        state.ribbon
            ? state.ribbon.color
            : "#d99aaa";


    const wrapper =
        document.createElement(
            "div"
        );


    wrapper.className =
        "bouquet-wrapper";


    wrapper.style.background =
        wrapperColor;


    const stems =
        document.createElement(
            "div"
        );


    stems.className =
        "bouquet-stems";


    stems.innerHTML = `

        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>

    `;


    const flowersContainer =
        document.createElement(
            "div"
        );


    flowersContainer.className =
        "bouquet-flowers";


    let flowerNumber = 0;


    flowerEntries.forEach(
        ([name, quantity]) => {

            const flower =
                flowers.find(
                    item =>
                        item.name === name
                );


            if (!flower) return;


            for (
                let i = 0;
                i < Math.min(
                    quantity,
                    4
                );
                i++
            ) {

                const flowerElement =
                    document.createElement(
                        "div"
                    );


                flowerElement.className =
                    "bouquet-flower";


                flowerElement.style.setProperty(
                    "--flower-color",
                    flower.color
                );


                const angle =
                    (
                        flowerNumber *
                        137
                    ) % 360;


                const distance =
                    25 +
                    (
                        flowerNumber %
                        3
                    ) * 15;


                flowerElement.style.setProperty(
                    "--flower-angle",
                    `${angle}deg`
                );


                flowerElement.style.setProperty(
                    "--flower-distance",
                    `${distance}px`
                );


                flowerElement.innerHTML =
                    flowerSVG(
                        flower.type,
                        flower.color
                    );


                flowersContainer.appendChild(
                    flowerElement
                );


                flowerNumber++;

            }

        }
    );


    if (
        flowerNumber === 0
    ) {

        const defaultFlower =
            document.createElement(
                "div"
            );


        defaultFlower.className =
            "bouquet-flower default";


        defaultFlower.innerHTML =
            flowerSVG(
                "rose",
                "#d98b9d"
            );


        flowersContainer.appendChild(
            defaultFlower
        );

    }


    greeneryEntries.forEach(
        ([name, quantity]) => {

            const item =
                greenery.find(
                    green =>
                        green.name === name
                );


            if (!item) return;


            for (
                let i = 0;
                i < Math.min(
                    quantity,
                    3
                );
                i++
            ) {

                const leaf =
                    document.createElement(
                        "div"
                    );


                leaf.className =
                    "bouquet-greenery";


                leaf.innerHTML =
                    greenerySVG(
                        item.type,
                        item.color
                    );


                flowersContainer.appendChild(
                    leaf
                );

            }

        }
    );


    const ribbon =
        document.createElement(
            "div"
        );


    ribbon.className =
        "bouquet-ribbon";


    ribbon.style.background =
        ribbonColor;


    wrapper.appendChild(
        stems
    );


    wrapper.appendChild(
        flowersContainer
    );


    wrapper.appendChild(
        ribbon
    );


    stage.appendChild(
        wrapper
    );


    updateFinalDetails(
        flowerNumber
    );

}


/* =========================================================
   FINAL DETAILS
   ========================================================= */

function updateFinalDetails(
    flowerNumber
) {

    const details =
        document.getElementById(
            "final-details"
        );


    if (!details) return;


    const ribbon =
        state.ribbon
            ? state.ribbon.name
            : "soft pink";


    const wrapping =
        state.wrapping
            ? state.wrapping.name
            : "blush paper";


    details.innerHTML = `

        <div class="detail-card">

            <span>
                Flowers
            </span>

            <strong>
                ${flowerNumber}
            </strong>

        </div>


        <div class="detail-card">

            <span>
                Ribbon
            </span>

            <strong>
                ${ribbon}
            </strong>

        </div>


        <div class="detail-card">

            <span>
                Wrapping
            </span>

            <strong>
                ${wrapping}
            </strong>

        </div>

    `;


    const subtitle =
        document.getElementById(
            "final-subtitle"
        );


    if (subtitle) {

        subtitle.textContent =
            `${state.name}, you picked every little piece yourself.`;

    }

}


/* =========================================================
   GIFT
   ========================================================= */

function openGift() {

    const box =
        document.getElementById(
            "gift-box"
        );


    const reveal =
        document.getElementById(
            "gift-reveal"
        );


    const title =
        document.getElementById(
            "gift-title"
        );


    const intro =
        document.getElementById(
            "gift-intro"
        );


    box.classList.add(
        "opened"
    );


    setTimeout(
        () => {

            const messages = {

                comfort:
                    `A reminder that you don't have to earn rest, ${state.name}. You are allowed to have soft days.`,

                flowers:
                    `A bouquet that never wilts — because some beautiful things are meant to stay with you.`,

                book:
                    `A tiny unwritten story: the next chapter belongs to you. Make it something you're proud of.`,

                stars:
                    `A pocketful of stars for every dream you haven't told anyone about yet.`,

                surprise:
                    `Surprise! You got the most important gift: a reminder that your existence deserves to be celebrated.`

            };


            reveal.innerHTML = `

                <div class="gift-sparkle">
                    ✦
                </div>

                <h3>
                    ${state.gift === "flowers"
                        ? "A bouquet of words"
                        : "Your little gift"}
                </h3>

                <p>
                    ${messages[state.gift]}
                </p>

                <div class="gift-heart">
                    ♡
                </div>

                <button
                    class="main-button"
                    id="final-message-button"
                    type="button"
                >
                    One last thing →
                </button>

            `;


            reveal.classList.add(
                "show"
            );


            title.textContent =
                "You found it.";


            intro.textContent =
                "Some gifts aren't things.";

            
            const finalButton =
                document.getElementById(
                    "final-message-button"
                );


            finalButton.addEventListener(
                "click",
                () => {

                    goToRoom(10);

                    launchConfetti();

                }
            );


        },
        650
    );

}


/* =========================================================
   CONFETTI
   ========================================================= */

function launchConfetti() {

    if (!confetti) return;


    confetti.innerHTML = "";


    const symbols = [
        "✦",
        "✧",
        "•",
        "♡",
        "✿",
        "❀"
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


        piece.style.animationDelay =
            `${Math.random() * 1.5}s`;


        piece.style.animationDuration =
            `${2 + Math.random() * 3}s`;


        piece.style.fontSize =
            `${8 + Math.random() * 15}px`;


        confetti.appendChild(
            piece
        );

    }


    setTimeout(
        () => {

            confetti.innerHTML = "";

        },
        5500
    );

}


/* =========================================================
   FLOATING STARS
   ========================================================= */

function createStars() {

    const container =
        document.getElementById(
            "ambient-stars"
        );


    if (!container) return;


    for (
        let i = 0;
        i < 45;
        i++
    ) {

        const star =
            document.createElement(
                "span"
            );


        star.textContent =
            Math.random() > 0.5
                ? "✦"
                : "·";


        star.style.left =
            `${Math.random() * 100}%`;


        star.style.top =
            `${Math.random() * 100}%`;


        star.style.animationDelay =
            `${Math.random() * 5}s`;


        star.style.animationDuration =
            `${3 + Math.random() * 5}s`;


        container.appendChild(
            star
        );

    }

}


/* =========================================================
   FLOATING PETALS
   ========================================================= */

function createPetals() {

    const container =
        document.getElementById(
            "petal-field"
        );


    if (!container) return;


    const petals = [
        "✿",
        "❀",
        "·",
        "♡"
    ];


    for (
        let i = 0;
        i < 20;
        i++
    ) {

        const petal =
            document.createElement(
                "span"
            );


        petal.textContent =
            petals[
                Math.floor(
                    Math.random() *
                    petals.length
                )
            ];


        petal.style.left =
            `${Math.random() * 100}%`;


        petal.style.top =
            `${Math.random() * 100}%`;


        petal.style.animationDelay =
            `${Math.random() * 8}s`;


        petal.style.animationDuration =
            `${7 + Math.random() * 8}s`;


        container.appendChild(
            petal
        );

    }

}


/* =========================================================
   EVENT LISTENERS
   ========================================================= */


/* ENTER */

document
    .getElementById("enter-button")
    .addEventListener(
        "click",
        () => {

            goToRoom(1);

        }
    );


/* PREPARE PARTY */

document
    .getElementById("prepare-button")
    .addEventListener(
        "click",
        () => {

            saveBirthdayDetails();

            goToRoom(2);

        }
    );


/* LIGHTS */

document
    .getElementById("lights-button")
    .addEventListener(
        "click",
        () => {

            turnOnLights();

        }
    );


/* WISH */

document
    .getElementById("wish-button")
    .addEventListener(
        "click",
        () => {

            blowCandles();

            playBirthdaySong();

        }
    );


/* FLOWERS */

document
    .getElementById("flowers-button")
    .addEventListener(
        "click",
        () => {

            goToRoom(4);

        }
    );


/* GREENERY */

document
    .getElementById("greenery-button")
    .addEventListener(
        "click",
        () => {

            goToRoom(5);

        }
    );


/* RIBBON */

document
    .getElementById("ribbon-button")
    .addEventListener(
        "click",
        () => {

            if (!state.ribbon) {

                state.ribbon =
                    ribbons[0];

            }


            goToRoom(6);

        }
    );


/* WRAPPING */

document
    .getElementById("wrapping-button")
    .addEventListener(
        "click",
        () => {

            if (!state.wrapping) {

                state.wrapping =
                    wrappings[0];

            }


            goToRoom(7);

        }
    );


/* BOUQUET */

document
    .getElementById("bouquet-button")
    .addEventListener(
        "click",
        () => {

            buildBouquet();

            goToRoom(8);

        }
    );


/* GIFT */

document
    .getElementById("gift-next-button")
    .addEventListener(
        "click",
        () => {

            goToRoom(9);

        }
    );


/* OPEN GIFT */

document
    .getElementById("gift-box")
    .addEventListener(
        "click",
        () => {

            openGift();

        }
    );


/* RESTART */

document
    .getElementById("restart-button")
    .addEventListener(
        "click",
        () => {

            location.reload();

        }
    );


/* =========================================================
   INITIALIZATION
   ========================================================= */

renderFlowers();

renderGreenery();

renderRibbons();

renderWrapping();

createStars();

createPetals();

updateFlowerCount();

updateGreeneryCount();

updateCake();


/* =========================================================
   KEYBOARD SHORTCUT
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            /*
               Escape doesn't reset anything.
               It simply takes the user back
               to the entrance.
            */

        }

    }
);


/* =========================================================
   PREVENT ACCIDENTAL FORM SUBMISSION
   ========================================================= */

document.addEventListener(
    "submit",
    event => {

        event.preventDefault();

    }
);


/* =========================================================
   END
   ========================================================= */
