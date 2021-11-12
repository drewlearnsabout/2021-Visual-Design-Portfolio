<script>
    import Nav from "../Components/nav.svelte";
    import Screen from "../Components/scrnblocks.svelte";
    import Animations from "../Components/movingImg.svelte";
</script>

<section  id="animations">
    <Nav/>
    <section id="animationSection">
        <h1>Animations</h1>
        <div id="screenArea">
            <Screen/>
            <section>
                <Animations/>
            </section>
            <Screen/>
        </div>
    </section>
</section>

<style>
    @import url('https://fonts.googleapis.com/css2?family=PT+Sans+Narrow&display=swap');
    #animations {
        display: grid;
        background-size: cover;
        background: #353535;
        height: 100vh;
        grid-template-columns: 15% 85%;
        font-family: 'PT Sans Narrow', sans-serif;
    }
    #animationSection {
        height: 100vh;
        font-family: 'PT Sans Narrow', sans-serif;
        font-size: 1.5em;
        color: white;
    }
    #animationSection h1 {
        padding-left: 20px;
    }
    #screenArea {
        background-color: rgb(24, 24, 24);
        padding: 10px 0;
    }
</style>