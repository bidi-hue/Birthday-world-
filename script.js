/* =========================================================
   A LITTLE BIRTHDAY WORLD
   MAIN JAVASCRIPT
   ========================================================= */


/* =========================================================
   STATE
   ========================================================= */

const birthday = {
    name: "",
    age: 0,

    cake: {
        flavour: "Vanilla",
        style: "Classic",
        colour: "#e9a8b9",
        custom: ""
    },

    gift: {
        object: "🎁",
        name: "A surprise gift"
    },

    flowers: {},

    ribbon: {
        name: "Blush Pink",
        colour: "#d99aaa"
    },

    wrapping: {
        name: "Blush Pink",
        colour: "#e8b7c1"
    }
};


/* =========================================================
   FLOWER DATA
   ========================================================= */

const flowers = [

    {
        name: "Rose",
        meaning: "Love",
        type: "rose",
        colour: "#d77f94"
    },

    {
        name: "Pink Rose",
        meaning: "Sweetness",
        type: "rose",
        colour: "#e6a0b3"
    },

    {
        name: "White Rose",
        meaning: "Pure joy",
        type: "rose",
        colour: "#fff7f5"
    },

    {
        name: "Sunflower",
        meaning: "Happiness",
        type: "sunflower",
        colour: "#e9b936"
    },

    {
        name: "Tulip",
        meaning: "Perfect love",
        type: "tulip",
        colour: "#d96582"
    },

    {
        name: "Lily",
        meaning: "Purity",
        type: "lily",
        colour: "#fff8ed"
    },

    {
        name: "Orchid",
        meaning: "Beauty",
        type: "orchid",
        colour: "#ad82ca"
    },

    {
        name: "Daisy",
        meaning: "Innocence",
        type: "daisy",
        colour: "#fffdf3"
    },

    {
        name: "Peony",
        meaning: "Prosperity",
        type: "peony",
        colour: "#e995ad"
    },

    {
        name: "Lavender",
        meaning: "Calm",
        type: "lavender",
        colour: "#ad91ca"
    },

    {
        name: "Lotus",
        meaning: "Peace",
        type: "lotus",
        colour: "#e7a0b2"
    },

    {
        name: "Iris",
        meaning: "Hope",
        type: "iris",
        colour: "#8583c9"
    },

    {
        name: "Cherry Blossom",
        meaning: "New beginnings",
        type: "cherry",
        colour: "#f0a7bd"
    },

    {
        name: "Hydrangea",
        meaning: "Gratitude",
        type: "hydrangea",
        colour: "#9c9dd4"
    },

    {
        name: "Poppy",
        meaning: "Remembrance",
        type: "poppy",
        colour: "#e76b70"
    },

    {
        name: "Magnolia",
        meaning: "Nobility",
        type: "magnolia",
        colour: "#efd5dc"
    },

    {
        name: "Zinnia",
        meaning: "Friendship",
        type: "zinnia",
        colour: "#e67f97"
    },

    {
        name: "Bluebell",
        meaning: "Humility",
        type: "bluebell",
        colour: "#8c91d1"
    }

];


/* =========================================================
   FLOWER SVG
   ========================================================= */

function flowerSVG(type, colour) {

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
                fill="${colour}"
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


    let content = "";


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
                fill="${colour}"
            />

            <path
                d="M38 48
                   C45 36 62 39 62 50
                   C62 61 45 64 39 53"
                fill="none"
                stroke="white"
                stroke-opacity=".3"
                stroke-width="3"
            />

        `;

    }


    /* SUNFLOWER */

    else if (type === "sunflower") {

        for (let i = 0; i < 12; i++) {

            const angle =
                i * 30;

            content += `
                <ellipse
                    cx="50"
                    cy="23"
                    rx="8"
                    ry="24"
                    fill="${colour}"
                    transform="
                        rotate(
                            ${angle}
                            50
                            50
                        )
                    "
                />
            `;

        }

        content += `
            <circle
                cx="50"
                cy="50"
                r="18"
                fill="#71472e"
            />
        `;

    }


    /* TULIP */

    else if (type === "tulip") {

        content = `

            <path
                d="
                    M20 35
                    C28 15 40 25 50 35
                    C60 25 72 15 80 35
                    C80 70 66 82 50 82
                    C34 82 20 70 20 35
                    Z
                "
                fill="${colour}"
            />

            <path
                d="
                    M20 35
                    C30 47 40 48 50 35
                    C60 48 70 47 80 35
                "
                fill="none"
                stroke="white"
                stroke-opacity=".28"
                stroke-width="3"
            />

        `;

    }


    /* LILY */

    else if (type === "lily") {

        content = `

            ${petal(50,23,13,31)}
            ${petal(73,37,14,27,55)}
            ${petal(67,65,14,27,120)}
            ${petal(33,65,14,27,-120)}
            ${petal(27,37,14,27,-55)}

            <circle
                cx="50"
                cy="50"
                r="8"
                fill="#d59c56"
            />

        `;

    }


    /* ORCHID */

    else if (type === "orchid") {

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


    /* DAISY */

    else if (type === "daisy") {

        for (let i = 0; i < 12; i++) {

            const angle =
                i * 30;

            content += `
                <ellipse
                    cx="50"
                    cy="24"
                    rx="8"
                    ry="25"
                    fill="${colour}"
                    transform="
                        rotate(
                            ${angle}
                            50
                            50
                        )
                    "
                />
            `;

        }

        content += `
            <circle
                cx="50"
                cy="50"
                r="10"
                fill="#d39a4e"
            />
        `;

    }


    /* PEONY */

    else if (type === "peony") {

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
                fill="${colour}"
            />

            <circle
                cx="43"
                cy="46"
                r="7"
                fill="white"
                fill-opacity=".2"
            />

        `;

    }


    /* LOTUS */

    else if (type === "lotus") {

        content = `

            <path
                d="
                    M50 76
                    C25 67 23 48 30 34
                    C40 42 48 52 50 76
                "
                fill="${colour}"
            />

            <path
                d="
                    M50 76
                    C75 67 77 48 70 34
                    C60 42 52 52 50 76
                "
                fill="${colour}"
            />

            <path
                d="
                    M50 76
                    C38 62 38 37 50 22
                    C62 37 62 62 50 76
                "
                fill="${colour}"
            />

        `;

    }


    /* IRIS */

    else if (type === "iris") {

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
                fill="#efc46b"
            />

        `;

    }


    /* CHERRY BLOSSOM */

    else if (type === "cherry") {

        for (let i = 0; i < 5; i++) {

            const angle =
                i * 72;

            const x =
                50 +
                Math.cos(
                    angle * Math.PI / 180
                ) * 22;

            const y =
                50 +
                Math.sin(
                    angle * Math.PI / 180
                ) * 22;

            content += `
                <circle
                    cx="${x}"
                    cy="${y}"
                    r="16"
                    fill="${colour}"
                />
            `;

        }

        content += `
            <circle
                cx="50"
                cy="50"
                r="8"
                fill="#d49b48"
            />
        `;

    }


    /* HYDRANGEA */

    else if (type === "hydrangea") {

        for (let i = 0; i < 9; i++) {

            const angle =
                i * 40;

            const x =
                50 +
                Math.cos(
                    angle * Math.PI / 180
                ) * 25;

            const y =
                50 +
                Math.sin(
                    angle * Math.PI / 180
                ) * 25;

            content += `
                <circle
                    cx="${x}"
                    cy="${y}"
                    r="14"
                    fill="${colour}"
                />

                <circle
                    cx="${x}"
                    cy="${y}"
                    r="4"
                    fill="#f5d9df"
                />
            `;

        }

    }


    /* SIMPLE FLOWERS */

    else {

        for (let i = 0; i < 8; i++) {

            const angle =
                i * 45;

            content += `
                <ellipse
                    cx="50"
                    cy="25"
                    rx="11"
                    ry="22"
                    fill="${colour}"
                    transform="
                        rotate(
                            ${angle}
                            50
                            50
                        )
                    "
                />
            `;

        }

        content += `
            <circle
                cx="50"
                cy="50"
                r="9"
                fill="#d49b48"
            />
        `;

    }


    return `
        <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            ${content}
        </svg>
    `;

}


/* =========================================================
   SCREEN NAVIGATION
   ========================================================= */

const screens =
    document.querySelectorAll(".screen");

const progressFill =
    document.getElementById("progress-fill");

let currentScreen =
    0;


function showScreen(number) {

    screens.forEach(
        screen =>
            screen.classList.remove("active")
    );


    const target =
        document.getElementById(
            `screen-${number}`
        );


    if (!target) return;


    target.classList.add("active");


    currentScreen =
        number;


    const progress =
        (number /
        (screens.length - 1)) * 100;


    if (progressFill) {

        progressFill.style.width =
            `${progress}%`;

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   ELEMENT HELPER
   ========================================================= */

function $(id) {

    return document.getElementById(id);

}


/* =========================================================
   WELCOME → DETAILS
   ========================================================= */

$("start-button")?.addEventListener(
    "click",
    () => {

        showScreen(1);

    }
);


/* =========================================================
   DETAILS FORM
   ========================================================= */

$("details-form")?.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const name =
            $("person-name")?.value.trim();

        const age =
            parseInt(
                $("person-age")?.value,
                10
            );


        if (!name) {

            showToast(
                "Tell me their name first 💗"
            );

            return;

        }


        if (
            !age ||
            age < 1 ||
            age > 120
        ) {

            showToast(
                "Give me a proper birthday age 🎂"
            );

            return;

        }


        birthday.name =
            name;

        birthday.age =
            age;


        updateNameEverywhere();

        createNumberCandles();

        showScreen(2);

    }
);


/* =========================================================
   UPDATE NAME
   ========================================================= */

function updateNameEverywhere() {

    document
        .querySelectorAll("[data-name]")
        .forEach(
            element => {

                element.textContent =
                    birthday.name;

            }
        );

}


/* =========================================================
   CANDLES
   ========================================================= */

function createNumberCandles() {

    const container =
        $("number-candles");

    if (!container) return;


    container.innerHTML = "";


    const digits =
        String(birthday.age)
            .split("");


    digits.forEach(
        digit => {

            const candle =
                document.createElement("div");

            candle.className =
                "number-candle";

            candle.textContent =
                digit;

            container.appendChild(
                candle
            );

        }
    );

}


/* =========================================================
   DARK ROOM
   ========================================================= */

$("turn-lights-on")?.addEventListener(
    "click",
    () => {

        showScreen(3);

        startBirthdaySong();

        launchConfetti();

    }
);


/* =========================================================
   PARTY → CAKE
   ========================================================= */

$("cake-customize-button")?.addEventListener(
    "click",
    () => {

        showScreen(4);

        updateCakePreview();

    }
);


/* =========================================================
   CAKE FLAVOUR
   ========================================================= */

document
    .querySelectorAll("[data-cake-flavour]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(
                        "[data-cake-flavour]"
                    )
                    .forEach(
                        b =>
                            b.classList.remove(
                                "selected"
                            )
                    );


                button.classList.add(
                    "selected"
                );


                birthday.cake.flavour =
                    button.dataset.cakeFlavour;


                updateCakePreview();

            }
        );

    });


/* =========================================================
   CAKE STYLE
   ========================================================= */

document
    .querySelectorAll("[data-cake-style]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(
                        "[data-cake-style]"
                    )
                    .forEach(
                        b =>
                            b.classList.remove(
                                "selected"
                            )
                    );


                button.classList.add(
                    "selected"
                );


                birthday.cake.style =
                    button.dataset.cakeStyle;


                updateCakePreview();

            }
        );

    });


/* =========================================================
   CAKE COLOUR
   ========================================================= */

document
    .querySelectorAll("[data-cake-colour]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(
                        "[data-cake-colour]"
                    )
                    .forEach(
                        b =>
                            b.classList.remove(
                                "selected"
                            )
                    );


                button.classList.add(
                    "selected"
                );


                birthday.cake.colour =
                    button.dataset.cakeColour;


                updateCakePreview();

            }
        );

    });


/* =========================================================
   CUSTOM CAKE DESCRIPTION
   ========================================================= */

$("custom-cake")?.addEventListener(
    "input",
    event => {

        birthday.cake.custom =
            event.target.value;

    }
);


/* =========================================================
   CAKE PREVIEW
   ========================================================= */

function updateCakePreview() {

    const cake =
        $("preview-cake");

    if (!cake) return;


    cake.style.setProperty(
        "--cake-colour",
        birthday.cake.colour
    );


    cake.style.background =
        birthday.cake.colour;


    const flavour =
        $("preview-flavour");

    if (flavour) {

        flavour.textContent =
            birthday.cake.flavour;

    }


    const custom =
        $("preview-custom");

    if (custom) {

        custom.textContent =
            birthday.cake.custom ||
            birthday.cake.style;

    }


    const candles =
        $("preview-candles");

    if (candles) {

        candles.innerHTML = "";

        String(birthday.age)
            .split("")
            .forEach(
                digit => {

                    const candle =
                        document.createElement(
                            "span"
                        );

                    candle.className =
                        "preview-number-candle";

                    candle.textContent =
                        digit;

                    candles.appendChild(
                        candle
                    );

                }
            );

    }

}


/* =========================================================
   CAKE → GIFT
   ========================================================= */

$("cake-done")?.addEventListener(
    "click",
    () => {

        showScreen(5);

        updateGiftPreview();

    }
);


/* =========================================================
   GIFT OBJECTS
   ========================================================= */

document
    .querySelectorAll("[data-gift]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(
                        "[data-gift]"
                    )
                    .forEach(
                        b =>
                            b.classList.remove(
                                "selected"
                            )
                    );


                button.classList.add(
                    "selected"
                );


                birthday.gift.object =
                    button.dataset.gift;

                birthday.gift.name =
                    button.dataset.giftName ||
                    "A little surprise";


                updateGiftPreview();

            }
        );

    });


/* =========================================================
   GIFT PREVIEW
   ========================================================= */

function updateGiftPreview() {

    const object =
        $("gift-object");

    if (object) {

        object.textContent =
            birthday.gift.object;

    }


    const label =
        $("gift-object-name");

    if (label) {

        label.textContent =
            birthday.gift.name;

    }

}


/* =========================================================
   GIFT → FLOWERS
   ========================================================= */

$("gift-done")?.addEventListener(
    "click",
    () => {

        showScreen(6);

        renderFlowers();

    }
);


/* =========================================================
   FLOWER SHOP
   ========================================================= */

function renderFlowers() {

    const grid =
        $("flower-grid");

    if (!grid) return;


    grid.innerHTML = "";


    flowers.forEach(
        flower => {

            const quantity =
                birthday.flowers[
                    flower.name
                ] || 0;


            const card =
                document.createElement("div");


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
                        flower.colour
                    )}

                    <div class="flower-quantity">
                        ${quantity}
                    </div>

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


            card
                .querySelector(
                    ".add-button"
                )
                .addEventListener(
                    "click",
                    () => {

                        birthday.flowers[
                            flower.name
                        ] =
                            (birthday.flowers[
                                flower.name
                            ] || 0) + 1;


                        renderFlowers();

                        updateFlowerSummary();

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


    updateFlowerSummary();

}


/* =========================================================
   FLOWER SUMMARY
   ========================================================= */

function getFlowerTotal() {

    return Object.values(
        birthday.flowers
    ).reduce(
        (sum, value) =>
            sum + value,
        0
    );

}


function updateFlowerSummary() {

    const total =
        getFlowerTotal();


    const element =
        $("flower-count");

    if (element) {

        element.textContent =
            total;

    }

}


/* =========================================================
   FLOWERS → RIBBON
   ========================================================= */

$("flowers-done")?.addEventListener(
    "click",
    () => {

        if (
            getFlowerTotal() === 0
        ) {

            showToast(
                "Choose at least one flower first 🌷"
            );

            return;

        }


        showScreen(7);

        renderRibbonChoices();

    }
);


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


function renderRibbonChoices() {

    const grid =
        $("ribbon-grid");

    if (!grid) return;


    grid.innerHTML = "";


    ribbons.forEach(
        ribbon => {

            const button =
                document.createElement("button");

            button.type =
                "button";

            button.className =
                "ribbon-card";


            if (
                birthday.ribbon.name ===
                ribbon.name
            ) {

                button.classList.add(
                    "selected"
                );

            }


            button.innerHTML = `

                <span
                    class="ribbon-swatch"
                    style="
                        --item-color:
                        ${ribbon.colour}
                    "
                ></span>

                <strong>
                    ${ribbon.name}
                </strong>

            `;


            button.addEventListener(
                "click",
                () => {

                    birthday.ribbon =
                        ribbon;

                    renderRibbonChoices();

                    updateRibbonPreview();

                }
            );


            grid.appendChild(
                button
            );

        }
    );


    updateRibbonPreview();

}


/* =========================================================
   RIBBON PREVIEW
   ========================================================= */

function updateRibbonPreview() {

    const ribbon =
        $("preview-ribbon");

    if (!ribbon) return;


    ribbon.style.background =
        birthday.ribbon.colour;

}


/* =========================================================
   RIBBON → FINAL
   ========================================================= */

$("ribbon-done")?.addEventListener(
    "click",
    () => {

        showScreen(8);

        buildFinalBirthday();

    }
);


/* =========================================================
   FINAL BIRTHDAY
   ========================================================= */

function buildFinalBirthday() {

    const name =
        birthday.name;


    const nameElements =
        document.querySelectorAll(
            ".final-name"
        );


    nameElements.forEach(
        element => {

            element.textContent =
                name;

        }
    );


    const ageElements =
        document.querySelectorAll(
            ".final-age"
        );


    ageElements.forEach(
        element => {

            element.textContent =
                birthday.age;

        }
    );


    const finalCake =
        $("final-cake");


    if (finalCake) {

        finalCake.textContent =
            "🎂";

    }


    const finalGift =
        $("final-gift");


    if (finalGift) {

        finalGift.textContent =
            birthday.gift.object;

    }


    buildFinalBouquet();

}


/* =========================================================
   FINAL BOUQUET
   ========================================================= */

function buildFinalBouquet() {

    const bouquet =
        $("final-bouquet");

    if (!bouquet) return;


    bouquet.innerHTML = "";


    Object.entries(
        birthday.flowers
    ).forEach(
        ([name, quantity]) => {

            const flower =
                flowers.find(
                    item =>
                        item.name === name
                );


            if (!flower) return;


            for (
                let i = 0;
                i < Math.min(quantity, 5);
                i++
            ) {

                const item =
                    document.createElement("div");


                item.className =
                    "bouquet-flower";


                item.innerHTML =
                    flowerSVG(
                        flower.type,
                        flower.colour
                    );


                bouquet.appendChild(
                    item
                );

            }

        }
    );


    const ribbon =
        document.createElement("div");


    ribbon.className =
        "final-bouquet-ribbon";


    ribbon.style.background =
        birthday.ribbon.colour;


    bouquet.appendChild(
        ribbon
    );

}


/* =========================================================
   MUSIC
   ========================================================= */

let birthdayAudio =
    null;


function startBirthdaySong() {

    if (birthdayAudio) {

        birthdayAudio.pause();

    }


    /*
       Put your own audio file in the
       GitHub repository if you want
       guaranteed playback.

       Example:

       music/happy-birthday.mp3
    */

    birthdayAudio =
        new Audio(
            "music/happy-birthday.mp3"
        );


    birthdayAudio.loop =
        true;

    birthdayAudio.volume =
        0.55;


    birthdayAudio.play()
        .catch(
            () => {

                /*
                   Browsers can block
                   autoplay. The music
                   button below can be
                   used to start it.
                */

            }
        );

}


/* =========================================================
   MUSIC BUTTON
   ========================================================= */

$("music-button")?.addEventListener(
    "click",
    () => {

        if (!birthdayAudio) {

            startBirthdaySong();

            showToast(
                "Birthday music on 🎶"
            );

            return;

        }


        if (
            birthdayAudio.paused
        ) {

            birthdayAudio.play();

            showToast(
                "Music playing 🎶"
            );

        } else {

            birthdayAudio.pause();

            showToast(
                "Music paused ♡"
            );

        }

    }
);


/* =========================================================
   CONFETTI
   ========================================================= */

function launchConfetti() {

    const amount =
        65;


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const piece =
            document.createElement(
                "div"
            );


        piece.className =
            "confetti-piece";


        piece.textContent =
            [
                "✦",
                "♥",
                "✿",
                "•",
                "★"
            ][
                Math.floor(
                    Math.random() * 5
                )
            ];


        piece.style.left =
            `${Math.random() * 100}%`;


        piece.style.animationDelay =
            `${Math.random() * 1.5}s`;


        piece.style.fontSize =
            `${8 + Math.random() * 12}px`;


        document.body.appendChild(
            piece
        );


        setTimeout(
            () => {

                piece.remove();

            },
            4000
        );

    }

}


/* =========================================================
   TOAST
   ========================================================= */

let toastTimer =
    null;


function showToast(message) {

    const toast =
        $("toast");

    if (!toast) return;


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2200
        );

}


/* =========================================================
   START AGAIN
   ========================================================= */

$("start-again")?.addEventListener(
    "click",
    () => {

        birthday.name =
            "";

        birthday.age =
            0;

        birthday.cake = {
            flavour: "Vanilla",
            style: "Classic",
            colour: "#e9a8b9",
            custom: ""
        };

        birthday.gift = {
            object: "🎁",
            name: "A surprise gift"
        };

        birthday.flowers =
            {};

        birthday.ribbon = {
            name: "Blush Pink",
            colour: "#d99aaa"
        };


        const form =
            $("details-form");

        if (form) {

            form.reset();

        }


        showScreen(0);

    }
);


/* =========================================================
   INITIALIZE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        showScreen(0);

    }
);
