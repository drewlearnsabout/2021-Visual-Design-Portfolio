<script>
    import Nav from "../Components/nav.svelte";
    import Screen from "../Components/scrnblocks.svelte";
    import Animations from "../Components/movingImg.svelte";
    import Landscape from "../Components/landscapeMode.svelte";
</script>

<section  id="animations">
    <a href="/contact" id="nextPage">
        Next Page
    </a>
    <Nav/>
    <section id="animationSection">
        
        <div id="screenArea">
            <Screen/>
            <h1>ICON ANIMATIONS</h1>
            <section>
                <Animations/>
            </section>
            <Screen/>
        </div>
    </section>
</section>
<div id="landscape"><Landscape/></div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=PT+Sans+Narrow&display=swap');
    #nextPage {
        font-family: 'PT Sans Narrow', sans-serif;
        font-size: 1.2em;
        color: white;
        position: fixed;
        top: 75%;
        left: 85%;
        text-decoration: none;
        border-radius: 12px;
        background: #141414 17%;
        box-shadow:  5px 5px 10px #000000, -5px -5px 13px #202020;
        padding: 10px 25px;
    }
    #nextPage:hover {
        box-shadow:  inset 5px 5px 10px #000000, inset -5px -5px 13px #202020;
    }
    #animations {
        display: grid;
        background-size: cover;
        background: #222634;
        height: 100vh;
        grid-template-columns: 15% 85%;
        font-family: 'PT Sans Narrow', sans-serif;
    }
    #animationSection {
        height: 100%;
        font-family: 'PT Sans Narrow', sans-serif;
        color: white;
        display: grid;
        align-items: center;
    }
    #animationSection h1 {
        padding: 0 10%;
        font-weight: normal;
        font-size: 2em;
        text-align: center;
    }
    #screenArea {
        background: rgb(255,255,255);
        background: linear-gradient(160deg, rgba(255,255,255,1) 0%, #050505 17%);
        padding: 10px 0;
        display: grid;
    }
    @media (orientation: landscape) {
        #animations {
            display: grid;
        }
        #landscape {
            display: none;
        }
    }

    @media (orientation: portrait) {
        #animations {
            display: none;
        }
        #landscape {
            display: initial;
        }
    }
    @media only screen and (max-width: 1280px) and (max-height: 500px) {
        #nextPage {
            font-size: 0.8em;
        }
    }

</style>