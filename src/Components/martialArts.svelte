<script>
    let maBanner = "images/Websites Page/Aim High MA Banner.jpg";
    let maLogo = "images/AH Department Banners/MA Logo.png";
  </script>
  
  <div id="maBanner">
    <section>
      <img id="headerImage" src="{maBanner}" alt="">
    </section>
    <section id="websiteDescription">
    <img src="{maLogo}" id="maLogo" alt="Aim High Martial Arts logo">
    <p>Primary goal of website:
      <br>
      Increase the traffic to site by revamping and periodically revising design elements.
      <br><br>
      Tools Used: Figma, Illustrator, Dimension, Photoshop, HTML, CSS, Javascript, Squarespace
    </p>
    <a href="https://www.aimhighma.org/" target="_blank"><button style="font-weight: bold">WEBSITE</button></a>
    </section>
  </div>
  
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
    #maBanner {
    width: 45%;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    border-radius: 50px;
    box-shadow:  9px 9px 18px #191c26,-9px -9px 18px #2b3042;
    }
    #websiteDescription {
      display: grid;
      grid-template-columns: auto;
      grid-template-rows: max-content max-content max-content;
      justify-items: center;
      column-gap: 5%;
      padding: 5%;
    }
    #headerImage {
      width: 100%;
      border-radius: 50px 50px 0 0;
    }
    #maLogo {
      width: 15vw;
    }
    #maBanner p {
      color: white;
    }
    #maBanner a {
      font-family: 'Lato', sans-serif;
      font-weight: bold;
      width: 25%;
      border-radius: 200px;
      transition-duration: 0.2s;
      display: grid;
      text-decoration: none;
    }
    #maBanner a button {
      font-family: 'Open Sans Condensed', sans-serif;
      width: 100%;
      padding: 15px 10px;
      margin-bottom: 14px;
      border: none;
      background: linear-gradient(145deg, #1f222f, #242938);
      box-shadow:  6px 6px 10px #191c26, -6px -6px 10px #2b3042;
      border-radius: 12px;
      cursor: pointer;
      color: white;
    }
    #maBanner a button:hover {
      box-shadow:  inset 9px 9px 18px #1b1e29, inset -9px -9px 18px #292e3f;
      text-decoration: underline 2px;
    }
      @media only screen and (max-width: 850px) and (max-height: 500px) {

    }
  </style>