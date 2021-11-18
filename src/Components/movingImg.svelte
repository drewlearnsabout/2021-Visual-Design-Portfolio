<script>
    let bxOne = "images/Animations/Behavior Issues 1.gif";
    let bxTwo = "images/Animations/Behavior Issues 2.gif";
    let contact = "images/Animations/Contact.gif";
    let decProb = "images/Animations/Decreased Problem Bxs.gif";
    let improvAttn = "images/Animations/Improved Attn.gif";
    let increaseLng = "images/Animations/Increased Language.gif";
    let edge = "images/Animations/Edge Banner.gif";
    let mainPg = "images/Animations/Main-Page-Animation-Ver-2.gif";
    let peerPrgm = "images/Animations/Peer-Program-Icon.gif";
    let whatImpact = "images/Animations/What-is-Impact-Banner.gif";
</script>
<section id="scrollLeft">
    <img id="bxOne" src="{bxOne}" alt="">
    <img id="bxTwo" src="{bxTwo}" alt="">
    <img id="contact" src="{contact}" alt="">
    <img id="decProb" src="{decProb}" alt="">
    <img id="improvAttn" src="{improvAttn}" alt="">
    <img id="increaseLng" src="{increaseLng}" alt="">
    <img id="edge" src="{edge}" alt="">
    <img id="mainPg" src="{mainPg}" alt="">
    <img id="peerPrgm" src="{peerPrgm}" alt="">
    <img id="whatImpact" src="{whatImpact}" alt="">
</section>

<style>
    #scrollLeft {
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-rows: 1fr 6fr 1fr;
        justify-items: center;
        align-items: center;
    }
    #bxOne, #bxTwo, #contact, #mainPg {
        width: 18vw;
        grid-area: 2 / 2 / 3 / 3;
        animation-duration: 60s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
    #decProb, #improvAttn, #increaseLng, #edge, #peerPrgm, #whatImpact {
        width: 26vw;
        grid-area: 2 / 2 / 3 / 3;
        animation-duration: 60s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
    @media only screen and (max-width: 850px) and (max-height: 500px) {
        #bxOne, #bxTwo, #contact, #mainPg {
            width: 17vw;
        }
        #decProb, #improvAttn, #increaseLng, #edge, #peerPrgm, #whatImpact {
            width: 22vw;
        }
    }
    #bxOne {
        animation-name: left1;
    }
    #bxTwo {
        animation-name: left2;
    }
    #contact {
        animation-name: left3;
    }
    #decProb {
        animation-name: left4;
    }
    #improvAttn {
        animation-name: left5;
    }
    #increaseLng {
        animation-name: left6;
    }
    #edge {
        animation-name: left7;
    }
    #mainPg {
        animation-name: left8;
    }
    #peerPrgm {
        animation-name: left9;
    }
    #whatImpact {
        animation-name: left10;
    }

    @keyframes left1 {
        0% {
            opacity: 0;
            transform: translateX(100px);
        }
        3% {
            opacity: 1;
        }
        7% {
            opacity: 1;
        }
        10% {
            opacity: 0;
            transform: translateX(-150px);
            display: none;
        }
        99% {
            display: grid;
        }
        100% {
            opacity: 0;
            transform: translateX(-150px);
        }
    }
    @keyframes left2 {
        0% {
            opacity: 0;
            transform: translateX(100px);
            display: none;
        }
        9% {
            display: none;
        }
        10% {
            opacity: 0;
            transform: translateX(100px);
        }
        13% {
            opacity: 1;
        }
        17% {
            opacity: 1;
        }
        20% {
            opacity: 0;
            transform: translateX(-150px);
        }
        21% {
            display: none;
        }
        99% {
            display: none;
        }
        100% {
            opacity: 0;
            transform: translateX(-150px);
        }
    }
    @keyframes left3 {
        0% {
            opacity: 0;
            transform: translateX(100px);
            display: none;
        }
        19% {
            display: none;
        }
        20% {
            opacity: 0;
            transform: translateX(100px);
        }
        23% {
            opacity: 1;
        }
        27% {
            opacity: 1;
        }
        30% {
            opacity: 0;
            transform: translateX(-150px);
        }
        31% {
            display: none;
        }
        99% {
            display: none;
        }
        100% {
            opacity: 0;
            transform: translateX(-150px);
        }
    }
    @keyframes left4 {
        0% {
            opacity: 0;
            transform: translateX(100px);
            display: none;
        }
        29% {
            display: none;
        }
        30% {
            opacity: 0;
            transform: translateX(100px);
        }
        33% {
            opacity: 1;
        }
        37% {
            opacity: 1;
        }
        40% {
            opacity: 0;
            transform: translateX(-150px);
        }
        41% {
            display: none;
        }
        99% {
            display: none;
        }
        100% {
            opacity: 0;
            transform: translateX(-150px);
        }
    }
    @keyframes left5 {
        0% {
            opacity: 0;
            transform: translateX(100px);
            display: none;
        }
        39% {
            display: none;
        }
        40% {
            opacity: 0;
            transform: translateX(100px);
        }
        43% {
            opacity: 1;
        }
        47% {
            opacity: 1;
        }
        50% {
            opacity: 0;
            transform: translateX(-150px);
        }
        51% {
            display: none;
        }
        99% {
            display: none;
        }
        100% {
            opacity: 0;
            transform: translateX(-150px);
        }
    }
    @keyframes left6 {
        0% {
            opacity: 0;
            transform: translateX(100px);
            display: none;
        }
        49% {
            display: none;
        }
        50% {
            opacity: 0;
            transform: translateX(100px);
        }
        53% {
            opacity: 1;
        }
        57% {
            opacity: 1;
        }
        60% {
            opacity: 0;
            transform: translateX(-150px);
        }
        61% {
            display: none;
        }
        99% {
            display: none;
        }
        100% {
            opacity: 0;
            transform: translateX(-150px);
        }
    }
    @keyframes left7 {
        0% {
            opacity: 0;
            transform: translateX(100px);
            display: none;
        }
        59% {
            display: none;
        }
        60% {
            opacity: 0;
            transform: translateX(100px);
        }
        63% {
            opacity: 1;
        }
        67% {
            opacity: 1;
        }
        70% {
            opacity: 0;
            transform: translateX(-150px);
        }
        71% {
            display: none;
        }
        99% {
            display: none;
        }
        100% {
            opacity: 0;
            transform: translateX(-150px);
        }
    }
    @keyframes left8 {
        0% {
            opacity: 0;
            transform: translateX(100px);
            display: none;
        }
        69% {
            display: none;
        }
        70% {
            opacity: 0;
            transform: translateX(100px);
        }
        73% {
            opacity: 1;
        }
        77% {
            opacity: 1;
        }
        80% {
            opacity: 0;
            transform: translateX(-150px);
        }
        81% {
            display: none;
        }
        99% {
            display: none;
        }
        100% {
            opacity: 0;
            transform: translateX(-150px);
        }
    }
    @keyframes left9 {
        0% {
            opacity: 0;
            transform: translateX(100px);
            display: none;
        }
        79% {
            display: none;
        }
        80% {
            opacity: 0;
            transform: translateX(100px);
        }
        83% {
            opacity: 1;
        }
        87% {
            opacity: 1;
        }
        90% {
            opacity: 0;
            transform: translateX(-150px);
        }
        91% {
            display: none;
        }
        99% {
            display: none;
        }
        100% {
            opacity: 0;
            transform: translateX(-150px);
        }
    }
    @keyframes left10 {
        0% {
            opacity: 0;
            transform: translateX(100px);
            display: none;
        }
        89% {
            display: none;
        }
        90% {
            opacity: 0;
            transform: translateX(100px);
        }
        93% {
            opacity: 1;
        }
        97% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: translateX(-150px);
        }
    }
</style>