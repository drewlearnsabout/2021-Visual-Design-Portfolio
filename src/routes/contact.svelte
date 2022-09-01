<script>
    let airplane = "images/Contact Page/Airplane.png";
    let poof = "images/Contact Page/Rectangle 29.png";
    let resume = "static/links/Resume_Andrew Carbungco.docx.pdf";
    import Nav from "../Components/nav.svelte";
    import Modal from "../Components/aboutModal.svelte";
    import Landscape from "../Components/landscapeMode.svelte";

    let planeModal = false;
</script>

<section id="contactPage">
    <Nav/>
    <section id="contactMain">
        <h1>CONTACT</h1>
        <section id="contactSection">
            <img id="plane" src="{airplane}" on:click="{() => planeModal = true}" alt="Paper airplane">
            <img id="poof" src="{poof}" alt="puff cloud behind a paper airplane">
            <img id="poof2" src="{poof}" alt="puff cloud behind a paper airplane">
            <img id="poof3" src="{poof}" alt="puff cloud behind a paper airplane">
            <p>Click the plane for contact info.</p>
            {#if planeModal}
            <Modal on:close="{() => planeModal = false}">
                <h2 id="modalH2">Contact Info</h2>
                <p>Email: andrew.carbungco@gmail.com</p>
                <p>Phone: 619-540-0607</p>
                <div class="modalLinks">
                    <a class="modalA" href="{resume}" target="_blank">Resume</a>
                    <a class="modalA" href="https://www.linkedin.com/in/andrew-carbungco-1357ab22/" target="_blank">LinkedIn Profile</a>
                </div>
            </Modal>
            {/if}
        </section>
    </section>
</section>
<div id="landscape"><Landscape/></div>

<style>
#contactPage {
    display: grid;
    background-size: cover;
    background: #222634;
    height: 100vh;
    grid-template-columns: 15% 85%;
    font-family: 'PT Sans Narrow', sans-serif;
}
#contactMain {
    display: grid;
    grid-template-rows: 10% 80%;
}
#contactMain h1 {
    text-align: center;
    padding: 0 10%;
    font-size: 2em;
    font-weight: normal;
    color: white;
}
#contactSection {
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr 2fr 0.25fr 0.25fr 0.25fr 1fr;
    grid-template-rows: 20% 60% 20%;
}
#modalH2 {
    text-align: center;
}
.modalLinks {
    display: grid;
    grid-template-columns: 20% 25%;
}
.modalA {
    text-decoration: none;
    color: white;
    font-size: 1.7vw;
}
.modalA:hover {
    text-decoration: underline;
    color: lightblue;
}
#contactSection p {
    color: white;
    font-size: 25px;
    grid-column: 2 / 6;
    grid-row: 3 / 4;
    align-self: start;
}
#plane {
    width: 30vw;
    animation-name: float;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    cursor: pointer;
}
#poof, #poof2, #poof3 {
    width: 3.5vw;
    opacity: 0;
    grid-row: 2 / 3;
}
#poof {
    animation-name: fade;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    grid-column: 3 / 4;
}
#poof2 {
    transform: translateY(-20px);
    animation-name: fade;
    animation-duration: 3s;
    animation-delay: .5s;
    animation-iteration-count: infinite;
    grid-column: 4 / 5;
}
#poof3 {
    transform: translateY(10px);
    animation-name: fade;
    animation-duration: 3s;
    animation-delay: 1s;
    animation-iteration-count: infinite;
    grid-column: 5 / 6;
}

@keyframes float {
    0% {
        transform: translateY(0%);
        animation-timing-function: ease-in-out;
    }
    14.3% {
        transform: translateY(-20%) skewX(-15deg) rotate(10deg) scale(0.7);
        animation-timing-function: ease-in-out;
    }
    35.75% {
        transform: translateY(20%) skewX(15deg) rotate(-10deg) scale(1);
        animation-timing-function: ease-in-out;
    }
    57.2% {
        transform: translateY(5%) scale(1);
        animation-timing-function: ease-in-out;
    }
    71.5% {
        transform: translateY(0%);
        animation-timing-function: ease-in-out;
    }
    85.8% {
        transform: translateY(5%);
        animation-timing-function: ease-in-out;
    }
    100% {
        transform: translateY(0%);
        animation-timing-function: ease-in-out;
    }
}
@keyframes fade {
    0% {
        opacity: 0;
    }
    10% {
        opacity: 0;
    }
    20% {
        opacity: 1;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
@media (orientation: landscape) {
        #contactPage {
            display: grid;
        }
        #landscape {
            display: none;
        }
    }

    @media (orientation: portrait) {
        #contactPage {
            display: none;
        }
        #landscape {
            display: initial;
        }
    }
    @media only screen and (max-width: 850px) and (max-height: 500px) {
        #contactPage p {
            font-size: 1em;
        }
    }
</style>