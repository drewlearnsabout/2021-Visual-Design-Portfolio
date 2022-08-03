<script>
    let hpGraphics = "images/Graphics Page/Hp Graphic.png";
    let abaTherapy = "images/Graphics Page/ABA Therapy Icon.png";
    let books = "images/Graphics Page/Books Icon.png";
    let calendar = "images/Graphics Page/Calendar 2021 Icon.png";
    let clientChecklist = "images/Graphics Page/Client Supply Checklist.png";
    let consent = "images/Graphics Page/Consent Form Icon.png";
    let house = "images/Graphics Page/House.png";
    let medAdmin = "images/Graphics Page/Medication Administration Log.png";
    let medications = "images/Graphics Page/Medications.png";
    let parent = "images/Graphics Page/Parental Control Icon.png";
    let psw = "images/Graphics Page/PSW Icon.png";
    let hiring = "images/Graphics Page/Hiring Banner.jpg";
    let departments = "images/Graphics Page/AnnualReport Departments.png";
    let revenue = "images/Graphics Page/Revenue and Expenses.png";
    let thanksgiving = "images/Graphics Page/Thanksgiving Banner.jpg"
    let assessment = "images/Graphics Page/Assessment tablet.png";
    let calendarTablet = "images/Graphics Page/Calendar tablet.png";
    let phone = "images/Graphics Page/Cell Phone.png";
    let checklistTablet = "images/Graphics Page/Checklist tablet.png";
    let homework = "images/Graphics Page/Homework tablet.png";
    let manual = "images/Graphics Page/MA Manual.png";
    let Woodbreak = "images/Graphics Page/Woodbreak.png";
    let veterans = "images/Graphics Page/Veterans Post.png";
    let maInk = "images/Graphics Page/MA Ink Post.png";
    let ascent = "images/Graphics Page/Ascent Post.png";
    let riseUp = "images/Graphics Page/Rising Up Logo.png";
    let events = "images/Graphics Page/Events Logo.png";
</script>

<section id="graphicsSection">
    <h1>Graphics</h1>
    <section id="allGraphics">
        <section id="hpGraphics">
            <h2>HP Graphics</h2>
            <div>
                <img src="{hpGraphics}" alt="Hp Responsive displays">
            </div>
        </section>
        <section id="2dgraphics">
            <h2>2D Graphics</h2>
            <div id="twoGrid">
                <img class="twoDClass firstBlock" src="{abaTherapy}" alt="ABA Therapy Icon">
                <img class="twoDClass secondBlock" src="{books}" alt="Books Icon">
                <img class="twoDClass thirdBlock" src="{calendar}" alt="Calendar Icon">
                <img class="twoDClass firstBlock" src="{clientChecklist}" alt="Client Checklist Icon">
                <img class="twoDClass secondBlock" src="{consent}" alt="Consent Form Icon">
                <img class="twoDClass thirdBlock" src="{house}" alt="House Icon">
                <img class="twoDClass firstBlock" src="{medAdmin}" alt="Medication Calendar Icon">
                <img class="twoDClass secondBlock" src="{medications}" alt="Medicine Bottle and Pills Icon">
                <img class="twoDClass thirdBlock" src="{parent}" alt="Parental Controls Icon">
                <img class="twoDClass fourthBlock" src="{psw}" alt="Personal Support Worker Icon">
            </div>
        </section>
        <section id="bannersReports">
            <h2>Banners and Reports</h2>
            <div id="bannerGrid">
                <img class="bannerReportsClass firstBanners" src="{hiring}" alt="">
                <img class="bannerReportsClass secondBanners" src="{departments}" alt="">
                <img class="bannerReportsClass thirdBanners" src="{revenue}" alt="">
                <img class="bannerReportsClass fourthBanners" src="{thanksgiving}" alt="">
            </div>
        </section>
        <section id="3dgraphics">
            <h2>3D Graphics</h2>
            <div id="threeGrid">
                <img class="threeDClass firstThree" src="{assessment}" alt="Assessment Icon">
                <img class="threeDClass secondThree" src="{calendarTablet}" alt="Calendar display on tablet Icon">
                <img class="threeDClass thirdThree" src="{phone}" alt="">
                <img class="threeDClass firstThree" src="{checklistTablet}" alt="Checklist display on tablet Icon">
                <img class="threeDClass secondThree" src="{homework}" alt="Homework Icon">
                <img class="threeDClass thirdThree" src="{manual}" alt="Manual Icon">
                <img class="threeDClass fourthThree" src="{Woodbreak}" alt="Boardbreaking Icon">
            </div>
        </section>
        <section id="socialMedia">
            <h2>Social Media and misc. Posts</h2>
            <div id="socialMediaGrid">
                <div class="socialOne">
                    <img src="{veterans}" alt="social media post for veteran's day">
                    <img src="{maInk}" alt="Aim High Martial Arts and Ink's banner that showcases screen printed shorts">
                </div>
                <div class="socialTwo">
                    <img src="{ascent}"  alt="Display of new toys that children can play with then they are at the clinic">
                    <img src="{riseUp}" id="riseUp" alt="Banner component for a display dedicated to arewards system for Aim High employees">
                </div>    
                <img src="{events}" class="socialThree" alt="Aim High Events Banner, Thanksgiving themed">
            </div>
        </section>
    </section>
</section>

<style>
    @import url('https://fonts.googleapis.com/css2?family=PT+Sans+Narrow&display=swap');
        #graphicsSection {
            display: grid;
            font-family: 'PT Sans Narrow', sans-serif;
            color: white;
            max-width: 100vw;
        }
        #graphicsSection h1, h2 {
            font-size: 2em;
            font-weight: normal;
            padding: 0 10%;
            text-align: center;
        }
        h2 {
            font-size: 1.5em;
        }
        /* HP Graphics */
        #hpGraphics {
            display: grid;
            justify-items: center;
            width: 100%;
        }
        #hpGraphics div img {
            width: 70vw;
        }

        /* 2D Grid */
        .twoDClass {
            width: 45%;
        }
        .threeDClass {
            width: 8%;
        }
        #twoGrid {
            display: grid;
            grid-template-columns: 1fr 2fr 2fr 2fr 1fr;
            grid-template-rows: repeat(3, 1fr);
            justify-items: center;
            row-gap: 4vh;
        }
        .firstBlock {
            grid-column: 2 / 3;
        }
        .secondBlock {
            grid-column: 3 / 4;
        }
        .thirdBlock {
            grid-column: 4 / 5;
        }
        .fourthBlock {
            grid-column: 3 / 4;
        }
        /* Banner Grid */
        #bannersReports {
            display: grid;
        }
        #bannerGrid {
            display: grid;
            grid-template-columns: 1fr 2fr 2fr 2fr 1fr;
            grid-template-rows: repeat(3, 0.5fr);
            justify-items: center;
            row-gap: 3vh;
        }
        .firstBanners {
            grid-column: 2 / 5;
            width: 80%;
        }
        .secondBanners {
            grid-column: 2 / 5;
            width: 80%;
        }
        .thirdBanners {
            grid-column: 2 / 5;
            width: 80%;
        }
        .fourthBanners {
            grid-column: 2 / 5;
            width: 80%;
        }
        /* 3D Grid */
        #threeGrid {
            display: grid;
            grid-template-columns: 1fr 2fr 2fr 2fr 1fr;
            grid-template-rows: repeat(3, 0.5fr);
            justify-items: center;
            row-gap: 3vh;
        }
        .firstThree {
            grid-column: 2 / 3;
            width: 50%;
        }
        .secondThree {
            grid-column: 3 / 4;
            width: 50%;
        }
        .thirdThree {
            grid-column: 4 / 5;
            width: 50%;
        }
        .fourthThree {
            grid-column: 3 / 4;
            width: 50%;
        }
        /* Social Media Grid */
        #socialMediaGrid {
            display: grid;
            grid-template-columns: 1fr 2fr 2fr 1fr;
            grid-template-rows: repeat(3, 0.5fr);
            justify-items: center;
            row-gap: 3vh;
        }
        .socialOne {
            grid-column: 2 / 4;
            display: grid;
            grid-template-columns: 1fr 1fr;
            column-gap: 5%;
            justify-content: center;
        }
        .socialOne img {
            width: 90%;
        }
        .socialTwo {
            grid-column: 2 / 4;
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
        .socialTwo img {
            width: 90%;
        }
        #riseUp {
            background-color: rgb(255, 255, 255);
        }
        .socialThree {
            grid-column: 2 / 4;
            width: 90%;
        }
</style>