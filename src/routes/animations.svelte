<script>
    import Nav from "../Components/nav.svelte";
    import Screen from "../Components/scrnblocks.svelte";
</script>

<section  id="animations">
    <Nav/>
    <section id="animationSection">
        <h1>Animations</h1>
        <p>Scroll effect</p>
        <Screen/>
        <section>
            <p>Image</p>
            <br><br><br><br><br>
            <p>Image</p>
        </section>
        <Screen/>
    </section>
</section>

<style>
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
    }
</style>