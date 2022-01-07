<script>
    let bgImage = "images/Home Page/Space Background.png";
    import Nav from "../Components/nav.svelte";
    import Landscape from "../Components/landscapeMode.svelte";
</script>

<div style="background-image: url('{bgImage}')" id="homePage">
    <Nav/>
    <section id="main">
        <div class="stars" id="starOne"></div>
        <div class="stars" id="starTwo"></div>
        <div class="stars" id="starThree"></div>
        <div class="stars" id="starFour"></div>
        <div class="stars" id="starFive"></div>
        <div id="name">
            <h1>Andrew Carbungco</h1>
            <h2>Visual Designer</h2>
            
        </div>
        <section id="initialBackground"></section>
    </section>
    <a href="/about" id="nextPage">
        Next Page >
    </a>
</div>
<div id="landscape"><Landscape/></div>


<style>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap');
    #nextPage {
        font-family: 'Open Sans Condensed', sans-serif;
        font-size: 1.2em;
        color: white;
        position: fixed;
        top: 75%;
        left: 85%;
        text-decoration: none;
    }
    #nextPage:hover {
        text-decoration: underline;
    }
    #initialBackground {
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: #222634;
        animation-name: backgroundFade;
        animation-duration: 3s;
        animation-fill-mode: forwards;
    }
    #homePage {
        display: grid;
        background-size: cover;
        background-color: #222634;
        height: 100%;
        grid-template-columns: 15% 85%;
    }
    #main {
        color: white;
        display: grid;
        grid-template-columns: 0.5fr 1fr 1fr 1fr 0.5fr;
        grid-template-rows: repeat(5, 15%);
    }
    h1, h2 {
        font-family: 'Open Sans Condensed', sans-serif;
        font-weight: lighter;
    }
    #name {
        grid-column: 2 / 4;
        grid-row: 4 / 5;
        display: grid;
        grid-template-columns: 0.5fr 1fr 2fr 1fr 0.5fr;
        grid-template-rows: 73% 63% 33%;
        z-index: 2;
    }
    h1 {
        font-size: 3em;
    }
    h2 {
        font-size: 2.3em;
    }
    #name h1 {
        grid-column: 2 / 5;
        grid-row: 1 / 2;
        opacity: 0;
        animation-name: fadeLeft;
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
        animation-delay: 2.2s;
    }
    #name h2 {
        grid-column: 2 / 5;
        grid-row: 2 / 3;
        opacity: 0;
        animation-name: fadeLeft;
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
        animation-delay: 2.3s;
    }
    .stars {
        position: fixed;
        opacity: 0;
        background-color: rgb(211, 211, 211);
        height: 0.7%;
        width: 0.4%;
        border-radius: 4px;
        
        animation-iteration-count: infinite;
    }
    #starOne {
        top: 20%;
        left: 80%;
        animation-name: starFall;
        animation-duration: 1s;
    }
    #starTwo {
        top: 17%;
        left: 70%;
        animation-name: starFall2;
        animation-delay: 0.5s;
        animation-duration: 1.2s;
    }
    #starThree {
        top: 24%;
        left: 90%;
        animation-name: starFall3;
        animation-delay: 0.2s;
        animation-duration: 0.8s;
    }
    #starFour {
        top: 16%;
        left: 65%;
        animation-name: starFall4;
        animation-delay: 0.7s;
        animation-duration: 1.4s;
    }
    #starFive {
        top: 22%;
        left: 95%;
        animation-name: starFall5;
        animation-delay: 1s;
        animation-duration: 0.6s;
    }
    @media (orientation: landscape) {
        #homePage {
            display: grid;
        }
        #landscape {
            display: none;
        }
    }

    @media (orientation: portrait) {
        #homePage {
            display: none;
        }
        #landscape {
            display: initial;
        }
    }
    @media only screen and (max-width: 850px) and (max-height: 500px) {
        h1 {
            font-size: 2em;
        }
        h2 {
            font-size: 1.5em;
        }
        @keyframes stretchUp3 {
            0% {
                transform: scaleX(0) translateX(50%);
                
            }
            80% {
                transform: scaleX(1.1) translateX(50%);
            }
            100% {
                transform: scaleX(1) translateX(50%);
            }
        }
}
@media only screen and (max-width: 650px) {
        h1 {
            font-size: 1.5em;
        }
        h2 {
            font-size: 1.1em;
        }
        @keyframes stretchUp3 {
            0% {
                transform: scaleX(0) translateX(50%);
                
            }
            80% {
                transform: scaleX(1.1) translateX(50%);
            }
            100% {
                transform: scaleX(1) translateX(50%);
            }
        }
}
@keyframes backgroundFade {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
@keyframes stretchUp {
    0% {
        opacity: 0;
    }
    80% {
        opacity: 1;
    }
    100% {
        opacity: 1;
    }
}
@keyframes fadeLeft {
    0% {
        transform: translateX(30px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}
@keyframes fadeRight {
    0% {
        transform: translateX(10%);
        opacity: 0;
        
    }
    100% {
        transform: translateX(0%);
    }
}
@keyframes starFall {
    0% {
        opacity: 0;
        top: 20%;
        left: 80%;
    }
    20% {
        opacity: 0.4;
    }
    80% {
        opacity: 0.4;
    }
    100% {
        opacity: 0;
        top: 70%;
        left: 40%;
    }
}
@keyframes starFall2 {
    0% {
        opacity: 0;
        top: 17%;
        left: 70%;
    }
    20% {
        opacity: 0.4;
    }
    80% {
        opacity: 0.4;
    }
    100% {
        opacity: 0;
        top: 50%;
        left: 40%;
    }
}
@keyframes starFall3 {
    0% {
        opacity: 0;
        top: 24%;
        left: 90%;
    }
    20% {
        opacity: 0.4;
    }
    80% {
        opacity: 0.4;
    }
    100% {
        opacity: 0;
        top: 78%;
        left: 35%;
    }
}
@keyframes starFall4 {
    0% {
        opacity: 0;
        top: 16%;
        left: 65%;
    }
    20% {
        opacity: 0.4;
    }
    80% {
        opacity: 0.4;
    }
    100% {
        opacity: 0;
        top: 80%;
        left: 48%;
    }
}
@keyframes starFall5 {
    0% {
        opacity: 0;
        top: 22%;
        left: 95%;
    }
    20% {
        opacity: 0.4;
    }
    80% {
        opacity: 0.4;
    }
    100% {
        opacity: 0;
        top: 60%;
        left: 5%;
    }
}
    
</style>