<script>
    let bgImage = "images/Graphics Page/grid.png";
    import Nav from "../Components/nav.svelte";
    import Thumbnails from "../Components/Graphics Components/graphicsThumbnails.svelte"
</script>

<section style="background-image: url('{bgImage}')" id="graphicsPage">
    <nav><Nav/></nav>
    <Thumbnails/>
</section>

<style>
        #graphicsPage {
            display: grid;
            background: #4B4B4B;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: right;
            grid-template-columns: 15% 85%;
        }
</style>
