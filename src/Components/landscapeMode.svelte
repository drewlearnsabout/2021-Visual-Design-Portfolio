<script>
  let full = "images/Contact Page/Full Rectangle.png";
  let opacity = "images/Contact Page/Translucent Rectangle.png";
  </script>

  <section>
      <div id="flipRectangles">
        <img id="full" src="{full}" alt="Turn your device arrow icon">
        <img id="opacity" src="{opacity}" alt="Turn your device arrow icon">
      </div>
      <p>Please turn your device.</p>
  </section>

  <style>
    @import url('https://fonts.googleapis.com/css2?family=PT+Sans+Narrow&display=swap');
    section {
        font-family: 'PT Sans Narrow', sans-serif;
        height: 100vh;
        width: 100vw;
        display: grid;
        position: absolute;
        z-index: 100;
        background-color: rgb(71, 71, 71, 0.8);
    }
    section p {
      text-align: center;
      font-size: 2.5em;
      color: white;
    }
    section img {
      width: 40%;
    }
    #flipRectangles {
      display: grid;
      justify-items: center;
      align-items: center;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
    }
    #full {
      grid-area: 1 / 1 / 2 / 2;
      animation-name: rotate;
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }
    #opacity {
      grid-area: 1 / 1 / 2 / 2;
      transform: rotate(90deg);
      
    }

    @keyframes rotate {
      0% {
        transform: rotate(0);
      }
      50% {
        transform: rotate(90deg) translateY(1.5%);
        opacity: 1;
      }
      70% {
        opacity: 0;
        transform: rotate(90deg) translateY(1.5%);
      }
      95% {
        opacity: 0;
        transform: rotate(0);
      }
      100% {
        opacity: 1;
      }
    }
  </style>