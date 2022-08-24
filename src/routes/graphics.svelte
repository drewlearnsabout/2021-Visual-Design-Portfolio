<script>
    let bgImage = "images/Graphics Page/grid.png";
    import Nav from "../Components/nav.svelte";
    import Thumbnails from "../Components/Graphics Components/graphicsThumbnails.svelte";
    import Landscape from "../Components/landscapeMode.svelte";
</script>

<section style="background-image: url('{bgImage}')" id="graphicsPage">
    <a href="/websites" id="nextPage">
        Next Page
    </a>
    <nav><Nav/></nav>
    <section id="graphicsSection">
        <h2>GRAPHICS</h2>
        <Thumbnails/>
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
        border-radius: 12px;
        background: #222634;
        box-shadow:  5px 5px 10px #1d202c, -5px -5px 10px #272c3c;
        padding: 10px 25px;
    }
    #nextPage:hover {
        box-shadow:  inset 5px 5px 10px #1d202c, inset -5px -5px 10px #272c3c;
    }
        #graphicsPage {
            display: grid;
            height: 100vh;
            background: #222634;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: right;
            grid-template-columns: 15% 85%;
        }
        #graphicsPage h2 {
        font-family: 'PT Sans Narrow', sans-serif;
        color: white;
        font-weight: normal;
        font-size: 2em;
        padding: 0 10%;
        text-align: center;
    }
        #graphicsSection {
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
            #graphicsPage {
                display: grid;
            }
            #landscape {
                display: none;
            }
        }

        @media (orientation: portrait) {
            #graphicsPage {
                display: none;
            }
            #landscape {
                display: initial;
            }
        }
</style>
