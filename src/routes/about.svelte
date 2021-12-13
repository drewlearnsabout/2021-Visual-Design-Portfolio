<script>
    import Nav from "../Components/nav.svelte";
    let planetsOrbit = "images/About Page/Rings.png";
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
        <a href="/websites" id="nextPage">
            Next Page >
        </a>
        <article id="description">
            <h1>I LIKE SPACE. SERIOUSLY.</h1>
            <p>Learning about space and the universe has shaped the way that I see and live my life.<br>
            Feel free to explore each planet (not the sun, that's a little too hot to handle) to learn a little more about me.
            </p>
        </article>
        <article id="planets">
            <img id="planetsOrbit" src="{planetsOrbit}" alt="The planets orbiting the sun.">
            <img id="about" class="float" src="{about}" on:click="{() => showModal = true}" alt="Floating planet that directs to about page.">
            <img id="animation" class="float" src="{animation}" on:click="{() => showModal2 = true}" alt="Floating planet that directs to animation page.">
            <img id="articles" class="float" src="{articles}" on:click="{() => showModal3 = true}" alt="Floating planet that directs to articles page.">
            <img id="contact" class="float" src="{contact}" on:click="{() => showModal4 = true}" alt="Floating planet that directs to contact page.">
            <img id="graphics" class="float" src="{graphics}" on:click="{() => showModal5 = true}" alt="Floating planet that directs to graphics page.">
            <img id="websites" class="float" src="{websites}" on:click="{() => showModal6 = true}" alt="Floating planet that directs to websites page.">
            <p id="aboutText" class="text">About</p>
            <p id="animationText" class="text">Animation</p>
            <p id="articlesText" class="text">Articles</p>
            <p id="contactText" class="text">Contact</p>
            <p id="graphicsText" class="text">Graphics</p>
            <p id="websitesText" class="text">Websites</p>
            {#if showModal}
            <Modal on:close="{() => showModal = false}">
                <h2>
                    About Andrew
                </h2>
                <p>
                    I'm a native San Diegan that got enchanted by the trees and the coffee of Portland, OR.<br>
                    I run on 2 cups of caffiene a day while balancing my design career, life, and a very<br>
                    active, yet cuddly toddler.<br>
                    <br>I have a goal of soaking in what I can from life, and to eventually teach my son<br>
                    that there's so much out there in the world to explore.
                </p>
            </Modal>
            {/if}
            {#if showModal2}
            <Modal on:close="{() => showModal2 = false}">
                <h2>Animations</h2>
                <p>Things that move are always more interesting to look at.<br><br>
                    I grew up watching cartoons and playing a lot video games. I saw how captivating it was to watch images in motion and
                    animation done like in Avatar the Last AirBender, Naruto, and Cowboy Bebop has inspired me to try my hand at it.<br><br> 
                    I incorporate that same fascination into the characters I create and the emotions<br>
                    they express, and even though I have a lot to learn, I'm looking forward to the 
                    next one I make.
                </p>
                <a href="/animations" class="links"><p>See Animations <span>&#8594;</span></p></a>
            </Modal>
            {/if}
            {#if showModal3}
            <Modal on:close="{() => showModal3 = false}">
                <h2>Articles</h2>
                <p>
                    My design decisions are based on what others will do when they interact with it.<br> 
                    This stems from my experience as behavior analyst and technician and the research teams I was part of studying mental health.
                    <br><br>
                    Empathy is constantly talked about in UX design, and what better way to show my understanding
                    of how we as humans feel and interact with the world than by research and observation through my designs.
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
                <p>As someone who preferred reading comics as a kid,
                I took in and understood more of any material that was paired with a visual.<br><br>
                Although I can conceptualize more clearly now as I'm much older, I still appreciate
                having visuals to guide me through my experiences.  I can even see it on my own 2 year old's face
                whenever we read through any of his picture books, and you can tell how much he enjoys
                all of the color, landscapes and entities that fill each page.<br><br>
                Visuals can make or break any experience, and so I take the time to understand
                what encaptures who the audience is in each of my projects.
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
#aboutPage {
    display: grid;
    background-size: cover;
    background: #222634;
    height: 100%;
    grid-template-columns: 15% 85%;
    cursor: url("images/Circle Cursor.png"), auto;
}
h1, p {
    font-family: 'PT Sans Narrow', sans-serif;
    color: white;

}
#description h1, #description p {
    text-align: center;
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
    cursor: url("images/Circle Cursor.png"), auto;
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
    grid-column: 5 / 6;
    grid-row: 1 / 2;
    animation-name: rise;
    animation-duration: 1.7s;
    animation-fill-mode: forwards;
}
#graphicsText {
    z-index: 2;
    grid-column: 5 / 6;
    grid-row: 1 / 2;
    transform: translateX(-60px) translateY(-10px);
}
#websites {
    z-index: 1;
    grid-column: 7 / 8;
    grid-row: 3 / 4;
    animation-name: rise;
    animation-duration: 1.2s;
    animation-fill-mode: forwards;
}
#websitesText {
    z-index: 2;
    grid-column: 7 / 8;
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
    @media only screen and (max-width: 850px) and (max-height: 500px) {
        #animation, #articles {
            width: 120%;
        }
        #description {
            display: grid;
            grid-template-rows: 30% 5%;
        }
        #description h1 {
            font-size: 1.5em;
        }
        #description p {
            font-size: 0.8em;
        }
        .float {
            width: 60%;
            justify-self: left;
        }
        .text {
            font-size: 0.8em;
            justify-self: right;
        }
        #aboutText {
            grid-column: 6 / 7;
        }
        #animationText {
            grid-column: 3 / 4;
        }
        #articlesText {
            grid-column: 5 / 6;
        }
        #websitesText {
            grid-column: 7 / 8;
        }
    }
    @media only screen and (max-width: 667px) {
        #animationText {
            grid-column: 4 / 5;
        }
        #articlesText {
            grid-column: 6 / 7;
        }
        #websitesText {
            grid-column: 8 / 9;
        }
        #aboutText {
            grid-column: 6 / 7;
        }
    }
</style>