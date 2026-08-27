document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       BIRTHDAY DATA
       ===================================================== */

    const birthday = {
        name: "",
        age: "",
        theme: "pink",

        cake: {
            shape: "round",
            flavour: "strawberry",
            colour: "#e9a8b9",
            decor: "flowers",
            custom: ""
        },

        gift: {
            emoji: "🎧",
            name: "A pair of headphones",
            custom: ""
        },

        flowers: {},

        ribbon: {
            name: "Blush Pink",
            colour: "#d99aaa"
        }
    };


    /* =====================================================
       GET ELEMENTS
       ===================================================== */

    const $ = (id) => document.getElementById(id);


    const screens =
        document.querySelectorAll(".screen");

    const progress =
        $("progressFill");


    /* =====================================================
       SCREEN NAVIGATION
       ===================================================== */

    function showScreen(number) {

        screens.forEach(screen => {
            screen.classList.remove("active");
        });


        const nextScreen =
            $("screen-" + number);


        if (!nextScreen) {
            console.error(
                "Screen not found:",
                number
            );
            return;
        }


        nextScreen.classList.add("active");


        if (progress) {

            const percentage =
                (number / 8) * 100;

            progress.style.width =
                percentage + "%";

        }


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }



    /* =====================================================
       SCREEN 0 → SCREEN 1
       ===================================================== */

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



    /* =====================================================
       SCREEN 1
       NAME + AGE
       ===================================================== */

    const detailsNext =
        $("detailsNext");


    if (detailsNext) {

        detailsNext.addEventListener(
            "click",
            () => {

                const name =
                    $("personName").value.trim();


                const age =
                    parseInt(
                        $("personAge").value,
                        10
                    );


                const error =
                    $("detailsError");


                if (!name) {

                    error.textContent =
                        "Tell me your name first 🎀";

                    return;

                }


                if (
                    !age ||
                    age < 1 ||
                    age > 120
                ) {

                    error.textContent =
                        "Tell me what age you're turning 🎂";

                    return;

                }


                error.textContent = "";


                birthday.name =
                    name;

                birthday.age =
                    age;

                birthday.theme =
                    $("birthdayTheme").value;


                updateName();


                createCandles();


                showScreen(2);

            }
        );

    }



    /* =====================================================
       UPDATE NAME
       ===================================================== */

    function updateName() {

        const partyName =
            $("partyName");


        if (partyName) {

            partyName.textContent =
                birthday.name;

        }


        document
            .querySelectorAll(".final-name")
            .forEach(element => {

                element.textContent =
                    birthday.name;

            });

    }



    /* =====================================================
       NUMBER CANDLES
       ===================================================== */

    function createCandles() {

        const container =
            $("numberCandles");


        if (!container) return;


        container.innerHTML = "";


        String(birthday.age)
            .split("")
            .forEach(digit => {

                const candle =
                    document.createElement("div");


                candle.className =
                    "number-candle";


                candle.textContent =
                    digit;


                container.appendChild(
                    candle
                );

            });

    }



    /* =====================================================
       LIGHTS ON
       ===================================================== */

    const lightsButton =
        $("lightsButton");


    if (lightsButton) {

        lightsButton.addEventListener(
            "click",
            () => {

                showScreen(3);


                const partyName =
                    $("partyName");


                if (partyName) {

                    partyName.textContent =
                        birthday.name;

                }


                const partyAgeText =
                    $("partyAgeText");


                if (partyAgeText) {

                    partyAgeText.textContent =
                        `Cheers to ${birthday.age} beautiful years ✨`;

                }


                startMusic();


                confetti();

            }
        );

    }



    /* =====================================================
       PARTY → CAKE
       ===================================================== */

    const partyNext =
        $("partyNext");


    if (partyNext) {

        partyNext.addEventListener(
            "click",
            () => {

                showScreen(4);

                updateCakePreview();

            }
        );

    }



    /* =====================================================
       CAKE SHAPE
       ===================================================== */

    document
        .querySelectorAll(".cake-shape-choice")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    document
                        .querySelectorAll(
                            ".cake-shape-choice"
                        )
                        .forEach(item => {

                            item.classList.remove(
                                "selected"
                            );

                        });


                    button.classList.add(
                        "selected"
                    );


                    birthday.cake.shape =
                        button.dataset.shape;


                    updateCakePreview();

                }
            );

        });



    /* =====================================================
       CAKE FLAVOUR
       ===================================================== */

    document
        .querySelectorAll(".cake-flavour-choice")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    document
                        .querySelectorAll(
                            ".cake-flavour-choice"
                        )
                        .forEach(item => {

                            item.classList.remove(
                                "selected"
                            );

                        });


                    button.classList.add(
                        "selected"
                    );


                    birthday.cake.flavour =
                        button.dataset.flavour;


                    updateCakePreview();

                }
            );

        });



    /* =====================================================
       CAKE COLOUR
       ===================================================== */

    document
        .querySelectorAll(".colour-choice")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    document
                        .querySelectorAll(
                            ".colour-choice"
                        )
                        .forEach(item => {

                            item.classList.remove(
                                "selected"
                            );

                        });


                    button.classList.add(
                        "selected"
                    );


                    birthday.cake.colour =
                        button.dataset.colour;


                    updateCakePreview();

                }
            );

        });



    /* =====================================================
       CAKE DECORATIONS
       ===================================================== */

    document
        .querySelectorAll(".decor-choice")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    document
                        .querySelectorAll(
                            ".decor-choice"
                        )
                        .forEach(item => {

                            item.classList.remove(
                                "selected"
                            );

                        });


                    button.classList.add(
                        "selected"
                    );


                    birthday.cake.decor =
                        button.dataset.decor;


                    updateCakePreview();

                }
            );

        });



    /* =====================================================
       CUSTOM CAKE
       ===================================================== */

    const customCake =
        $("customCake");


    if (customCake) {

        customCake.addEventListener(
            "input",
            () => {

                birthday.cake.custom =
                    customCake.value.trim();


                updateCakePreview();

            }
        );

    }



    /* =====================================================
       CAKE PREVIEW
       ===================================================== */

    function updateCakePreview() {

        const body =
            $("previewCakeBody");


        const top =
            $("previewCakeTop");


        const decor =
            $("previewCakeDecor");


        const candles =
            $("previewCakeCandles");


        const text =
            $("cakePreviewText");


        if (body) {

            body.style.background =
                birthday.cake.colour;

        }


        if (top) {

            top.style.background =
                birthday.cake.colour;

        }


        if (decor) {

            if (
                birthday.cake.decor ===
                "hearts"
            ) {

                decor.textContent =
                    "♡ ♥ ♡";

            }

            else if (
                birthday.cake.decor ===
                "pearls"
            ) {

                decor.textContent =
                    "○ ○ ○ ○";

            }

            else if (
                birthday.cake.decor ===
                "sprinkles"
            ) {

                decor.textContent =
                    "✦ ✧ • ✦ ✧";

            }

            else {

                decor.textContent =
                    "✿　♡　✿";

            }

        }


        if (candles) {

            candles.innerHTML = "";


            String(birthday.age)
                .split("")
                .forEach(digit => {

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

                });

        }


        if (text) {

            let flavour =
                birthday.cake.flavour;


            flavour =
                flavour.charAt(0)
                    .toUpperCase() +
                flavour.slice(1);


            text.textContent =
                birthday.cake.custom ||
                `${flavour} ${birthday.cake.shape} cake`;

        }

    }



    /* =====================================================
       CAKE → GIFT
       ===================================================== */

    const cakeDone =
        $("cakeDone");


    if (cakeDone) {

        cakeDone.addEventListener(
            "click",
            () => {

                showScreen(5);

                updateGift();

            }
        );

    }



    /* =====================================================
       GIFT CHOICES
       ===================================================== */

    document
        .querySelectorAll(".gift-choice")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    document
                        .querySelectorAll(
                            ".gift-choice"
                        )
                        .forEach(item => {

                            item.classList.remove(
                                "selected"
                            );

                        });


                    button.classList.add(
                        "selected"
                    );


                    birthday.gift.emoji =
                        button.dataset.gift;


                    birthday.gift.name =
                        button.dataset.giftName;


                    updateGift();

                }
            );

        });



    /* =====================================================
       CUSTOM GIFT
       ===================================================== */

    const customGift =
        $("customGift");


    if (customGift) {

        customGift.addEventListener(
            "input",
            () => {

                birthday.gift.custom =
                    customGift.value.trim();


                updateGift();

            }
        );

    }



    /* =====================================================
       GIFT PREVIEW
       ===================================================== */

    function updateGift() {

        const object =
            $("giftObject");


        const name =
            $("giftObjectName");


        if (birthday.gift.custom) {

            if (object) {

                object.textContent =
                    "🎁";

            }


            if (name) {

                name.textContent =
                    birthday.gift.custom;

            }

        }

        else {

            if (object) {

                object.textContent =
                    birthday.gift.emoji;

            }


            if (name) {

                name.textContent =
                    birthday.gift.name;

            }

        }

    }



    /* =====================================================
       GIFT → FLOWERS
       ===================================================== */

    const giftDone =
        $("giftDone");


    if (giftDone) {

        giftDone.addEventListener(
            "click",
            () => {

                showScreen(6);

                renderFlowers();

            }
        );

    }



    /* =====================================================
       FLOWER DATA
       ===================================================== */

    const flowerData = [

        ["Rose", "Love", "🌹"],
        ["Pink Rose", "Sweetness", "🌷"],
        ["White Rose", "Pure joy", "🤍"],
        ["Sunflower", "Happiness", "🌻"],
        ["Tulip", "Perfect love", "🌷"],
        ["Lily", "Purity", "🌸"],
        ["Orchid", "Beauty", "💜"],
        ["Daisy", "Innocence", "🌼"],
        ["Peony", "Prosperity", "🌸"],
        ["Lavender", "Calm", "💜"],
        ["Lotus", "Peace", "🪷"],
        ["Iris", "Hope", "💜"],
        ["Cherry Blossom", "New beginnings", "🌸"],
        ["Hydrangea", "Gratitude", "💠"],
        ["Poppy", "Remembrance", "🌺"],
        ["Magnolia", "Nobility", "🤍"],
        ["Zinnia", "Friendship", "🌺"],
        ["Bluebell", "Humility", "💙"]

    ];



    /* =====================================================
       RENDER FLOWERS
       ===================================================== */

    function renderFlowers() {

        const grid =
            $("flowerGrid");


        if (!grid) return;


        grid.innerHTML = "";


        flowerData.forEach(
            flower => {

                const name =
                    flower[0];

                const meaning =
                    flower[1];

                const emoji =
                    flower[2];


                const quantity =
                    birthday.flowers[name] || 0;


                const card =
                    document.createElement(
                        "div"
                    );


                card.className =
                    "flower-card";


                if (quantity > 0) {

                    card.classList.add(
                        "selected"
                    );

                }


                card.innerHTML = `

                    <div class="flower-photo">

                        <div class="flower-emoji">
                            ${emoji}
                        </div>

                        <span class="flower-quantity">
                            ${quantity}
                        </span>

                    </div>

                    <div class="flower-info">

                        <h3>
                            ${name}
                        </h3>

                        <p>
                            ${meaning}
                        </p>

                    </div>

                    <button
                        class="add-button"
                        type="button"
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

                        birthday.flowers[name] =
                            (birthday.flowers[name] || 0) + 1;


                        renderFlowers();

                        showToast(
                            `${name} added 🌸`
                        );

                    }
                );


                grid.appendChild(
                    card
                );

            }
        );


        updateFlowerCount();

    }



    /* =====================================================
       FLOWER COUNT
       ===================================================== */

    function updateFlowerCount() {

        const count =
            Object.values(
                birthday.flowers
            ).reduce(
                (total, number) =>
                    total + number,
                0
            );


        const element =
            $("flowerCount");


        if (element) {

            element.textContent =
                count;

        }

    }



    /* =====================================================
       FLOWERS → RIBBON
       ===================================================== */

    const flowersDone =
        $("flowersDone");


    if (flowersDone) {

        flowersDone.addEventListener(
            "click",
            () => {

                const total =
                    Object.values(
                        birthday.flowers
                    ).reduce(
                        (a, b) => a + b,
                        0
                    );


                if (total === 0) {

                    showToast(
                        "Choose at least one flower 🌷"
                    );

                    return;

                }


                showScreen(7);

                renderRibbons();

            }
        );

    }



    /* =====================================================
       RIBBONS
       ===================================================== */

    const ribbonData = [

        ["Blush Pink", "#d99aaa"],
        ["Dusty Rose", "#b9798b"],
        ["Lavender", "#a993c7"],
        ["Sage Green", "#91a58c"],
        ["Baby Blue", "#9dbbd3"],
        ["Cream", "#eee1c8"]

    ];



    function renderRibbons() {

        const grid =
            $("ribbonGrid");


        if (!grid) return;


        grid.innerHTML = "";


        ribbonData.forEach(
            ribbon => {

                const button =
                    document.createElement(
                        "button"
                    );


                button.type =
                    "button";


                button.className =
                    "ribbon-choice";


                if (
                    birthday.ribbon.name ===
                    ribbon[0]
                ) {

                    button.classList.add(
                        "selected"
                    );

                }


                button.innerHTML = `

                    <span
                        class="ribbon-swatch"
                        style="
                            background:${ribbon[1]}
                        "
                    ></span>

                    <strong>
                        ${ribbon[0]}
                    </strong>

                `;


                button.addEventListener(
                    "click",
                    () => {

                        birthday.ribbon = {
                            name: ribbon[0],
                            colour: ribbon[1]
                        };


                        renderRibbons();

                    }
                );


                grid.appendChild(
                    button
                );

            }
        );


        const preview =
            $("previewRibbon");


        const ribbonName =
            $("ribbonName");


        if (preview) {

            preview.style.background =
                birthday.ribbon.colour;

        }


        if (ribbonName) {

            ribbonName.textContent =
                birthday.ribbon.name;

        }

    }



    /* =====================================================
       RIBBON → FINAL
       ===================================================== */

    const ribbonDone =
        $("ribbonDone");


    if (ribbonDone) {

        ribbonDone.addEventListener(
            "click",
            () => {

                buildFinalBirthday();

                showScreen(8);

                confetti();

            }
        );

    }



    /* =====================================================
       FINAL BIRTHDAY
       ===================================================== */

    function buildFinalBirthday() {

        document
            .querySelectorAll(".final-name")
            .forEach(element => {

                element.textContent =
                    birthday.name;

            });


        createFinalCandles();

        createFinalGift();

        createFinalBouquet();

        createFinalDetails();

    }



    /* =====================================================
       FINAL CANDLES
       ===================================================== */

    function createFinalCandles() {

        const container =
            $("finalCandles");


        if (!container) return;


        container.innerHTML = "";


        String(birthday.age)
            .split("")
            .forEach(digit => {

                const candle =
                    document.createElement(
                        "span"
                    );


                candle.className =
                    "final-number-candle";


                candle.textContent =
                    digit;


                container.appendChild(
                    candle
                );

            });

    }



    /* =====================================================
       FINAL GIFT
       ===================================================== */

    function createFinalGift() {

        const gift =
            $("finalGift");


        if (!gift) return;


        if (birthday.gift.custom) {

            gift.textContent =
                "🎁";

            gift.title =
                birthday.gift.custom;

        }

        else {

            gift.textContent =
                birthday.gift.emoji;

        }

    }



    /* =====================================================
       FINAL BOUQUET
       ===================================================== */

    function createFinalBouquet() {

        const bouquet =
            $("finalBouquet");


        if (!bouquet) return;


        bouquet.innerHTML = "";


        Object.entries(
            birthday.flowers
        ).forEach(
            ([name, quantity]) => {

                const flower =
                    flowerData.find(
                        item =>
                            item[0] === name
                    );


                if (!flower) return;


                for (
                    let i = 0;
                    i < Math.min(quantity, 4);
                    i++
                ) {

                    const item =
                        document.createElement(
                            "span"
                        );


                    item.className =
                        "final-flower";


                    item.textContent =
                        flower[2];


                    bouquet.appendChild(
                        item
                    );

                }

            }
        );

    }



    /* =====================================================
       FINAL DETAILS
       ===================================================== */

    function createFinalDetails() {

        const details =
            $("finalDetails");


        if (!details) return;


        const cakeText =
            birthday.cake.custom ||
            `${birthday.cake.flavour} ${birthday.cake.shape} cake`;


        const giftText =
            birthday.gift.custom ||
            birthday.gift.name;


        const flowerCount =
            Object.values(
                birthday.flowers
            ).reduce(
                (a, b) => a + b,
                0
            );


        details.innerHTML = `

            <div class="final-detail-item">

                <span>🎂</span>

                <strong>
                    Your cake
                </strong>

                <small>
                    ${cakeText}
                </small>

            </div>


            <div class="final-detail-item">

                <span>🎁</span>

                <strong>
                    Your gift
                </strong>

                <small>
                    ${giftText}
                </small>

            </div>


            <div class="final-detail-item">

                <span>💐</span>

                <strong>
                    Your flowers
                </strong>

                <small>
                    ${flowerCount} flowers ·
                    ${birthday.ribbon.name} ribbon
                </small>

            </div>

        `;

    }



    /* =====================================================
       MUSIC
       ===================================================== */

    const audio =
        $("birthdayAudio");


    const musicButton =
        $("musicButton");


    let musicPlaying =
        false;


    function startMusic() {

        if (!audio) return;


        audio.volume =
            0.55;


        audio.play()
            .then(() => {

                musicPlaying =
                    true;


                if (musicButton) {

                    musicButton.textContent =
                        "♫";

                }

            })
            .catch(() => {

                showToast(
                    "Tap the music button for the song 🎶"
                );

            });

    }


    if (musicButton) {

        musicButton.addEventListener(
            "click",
            () => {

                if (!audio) {

                    showToast(
                        "Add music/happy-birthday.mp3 first 🎵"
                    );

                    return;

                }


                if (audio.paused) {

                    audio.play()
                        .then(() => {

                            musicPlaying =
                                true;

                            musicButton.textContent =
                                "♫";

                        })
                        .catch(() => {

                            showToast(
                                "Music couldn't start 🎵"
                            );

                        });

                }

                else {

                    audio.pause();

                    musicPlaying =
                        false;

                    musicButton.textContent =
                        "♪";

                }

            }
        );

    }



    /* =====================================================
       CONFETTI
       ===================================================== */

    function confetti() {

        const symbols = [
            "✦",
            "♡",
            "✿",
            "✧",
            "•"
        ];


        for (
            let i = 0;
            i < 45;
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
                Math.random() * 100 +
                "vw";


            piece.style.animationDelay =
                Math.random() * 1.5 +
                "s";


            piece.style.fontSize =
                10 +
                Math.random() * 12 +
                "px";


            document.body.appendChild(
                piece
            );


            setTimeout(
                () => {

                    piece.remove();

                },
                4500
            );

        }

    }



    /* =====================================================
       TOAST
       ===================================================== */

    let toastTimeout;


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
            toastTimeout
        );


        toastTimeout =
            setTimeout(
                () => {

                    toast.classList.remove(
                        "show"
                    );

                },
                2200
            );

    }



    /* =====================================================
       START AGAIN
       ===================================================== */

    const startAgain =
        $("startAgain");


    if (startAgain) {

        startAgain.addEventListener(
            "click",
            () => {

                location.reload();

            }
        );

    }



    /* =====================================================
       INITIAL STATE
       ===================================================== */

    showScreen(0);

});
