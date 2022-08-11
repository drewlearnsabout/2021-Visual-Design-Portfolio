<script>
    let bgImage = "images/Graphics Page/grid.png";
    import Nav from "../Components/nav.svelte";
    import Material from "../Components/uiux Components/uiuxMaterial.svelte";
    import Landscape from "../Components/landscapeMode.svelte";
</script>

<section style="background-image: url('{bgImage}')" id="uiuxPage">
    <a href="/graphics" id="nextPage">
        Next Page >
    </a>
    <nav><Nav/></nav>
    <section id="uiuxSection">
        <h2>UI/UX</h2>
        <Material/>
    </section>
</section>
<div id="landscape"><Landscape/></div>

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
    #uiuxPage {
            display: grid;
            height: 100vh;
            background: #222634;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: right;
            grid-template-columns: 15% 85%;
    }
    #uiuxPage h2 {
        font-family: 'PT Sans Narrow', sans-serif;
        color: white;
        font-weight: normal;
        font-size: 2em;
        padding: 0 10%;
        text-align: center;
    }
        #uiuxSection {
            overflow-y: scroll;
        }
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
        @media (orientation: landscape) {
            #uiuxPage {
                display: grid;
            }
            #landscape {
                display: none;
            }
        }

        @media (orientation: portrait) {
            #uiuxPage {
                display: none;
            }
            #landscape {
                display: initial;
            }
        }
</style>