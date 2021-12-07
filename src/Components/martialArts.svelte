<script>
    let maBanner = "images/Websites Page/Aim High MA Banner.jpg";
    let maLogo = "images/AH Department Banners/MA Logo.png";
  </script>
  
  <div style="background-image: url('{maBanner}')" id="maBanner">
    <img src="{maLogo}" id="maLogo" alt="Aim High Martial Arts logo">
    <p>Primary goal of website: Increase the traffic to site by revamping and periodically revising design elements.
      <br>
      Tools Used: Figma, Illustrator, Dimension, Photoshop, HTML, CSS, Javascript, Squarespace
    </p>
    <a href="https://www.aimhighma.org/" target="_blank"><button>VISIT SITE</button></a>
  </div>
  
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
    #maBanner {
      background-size: stretch;
      background-repeat: no-repeat;
      height: 100vh;
      display: grid;
      grid-template-columns: 20% 60% 20%;
      grid-template-rows: 10% 25% 15% 10% 30%;
    }
    #maLogo {
      width: 40em;
      grid-column: 2 / 3;
      grid-row: 2 / 3;
    }
    #maBanner p {
      grid-column: 2 / 3;
      grid-row: 3 / 4;
      color: white;
    }
    #maBanner a {
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
    #maBanner a:hover {
    width: 20%;
    transform: translateY(0) translateX(7px);
    font-weight: bold;
    }
    #maBanner a button {
    border-radius: 200px;
    border: none;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    color: white;
    }
    #maBanner a button:hover {
    box-shadow: 0 2px 15px 0 white;
    background: rgba(255, 255, 255, 0.205);
    }
    @media only screen and (max-width: 850px) and (max-height: 500px) {
      #maBanner {
        grid-template-rows: 20% 25% 40% 10% 20%;
        background-size: cover;
      }
      #maLogo {
        width: 20em;
      }
      #maBanner a {
        width: 25%;
      }
  }
  </style>