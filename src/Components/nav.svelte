<nav id="nav">
    <div id="homeSection" class="navSections">
        <a href="/">Home</a>
        <div class="triangle"></div>
    </div>
    <div id="aboutSection" class="navSections">
        <a href="/about">About</a>
        <div class="triangle"></div>
    </div>
    <div id="uiuxSection" class="navSections">    
        <a href="/articles">UI/UX</a>
        <div class="triangle"></div>
    </div>
    <div id="graphicSection" class="navSections">    
        <a href="/graphics">Graphics</a>
        <div class="triangle"></div>
    </div>
    <div id="websiteSection" class="navSections">
        <a href="/websites">Websites</a>
        <div class="triangle"></div>
    </div>
    <div id="animationSection" class="navSections">
        <a href="/animations">Animation</a>
        <div class="triangle"></div>
    </div>
    <div id="contactSection" class="navSections">    
        <a href="/contact">Contact</a>
        <div class="triangle"></div>
    </div>
    <div id="timelineSection" class="navSections">
        <a href="/timeline">.</a>
        <div class="triangle"></div>
    </div>
</nav>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');
    #timelineSection {
        visibility: hidden;
    }
    nav {
        height: 100vh;
        font-family: 'Quicksand', sans-serif;
        display: grid;
        background-color: rgba(0, 0, 16, .5);
        justify-content: center;
        align-content: center;
        gap: 30px 0;
        padding: 0;
    }
    .navSections {
        display: grid;
    }
    nav a {
        color: white;
        text-decoration: none;
    }
    nav a:hover {
        font-weight: bolder;
    }
    .triangle {
        width: 0; 
        height: 0; 
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 5px solid white;
        opacity: 0;
    }
    .navSections a:hover + .triangle {
        animation-name: slideRight;
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
    }
    @media only screen and (max-width: 900px) and (max-height: 500px) {
        nav {
            font-size: 0.7em;
            padding: 0;
            gap: 20px 0;
        }
    }
    @media only screen and (max-width: 675px) {
        nav {
            font-size: 0.7em;
            padding: 0;
            gap: 15px 0;
        }
    }
    @keyframes slideRight {
        0% {
            opacity:0;
        }
        100% {
            opacity: 1;
            transform: rotate(360deg);
        }
    }
</style>