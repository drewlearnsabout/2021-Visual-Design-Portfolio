<script>
    import Nav from "../Components/nav.svelte";
    import Landscape from "../Components/landscapeMode.svelte";
    let leftLine = "images/Timeline Page/Left Line.png";
    let rightLine = "images/Timeline Page/Right Line.png";
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
              <p>This will be my intro section.</p>
            </section>
            <div id="line"></div>
            <section class="leftSection">
                <section class="timelineArticlesLeft">
                    <div class="timelineText">
                        <p style="font-weight: bold">2022 - Present</p>
                        <p>Certification in UX Design<br>from Google</p>
                    </div>
                    <div><img src="{leftLine}" alt="line indicating a left article"></div>
                    <div class="dot"></div>
                </section>
                <section class="timelineArticlesLeft">
                    <div class="timelineText">
                        <p style="font-weight: bold">2021 - 2022</p>
                        <p>Media and Tech Lead<br>at Aim High PDX</p>
                    </div>
                    <div><img src="{leftLine}" alt="line indicating a left article"></div>
                    <div class="dot"></div>
                </section>
                <section class="timelineArticlesLeft">
                    <div class="timelineText">
                        <p style="font-weight: bold">2020</p>
                        <p>Designed and developed<br>website for educational<br>video game company</p>
                    </div>
                    <div><img src="{leftLine}" alt="line indicating a left article"></div>
                    <div class="dot"></div>
                </section>
                <section class="timelineArticlesLeft">
                    <div class="timelineText">
                        <p style="font-weight: bold">2017</p>
                        <p>Created first portfolio website</p>
                    </div>
                    <div><img src="{leftLine}" alt="line indicating a left article"></div>
                    <div class="dot"></div>
                </section>
                <section class="timelineArticlesLeft" id="pacific">
                    <div class="timelineText">
                        <p style="font-weight: bold">2014 - 2015</p>
                        <p>Completed post-bac<br>program from Pacific University</p>
                    </div>
                    <div><img src="{leftLine}" alt="line indicating a left article"></div>
                    <div class="dot"></div>
                </section>
                <section class="timelineArticlesLeft" id="sdsu">
                    <div class="timelineText">
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
                    <div class="timelineText">
                        <p style="font-weight: bold">2022</p>
                        <p>Visual Designer at HP</p>
                    </div>
                </section>
                <section class="timelineArticlesRight">
                    <div class="dot"></div>
                    <div><img src="{rightLine}" alt="line indicating a left article"></div>
                    <div class="timelineText">
                        <p style="font-weight: bold">2020</p>
                        <p>Designed and developed<br>website for real estate agent</p>
                    </div>
                </section>
                <section class="timelineArticlesRight">
                    <div class="dot"></div>
                    <div><img src="{rightLine}" alt="line indicating a left article"></div>
                    <div class="timelineText">
                        <p style="font-weight: bold">2018 - 2021</p>
                        <p>Web Designer at<br>Aim High PDX</p>
                    </div>
                </section>
                <section class="timelineArticlesRight" id="aba">
                    <div class="dot"></div>
                    <div><img src="{rightLine}" alt="line indicating a left article"></div>
                    <div class="timelineText">
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
                    <div class="timelineText">
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
    #introSection {
        grid-column: 1 / 4;
        grid-row: 1 / 2;
        justify-self: center;
        text-align: center;
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
            height: 84.5vh;
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