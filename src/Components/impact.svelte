<script>
    let impactBanner = "images/Websites Page/Aim High Impact Banner.jpg";
    let impactLogo = "images/AH Department Banners/Impact Logo White.png";
  </script>
  
  <div style="background-image: url('{impactBanner}')" id="impactBanner">
    <img src="{impactLogo}" id="impactLogo" alt="Aim High Impact logo">
    <p>Primary goal of website: Design layouts for each page and 
      provide consultation on how content is organized to improve 
      aesthetics and user experience. </p>
    <a href="https://www.aimhighimpact.org/"><button>VISIT SITE</button></a>
  </div>
  
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
    #impactBanner {
      background-size: stretch;
      background-repeat: no-repeat;
      height: 100vh;
      display: grid;
      grid-template-columns: 20% 60% 20%;
      grid-template-rows: 15% 35% 15% 10% 15%;
    }
    #impactLogo {
      width: 40em;
      grid-column: 2 / 3;
      grid-row: 2 / 3;
    }
    #impactBanner p {
      grid-column: 2 / 3;
      grid-row: 3 / 4;
      color: white;
    }
    #impactBanner a {
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
  #impactBanner a:hover {
    width: 20%;
    transform: translateY(0) translateX(7px);
    font-weight: bold;
  }
  #impactBanner a button {
    border-radius: 200px;
    border: none;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    color: white;
  }
  #impactBanner a button:hover {
    box-shadow: 0 2px 15px 0 white;
    background: rgba(255, 255, 255, 0.205);
  }
  </style>