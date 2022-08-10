<script>
    let hpPrototypeOne = "images/UIUX Page/Additional Settings Prototype.png";
    let hpPrototypeTwo = "images/UIUX Page/Scan Destinations Prototype.png";
    let hpPrototypeThree = "images/UIUX Page/Supply Status Prototype.jpg";
    let hpPrototypeFour = "images/UIUX Page/Manage Fax Prototype.jpg";
    let hpSpecOne = "images/UIUX Page/Checkbox Accordion.jpg";
    let hpSpecTwo = "images/UIUX Page/Table Module.jpg";
    let beerPrototypeOne = "images/UIUX Page/Beer Garden Components.jpg";
    let beerPrototypeTwo = "images/UIUX Page/Beer Garden Lofi Prototype.jpg";
    let beerWireframeOne = "images/UIUX Page/Beer Gaden Order Page.jpg";
    let beerWireframeTwo = "images/UIUX Page/Beer Garden Menu.jpg";
    let beerStoryboardingOne = "images/UIUX Page/Beer Garden Storyboard - Big Picture.jpg";
    let beerStoryboardingTwo = "images/UIUX Page/Beer Garden Storyboard - Close Up.jpg";
</script>

<section id="uiux">
    <section class="hp">
        <h2>HP</h2>
        <div id="hpPrototypes">
            <h3>High Fidelity/Interactive prototypes</h3>
            <img src="{hpPrototypeOne}" alt="Hp Responsive displays">
            <img src="{hpPrototypeTwo}" alt="Hp Responsive displays">
            <img src="{hpPrototypeThree}" alt="Hp Responsive displays">
            <img src="{hpPrototypeFour}" alt="Hp Responsive displays">
        </div>
        <div id="hpSpecs">
            <h3>Component Specifications</h3>
            <img src="{hpSpecOne}" alt="HP component specifications for a checkbox accordion">
            <img src="{hpSpecTwo}" alt="HP component specifications for a table module">
        </div>
    </section>
    <section class="beerGarden">
        <h2>Beer Garden Digital Menu and Ordering App</h2>
        <div id="beerLofiPrototypes">
            <h3>Lofi Prototyping</h3>
            <img src="{beerPrototypeOne}" alt="Beer Garden Prototype Components">
            <img src="{beerPrototypeTwo}" alt="Beer Garden Lofi Components">
        </div>
        <div id="beerWireframes">
            <h3>Paper Wireframing</h3>
            <div id="paperWireframes">
                <img src="{beerWireframeOne}" alt="Beer Garden Paper Wireframe for an ordering app">
                <img src="{beerWireframeTwo}" alt="Beer Garden Paper Wireframe for a digital menu">
            </div>
        </div>
        <div id="beerStoryboarding">
            <h3>Storyboards</h3>
            <img src="{beerStoryboardingOne}" alt="Beer Garden Big Story Storyboard">
            <img src="{beerStoryboardingTwo}" alt="Beer Garden Close Up Storyboard">
        </div>
    </section>
</section>

<style>
    #uiux {
        font-family: 'PT Sans Narrow', sans-serif;
        font-weight: lighter;
        color: white;
    }
        /* HP Graphics */
        .hp, .beerGarden {
        display: grid;
        margin: 5% 0;
        grid-template-columns: 10% 80% 10%;
        grid-template-rows: auto auto;
        justify-items: center;
        max-width: 100vw;
        }
        .hp h2, .beerGarden h2 {
            justify-self: start;
            grid-column: 2 / 3;
            grid-row: 1 / 2;
        }
        .hp div, .beerGarden div {
            grid-column: 2 / 3;
            justify-content: center;
        }
        .hp div img, .beerGarden div img {
            width: 55vw;
            justify-self: center;
        }
        #paperWireframes {
            display: grid;
            grid-template-columns: auto auto;
            justify-items: start;
            column-gap: 5%;
        }
        #paperWireframes img {
            width: 65%;
            justify-self: stretch;
        }
</style>