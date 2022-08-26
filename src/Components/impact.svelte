<script>
    let impactBanner = "images/Websites Page/Aim High Impact Banner.jpg";
    let impactLogo = "images/AH Department Banners/Impact Logo White.png";
  </script>
  
  <div id="impactBanner">
    <section>
      <img id="headerImage" src="{impactBanner}" alt="">
    </section>
    <section id="websiteDescription">
    <img src="{impactLogo}" id="impactLogo" alt="Aim High Impact logo">
    <p>Primary goal of website:
      <br>Increase the amount of job applicants and clientele by redesigning elements throughout the website.
      <br><br>
      Tools Used: Figma, Illustrator, Dimension, Photoshop, Animate, HTML, CSS, Javascript, Squarespace
    </p>
    <a href="https://www.aimhighimpact.org/"><button style="font-weight: bold">WEBSITE</button></a>
    </section>
  </div>
  
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
    #impactBanner {
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
    #impactLogo {
      width: 15vw;
    }
    #impactBanner p {
      color: white;
    }
    #impactBanner a {
      font-family: 'Lato', sans-serif;
      font-weight: bold;
      width: 30%;
      border-radius: 200px;
      transition-duration: 0.2s;
      display: grid;
      text-decoration: none;
    }
    #impactBanner a button {
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
    #impactBanner a button:hover {
      box-shadow:  inset 9px 9px 18px #1b1e29, inset -9px -9px 18px #292e3f;
      text-decoration: underline 2px;
    }
  @media only screen and (max-width: 850px) and (max-height: 500px) {

  }
  </style>