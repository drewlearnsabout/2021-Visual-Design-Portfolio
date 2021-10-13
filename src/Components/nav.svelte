<nav id="nav">
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/Websites">Websites</a>
    <a href="/Animation">Animation</a>
    <a href="/Graphics">Graphics</a>
    <a href="/Articles">Articles</a>
    <a href="/Contact">Contact</a>
</nav>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');


    nav {
        height: 100vh;
        font-family: 'Quicksand', sans-serif;
        display: grid;
        background-color: rgba(0, 0, 16, .5);
        justify-content: center;
        align-content: center;
        gap: 30px 0;
    }
    nav a {
        color: white;
        text-decoration: none;
    }
    nav a:hover {
        text-decoration: underline;
        animation-name: spazz;
        animation-duration: 0.3s;
    }

    @keyframes spazz {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(0.8);
        }
        100% {
            transform: scale(1);
        }
    }
    @media only screen and (max-width: 675px) {
        
    }
</style>