<script>
    import Nav from "../Components/nav.svelte";
    import Screen from "../Components/scrnblocks.svelte";
    import Animations from "../Components/movingImg.svelte";
    import Landscape from "../Components/landscapeMode.svelte";
</script>

<section  id="animations">
    <a href="/graphics" id="nextPage">
        Next Page >
    </a>
    <Nav/>
    <section id="animationSection">
        <h1>ICON ANIMATIONS</h1>
        <div id="screenArea">
            <Screen/>
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
    }
    #nextPage:hover {
        text-decoration: underline;
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
        height: 100vh;
        font-family: 'PT Sans Narrow', sans-serif;
        color: white;
    }
    #animationSection h1 {
        padding: 0 10%;
        font-weight: normal;
        font-size: 2em;
        text-align: center;
    }
    #screenArea {
        background-color: rgb(29, 21, 3);
        padding: 10px 0;
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
    @media only screen and (max-width: 850px) and (max-height: 500px) {

    }
</style>