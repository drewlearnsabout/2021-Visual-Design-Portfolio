<script>
    let awsBanner = "images/Articles Page/InkBanner.jpg";
    let awsArticle = 'images/Articles Page/AWS AH Case Study.pdf'
    import Nav from "../Components/nav.svelte";
</script>

<section id="articleSection">
    <Nav/>
    <section id="articleGroup">
        <h1>ARTICLES</h1>
        <section id="inkBanner">
            <a href="{awsArticle}" target="_blank">
                <img src="{awsBanner}" alt="Banner of AWS and Ink Home Page">
            </a>
            <div id="inkDescription">
                <h3>Design and Development Process of E-Commerce Site</h3>
                <p>This article describes the process of the initial process and the latest progress of designing
                    and implementing an e-commerce site for a collaboration between to organizations. 
                </p>
                <button><a href="{awsArticle}" target="_blank">Read Article</a></button>
            </div>
        </section>
    </section>
</section>

<style>
    #articleSection {
    display: grid;
    background-size: cover;
    background: #222634;
    height: 100vh;
    grid-template-columns: 15% 85%;
    font-family: 'PT Sans Narrow', sans-serif;
}
    #articleGroup {
        display: grid;
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
    #inkBanner {
        display: grid;
        grid-template-rows: 1fr 1fr;
        row-gap: 0;
        justify-items: center;
        height: 65vh;
    }
    a {
        display: grid;
        justify-items: center;
    }
    a img {
        width: 40%;
    }
    #inkDescription {
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
    #inkDescription button {
        width: 25%;
        padding: 5px 10px;
        margin-bottom: 14px;
        font-family: 'PT Sans Narrow', sans-serif;
        transition-duration: 0.4s;
        border: none;
    }
    #inkDescription button:hover {
        background: rgb(52, 52, 77);
        color: white;
    }

    #inkDescription h3, #inkDescription p, #inkDescription button {
        grid-column: 2 / 3;
    }
</style>