<section id="blocks">
    <div class="square" id="square1"></div>
    <div class="square" id="square2"></div>
    <div class="square" id="square3"></div>
    <div class="square" id="square4"></div>
    <div class="square" id="square5"></div>
    <div class="square" id="square6"></div>
    <div class="square" id="square7"></div>
    <div class="square" id="square8"></div>
    <div class="square" id="square9"></div>
    <div class="square" id="square10"></div>
    <div class="square" id="square11"></div>
    <div class="square" id="square12"></div>
    <div class="square" id="square13"></div>
    <div class="square" id="square14"></div>
    <div class="square" id="square15"></div>
</section>

<style>
    .square {
        height: 40px;
        width: 30px;
        border-radius: 5px;
        background-color: white;
        animation-direction: normal;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
    #blocks {
        display: grid;
        grid-template-columns: repeat(15, 80px);
        overflow-x: hidden;
    }
    #square1 {
        animation-name: left1;
        animation-duration: 2s;
    }
    #square2 {
        animation-name: left2;
        animation-duration: 2s;
    }
    #square3 {
        animation-name: left2;
        animation-duration: 2s;
    }
    #square4 {
        animation-name: left2;
        animation-duration: 2s;
    }
    #square5 {
        animation-name: left2;
        animation-duration: 2s;
    }
    #square6 {
        animation-name: left2;
        animation-duration: 2s;
    }
    #square7 {
        animation-name: left2;
        animation-duration: 2s;
    }
    #square8 {
        animation-name: left2;
        animation-duration: 2s;
    }
    #square9 {
        animation-name: left2;
        animation-duration: 2s;
    }
    #square10 {
        animation-name: left2;
        animation-duration: 2s;
    }
    #square11 {
        animation-name: left2;
        animation-duration: 2s;
    }
    #square12 {
        animation-name: left2;
        animation-duration: 2s;
    }
    #square13 {
        animation-name: left2;
        animation-duration: 2s;
    }
    #square14 {
        animation-name: left2;
        animation-duration: 2s;
    }
    #square15 {
        animation-name: left3;
        animation-duration: 2s;
    }
    @keyframes left1 {
        0% {
            transform: translateX(0);
            opacity: 1;
        }
        30% {
            opacity: 0;
        }
        100% {
            transform: translateX(-80px);
            opacity: 0;
        }
    }

    @keyframes left2 {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-80px);
        }
    }
    @keyframes left3 {
        0% {
            transform: translateX(0);
            opacity: 0;
        }
        100% {
            transform: translateX(-80px);
            opacity: 1;
        }
    }
</style>