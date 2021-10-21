<script>
    let bgImage = "images/Home Page/Home Background.jpg";
    let bgImageMobile = "images/Home Page/Home Background Mobile.jpg"
    let orbit = "images/Home Page/Orbit_Animated.gif";
    let portrait = "images/Home Page/Portfolio Portrait.png";
    import Nav from "../Components/nav.svelte";
</script>

<div style="background-image: url('{bgImage}')" id="homePage">
    <Nav/>
    <section>
        <div id="name">
            <h1>Andrew Carbungco</h1>
            <h2>Visual Designer</h2>
            <img id="orbit" src="{orbit}" alt="The Earth Orbiting the Sun.">
        </div>
        <img id="portrait" src="{portrait}" alt="Andrew standing on a bent tree">
    </section>
</div>


<style>
    @import url('https://fonts.googleapis.com/css2?family=PT+Sans+Narrow&display=swap');

    #homePage {
        display: grid;
        background-size: cover;
        height: 100%;
        grid-template-columns: 15% 85%;
    }
    section {
        font-family: 'PT Sans Narrow', sans-serif;
        color: white;
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr 0.5fr;
        grid-template-rows: repeat(5, 15%);
    }
    h1, h2 {
        font-weight: normal; 
    }
    h1 {
        font-size: 3.4em;
    }
    h2 {
        font-size: 2.5em;
    }
    #name {
        grid-column: 2 / 4;
        grid-row: 4 / 5;
        display: grid;
        grid-template-rows: 73% 63% 33%;
        z-index: 2;
    }
    img {
        width: 60%;
    }
    #orbit {
        color: white;
        transform: translateX(30%);
    }
    #portrait {
        grid-column: 3 / 5;
        grid-row: 2 / 5;
        z-index: 1;
    }

    
</style>