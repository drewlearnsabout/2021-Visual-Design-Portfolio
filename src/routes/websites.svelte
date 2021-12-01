<script>
    import Nav from "../Components/nav.svelte";
    import Pdx from "../Components/pdx.svelte";
    import Ma from "../Components/martialArts.svelte";
    import Impact from "../Components/impact.svelte";
    import Ink from "../Components/ink.svelte";
    import Landscape from "../Components/landscapeMode.svelte";
</script>

<div id="websites">
    <Nav/>
    <section id="websiteSections">
        <h1>WEBSITE DESIGN</h1>
        <Pdx/>
        <Ma/>
        <Impact/>
        <Ink/>
    </section>
</div>
<div id="landscape"><Landscape/></div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=PT+Sans+Narrow&display=swap');
    #websites {
    display: grid;
    background-size: cover;
    background: #222634;
    height: 100vh;
    grid-template-columns: 15% 85%;
    font-family: 'PT Sans Narrow', sans-serif;
    cursor: url("images/Circle Cursor.png"), auto;
    }
    #websiteSections {
        overflow-y: scroll;
        overflow-x: hidden;
    }
    #websiteSections h1 {
        color: white;
        font-weight: normal;
        font-size: 2em;
        padding: 0 10%;
        text-align: center;
    }
    /* Scroll Bar */
        /* width */
        ::-webkit-scrollbar {
        width: 10px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
        background: #f1f1f1; 
        }
        
        /* Handle */
        ::-webkit-scrollbar-thumb {
        background: #888; 
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
        background: #555; 
        }
    @media (orientation: landscape) {
        #websites {
            display: grid;
        }
        #landscape {
            display: none;
        }
    }

    @media (orientation: portrait) {
        #websites {
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
    }

</style>