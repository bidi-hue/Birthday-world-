/* =========================================================
   A LITTLE BIRTHDAY WORLD
   PINK / DREAMY / CUTE AESTHETIC
   ========================================================= */

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

:root {
    --pink: #e7a1b5;
    --pink-dark: #b96882;
    --pink-soft: #f8dfe7;
    --pink-pale: #fff3f6;
    --cream: #fffaf3;

    --rose: #d889a0;
    --lavender: #c5addb;

    --text: #674b55;
    --muted: #9c808a;

    --dark: #261c2b;
    --dark-soft: #34243a;

    --gold: #e8c47d;

    --shadow:
        rgba(101, 58, 73, 0.16);
}


/* =========================================================
   RESET
   ========================================================= */

html {
    scroll-behavior: smooth;
}

body {
    min-height: 100vh;

    font-family:
        "DM Sans",
        sans-serif;

    color: var(--text);

    background:
        radial-gradient(
            circle at 10% 10%,
            #f7dce5,
            transparent 30%
        ),
        radial-gradient(
            circle at 90% 90%,
            #eadff1,
            transparent 30%
        ),
        #fff7f3;

    overflow-x: hidden;
}


/* =========================================================
   DECORATIVE BACKGROUND
   ========================================================= */

.background-decor {
    position: fixed;
    inset: 0;

    z-index: 0;

    pointer-events: none;

    overflow: hidden;
}

.background-decor span {
    position: absolute;

    color:
        rgba(194, 112, 138, 0.17);

    animation:
        floatDecor
        7s ease-in-out infinite;
}

.bg-heart:nth-child(1) {
    top: 17%;
    left: 5%;
    font-size: 30px;
}

.bg-flower:nth-child(2) {
    top: 65%;
    right: 6%;
    font-size: 25px;
    animation-delay: 2s;
}

.bg-star:nth-child(3) {
    top: 25%;
    right: 13%;
    font-size: 15px;
    animation-delay: 1s;
}

.bg-heart:nth-child(4) {
    bottom: 12%;
    left: 12%;
    font-size: 23px;
    animation-delay: 3s;
}

.bg-flower:nth-child(5) {
    bottom: 30%;
    right: 10%;
    font-size: 20px;
    animation-delay: 4s;
}

.bg-star:nth-child(6) {
    top: 48%;
    left: 8%;
    font-size: 13px;
    animation-delay: 5s;
}

@keyframes floatDecor {
    0%,
    100% {
        transform:
            translateY(0)
            rotate(0deg);
    }

    50% {
        transform:
            translateY(-18px)
            rotate(12deg);
    }
}


/* =========================================================
   TOP BAR
   ========================================================= */

.topbar {
    position: fixed;

    top: 0;
    left: 50%;

    transform:
        translateX(-50%);

    z-index: 100;

    width:
        min(100%, 820px);

    height: 70px;

    display:
        flex;

    align-items:
        center;

    justify-content:
        space-between;

    padding:
        10px 17px;

    background:
        rgba(255, 248, 247, 0.93);

    backdrop-filter:
        blur(16px);

    border-bottom:
        1px solid
        rgba(178, 119, 135, 0.15);

    box-shadow:
        0 5px 25px
        rgba(111, 68, 79, 0.06);
}


.brand {
    display:
        flex;

    align-items:
        center;

    gap: 10px;
}


.brand-icon {
    width: 42px;
    height: 42px;

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    border-radius:
        50%;

    background:
        #f4d2dc;

    font-size: 22px;

    box-shadow:
        0 6px 18px
        rgba(175, 98, 122, 0.12);
}


.brand strong {
    display:
        block;

    font-family:
        "Cormorant Garamond",
        serif;

    font-size: 22px;

    line-height: 0.9;

    color:
        #6b4b54;
}


.brand small {
    display:
        block;

    margin-top: 4px;

    color:
        #a8848d;

    font-size: 7px;

    letter-spacing: 1.3px;

    text-transform:
        uppercase;
}


.music-button {
    width: 42px;
    height: 38px;

    border:
        1px solid
        #e4cbd1;

    border-radius:
        22px;

    background:
        #fff9f7;

    color:
        #a65f76;

    font-size: 17px;

    cursor:
        pointer;

    transition:
        0.2s ease;
}


.music-button:hover {
    transform:
        translateY(-2px);

    box-shadow:
        0 7px 18px
        rgba(140, 76, 94, 0.12);
}


/* =========================================================
   PROGRESS
   ========================================================= */

.progress-bar {
    position: fixed;

    top: 70px;
    left: 50%;

    transform:
        translateX(-50%);

    z-index: 101;

    width:
        min(100%, 820px);

    height: 4px;

    background:
        #f0dfe3;
}


.progress-fill {
    width: 0%;

    height: 100%;

    background:
        linear-gradient(
            90deg,
            #d6819a,
            #e7aabd,
            #c5addb
        );

    transition:
        width 0.55s ease;
}


/* =========================================================
   APP
   ========================================================= */

#app {
    position: relative;

    z-index: 2;

    width:
        min(100%, 820px);

    min-height:
        100vh;

    margin:
        0 auto;

    padding-top:
        74px;

    overflow:
        hidden;
}


/* =========================================================
   SCREENS
   ========================================================= */

.screen {
    display: none;

    width: 100%;

    min-height:
        calc(100vh - 74px);

    padding:
        35px 16px 50px;

    animation:
        screenIn
        0.55s ease both;
}


.screen.active {
    display:
        flex;

    flex-direction:
        column;

    align-items:
        center;
}


@keyframes screenIn {
    from {
        opacity: 0;

        transform:
            translateX(45px);
    }

    to {
        opacity: 1;

        transform:
            translateX(0);
    }
}


/* =========================================================
   BUTTONS
   ========================================================= */

.primary-button {
    position: relative;
    z-index: 20;

    min-height: 51px;

    padding:
        12px 23px;

    border:
        none;

    border-radius:
        28px;

    background:
        linear-gradient(
            135deg,
            #b96783,
            #d48ba2
        );

    color:
        white;

    font-family:
        "DM Sans",
        sans-serif;

    font-size:
        11px;

    font-weight:
        700;

    cursor:
        pointer;

    box-shadow:
        0 10px 25px
        rgba(137, 67, 90, 0.22);

    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;
}


.primary-button span {
    margin-left: 7px;
}


.primary-button:hover {
    transform:
        translateY(-3px);

    box-shadow:
        0 15px 30px
        rgba(137, 67, 90, 0.3);
}


.primary-button:active {
    transform:
        scale(0.97);
}


.large-button {
    min-height: 57px;

    padding:
        14px 29px;

    font-size: 12px;
}


.full-button {
    width: 100%;
}


/* =========================================================
   WELCOME
   ========================================================= */

.welcome-screen {
    position: relative;

    justify-content:
        center;

    text-align:
        center;

    overflow:
        hidden;

    background:
        radial-gradient(
            circle at 50% 20%,
            rgba(246, 194, 208, 0.3),
            transparent 34%
        );
}


.welcome-decoration {
    margin-bottom: 14px;

    color:
        #c98299;

    letter-spacing:
        7px;

    font-size:
        16px;
}


.welcome-bow {
    width: 94px;
    height: 94px;

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    margin:
        0 auto 18px;

    border-radius:
        50%;

    background:
        rgba(249, 222, 230, 0.9);

    font-size:
        48px;

    box-shadow:
        0 15px 40px
        rgba(151, 84, 103, 0.14);

    animation:
        bowFloat
        4s ease-in-out infinite;
}


@keyframes bowFloat {
    0%,
    100% {
        transform:
            translateY(0)
            rotate(-3deg);
    }

    50% {
        transform:
            translateY(-9px)
            rotate(3deg);
    }
}


.eyebrow {
    margin-bottom: 9px;

    color:
        #ad7485;

    font-size:
        9px;

    font-weight:
        600;

    letter-spacing:
        2px;

    text-transform:
        uppercase;
}


.welcome-screen h1 {
    max-width:
        680px;

    font-family:
        "Cormorant Garamond",
        serif;

    font-size:
        clamp(48px, 11vw, 75px);

    line-height:
        0.9;

    font-weight:
        600;

    color:
        #684952;
}


.welcome-screen h1 em {
    display:
        block;

    color:
        #c27891;

    font-style:
        italic;
}


.welcome-text {
    max-width:
        500px;

    margin:
        20px auto 25px;

    color:
        #927a82;

    font-size:
        12px;

    line-height:
        1.7;
}


.tiny-note {
    margin-top:
        15px;

    color:
        #b1949b;

    font-size:
        8px;

    letter-spacing:
        0.5px;
}


/* =========================================================
   HEADINGS
   ========================================================= */

.screen-heading {
    width:
        100%;

    max-width:
        650px;

    margin:
        5px auto 24px;

    text-align:
        center;
}


.step-label {
    display:
        inline-block;

    margin-bottom:
        8px;

    color:
        #b06d80;

    font-size:
        9px;

    font-weight:
        700;

    letter-spacing:
        2px;
}


.screen-heading h2 {
    font-family:
        "Cormorant Garamond",
        serif;

    font-size:
        clamp(43px, 10vw, 65px);

    line-height:
        0.9;

    color:
        #684952;
}


.screen-heading h2 em {
    color:
        #c27891;

    font-style:
        italic;
}


.screen-heading p {
    max-width:
        500px;

    margin:
        12px auto 0;

    color:
        #9a8189;

    font-size:
        11px;

    line-height:
        1.6;
}


/* =========================================================
   GENERAL CARD
   ========================================================= */

.card {
    width:
        min(100%, 590px);

    padding:
        28px 20px;

    border:
        1px solid
        #edd9de;

    border-radius:
        28px;

    background:
        rgba(255, 251, 249, 0.92);

    box-shadow:
        0 22px 50px
        var(--shadow);
}


/* =========================================================
   FORM
   ========================================================= */

.form-screen {
    justify-content:
        center;
}


.form-card {
    text-align:
        left;
}


.input-group {
    margin-bottom:
        17px;
}


.input-group label {
    display:
        block;

    margin-bottom:
        7px;

    color:
        #765760;

    font-size:
        10px;

    font-weight:
        700;
}


.input-group input,
.input-group select {
    width:
        100%;

    height:
        48px;

    padding:
        0 13px;

    border:
        1px solid
        #e6d0d6;

    border-radius:
        13px;

    outline:
        none;

    background:
        #fff9f7;

    color:
        #634951;

    font-family:
        "DM Sans",
        sans-serif;

    font-size:
        11px;
}


.input-group input:focus,
.input-group select:focus {
    border-color:
        #ce899c;

    box-shadow:
        0 0 0 3px
        rgba(206,137,156,0.1);
}


.input-group select option {
    color:
        #634951;

    background:
        white;
}


.form-error {
    min-height:
        16px;

    margin-top:
        10px;

    text-align:
        center;

    color:
        #b34f67;

    font-size:
        9px;
}


/* =========================================================
   DARKNESS SCREEN
   ========================================================= */

.darkness-screen {
    padding:
        0;

    background:
        #08070d;

    color:
        white;
}


.dark-room {
    position:
        relative;

    width:
        100%;

    min-height:
        calc(100vh - 74px);

    overflow:
        hidden;

    background:
        radial-gradient(
            circle at 50% 40%,
            rgba(80, 60, 96, 0.08),
            transparent 45%
        );
}


.dark-window {
    position:
        absolute;

    top:
        9%;

    right:
        9%;

    width:
        100px;

    height:
        125px;

    border:
        6px solid
        #292333;

    background:
        #0c0b17;

    box-shadow:
        inset 0 0 30px
        rgba(110,91,151,0.15);
}


.dark-window .window-moon {
    position:
        absolute;

    top:
        25px;

    left:
        28px;

    width:
        29px;

    height:
        29px;

    border-radius:
        50%;

    background:
        #e6dcbf;
}


.dark-window span {
    position:
        absolute;

    color:
        #d8cde2;

    font-size:
        9px;
}


.dark-window span:nth-child(2) {
    top:
        13px;

    right:
        12px;
}


.dark-window span:nth-child(3) {
    bottom:
        27px;

    left:
        13px;
}


.dark-window span:nth-child(4) {
    top:
        63px;

    right:
        20px;
}


.dark-message {
    position:
        absolute;

    top:
        47%;

    left:
        50%;

    transform:
        translate(-50%, -50%);

    width:
        min(90%, 520px);

    text-align:
        center;
}


.dark-spark {
    margin-bottom:
        12px;

    color:
        #e7c681;

    font-size:
        27px;

    animation:
        sparkle
        2s ease-in-out infinite;
}


@keyframes sparkle {
    0%,
    100% {
        opacity:
            0.5;

        transform:
            scale(0.9);
    }

    50% {
        opacity:
            1;

        transform:
            scale(1.15);
    }
}


.dark-message p {
    color:
        #8e8395;

    font-size:
        10px;

    letter-spacing:
        2px;

    text-transform:
        uppercase;
}


.dark-message h2 {
    margin:
        8px 0 12px;

    font-family:
        "Cormorant Garamond",
        serif;

    font-size:
        clamp(42px, 10vw, 65px);

    line-height:
        0.9;

    font-weight:
        600;
}


.dark-message h2 em {
    color:
        #d4a9c4;

    font-style:
        italic;
}


.dark-message > span {
    display:
        block;

    color:
        #746b78;

    font-size:
        11px;
}


.light-button {
    margin-top:
        25px;

    border:
        1px solid
        rgba(238,213,164,0.25);

    border-radius:
        28px;

    padding:
        13px 23px;

    background:
        rgba(241,210,153,0.08);

    color:
        #e7c98d;

    font-family:
        "DM Sans",
        sans-serif;

    font-size:
        10px;

    cursor:
        pointer;

    transition:
        0.25s ease;
}


.light-button:hover {
    background:
        rgba(241,210,153,0.15);

    box-shadow:
        0 0 30px
        rgba(241,210,153,0.12);
}


/* =========================================================
   PARTY
   ========================================================= */

.party-screen {
    padding:
        0;

    background:
        #241b29;

    overflow:
        hidden;
}


.party-scene {
    position:
        relative;

    width:
        100%;

    min-height:
        calc(100vh - 74px);

    overflow:
        hidden;

    background:
        radial-gradient(
            circle at 50% 40%,
            rgba(239,190,141,0.22),
            transparent 40%
        ),
        #322433;

    animation:
        partyAppear
        1.2s ease both;
}


@keyframes partyAppear {
    from {
        opacity:
            0;
    }

    to {
        opacity:
            1;
    }
}


/* =========================================================
   PARTY BANNER
   ========================================================= */

.party-banner {
    position:
        absolute;

    top:
        10%;

    left:
        50%;

    transform:
        translateX(-50%);

    z-index:
        12;

    padding:
        10px 20px;

    text-align:
        center;

    border:
        1px solid
        rgba(255,255,255,0.12);

    border-radius:
        5px;

    background:
        rgba(65,43,56,0.75);

    box-shadow:
        0 10px 30px
        rgba(0,0,0,0.12);
}


.party-banner span {
    display:
        block;

    color:
        #edc6d1;

    font-size:
        8px;

    letter-spacing:
        3px;
}


.party-banner strong {
    display:
        block;

    margin-top:
        2px;

    color:
        #ffe4a9;

    font-family:
        "Cormorant Garamond",
        serif;

    font-size:
        23px;
}


/* =========================================================
   BALLOONS
   ========================================================= */

.balloon {
    position:
        absolute;

    z-index:
        4;

    font-size:
        45px;

    filter:
        drop-shadow(
            0 8px 8px
            rgba(0,0,0,0.14)
        );

    animation:
        balloonFloat
        4s ease-in-out infinite;
}


.balloon-1 {
    top:
        18%;

    left:
        7%;
}


.balloon-2 {
    top:
        23%;

    right:
        8%;

    animation-delay:
        0.8s;
}


.balloon-3 {
    top:
        39%;

    left:
        3%;

    animation-delay:
        1.5s;
}


.balloon-4 {
    top:
        42%;

    right:
        4%;

    animation-delay:
        2s;
}


@keyframes balloonFloat {
    0%,
    100% {
        transform:
            translateY(0);
    }

    50% {
        transform:
            translateY(-10px);
    }
}


/* =========================================================
   CHARACTERS
   ========================================================= */

.party-character {
    position:
        absolute;

    z-index:
        8;

    bottom:
        25%;

    width:
        62px;

    text-align:
        center;

    animation:
        characterBounce
        3s ease-in-out infinite;
}


.character-left {
    left:
        7%;
}


.character-right {
    right:
        7%;

    animation-delay:
        1s;
}


.character-center {
    left:
        50%;

    transform:
        translateX(-50%);

    animation-delay:
        0.5s;
}


@keyframes characterBounce {
    0%,
    100% {
        margin-bottom:
            0;
    }

    50% {
        margin-bottom:
            7px;
    }
}


.character-head {
    width:
        47px;

    height:
        47px;

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    margin:
        0 auto -2px;

    border-radius:
        50%;

    background:
        #f3c8b2;

    color:
        #a45e75;

    font-size:
        15px;

    box-shadow:
        0 5px 12px
        rgba(0,0,0,0.18);
}


.character-body {
    width:
        58px;

    height:
        62px;

    margin:
        auto;

    border-radius:
        27px 27px 11px 11px;

    background:
        linear-gradient(
            135deg,
            #d3869e,
            #9e759d
        );
}


/* =========================================================
   CAKE TABLE
   ========================================================= */

.cake-table {
    position:
        absolute;

    left:
        50%;

    bottom:
        11%;

    transform:
        translateX(-50%);

    width:
        min(75%, 460px);

    height:
        175px;

    z-index:
        10;
}


.table-cloth {
    position:
        absolute;

    left:
        0;

    bottom:
        0;

    width:
        100%;

    height:
        78px;

    border-radius:
        12px 12px 35px 35px;

    background:
        #74515e;

    box-shadow:
        0 -4px 0
        rgba(255,255,255,0.06);
}


.cake-wrapper {
    position:
        absolute;

    left:
        50%;

    bottom:
        43px;

    transform:
        translateX(-50%);

    width:
        220px;

    height:
        135px;
}


.cake-plate {
    position:
        absolute;

    bottom:
        0;

    left:
        50%;

    transform:
        translateX(-50%);

    width:
        215px;

    height:
        13px;

    border-radius:
        50%;

    background:
        #eee0e0;
}


.cake {
    position:
        absolute;

    left:
        50%;

    bottom:
        9px;

    transform:
        translateX(-50%);

    width:
        185px;

    height:
        115px;
}


.cake-bottom {
    position:
        absolute;

    bottom:
        0;

    left:
        50%;

    transform:
        translateX(-50%);

    width:
        170px;

    height:
        47px;

    border-radius:
        10px;

    background:
        #b86d62;
}


.cake-middle {
    position:
        absolute;

    bottom:
        37px;

    left:
        50%;

    transform:
        translateX(-50%);

    width:
        155px;

    height:
        43px;

    border-radius:
        10px;

    background:
        #d58a86;
}


.cake-top {
    position:
        absolute;

    bottom:
        70px;

    left:
        50%;

    transform:
        translateX(-50%);

    width:
        140px;

    height:
        35px;

    border-radius:
        50%;

    background:
        #f0b3b3;
}


.cake-top::after {
    content:
        "";

    position:
        absolute;

    left:
        20px;

    top:
        12px;

    width:
        10px;

    height:
        10px;

    border-radius:
        50%;

    background:
        #fff3ed;

    box-shadow:
        28px 2px 0 #fff3ed,
        56px -1px 0 #fff3ed,
        84px 2px 0 #fff3ed;
}


/* =========================================================
   NUMBER CANDLES
   ========================================================= */

.number-candles {
    position:
        absolute;

    z-index:
        20;

    left:
        50%;

    bottom:
        91px;

    transform:
        translateX(-50%);

    display:
        flex;

    align-items:
        flex-end;

    justify-content:
        center;

    gap:
        7px;
}


.number-candle {
    position:
        relative;

    min-width:
        25px;

    height:
        39px;

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    border:
        2px solid
        rgba(255,255,255,0.8);

    border-radius:
        5px;

    background:
        linear-gradient(
            135deg,
            #e6a4b8,
            #c87591
        );

    color:
        #fff6e9;

    font-family:
        "Cormorant Garamond",
        serif;

    font-size:
        24px;

    font-weight:
        700;

    box-shadow:
        0 3px 10px
        rgba(0,0,0,0.16);
}


.number-candle::before {
    content:
        "";

    position:
        absolute;

    top:
        -15px;

    left:
        50%;

    transform:
        translateX(-50%);

    width:
        8px;

    height:
        13px;

    border-radius:
        50% 50% 45% 45%;

    background:
        #ffd681;

    box-shadow:
        0 0 13px
        #ffd681;

    animation:
        flame
        0.7s ease-in-out infinite alternate;
}


@keyframes flame {
    from {
        transform:
            translateX(-50%)
            scaleY(0.85);
    }

    to {
        transform:
            translateX(-50%)
            scaleY(1.1);
    }
}


/* =========================================================
   PARTY MESSAGE
   ========================================================= */

.party-message {
    position:
        absolute;

    z-index:
        15;

    top:
        57%;

    left:
        50%;

    transform:
        translate(-50%, -50%);

    width:
        90%;

    text-align:
        center;

    pointer-events:
        none;

    opacity:
        0;

    animation:
        partyMessageIn
        1s
        0.9s
        ease
        forwards;
}


@keyframes partyMessageIn {
    from {
        opacity:
            0;

        transform:
            translate(-50%, -45%);
    }

    to {
        opacity:
            1;

        transform:
            translate(-50%, -50%);
    }
}


.party-message p {
    color:
        #e5b5c3;

    font-size:
        10px;

    letter-spacing:
        2px;

    text-transform:
        uppercase;
}


.party-message h2 {
    margin-top:
        5px;

    font-family:
        "Cormorant Garamond",
        serif;

    font-size:
        clamp(40px, 9vw, 58px);

    line-height:
        0.9;

    color:
        #fff0ed;
}


.party-message h2 em {
    color:
        #e4bbd0;

    font-style:
        italic;
}


.party-continue {
    position:
        absolute;

    z-index:
        30;

    left:
        50%;

    bottom:
        5%;

    transform:
        translateX(-50%);

    opacity:
        0;

    animation:
        continueIn
        0.7s
        2s
        ease
        forwards;
}


@keyframes continueIn {
    from {
        opacity:
            0;

        transform:
            translateX(-50%)
            translateY(10px);
    }

    to {
        opacity:
            1;

        transform:
            translateX(-50%)
            translateY(0);
    }
}


/* =========================================================
   CAKE BUILDER
   ========================================================= */

.customization-screen {
    padding-bottom:
        55px;
}


.cake-builder,
.gift-shop,
.wrapping-builder {
    width:
        min(100%, 680px);
}


.cake-preview-card,
.gift-preview-card,
.wrapping-preview {
    width:
        100%;

    margin-bottom:
        15px;

    padding:
        20px;

    border:
        1px solid
        #ecd6dc;

    border-radius:
        27px;

    background:
        linear-gradient(
            145deg,
            #fff6f3,
            #f9e7eb
        );

    box-shadow:
        0 18px 40px
        rgba(111,64,79,0.1);

    text-align:
        center;
}


.preview-label {
    margin-bottom:
        10px;

    color:
        #ae7182;

    font-size:
        8px;

    font-weight:
        700;

    letter-spacing:
        2px;
}


.cake-preview {
    height:
        230px;

    display:
        flex;

    align-items:
        flex-end;

    justify-content:
        center;

    overflow:
        hidden;

    border-radius:
        20px;

    background:
        radial-gradient(
            circle at 50% 70%,
            rgba(255,255,255,0.9),
            transparent 55%
        );
}


.preview-cake {
    position:
        relative;

    width:
        240px;

    height:
        185px;
}


.preview-cake-body {
    position:
        absolute;

    left:
        50%;

    bottom:
        20px;

    transform:
        translateX(-50%);

    width:
        190px;

    height:
        75px;

    border-radius:
        15px;

    background:
        #e9a8b9;

    box-shadow:
        inset 0 -9px
        rgba(100,55,62,0.08);
}


.preview-cake-top {
    position:
        absolute;

    z-index:
        2;

    left:
        50%;

    bottom:
        76px;

    transform:
        translateX(-50%);

    width:
        195px;

    height:
        42px;

    border-radius:
        50%;

    background:
        #f4bdc8;
}


.preview-cake-decor {
    position:
        absolute;

    z-index:
        5;

    left:
        50%;

    bottom:
        91px;

    transform:
        translateX(-50%);

    white-space:
        nowrap;

    font-size:
        17px;

    color:
        #fff6ef;
}


.preview-cake-candles {
    position:
        absolute;

    z-index:
        10;

    left:
        50%;

    bottom:
        111px;

    transform:
        translateX(-50%);

    display:
        flex;

    gap:
        6px;
}


.preview-number-candle {
    min-width:
        23px;

    height:
        35px;

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    border-radius:
        5px;

    background:
        #d17d97;

    color:
        white;

    font-family:
        "Cormorant Garamond",
        serif;

    font-size:
        21px;

    font-weight:
        700;
}


/* =========================================================
   CUSTOMIZATION CARD
   ========================================================= */

.customization-card {
    width:
        100%;

    padding:
        24px 17px;

    border:
        1px solid
        #ecd9dd;

    border-radius:
        27px;

    background:
        rgba(255,251,249,0.95);

    box-shadow:
        0 18px 45px
        rgba(101,58,73,0.1);
}


.option-section {
    margin-bottom:
        24px;
}


.option-section h3 {
    margin-bottom:
        10px;

    color:
        #704f58;

    font-family:
        "Cormorant Garamond",
        serif;

    font-size:
        21px;
}


.choice-grid {
    display:
        grid;

    grid-template-columns:
        repeat(2, 1fr);

    gap:
        9px;
}


.choice-button {
    min-height:
        61px;

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    gap:
        7px;

    padding:
        8px;

    border:
        1px solid
        #ead5da;

    border-radius:
        14px;

    background:
        #fff9f7;

    color:
        #73535b;

    font-family:
        "DM Sans",
        sans-serif;

    font-size:
        9px;

    cursor:
        pointer;

    transition:
        0.2s ease;
}


.choice-button:first-letter {
    font-size:
        18px;
}


.choice-button:hover {
    transform:
        translateY(-2px);
}


.choice-button.selected {
    border-color:
        #c27891;

    background:
        #fbe8ed;

    box-shadow:
        0 0 0 2px
        rgba(194,120,145,0.1);
}


/* =========================================================
   COLOUR CHOICES
   ========================================================= */

.colour-grid {
    display:
        flex;

    flex-wrap:
        wrap;

    gap:
        10px;
}


.colour-choice,
.gift-colour {
    width:
        42px;

    height:
        42px;

    border:
        3px solid
        white;

    border-radius:
        50%;

    background:
        var(--choice-color);

    box-shadow:
        0 0 0 1px
        #ddc9ce;

    cursor:
        pointer;

    transition:
        0.2s ease;
}


.colour-choice:hover,
.gift-colour:hover {
    transform:
        scale(1.08);
}


.colour-choice.selected,
.gift-colour.selected {
    box-shadow:
        0 0 0 2px
        #b96882;

    transform:
        scale(1.08);
}


/* =========================================================
   CUSTOM CAKE TEXT
   ========================================================= */

.custom-cake-description {
    margin-bottom:
        22px;
}


.custom-cake-description label {
    display:
        block;

    margin-bottom:
        4px;

    color:
        #704f58;

    font-family:
        "Cormorant Garamond",
        serif;

    font-size:
        21px;
}


.custom-cake-description p {
    margin-bottom:
        9px;

    color:
        #a1848c;

    font-size:
        9px;

    line-height:
        1.5;
}


.custom-cake-description textarea {
    width:
        100%;

    min-height:
        95px;

    resize:
        vertical;

    padding:
        12px;

    border:
        1px solid
        #e5d0d6;

    border-radius:
        14px;

    outline:
        none;

    background:
        #fff9f7;

    color:
        #674b55;

    font-family:
        "DM Sans",
        sans-serif;

    font-size:
        10px;

    line-height:
        1.5;
}


.custom-cake-description textarea:focus {
    border-color:
        #c98298;

    box-shadow:
        0 0 0 3px
        rgba(201,130,152,0.1);
}


/* =========================================================
   GIFT SHOP
   ========================================================= */

.gift-preview {
    min-height:
        250px;

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    border-radius:
        20px;

    background:
        radial-gradient(
            circle,
            #fff,
            #f9e4e9
        );
}


.gift-box {
    position:
        relative;

    width:
        170px;

    height:
        165px;

    transition:
        transform 0.25s ease;
}


.gift-box:hover {
    transform:
        translateY(-5px)
        rotate(-2deg);
}


.gift-box-body {
    position:
        absolute;

    left:
        15px;

    bottom:
        10px;

    width:
        140px;

    height:
        105px;

    border-radius:
        5px;

    background:
        #e59aac;

    box-shadow:
        0 20px 30px
        rgba(91,51,62,0.18);
}


.gift-box-lid {
    position:
        absolute;

    z-index:
        4;

    top:
        30px;

    left:
        7px;

    width:
        156px;

    height:
        30px;

    border-radius:
        6px;

    background:
        #d98299;
}


.gift-ribbon-vertical {
    position:
        absolute;

    z-index:
        7;

    left:
        73px;

    top:
        30px;

    width:
        24px;

    height:
        135px;

    background:
        #f1cf85;
}


.gift-ribbon-horizontal {
    position:
        absolute;

    z-index:
        8;

    left:
        7px;

    top:
        76px;

    width:
        156px;

    height:
        18px;

    background:
        #f1cf85;
}


.gift-bow {
    position:
        absolute;

    z-index:
        12;

    top:
        0;

    left:
        58px;

    font-size:
        35px;
}


.gift-object {
    position:
        absolute;

    z-index:
        10;

    left:
        50%;

    top:
        65px;

    transform:
        translateX(-50%);

    font-size:
        35px;

    filter:
        drop-shadow(
            0 4px 5px
            rgba(0,0,0,0.18)
        );
}


.gift-grid {
    display:
        grid;

    grid-template-columns:
        repeat(2, 1fr);

    gap:
        9px;
}


.gift-choice {
    min-height:
        82px;

    display:
        flex;

    flex-direction:
        column;

    align-items:
        center;

    justify-content:
        center;

    gap:
        5px;

    border:
        1px solid
        #ead6db;

    border-radius:
        15px;

    background:
        #fff9f7;

    color:
        #72545c;

    cursor:
        pointer;

    transition:
        0.2s ease;
}


.gift-choice span {
    font-size:
        25px;
}


.gift-choice strong {
    font-size:
        8px;

    font-weight:
        600;
}


.gift-choice:hover {
    transform:
        translateY(-3px);
}


.gift-choice.selected {
    border-color:
        #c27891;

    background:
        #fbe8ed;

    box-shadow:
        0 0 0 2px
        rgba(194,120,145,0.1);
}


/* =========================================================
   FLOWER SHOP
   ========================================================= */

.flower-screen {
    padding-bottom:
        40px;
}


.flower-shop {
    width:
        100%;

    max-width:
        700px;

    border-radius:
        30px;

    overflow:
        hidden;

    background:
        #fff7f3;

    box-shadow:
        0 22px 50px
        rgba(101,58,73,0.13);
}


.flower-display {
    padding:
        18px 10px 10px;

    background:
        linear-gradient(
            145deg,
            #f9e1e5,
            #f5eee8
        );
}


.flower-category-title {
    margin:
        5px 4px 10px;

    color:
        #a96779;

    font-size:
        8px;

    font-weight:
        700;

    letter-spacing:
        2px;
}


.flower-grid {
    display:
        grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap:
        9px;

    max-height:
        460px;

    overflow-y:
        auto;

    padding:
        3px 4px 15px;
}


.flower-grid::-webkit-scrollbar,
.greenery-grid::-webkit-scrollbar {
    width:
        5px;
}


.flower-grid::-webkit-scrollbar-thumb,
.greenery-grid::-webkit-scrollbar-thumb {
    background:
        #cf91a1;

    border-radius:
        10px;
}


.flower-card {
    position:
        relative;

    min-width:
        0;

    overflow:
        hidden;

    border:
        2px solid
        rgba(255,255,255,0.8);

    border-radius:
        16px;

    background:
        rgba(255,250,248,0.96);

    box-shadow:
        0 6px 16px
        rgba(86,53,61,0.12);

    transition:
        0.2s ease;
}


.flower-card:hover {
    transform:
        translateY(-4px);
}


.flower-card.selected {
    border-color:
        #bd7187;

    box-shadow:
        0 0 0 2px
        rgba(189,113,135,0.13);
}


.flower-photo {
    height:
        100px;

    background:
        radial-gradient(
            circle,
            #fffdf9,
            #edddda
        );
}


.flower-photo svg {
    width:
        100%;

    height:
        100%;

    padding:
        7px;
}


.flower-quantity {
    position:
        absolute;

    top:
        5px;

    left:
        5px;

    min-width:
        21px;

    height:
        21px;

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    border-radius:
        50%;

    background:
        rgba(86,52,61,0.78);

    color:
        white;

    font-size:
        8px;

    font-weight:
        700;
}


.flower-info {
    padding:
        7px 6px 33px;

    text-align:
        center;
}


.flower-info h3 {
    font-family:
        "Cormorant Garamond",
        serif;

    font-size:
        15px;

    line-height:
        1;

    color:
        #664a51;
}


.flower-info p {
    margin-top:
        4px;

    color:
        #a27d84;

    font-size:
        7px;

    text-transform:
        uppercase;
}


.add-button {
    position:
        absolute;

    right:
        6px;

    bottom:
        6px;

    width:
        28px;

    height:
        28px;

    border:
        none;

    border-radius:
        50%;

    background:
        #bd7187;

    color:
        white;

    font-size:
        19px;

    cursor:
        pointer;
}


/* =========================================================
   GREENERY
   ========================================================= */

.greenery-grid {
    display:
        grid;

    grid-template-columns:
        repeat(2, 1fr);

    gap:
        10px;

    padding:
        3px 4px 15px;
}


.greenery-card {
    position:
        relative;

    overflow:
        hidden;

    min-height:
        115px;

    border:
        2px solid
        rgba(255,255,255,0.8);

    border-radius:
        17px;

    background:
        #f5f8ef;

    box-shadow:
        0 6px 16px
        rgba(70,92,67,0.1);
}


.greenery-photo {
    height:
        80px;

    background:
        linear-gradient(
            135deg,
            #e4eddf,
            #f7f4e8
        );
}


.greenery-photo svg {
    width:
        100%;

    height:
        100%;

    padding:
        6px;
}


.greenery-quantity {
    position:
        absolute;

    top:
        5px;

    left:
        5px;

    min-width:
        20px;

    height:
        20px;

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    border-radius:
        50%;

    background:
        rgba(58,84,59,0.8);

    color:
        white;

    font-size:
        8px;
}


.greenery-info {
    padding:
        7px 35px 7px 8px;
}


.greenery-info h3 {
    font-family:
        "Cormorant Garamond",
        serif;

    font-size:
        15px;

    color:
        #536a55;
}


/* =========================================================
   BOUQUET CONTROLS
   ========================================================= */

.bouquet-controls {
    display:
        flex;

    align-items:
        center;

    justify-content:
        space-between;

    gap:
        10px;

    padding:
        12px;

    background:
        #fffaf8;

    border-top:
        1px solid
        #ead8dc;
}


.selection-summary span {
    display:
        block;

    color:
        #a2868e;

    font-size:
        8px;

    text-transform:
        uppercase;

    letter-spacing:
        1px;
}


.selection-summary strong {
    display:
        block;

    margin-top:
        3px;

    color:
        #684c54;

    font-family:
        "Cormorant Garamond",
        serif;

    font-size:
        18px;
}


/* =========================================================
   WRAPPING
   ========================================================= */

.wrapping-builder {
    width:
        min(100%, 680px);
}


.wrapping-preview {
    min-height:
        260px;

    display:
        flex;

    flex-direction:
        column;

    align-items:
        center;

    justify-content:
        center;
}


.wrapping-bouquet-preview {
    position:
        relative;

    width:
        250px;

    height:
        200px;

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;
}


.mini-bouquet {
    font-size:
        46px;

    letter-spacing:
        -5px;

    filter:
        drop-shadow(
            0 8px 8px
            rgba(0,0,0,0.1)
        );
}


.preview-ribbon {
    position:
        absolute;

    bottom:
        23px;

    left:
        50%;

    transform:
        translateX(-50%);

    width:
        65px;

    height:
        19px;

    border-radius:
        5px;

    background:
        #d99aaa;

    box-shadow:
        0 5px 10px
        rgba(0,0,0,0.1);
}


.ribbon-grid {
    display:
        grid;

    grid-template-columns:
        repeat(2, 1fr);

    gap:
        9px;
}


.wrapping-choice-grid {
    display:
        grid;

    grid-template-columns:
        repeat(2, 1fr);

    gap:
        9px;
}


.ribbon-card,
.wrapping-card {
    min-height:
        67px;

    display:
        flex;

    align-items:
        center;

    gap:
        10px;

    padding:
        8px;

    border:
        1px solid
        #ead6db;

    border-radius:
        14px;

    background:
        #fff9f7;

    color:
        #704f58;

    cursor:
        pointer;

    transition:
        0.2s ease;
}


.ribbon-card:hover,
.wrapping-card:hover {
    transform:
        translateY(-2px);
}


.ribbon-card.selected,
.wrapping-card.selected {
    border-color:
        #c27891;

    background:
        #fbe8ed;
}


.ribbon-swatch,
.wrapping-swatch {
    flex-shrink:
        0;

    width:
        37px;

    height:
        48px;

    border-radius:
        7px;

    background:
        var(--item-color);

    box-shadow:
        inset 4px 0
        rgba(255,255,255,0.25);
}


.ribbon-card strong,
.wrapping-card strong {
    font-family:
        "Cormorant Garamond",
        serif;

    font-size:
        16px;
}


/* =========================================================
   FINAL SCREEN
   ========================================================= */

.final-screen {
    position:
        relative;

    justify-content:
        center;

    text-align:
        center;

    background:
        radial-gradient(
            circle at 50% 25%,
            rgba(232,175,199,0.24),
            transparent 36%
        );
}


.final-content {
    width:
        min(100%, 650px);
}


.final-sparkles {
    margin-bottom:
        15px;

    color:
        #d8ad67;

    letter-spacing:
        8px;

    font-size:
        15px;
}


.final-screen h2 {
    font-family:
        "Cormorant Garamond",
        serif;

    font-size:
        clamp(45px, 11vw, 72px);

    line-height:
        0.88;

    color:
        #674750;
}


.final-screen h2 em {
    color:
        #c27891;

    font-style:
        italic;
}


.final-intro {
    max-width:
        510px;

    margin:
        17px auto 25px;

    color:
        #987f87;

    font-size:
        11px;

    line-height:
        1.7;
}


/* =========================================================
   FINAL OBJECTS
   ========================================================= */

.final-object {
    display:
        inline-flex;

    flex-direction:
        column;

    align-items:
        center;

    justify-content:
        center;

    min-width:
        100px;

    margin:
        6px;

    padding:
        10px 12px;

    border:
        1px solid
        #ead6db;

    border-radius:
        18px;

    background:
        rgba(255,250,248,0.85);

    box-shadow:
        0 8px 20px
        rgba(101,58,73,0.08);
}


.final-object > span {
    color:
        #a27e88;

    font-size:
        7px;

    font-weight:
        700;

    letter-spacing:
        1px;
}


.final-cake,
.final-gift,
.final-bouquet {
    margin-top:
        6px;

    font-size:
        39px;
}


.final-message {
    max-width:
        500px;

    margin:
        25px auto;

    padding:
        17px;

    border-top:
        1px solid
        #ead3d9;

    border-bottom:
        1px solid
        #ead3d9;
}


.final-message p {
    color:
        #8f747e;

    font-family:
        "Cormorant Garamond",
        serif;

    font-size:
        20px;

    line-height:
        1.15;
}


.final-message strong {
    display:
        block;

    margin-top:
        8px;

    color:
        #b26880;

    font-size:
        10px;
}


.secondary-button {
    padding:
        9px 17px;

    border:
        1px solid
        #e3cbd2;

    border-radius:
        20px;

    background:
        #fff9f7;

    color:
        #a2707f;

    font-size:
        9px;

    cursor:
        pointer;
}


/* =========================================================
   TOAST
   ========================================================= */

.toast {
    position:
        fixed;

    z-index:
        1000;

    left:
        50%;

    bottom:
        25px;

    transform:
        translate(-50%, 20px);

    min-width:
        180px;

    max-width:
        90%;

    padding:
        10px 16px;

    border-radius:
        22px;

    background:
        rgba(90,55,66,0.94);

    color:
        white;

    text-align:
        center;

    font-size:
        9px;

    opacity:
        0;

    pointer-events:
        none;

    transition:
        0.3s ease;
}


.toast.show {
    opacity:
        1;

    transform:
        translate(-50%, 0);
}


/* =========================================================
   MOBILE
   ========================================================= */

@media (max-width: 600px) {

    .choice-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }


    .flower-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }


    .party-character {
        transform:
            scale(0.82);
    }


    .character-center {
        transform:
            translateX(-50%)
            scale(0.82);
    }


    .balloon {
        font-size:
            38px;
    }


    .cake-table {
        width:
            88%;
    }


    .party-message {
        top:
            56%;
    }


    .party-message h2 {
        font-size:
            43px;
    }


    .dark-window {
        right:
            2%;

        transform:
            scale(0.8);

        transform-origin:
            top right;
    }


    .gift-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }


    .ribbon-grid,
    .wrapping-choice-grid {
        grid-template-columns:
            1fr;
    }


    .bouquet-controls {
        align-items:
            stretch;
    }

}


@media (max-width: 380px) {

    .brand strong {
        font-size:
            18px;
    }


    .brand small {
        font-size:
            6px;
    }


    .brand-icon {
        width:
            36px;

        height:
            36px;

        font-size:
            19px;
    }


    .flower-grid {
        gap:
            7px;
    }


    .flower-photo {
        height:
            88px;
    }


    .flower-info h3 {
        font-size:
            14px;
    }

}


/* =========================================================
   ACCESSIBILITY
   ========================================================= */

button,
input,
select,
textarea {
    -webkit-tap-highlight-color:
        transparent;
}


button:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
    outline:
        2px solid
        #c27891;

    outline-offset:
        2px;
}


@media (prefers-reduced-motion: reduce) {

    *,
    *::before,
    *::after {
        animation-duration:
            0.01ms !important;

        animation-iteration-count:
            1 !important;

        transition-duration:
            0.01ms !important;

        scroll-behavior:
            auto !important;
    }

}
