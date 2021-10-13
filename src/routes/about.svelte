<script>
    import Nav from "../Components/nav.svelte";
    let planetsOrbit = "images/About Page/Planetary Orbit.png";
    let about = "images/About Page/Planets/About.png"
    let animation = "images/About Page/Planets/Animation.png"
    let articles = "images/About Page/Planets/Articles.png"
    let contact = "images/About Page/Planets/Contact.png"
    let graphics = "images/About Page/Planets/Graphics.png"
    let websites = "images/About Page/Planets/Websites.png"
</script>

<div id="aboutPage">
    <Nav/>
    <section>
        <article id="description">
            <h1>I like space.</h1>
            <p>Learning about space and the universe has shaped the way that I see and live my life.   One day I’d like to
                teach my son about how we are small but are part of a bigger picture, and that one day he can set his sights to reach for the stars.</p>
        </article>
        <article id="planets">
            <img id="planetsOrbit" src="{planetsOrbit}" alt="The planets orbiting the sun.">
            <img id="about" src="{about}" alt="Floating planet that directs to about page.">
            <img id="animation" src="{animation}" alt="Floating planet that directs to animation page.">
            <img id="articles" src="{articles}" alt="Floating planet that directs to articles page.">
            <img id="contact" src="{contact}" alt="Floating planet that directs to contact page.">
            <img id="graphics" src="{graphics}" alt="Floating planet that directs to graphics page.">
            <img id="websites" src="{websites}" alt="Floating planet that directs to websites page.">
        </article>
    </section>
</div>


<style>
@import url('https://fonts.googleapis.com/css2?family=PT+Sans+Narrow&display=swap');

#aboutPage {
    display: grid;
    background-size: cover;
    background: #4B4B4B;
    height: 100%;
    grid-template-columns: 15% 85%;
}
h1, p {
    font-family: 'PT Sans Narrow', sans-serif;
    color: white;
}
h1 {
    font-size: 2em;
    font-weight: normal;
}
section {
    display: grid;
    grid-template-columns: 10% 80% 10%;
}
#description {
    grid-column: 2 / 3;
}
#planets {
    grid-column: 2 / 3;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    justify-items: center;
}
#planetsOrbit {
    width: 75%;
    z-index: 0;
    grid-column: 2 / 11;
}
#about {
    z-index: 1;
    grid-column: 6 / 7;
}
#animation {
    z-index: 1;
}
#articles {
    z-index: 1;
}
#contact {
    z-index: 1;
}
#graphics {
    z-index: 1;
}
#contact {
    z-index: 1;
}
</style>