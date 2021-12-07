<script>
  let pdxBanner = "images/Websites Page/Aim High PDX Banner.jpg";
  let pdxLogo = "images/AH Department Banners/AH PDX Logo_White.png";
</script>

<div style="background-image: url('{pdxBanner}')" id="pdxBanner">
  <img src="{pdxLogo}" id="pdxLogo" alt="Aim High PDX logo">
  <p>Primary goal of website: Increase the local community traffic to site by creating a non-profit company's website.
    <br>
    Tools Used: Figma, Illustrator, Dimension, Animate, Photoshop, HTML, CSS, Javascript, Squarespace
  </p>
  <a href="https://www.aimhighpdx.org/" target="_blank"><button>VISIT SITE</button></a>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
  #pdxBanner {
    background-size: stretch;
    background-repeat: no-repeat;
    height: 100vh;
    display: grid;
    grid-template-columns: 20% 60% 20%;
    grid-template-rows: 25% 20% 15% 10% 25%;
  }
  #pdxLogo {
    width: 40em;
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
  #pdxBanner p {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    color: white;
  }
  #pdxBanner a {
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    width: 22%;
    border-radius: 200px;
    grid-column: 2 / 3;
    grid-row: 4 / 5;
    transition-duration: 0.2s;
    display: grid;
    text-decoration: none;
  }
  #pdxBanner a:hover {
    width: 20%;
    transform: translateY(0) translateX(7px);
    font-weight: bold;
  }
  #pdxBanner a button {
    border-radius: 200px;
    border: none;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    color: white;
  }
  #pdxBanner a button:hover {
    box-shadow: 0 2px 15px 0 white;
    background: rgba(255, 255, 255, 0.205);
  }
  @media only screen and (max-width: 850px) and (max-height: 500px) {
    #pdxBanner {
      grid-template-rows: 20% 12% 40% 10% 25%;
      background-size: cover;
    }
    #pdxLogo {
      width: 20em;
    }
    #pdxBanner a {
        width: 25%;
      }
  }
</style>