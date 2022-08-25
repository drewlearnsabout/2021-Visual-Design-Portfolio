<script>
    import Nav from "../Components/nav.svelte";
    import Landscape from "../Components/landscapeMode.svelte";
    let hp = "images/Home Page/HP Case Study Header.png";
    let ink = "images/Home Page/Ink Header.png";
    let awsArticle = "images/Home Page/AWS AH Case Study.pdf";
    let hpArticle = "images/Home Page/HP UI Case Study.pdf";
</script>

<div id="homePage">
    <Nav/>
    <section id="main">
        <div id="caseStudySection">
            <div>
                <p>UI/UX Case Studies</p>
            </div>
            <div id="caseStudies">
                <a href="{hpArticle}" class="cases" id="hpArticle" rel=external target="_blank">
                    <img src="{hp}" alt="">
                    <p>PDF</p>
                </a>
                <a href="{awsArticle}" class="cases" id="awsArticle" rel=external target="_blank">
                    <img src="{ink}" alt="">
                    <p>Web Article</p>
                </a>
                <div>
                    <a id="articlesButton" href="/articles"><button>More articles</button></a>
                </div>
            </div>
        </div>
        <div id="name">
            <a href="/about"><h1>Andrew Carbungco<br><span>Visual Designer</span></h1></a>
        </div>
    </section>
    <a href="/about" id="nextPage">
        Next Page
    </a>
    <footer>
        <p>Website built by Andrew Carbungco using <a href="https://github.com/drewlearnsabout/2021-Visual-Design-Portfolio">Svelte/Sveltkit</a>.
        <br>
        **Under construction**
        </p>
        
        
    </footer>
</div>
<div id="landscape"><Landscape/></div>


<style>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap');
    footer {
        max-width: 100vw;
        position: fixed;
        bottom: 3vh;
        left: 72%;
        font-family: 'Open Sans Condensed', sans-serif;
        color: white;
        animation-delay: 3s;
        animation-name: footerFade;
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
        opacity: 0;
    }
    footer a {
        color: white;
        transition-duration: 0.2s;
    }
    footer a:hover, footer a:active {
        font-weight: bold;
        color:rgb(21, 159, 201);
    }
    #nextPage {
        font-family: 'PT Sans Narrow', sans-serif;
        font-size: 1.2em;
        color: white;
        position: fixed;
        top: 75%;
        left: 85%;
        text-decoration: none;
        border-radius: 12px;
        background: #222634;
        box-shadow:  5px 5px 10px #1d202c, -5px -5px 10px #272c3c;
        padding: 10px 25px;
        animation-name: fadeIn;
        animation-duration: 2s;
        animation-delay: 2s;
        animation-fill-mode: forwards;
        opacity: 0;
    }
    #nextPage:hover {
        box-shadow:  inset 5px 5px 10px #1d202c, inset -5px -5px 10px #272c3c;
    }
    #homePage {
        display: grid;
        background-color: #222634;
        width: 100%;
        grid-template-columns: 15% 85%;
    }
    #main {
        width: 80%;
        height: 80%;
        color: white;
        display: grid;
        justify-self: center;
        align-self: center;
        grid-template-rows: min-content 35%;
        row-gap:10%;
        font-family: 'Open Sans Condensed', sans-serif;
        font-weight: lighter;
    }
    #name {
        width: 40%;
        height: 100%;
        grid-column: 1 / 2;
        grid-row: 2 / 3;
        z-index: 1;
        display: grid;
        text-decoration: none;
        color: white;
        border-radius: 25px;
        background: #222634;
        box-shadow:  6px 6px 12px #1d202c, -6px -6px 12px #272c3c;
        animation-name: fadeIn;
        animation-duration: .5s;
        animation-fill-mode: forwards;
        opacity: 0;
    }
    #name h1 {
        font-size: 3em;
        font-weight: lighter;
        padding: 0 30px;
        line-height: 1;
        animation-name: fadeIn;
        animation-duration: 1s;
        animation-delay: 2s;
        animation-fill-mode: forwards;
        opacity: 0;
    }
    #name:hover {
        box-shadow:  inset 6px 6px 12px #1d202c, inset -6px -6px 12px #272c3c;
    }
    #name h1 span {
        font-size: 0.7em;
    }
    #name a {
        color: white;
        text-decoration: none;
    }
    #caseStudySection {
        grid-row: 1 / 2;
        grid-column: 1 / 2;
        display: grid;
        justify-self: start;
        justify-items: start;
        font-size: 1.2em;
        animation-name: fadeIn;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        opacity: 0;
    }
    #caseStudySection p {
        animation-name: fadeIn;
        animation-duration: 2s;
        animation-delay: 3s;
        animation-fill-mode: forwards;
        opacity: 0;
    }
    #caseStudies {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-template-rows: min-content 35%;
        align-items: center;
        column-gap: 45px;
    }
    .cases {
        text-align: center;
        border-radius: 25px;
        background: #222634;
        box-shadow:  7px 7px 14px #1d202c, -7px -7px 14px #272c3c;
        color: white;
        text-decoration: none;
    }
    .cases:hover {
        box-shadow:  inset 2.5px 5px 10px #1d202c, inset -2.5px -5px 10px #272c3c;
    }
    .cases img {
        border-radius: 25px 25px 0 0;
        animation-name: fadeIn;
        animation-duration: 2s;
        animation-delay: 3s;
        animation-fill-mode: forwards;
        opacity: 0;
    }
    button {
        background: none;
        border: none;
        color: white;
        font-family: 'Open Sans Condensed', sans-serif;
        font-size: 1.3em;
        cursor: pointer;
        animation-name: fadeIn;
        animation-duration: 2s;
        animation-delay: 3s;
        animation-fill-mode: forwards;
        opacity: 0;
    }
    #articlesButton {
        background: #222634;
        animation-name: fadeIn;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        opacity: 0;
        border-radius: 12px;
        box-shadow:  0.1px 5px 10px #1d202c, -0.1px -5px 10px #272c3c;
        padding: 10px 25px;
        margin-top: 30px;
    }
    #articlesButton:hover {
        box-shadow:  inset 2.5px 5px 10px #1d202c, inset -2.5px -5px 10px #272c3c;
    }
    
    @keyframes footerFade {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
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
    @media only screen and (max-width: 950px) and (max-height: 500px) {
        footer {
            left: 67%;
            font-size: 0.8em;
        }
        #main {
        max-width: 100%;
        max-height: 100%;
        justify-self: center;
        grid-template-columns: 100%;
        grid-template-rows: min-content min-content;
        row-gap:5%;
        }
        #name h1 {
            font-size: 1.6em;
        }
        #name {
            width: 37%;
        }
        #caseStudySection, #nextPage {
            font-size: 0.8em;
        }
        #caseStudies {
            column-gap: 20px;
            grid-template-columns: auto auto auto;
        }
        #caseStudies img {
            width: 100%;
        }
        button {
            font-size: 1.3em;
        }
        #articlesButton {
            padding: 10px 20px;
            margin-top: 30px;
        }
    }
@media only screen and (max-width: 667px) {
    footer {
            left: 60%;
            font-size: 0.8em;
        }
        h1 {
            font-size: 1.5em;
        }
}
</style>