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
        <a href="/graphics" id="nextPage">
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
                    I'm a native San Diegan that lives on coffee from Portland, OR.<br>
                    I run on 2 cups of caffiene a day while balancing my design career, life, and a very<br>
                    active, yet cuddly toddler.<br><br>
                    **UPDATE  I'm expecting a baby girl!
                    <br><br>I watched my parents make a life for themselves as immigrants by taking the jobs
                    they can get to feed me and my brother.  I want to take those lessons that I learned and show
                    my parents and also my own kids that we can reach our goals, as long as we keep striving for them.
                </p>
            </Modal>
            {/if}
            {#if showModal2}
            <Modal on:close="{() => showModal2 = false}">
                <h2>Animations</h2>
                <p>I bring things to life with animation.<br><br>
                    I was exposed to cartoons, video games, and movies that inspired a hobby that I eventually
                    was able to incorporate into my designs.<br><br> 
                    The need to create animations was first realized when I needed to redesign the home page of
                    a previous employer's website, and creating that first gif sparked a passion to continue creating more.
                    <br><br>
                    I realize that using animation can be a valuable asset when presenting information
                    to the public, and I strive to become better at creating effective animations that will help others understand the bigger picture.
                </p>
                <a href="/animations" class="links"><p>See Animations <span>&#8594;</span></p></a>
            </Modal>
            {/if}
            {#if showModal3}
            <Modal on:close="{() => showModal3 = false}">
                <h2>Articles</h2>
                <p>
                    My experience in taking data and curating it to create better designs stems from 
                    my work as a behavior analyst and the research teams I was part of caring for
                    children diagnosed with neurological disorders and studying mental health.
                    <br><br>
                    I understand how important it is to incorporate human-center research into design
                    to ensure the products they use are as easy to use as possible, especially for those
                    with disabilities.  Only by putting in the work to record and analyze data can we produce
                    results that will benefit the user.
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
                <p>I knew from an early age that I was able to remember things clearly when paired with a visual,
                    mainly due to the enormous amount of comic books I've read in the past.
                <br><br>
                Even as I get older, I still appreciate having visuals to guide me through my experiences.
                This rings true for many others, and I want to incorporate visuals that will help the experience be clear
                and helpful for the users that I design for.
                <br><br>
                Using a combination of Adobe CC, Figma, and other software, I found the tools needed to help guide
                my audience through their online experiences.
                </p>
                <a href="/graphics" class="links"><p>Graphic Design <span>&#8594;</span></p></a>
            </Modal>
            {/if}
            {#if showModal6}
            <Modal on:close="{() => showModal6 = false}">
                <h2>Websites I've designed, developed, and maintain</h2>
                <p>
                    What started off as a hobby became my career.<br><br>
                    My wife told me my first website I made looked terrible and mostly retro. Like geocities retro.<br>
                    I was still proud of that project at the time, and I took that and strove to create better designs.
                    Over the years, I've learned new programming languages, improved my understanding of
                    modern design, incorporated principles of UI and UX into my workflow, and eventually transitioned my way into
                    job opportunities that I could finally make a living off of.
                    <br><br>
                    My experience in web development is certainly far from being over, and I strive to improve everyday.
                    After being introduced to frameworks, I was able to create websites for others and myself, including the portfolio
                    that you are exploring right now, with Svelte/Sveltekit.  I'll continue to explore new technologies that
                    can improve the designs I create, and I'm sure this iteration of my portfolio won't be the last.
                    <br><br>

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