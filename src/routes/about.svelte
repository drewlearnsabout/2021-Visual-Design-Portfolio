<script>
    import Nav from "../Components/nav.svelte";
    let planetsOrbit = "images/About Page/Planetary Orbit.png";
    let about = "images/About Page/Planets/About.png"
    let animation = "images/About Page/Planets/Animation.png"
    let articles = "images/About Page/Planets/Articles.png"
    let contact = "images/About Page/Planets/Contact.png"
    let graphics = "images/About Page/Planets/Graphics.png"
    let websites = "images/About Page/Planets/Websites.png"
    import Modal from "../Components/aboutModal.svelte";
    import Landscape from "../Components/landscapeMode.svelte";

	let showModal = false;
    let showModal2 = false;
    let showModal3 = false;
    let showModal4 = false;
    let showModal5 = false;
    let showModal6 = false;
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
            <img id="about" class="float" src="{about}" on:click="{() => showModal = true}" alt="Floating planet that directs to about page.">
            <img id="animation" class="float" src="{animation}" on:click="{() => showModal2 = true}" alt="Floating planet that directs to animation page.">
            <img id="articles" class="float" src="{articles}" on:click="{() => showModal3 = true}" alt="Floating planet that directs to articles page.">
            <img id="contact" class="float" src="{contact}" on:click="{() => showModal4 = true}" alt="Floating planet that directs to contact page.">
            <img id="graphics" class="float" src="{graphics}" on:click="{() => showModal5 = true}" alt="Floating planet that directs to graphics page.">
            <img id="websites" class="float" src="{websites}" on:click="{() => showModal6 = true}" alt="Floating planet that directs to websites page.">
            <p id="aboutText">About</p>
            <p id="animationText">Animation</p>
            <p id="articlesText">Articles</p>
            <p id="contactText">Contact</p>
            <p id="graphicsText">Graphics</p>
            <p id="websitesText">Websites</p>
            {#if showModal}
            <Modal on:close="{() => showModal = false}">
                <h2>
                    About Andrew
                </h2>
                <p>
                    I'm a native San Diegan and that got enchanted by the wilderness of Portland, OR.<br>
                    I run on 2 cups of caffiene a day while balancing my design career, life, and a very<br>
                    active, yet cuddly toddler.<br>
                    <br>I have a goal of soaking in what I can from life, and to eventually teach my son<br>
                    that there's so much out there in the world to be mindful of and explore.
                </p>
            </Modal>
            {/if}
            {#if showModal2}
            <Modal on:close="{() => showModal2 = false}">
                <h2>Animations</h2>
                <p>I take any opportunity to bring my designs to life.<br><br>
                    I grew up on watching cartoons and how it was so captivating to watch images in motion.<br>
                    I incorporate that same fascination into the characters I create and the emotions<br>
                    they express.
                </p>
                <a href="/animations" class="links"><p>See Animations <span>&#8594;</span></p></a>
            </Modal>
            {/if}
            {#if showModal3}
            <Modal on:close="{() => showModal3 = false}">
                <h2>Articles</h2>
                <p>
                    I thoroughly explain my design decisions through evidence based research. This stems<br>
                    from my experience in behavior analysis and the study of human behavior.  Empathy is<br>
                    constantly talked about in UX design, and what better way to show my understanding<br>
                    of how we as humans behave than by research, observation and intervention.
                </p>
                <a href="articles" class="links"><p>See Articles <span>&#8594;</span></p></a>
            </Modal>
            {/if}
            {#if showModal4}
            <Modal on:close="{() => showModal4 = false}">
                <h2>Contact Me!</h2>
                <p>I will happily answer any questions that you may have!</p>
                <a href="/contact" class="links"><p>Contact Me <span>&#8594;</span></p></a>
            </Modal>
            {/if}
            {#if showModal5}
            <Modal on:close="{() => showModal5 = false}">
                <h2>Graphics</h2>
                <p>As someone who has read a fair share of comics as a kid,<br>
                I understand the importance of having visuals paired with the message.<br>
                Visuals can make or break any medium, so researching what is appropriate<br>
                for the occassion is important for me to convey to the audience.
                </p>
                <a href="/graphics" class="links"><p>Graphic Design <span>&#8594;</span></p></a>
            </Modal>
            {/if}
            {#if showModal6}
            <Modal on:close="{() => showModal6 = false}">
                <h2>Websites I've designed, developed, and maintain</h2>
                <p>
                    What started off as a hobby became my career.<br><br>
                    My wife told me my first website I made looked retro, like geocities retro.<br>
                    I was still proud of that project at the time, but I took that queue and strove to have better designs.
                    Over the course of a few years, I've learned new programming languages, improved my understanding of
                    modern design, incorporated principles of UI and UX into my workflow, and eventually transitioned into
                    a media and tech lead for a nonprofit to design, develop and maintain websites this org owns.
                    <br><br>
                    Please browse through the websites that I have worked tirelessly on, and at this moment it's the best that
                    I can do, however I'm always striving to get better.
                </p>
                <a href="/websites" class="links"><p>See websites. <span>&#8594;</span></p></a>
            </Modal>
            {/if}
        </article>
    </section>
</div>
<div id="landscape"><Landscape/></div>


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
h2 {
    font-weight: normal;
}
.links {
    text-decoration: none;
    display: grid;
    justify-items: right;
}
.links:hover {
    text-decoration: underline;
    text-decoration-color: white;
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
    grid-template-rows: repeat(4, 1fr);
    justify-items: center;
}
#planetsOrbit {
    width: 75%;
    z-index: 0;
    grid-column: 2 / 11;
    grid-row: 1 / 11;
}
#about {
    z-index: 1;
    grid-column: 6 / 7;
    grid-row: 2 / 3;
    animation-name: rise;
    animation-duration: 1s;
    animation-fill-mode: forwards;
}
#aboutText {
    z-index: 2;
    grid-column: 6 / 7;
    grid-row: 2 / 3;
    transform: translateX(-50px);
}
#animation {
    z-index: 1;
    grid-column: 3 / 4;
    grid-row: 2 / 3;
    animation-name: rise;
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
}
#animationText {
    z-index: 2;
    grid-column: 3 / 4;
    grid-row: 2 / 3;
    transform: translateX(-90px);
}
#articles {
    z-index: 1;
    grid-column: 5 / 6;
    grid-row: 3 / 4;
    animation-name: rise;
    animation-duration: 0.8s;
    animation-fill-mode: forwards;
}
#articlesText {
    z-index: 2;
    grid-column: 5 / 6;
    grid-row: 3 / 4;
    transform: translateX(-85px);
}
#contact {
    z-index: 1;
    grid-column: 6 / 7;
    grid-row: 4 / 5;
    animation-name: rise;
    animation-duration: 2s;
    animation-fill-mode: forwards;
}
#contactText {
    z-index: 2;
    grid-column: 6 / 7;
    grid-row: 4 / 5;
    transform: translateX(-60px) translateY(-10px);
}
#graphics {
    z-index: 1;
    grid-column: 4 / 6;
    grid-row: 1 / 2;
    animation-name: rise;
    animation-duration: 1.7s;
    animation-fill-mode: forwards;
}
#graphicsText {
    z-index: 2;
    grid-column: 4 / 6;
    grid-row: 1 / 2;
    transform: translateX(-60px) translateY(-10px);
}
#websites {
    z-index: 1;
    grid-column: 6 / 8;
    grid-row: 3 / 4;
    animation-name: rise;
    animation-duration: 1.2s;
    animation-fill-mode: forwards;
}
#websitesText {
    z-index: 2;
    grid-column: 6 / 8;
    grid-row: 3 / 4;
    transform: translateX(-55px) translateY(-30px);
}
#websites:hover, #graphics:hover, #contact:hover, #animation:hover, #articles:hover, #about:hover {
    animation-name: float;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
}

@keyframes rise {
    0% {
        transform: translateY(5px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes float {
    0% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0px);
    }
}
@media (orientation: landscape) {
        #aboutPage {
            display: grid;
        }
        #landscape {
            display: none;
        }
    }

    @media (orientation: portrait) {
        #aboutPage {
            display: none;
        }
        #landscape {
            display: initial;
        }
    }
</style>