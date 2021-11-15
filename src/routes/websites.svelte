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
        <h1>Website Design</h1>
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
    background: #4B4B4B;
    height: 100vh;
    grid-template-columns: 15% 85%;
    font-family: 'PT Sans Narrow', sans-serif;
    }
    #websiteSections {
        overflow-y: scroll;
        overflow-x: hidden;
    }
    h1 {
        color: white;
        font-weight: normal;
        font-size: 3em;
        transform: translateX(30px);
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

</style>