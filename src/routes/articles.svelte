<script>
    let awsBanner = "images/Articles Page/InkBanner.jpg";
    let awsArticle = 'images/Articles Page/AWS AH Case Study.pdf';
    let impactBanner = 'images/Articles Page/Case Study Title.png';
    let prototypeBanner = 'images/Articles Page/Prototype Banner.png';
    import Nav from "../Components/nav.svelte";
</script>

<section id="articleSection">
    <a href="/contact" id="nextPage">
        Next Page >
    </a>
    <Nav/>
    <section id="articles">
        <h1>ARTICLES</h1>
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
        <section id="articleGroupThree">
            <a href="https://prototypingvalue.netlify.app/" id="prototypeBanner" target="_blank">
                <img src="{prototypeBanner}" alt="Header of Value of Prototyping Article">
            </a>
            <div id="prototypeDescription">
                <h3>The Value of Prototyping</h3>
                <p>This article describes the what, why, and how of prototyping in UX</p>
                    <button><a href="https://prototypingvalue.netlify.app/" target="_blank">Read Article</a></button>
            </div>
        </section>
    </section>
</section>

<style>
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
    #articleSection {
    display: grid;
    background-size: cover;
    background: #222634;
    grid-template-columns: 15% 85%;
    font-family: 'PT Sans Narrow', sans-serif;
    }
    #articles h1, #articleGroup, #articleGroupTwo, #articleGroupThree {
        grid-column: 2 / 3;
        display: grid;
        justify-items: center;
    }
    #articles {
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: auto;
        row-gap: 10vh;
        overflow-y: scroll;
        height: 100vh;
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
        width: 40%;
        padding: 20px 0;
    }
    #prototypeBanner {
        width: 100%;
    }
    a {
        display: grid;
        justify-items: center;
    }
    a img {
        width: 40%;
    }
    #inkDescription, #impactDescription, #prototypeDescription {
        background: gray;
        width: 40%;
        background: rgba( 255, 255, 255, 0.25 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 4px );
        -webkit-backdrop-filter: blur( 4px );
        border: 1px solid rgba( 255, 255, 255, 0.18 );
        display: grid;
        grid-template-columns: 5% 90% 5%;
    }
    #inkDescription button, #impactDescription button, #prototypeDescription button {
        width: 25%;
        padding: 5px 10px;
        margin-bottom: 14px;
        font-family: 'PT Sans Narrow', sans-serif;
        transition-duration: 0.4s;
        border: none;
    }
    #inkDescription button a, #impactDescription button a, #prototypeDescription a {
        text-decoration: none;
        color: rgb(52, 52, 77);
        transition-duration: 0.4s;
    }
    #inkDescription button a:hover, #impactDescription button a:hover, #prototypeDescription button a:hover {
        text-decoration: none;
        color: white;
    }
    #inkDescription button:hover, #impactDescription button:hover, #prototypeDescription button:hover {
        background: rgb(52, 52, 77);
        color: white;
    }

    #inkDescription h3, #inkDescription p, #inkDescription button,
    #impactDescription h3, #impactDescription p, #impactDescription button,
    #prototypeDescription h3, #prototypeDescription p, #prototypeDescription button {
        grid-column: 2 / 3;
    }
</style>