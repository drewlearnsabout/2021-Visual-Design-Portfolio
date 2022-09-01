<script>
    let inkBanner = "images/Websites Page/Aim High Ink Banner.jpg";
    let inkLogo = "images/AH Department Banners/Ink Logo.png";
  </script>
  
  <div style="background-image: url('{inkBanner}')" id="inkBanner">
    <img src="{inkLogo}" id="inkLogo" alt="Aim High Ink logo">
    <p>Primary goal of website: Increase traffic towards site primarily for service inquiries by designing revamped and new components throughout site.
      <br>
      Tools Used: Figma, Illustrator, Photoshop, Animate, HTML, CSS, Javascript, Squarespace
    </p>
    <a href="https://www.aimhighink.org/" target="_blank"><button>VISIT SITE</button></a>
  </div>
  
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
    #inkBanner {
      background-size: stretch;
      background-repeat: no-repeat;
      height: 100vh;
      display: grid;
      grid-template-columns: 20% 60% 20%;
      grid-template-rows: 5% 45% 15% 10% 5%;
    }
    #inkLogo {
      width: 35em;
      grid-column: 2 / 3;
      grid-row: 2 / 3;
    }
    #inkBanner p {
      grid-column: 2 / 3;
      grid-row: 3 / 4;
      color: white;
    }
    #inkBanner a {
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
    #inkBanner a:hover {
    width: 20%;
    transform: translateY(0) translateX(7px);
    }
    #inkBanner a button {
    border-radius: 200px;
    border: none;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    color: white;
    }
    #inkBanner a button:hover {
    box-shadow: 0 2px 15px 0 white;
    background: rgba(255, 255, 255, 0.205);
    }
    @media only screen and (max-width: 850px) and (max-height: 500px) {
      #inkBanner {
        grid-template-rows: 10% 45% 40% 10% 10%;
        background-size: cover;
      }
      #inkLogo {
        width: 16em;
      }
      #inkBanner a {
        width: 25%;
      }
  }
  </style>