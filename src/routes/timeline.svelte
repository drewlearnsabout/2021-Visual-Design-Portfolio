<script>
    import Nav from "../Components/nav.svelte";
    import Modal from "../Components/aboutModal.svelte";
    import Landscape from "../Components/landscapeMode.svelte";
    let leftLine = "images/Timeline Page/Left Line.png";
    let rightLine = "images/Timeline Page/Right Line.png";

    let showModal = false;
    let showModal2 = false;
    let showModal3 = false;
    let showModal4 = false;
    let showModal5 = false;
    let showModal6 = false;
    let showModal7 = false;
    let showModal8 = false;
    let showModal9 = false;
    let showModal10 = false;
    let showModal11 = false;
    let showModal12 = false;
</script>

<div id="timelinePage">
    <a href="/articles" id="nextPage">
        Next Page
    </a>
    <nav><Nav/></nav>
    <section id="timeline">
        <h2>My Timeline</h2>    
        <section id="timelineSection">
            <section id="introSection">
              <h3>Andrew Carbungco</h3>
              <p>Thank you for taking the time to checkout my portfolio.
                Below is a<br>timeline of the journey getting to this point of
                my Visual Design career.
                <br><br>
                Feel free to click on any of the time points to get a more
                thorough understanding of my work.
              </p>
            </section>
            <div id="line"></div>
            <section class="leftSection">
                <section class="timelineArticlesLeft">
                    <div class="timelineText" on:click="{() => showModal12 = true}">
                        <p style="font-weight: bold">2022 - Present</p>
                        <p>Certification in UX Design<br>from Google</p>
                    </div>
                    <div><img src="{leftLine}" alt="line indicating a left article"></div>
                    <div class="dot"></div>
                </section>
                <section class="timelineArticlesLeft">
                    <div class="timelineText" on:click="{() => showModal10 = true}">
                        <p style="font-weight: bold">2021 - 2022</p>
                        <p>Media and Tech Lead<br>at Aim High PDX</p>
                    </div>
                    <div><img src="{leftLine}" alt="line indicating a left article"></div>
                    <div class="dot"></div>
                </section>
                <section class="timelineArticlesLeft">
                    <div class="timelineText" on:click="{() => showModal8 = true}">
                        <p style="font-weight: bold">2020</p>
                        <p>Designed and developed<br>website for educational<br>video game company</p>
                    </div>
                    <div><img src="{leftLine}" alt="line indicating a left article"></div>
                    <div class="dot"></div>
                </section>
                <section class="timelineArticlesLeft">
                    <div class="timelineText" on:click="{() => showModal6 = true}">
                        <p style="font-weight: bold">2018</p>
                        <p>Designed and developed<br>first client website<br>for an aspiring<br>music teacher</p>
                    </div>
                    <div><img src="{leftLine}" alt="line indicating a left article"></div>
                    <div class="dot"></div>
                </section>
                <section class="timelineArticlesLeft">
                    <div class="timelineText" on:click="{() => showModal5 = true}">
                        <p style="font-weight: bold">2017</p>
                        <p>Created first portfolio website</p>
                    </div>
                    <div><img src="{leftLine}" alt="line indicating a left article"></div>
                    <div class="dot"></div>
                </section>
                <section class="timelineArticlesLeft" id="pacific">
                    <div class="timelineText" on:click="{() => showModal3 = true}">
                        <p style="font-weight: bold">2014 - 2015</p>
                        <p>Completed post-bac<br>program from Pacific University</p>
                    </div>
                    <div><img src="{leftLine}" alt="line indicating a left article"></div>
                    <div class="dot"></div>
                </section>
                <section class="timelineArticlesLeft" id="sdsu">
                    <div class="timelineText" on:click="{() => showModal = true}">
                        <p style="font-weight: bold">2009</p>
                        <p>Graduated from San Diego<br>State University</p>
                    </div>
                    <div><img src="{leftLine}" alt="line indicating a left article"></div>
                    <div class="dot"></div>
                </section>
            </section>
            
            <div class="rightSection">
                <section class="timelineArticlesRight">
                    <div class="dot"></div>
                    <div><img src="{rightLine}" alt="line indicating a left article"></div>
                    <div class="timelineText" on:click="{() => showModal11 = true}">
                        <p style="font-weight: bold">2022</p>
                        <p>Visual Designer at HP</p>
                    </div>
                </section>
                <section class="timelineArticlesRight">
                    <div class="dot"></div>
                    <div><img src="{rightLine}" alt="line indicating a left article"></div>
                    <div class="timelineText" on:click="{() => showModal9 = true}">
                        <p style="font-weight: bold">2020</p>
                        <p>Designed and developed<br>website for real estate agent</p>
                    </div>
                </section>
                <section class="timelineArticlesRight">
                    <div class="dot"></div>
                    <div><img src="{rightLine}" alt="line indicating a left article"></div>
                    <div class="timelineText" on:click="{() => showModal7 = true}">
                        <p style="font-weight: bold">2018 - 2021</p>
                        <p>Web Designer at<br>Aim High PDX</p>
                    </div>
                </section>
                <section class="timelineArticlesRight" id="aba">
                    <div class="dot"></div>
                    <div><img src="{rightLine}" alt="line indicating a left article"></div>
                    <div class="timelineText" on:click="{() => showModal4 = true}">
                        <p style="font-weight: bold">2014 - 2021</p>
                        <p>Behavior Interventionist/<br>Technician at:</p>
                            <ul>
                                <li>Easter Seals (2014)</li>
                                <li>Play Connections (2015 - 2016)</li>
                                <li>Aim High PDX (2017 - 2021)</li>
                            </ul>

                    </div>
                </section>
                <section class="timelineArticlesRight" id="research">
                    <div class="dot"></div>
                    <div><img src="{rightLine}" alt="line indicating a left article"></div>
                    <div class="timelineText" on:click="{() => showModal2 = true}">
                        <p style="font-weight: bold">2011 - 2014</p>
                        <p>Research Assistant/<br>Research Coordinator/<br>Laboratory Assistant</p>
                        <ul>
                            <li>UCSD (2011 - 2014)</li>
                            <li>SDSU (2013)</li>
                        </ul>
                    </div>
                </section>
            </div>
            <div id="spacer"></div>
            {#if showModal}
            <Modal on:close="{() => showModal = false}">
                <h2 class="modalH2">
                    San Diego State University
                </h2>
                <p>
                    I graduated with a bachelor’s of arts and sciences<br>in psychology.
                    <br><br>
                    GPA: 3.2
                    <br><br>
                    Notable acheivements:
                </p>
                <ul>
                    <li>One of the founding fathers of a community service Fraternity</li>
                    <li>Taught abroad in China</li>
                </ul>
            </Modal>
            {/if}
            {#if showModal2}
            <Modal on:close="{() => showModal2 = false}">
                <h2 class="modalH2">
                    University of California
                    <br>
                    San Diego research studies
                </h2>
                <p>Research assistant for a sleep research study</p>
                <ul>
                    <li>Psychiatric double-blind study that observed the effects
                        <br>
                        of CPAP therapy on subjects diagnosed with Parkinson's and sleep apnea.</li>
                </ul>
                <br>
                <p>Research Coordinator/Lab Assistant for
                    <br>pediatric neurology mitochondrial studies</p>
                <ul>
                    <li>Pediatric neurological cross-sectional research
                        <br>
                        study comparing typical and non-typical children's
                        <br>
                        physical and physiological performances</li>
                    <li>
                        Part of a project that created an infrastructure of<br>
                        resources for laboratory studies, clinical trials,<br>
                        natural history studies, and other research endeavors.
                    </li>
                    <li>
                        A multi-site research study to find out more about<br>
                        lactic acidemia and mitochondrial myopathy, the causes<br>
                         and effects, and how they can be treated.
                    </li>
                </ul>
            </Modal>
            {/if}
            {#if showModal3}
            <Modal on:close="{() => showModal3 = false}">
                <h2 class="modalH2">
                    Pacific University
                </h2>
                <p>
                    Completed Post-Baccalaureate Program for Speech and Hearing Sciences
                    <br><br>
                    GPA: 3.8
                </p>
            </Modal>
            {/if}
            {#if showModal4}
            <Modal on:close="{() => showModal4 = false}">
                <h2 class="modalH2">
                    Behavior Interventionist/Technician
                </h2>
                <p>
                    Learned the skills and techniques necessary to Applied
                    <br>
                    Behavior Analysis, or ABA towards therapy for children
                    <br>
                    diagonsed with neurological disorders.
                    <br><br>
                    Key Highlights:
                </p>
                <ul>
                    <li>Grown empathy for each client</li>
                    <li>Observed challenges of the clients when
                        <br>
                        navigating the world around them</li>
                    <li>Wish I could do more for them</li>
                </ul>
            </Modal>
            {/if}
            {#if showModal5}
            <Modal on:close="{() => showModal5 = false}">
                <h2 class="modalH2">
                    First website ever created
                </h2>
                <p>
                    I applied absolutely no design strategies, just straight
                    <br>
                    intuition.  My wife, then girlfriend, mentioned it reminded
                    <br>
                    her of old school geocities websites.  It was a tough but
                    <br>
                    necessary pill to swallow, but it pushed me to get better
                    <br>
                    and understand how to design properly.  From then on I started
                    <br>
                    to looking into UX and UI design.
                </p>
            </Modal>
            {/if}
            {#if showModal6}
            <Modal on:close="{() => showModal6 = false}">
                <h2 class="modalH2">
                    Music Teacher website
                </h2>
                <p>
                    An acquaintence asked me to build out a website for her music
                    <br>
                    teaching side job, and it gave me the experience to practice tools
                    <br>
                    I’ve been learning for web design. 
                    <br><br>
                    Post work thoughts:<br>
                    I was able to understand the needs of the client and create a platform
                    <br>
                    for her to share to potential clientele.
                </p>
            </Modal>
            {/if}
            {#if showModal7}
            <Modal on:close="{() => showModal7 = false}">
                <h2 class="modalH2">
                    Web Designer for Aim High PDX
                </h2>
                <p>
                    The directors of the company recognized my ability to create websites,
                    <br>
                    and so they created a part-time position for me to make small additions
                    <br>
                    to one of their department websites they use to promote one of their many services.
                    <br><br>
                    Post work thoughts:
                </p>
                <ul>
                    <li>I was able to understand the needs of a small business to help promote their services</li>
                    <li>It was the first time I was in a position where I was able to lead the direction of
                        <br>
                        design for a platform that hundreds of customers can see.</li>
                    <li>It was my first time working alongside another team member and discuss what changes
                        <br>needed to be made to make a better product </li>
                </ul>
            </Modal>
            {/if}
            {#if showModal8}
            <Modal on:close="{() => showModal8 = false}">
                <h2 class="modalH2">
                    Website for educational
                    <br>
                    video game company
                </h2>
                <p>
                    Looking for freelance opportunies, I was given the chance to design and build
                    <br>
                    a website for a college professor looking to create a website for an educational
                    <br>
                    video game company which he used not only as a side hustle but to supplement as
                    <br>part of his teaching curriculum. 
                    <br><br>
                    Post work thoughts:
                </p>
                <ul>
                    <li>It was the first time working with someone I did not know</li>
                    <li>It was the first time wireframing and prototyping
                        <br>
                        web pages for an entire website</li>
                    <li>I used a number of strategies such as wireframing, prototyping,
                        <br>
                        company comparisons, UX interviews and usability tests</li>
                </ul>
            </Modal>
            {/if}
            {#if showModal9}
            <Modal on:close="{() => showModal9 = false}">
                <h2 class="modalH2">
                    Website for real estate agent
                </h2>
                <p>
                    A friend of mine recognized the work I did with the educational video
                    <br>
                    game company, and needed a new website to promote her work as a real estate agent.
                    <br><br>
                    Post work thoughts:
                </p>
                <ul>
                    <li>I was able to hone in on a design process that outlined what was needed and
                        <br>
                        how long it would take to design and develop a website
                    </li>
                </ul>
            </Modal>
            {/if}
            {#if showModal10}
            <Modal on:close="{() => showModal10 = false}">
                <h2 class="modalH2">
                    Media and Tech Lead<br>Aim High PDX
                </h2>
                <p>
                    This position allowed me to focus on UX for the first time at a full-time job.
                    <br>
                    This was at a non-profit organization, Aim High PDX, that provided numerous
                    <br>
                    healthcare and wellness services to the community.  I was able to include
                    <br>
                    stakeholders in the design decisions and process to increase the viewership and
                    <br>
                    interactions across all websites the company owned.
                    <br><br>
                    Post work thoughts:
                </p>
                <ul>
                    <li>I learned indepth knowledge of user-focused design strategies that catered to
                        <br>
                        each audience for a different service they sought
                    </li>
                    <li>I was able to implement the entire UX Design process, especially data analysis
                        <br>
                        and research; something that I lacked doing in all of my other
                        <br>
                        career experiences at that point
                    </li>
                </ul>
            </Modal>
            {/if}
            {#if showModal11}
            <Modal on:close="{() => showModal11 = false}">
                <h2 class="modalH2">
                    Visual Designer at HP
                </h2>
                <p>
                    This was one of the most influential experiences in my UI/UX career.
                    <br>
                    I worked with a global team where I focused on providing visual design experience
                    <br>
                    which included responsive high-fidelity prototypes and specification guidlines that
                    <br>
                    followed HP’s design system.
                    <br><br>
                    Post work thoughts:
                </p>
                <ul>
                    <li>I was able to focus on providing virtual deliverables
                        <br>
                        that was missing from my UI/UX repertoire
                    </li>
                    <li>My previous experiences using Figma were mostly about
                        <br>
                        graphic design whereas at HP was primarily for UI design
                    </li>
                    <li>I gained a better understanding of design sprints
                        <br>
                        and how to adjust to an agile work flow
                    </li>
                </ul>
            </Modal>
            {/if}
            {#if showModal12}
            <Modal on:close="{() => showModal12 = false}">
                <h2 class="modalH2">
                    UX Design Certification at Google
                </h2>
                <p>
                    At the time I was working at HP, it gave me the flexibility to also focus on
                    <br>
                    becoming more well-rounded as a UI/UX designer.  To supplement what I was
                    <br>
                    learning at HP, I also started taking courses towards a certification in
                    <br>
                    UX Design with Google.  I am currently in the process of completing this certification.
                    <br><br>
                    Key Highlights:
                </p>
                <ul>
                    <li>I have a deeper understanding of a formal design process</li>
                    <li>I have a stronger toolset to gather data for UX research analysis</li>
                    <li>I appreciate every part of the design process and how everyone in a
                        <br>
                        design team plays their part in creating user-first experiences</li>
                </ul>
            </Modal>
            {/if}
        </section>
    </section>
</div>

<div id="landscape"><Landscape/></div>

<style>
    /* Scroll Bar */
    /* width */
    ::-webkit-scrollbar {
    width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: #f1f1f14f;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: rgb(192, 192, 192); 
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #555; 
    }
    #nextPage {
        font-family: 'PT Sans Narrow', sans-serif;
        font-size: 1.2em;
        color: white;
        position: fixed;
        top: 75%;
        left: 85%;
        text-decoration: none;
        border-radius: 12px;
        background: rgba(34, 38, 52, .17);
        backdrop-filter: blur(1px);
        box-shadow:  5px 5px 10px #1d202c, -5px -5px 10px #272c3c;
        padding: 10px 25px;
        z-index: 5;
    }
    #nextPage:hover {
        box-shadow:  inset 5px 5px 10px #1d202c, inset -5px -5px 10px #272c3c;
    }
    #timelinePage {
        display: grid;
        background-color: #222634;
        grid-template-columns: 15% 85%;
        width: 100vw;
        font-family: 'PT Sans Narrow', sans-serif;
        color: white;
    }
    #timelinePage h2 {
        font-family: 'PT Sans Narrow', sans-serif;
        color: white;
        font-weight: normal;
        font-size: 2em;
        text-align: center;
    }
    #timeline {
        width: 100%;
    }
    #timelineSection {
        display: grid;
        grid-template-columns: auto max-content auto;
        grid-template-rows: auto auto auto;
        justify-self: center;
        height: 84.5vh;
        overflow-y: scroll;
        white-space: nowrap;
    }
    #timelineSection h2 {
        font-size: 1.4em;
    }
    #introSection {
        grid-column: 1 / 4;
        grid-row: 1 / 2;
        justify-self: center;
        text-align: center;
        max-width: 100%;
        margin-bottom: 5%;
    }
    #introSection h3 {
        font-size: 2em;
    }
    #introSection p {
        font-size: 1.1em;
    }
    .leftSection {
        grid-column: 1 / 3;
        grid-row: 2 / 3;
        z-index: 2;
        justify-self: end;
        align-items: start;
        display: grid;
    }
    #line {
        grid-column: 2 / 3;
        grid-row: 2 / 3;
        justify-self: center;
        height: 1500px;
        width: 10px;
        background-color: white;
        z-index: 1;
        border-radius: 5px;
        margin: 0 10px;
    }
    .dot {
        height: 30px;
        width: 30px;
        background: rgb(255,255,255);
        border-radius: 50%;
    }
    .rightSection {
        grid-column: 2 / 4;
        grid-row: 2 / 3;
        z-index: 2;
        justify-self: left;
        display: grid;
    }
    #spacer {
        grid-column: 1 / 4;
        grid-row: 3 / 4;
        height: 20vh;
        background-color: white;
        opacity: 0;
    }
    .timelineArticlesLeft, .timelineArticlesRight {
        column-gap: 20px;
        align-items: center;
    }
    .timelineArticlesLeft {
        display: grid;
        grid-template-columns: 240px auto auto;
    }
    .timelineArticlesRight {
        display: grid;
        grid-template-columns: auto auto 240px;
    }
    .timelineArticlesLeft img, .timelineArticlesRight img, .timelineText {
        margin-top: 30px;
    }
    #pacific {
        transform: translateY(-100px);
    }
    #sdsu {
        transform: translateY(100px);
    }
    #aba {
        transform: translateY(100px);
    }
    #aba ul, #research ul {
        padding-bottom: 20px;
    }
    #research {
        transform: translateY(-30px);
    }
    .timelineText {
        background: linear-gradient(145deg, #242938, #1f222f);
        box-shadow:  6px 6px 15px #191c26, -6px -6px 10px #2b3042;
        border-radius: 20px;
        display: grid;
        grid-template-rows: 20px auto;
        justify-content: center;
        cursor: pointer;
    }
    .timelineText:hover {
        box-shadow:  inset 6px 6px 15px #191c26, inset -6px -6px 10px #2b3042;
    }
    ul {
            list-style-position: inside;
            margin: 0;
            padding: 0;
        }
    
    @media (orientation: landscape) {
        #timelinePage {
            display: grid;
        }
        #landscape {
            display: none;
        }
    }

    @media (orientation: portrait) {
        #timelinePage {
            display: none;
        }
        #landscape {
            display: initial;
        }
    }
    @media only screen and (max-width: 1280px) and (max-height: 500px) {
        #timelineSection {
            grid-template-columns: auto min-content auto;
            height: 73.5vh;
            width: 100%;
            justify-self: center;
        }
        .timelineArticlesLeft img, .timelineArticlesRight img {
            width: 100%;
        }
        .timelineArticlesLeft {
            grid-template-columns: 25vw auto auto;
            margin-left: 5%;
        }
        .timelineArticlesRight {
            grid-template-columns: max-content auto 25vw;
            justify-self: end;
            margin-right: 5%;
        }
        .timelineText {
            font-size: 1.8vw;
        }
        #nextPage {
            font-size: 0.8em;
        }
    }
</style>