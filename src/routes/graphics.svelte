<script>
    let bgImage = "images/Graphics Page/grid.png";
    import Nav from "../Components/nav.svelte";
    import Thumbnails from "../Components/Graphics Components/graphicsThumbnails.svelte";
    import Landscape from "../Components/landscapeMode.svelte";
</script>

<section style="background-image: url('{bgImage}')" id="graphicsPage">
    <nav><Nav/></nav>
    <section id="graphicsSection">
        <Thumbnails/>
    </section>
</section>
<div id="landscape"><Landscape/></div>

<style>
        #graphicsPage {
            display: grid;
            height: 100vh;
            background: #222634;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: right;
            grid-template-columns: 15% 85%;
            cursor: url("images/Circle Cursor.png"), auto;
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
        background: #f1f1f1; 
        }
        
        /* Handle */
        ::-webkit-scrollbar-thumb {
        background: #888; 
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
