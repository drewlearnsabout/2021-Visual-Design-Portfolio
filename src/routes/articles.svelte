<script>
    let awsBanner = "images/Articles Page/InkBanner.jpg";
    let awsArticle = 'images/Articles Page/AWS AH Case Study.pdf';
    let hpArticle = 'images/Articles Page/HP UI Case Study.pdf';
    let impactBanner = 'images/Articles Page/Case Study Title.png';
    let hpBanner = 'images/Articles Page/HP Case Study Header.jpg';
    import Nav from "../Components/nav.svelte";
</script>

<section id="articleSection">
    <a href="/graphics" id="nextPage">
        Next Page
    </a>
    <Nav/>
    <section id="articles">
        <h1>UI/UX</h1>
        <section id="articleGroupHP">
            <a href="{hpArticle}" target="_blank" id="hpBanner">
                <img src="{hpBanner}" alt="Banner of HP UI Case Study">
            </a>
            <div id="hpDescription">
                <h3>Responsive Prototyping and Specs for Remote Printing Application</h3>
                <p>This case study describes the process of creating prototypes
                    and specification guidelines used to help redesign a remote printing application
                    for HP.
                </p>
                <button><a href="{hpArticle}" target="_blank">Read Article</a></button>
            </div>
        </section>
        <section id="articleGroup">
            <a href="{awsArticle}" target="_blank">
                <img src="{awsBanner}" alt="Banner of AWS and Ink Home Page">
            </a>
            <div id="inkDescription">
                <h3>Design and Development Process of E-Commerce Site</h3>
                <p>This article describes the initial process and the latest progress of designing
                    and implementing an e-commerce site for a collaboration between to organizations. 
                </p>
                <button><a href="{awsArticle}" target="_blank">Read Article</a></button>
            </div>
        </section>
        <section id="articleGroupTwo">
            <a href="https://redesign-impact.netlify.app/" id="impactBanner" target="_blank">
                <img src="{impactBanner}" alt="Header of Redesigning Impact Website Case Study">
            </a>
            <div id="impactDescription">
                <h3>Redesigning the Aim High Impact Website</h3>
                <p>This article describes the initial process of redesigning a website dedicated
                    to outreach for families of children with Autism</p>
                <button><a href="https://redesign-impact.netlify.app/" target="_blank">Read Article</a></button>
            </div>
        </section>
    </section>
</section>

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
        background: #222634;
        box-shadow:  5px 5px 10px #1d202c, -5px -5px 10px #272c3c;
        padding: 10px 25px;
    }
    #nextPage:hover {
        box-shadow:  inset 5px 5px 10px #1d202c, inset -5px -5px 10px #272c3c;
    }
    #articleSection {
    display: grid;
    background-size: cover;
    background: #222634;
    grid-template-columns: 15% 85%;
    font-family: 'PT Sans Narrow', sans-serif;
    }
    #articles h1, #articleGroupHP, #articleGroup, #articleGroupTwo {
        grid-column: 2 / 3;
        display: grid;
        justify-items: center;
    }
    #articleGroupTwo {
        margin-bottom: 10vh;
    }
    #articles {
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: auto;
        row-gap: 10vh;
        overflow-y: scroll;
        height: 99vh;
        justify-items: center;
    }
    h1 {
        color: white;
        font-weight: normal;
        font-size: 2em;
    }
    h3 {
        color: white;
        font-weight: normal;
    }
    p {
        color: white;
    }
    #impactBanner {
        background-color: white;
        width: 100%;
        border-radius: 50px 50px 0 0;
    }
    #articles a {
        display: grid;
        justify-items: center;
        width: 100%;
    }
    #articles a img {
        width: 100%;
        border-radius: 50px 50px 0 0;
    }
    #impactBanner img {
        width: 70%;
        border-radius: 0;
    }
    #articleGroupHP, #articleGroup, #articleGroupTwo {
        width: 40%;
        box-shadow:  9px 9px 18px #191c26,-9px -9px 18px #2b3042;
             border-radius: 50px;
    }
    #hpDescription, #inkDescription, #impactDescription {
        width: 90%;
        display: grid;
        grid-template-columns: 5% 90% 5%;
        padding: 2.5% 0;
    }
    #hpDescription button, #inkDescription button, #impactDescription button {
        width: 30%;
        padding: 5px 10px;
        margin-bottom: 14px;
        border: none;
        background: linear-gradient(145deg, #1f222f, #242938);
        box-shadow:  6px 6px 10px #191c26, -6px -6px 10px #2b3042;
        border-radius: 5px;
        cursor: pointer;
    }
    #hpDescription button a, #inkDescription button a, #impactDescription button a {
        text-decoration: none;
        color: white;
        font-family: 'PT Sans Narrow', sans-serif;
    }
    #hpDescription button:hover, #inkDescription button:hover, #impactDescription button:hover {
        background: #222634;
        box-shadow: inset 6px 6px 10px #191c26,
            inset -6px -6px 10px #2b3042;
        color: white;
    }

    #hpDescription h3, #hpDescription p, #hpDescription button,
    #inkDescription h3, #inkDescription p, #inkDescription button,
    #impactDescription h3, #impactDescription p, #impactDescription button {
        grid-column: 2 / 3;
    }
</style>