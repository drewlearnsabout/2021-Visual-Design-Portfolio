<script>
    let airplane = "images/Contact Page/Airplane.png";
    import Nav from "../Components/nav.svelte";
</script>

<section id="contactPage">
    <Nav/>
    <section id="contactSection">
        <img src="{airplane}" alt="Paper airplane">
    </section>
</section>

<style>
#contactPage {
    display: grid;
        background-size: cover;
        background: #353535;
        height: 100vh;
        grid-template-columns: 15% 85%;
        font-family: 'PT Sans Narrow', sans-serif;
}
#contactSection {
    display: grid;
    justify-items: center;
    align-items: center;
}
#contactSection img {
    width: 30vw;
    animation-name: float;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}
@keyframes float {
    0% {
        transform: translateY(0%);
        animation-timing-function: ease-in-out;
    }
    14.3% {
        transform: translateY(-20%) skewX(-15deg) rotate(10deg);
        animation-timing-function: ease-in-out;
    }
    35.75% {
        transform: translateY(20%) skewX(15deg) rotate(-10deg);
        animation-timing-function: ease-in-out;
    }
    57.2% {
        transform: translateY(5%);
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
</style>