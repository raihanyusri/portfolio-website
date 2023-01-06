import About from "./About.js";
import Contact from "./Contact.js";
import Experience from "./Experience.js";
import Projects from "./Projects.js";

class AbstractView2 {
    constructor() {

    }

    setTitle(title) {
        document.title = title;
    }

    async getHtml() {
        return "";
    }
}

class About2 extends AbstractView2 {
    constructor() {
        super();
        this.setTitle("Raihan Y.");
    }
    
    async getHtml() {
        return `
        <h1>About</h1>
            <div id="row">
                <div id="hello_text" style="text-align:justify;display:inline-block;">
                    <span id="hi">Hi, I'm <span style="color:#0a00bf;">Raihan!</span></span>
                    <h3 style="color:#838383;">Software Engineer.</h3>
                </div>
                <div>
                    <img id="portrait" src="/static/img/swiss_portrait.jpg" alt="portrait" height="385" width="360" style="border-radius:100%; vertical-align: middle; object-fit: contain;">
                </div>
            </div>
            </br>
            <p>Currently a 3rd Year Information Systems student studying in the National University of Singapore (NUS), with primary focus on full-stack development.
            I aim to expand my knowledge in various aspects of technology and software development. </p>
            <p> I am currently interning as a Software Engineer at <a href="https://www.rydesharing.com/" target="_blank">Ryde Technologies</a>.
            </p>
        `;
    }
}

class Experience2 extends AbstractView {
    constructor() {
        super();
        this.setTitle("Raihan  Y. - Experience");
    }

    async getHtml() {
        return `
        <h1>Experience</h1>
        <p style="color:#838383;">I have immense gratitude to these companies that I have been fortunate enough to work for!</p>
        </br>

        <div class="experience">
            <img class="experience_img" src="/static/img/ryde.jpeg" alt="ryde"/>
            <div class="experience_text">    
                <span class="experience_company">Ryde Technologies,</span>
                <span class="experience_role">Software Engineer Intern</span></br>
                <span class="experience_time">Jan 2023 - Present</span>
                <p class="experience_desc">• Full-stack software engineer, working on improving the Ryde experience for users. More details coming soon!</p>
            </div>
        </div>
        </br>
        </br>
        <div class="experience" style="display:flex">
            <img class="experience_img" src="/static/img/lhub.png" alt="lhub"/>
            <div class="experience_text">    
                <span class="experience_company">NTUC LearningHub,</span>
                <span class="experience_role">Software Developer Intern</span></br>
                <span class="experience_time">May 2022 - Jul 2022</span>
                <p class="experience_desc">• Designed and developed RESTful APIs in MuleSoft (Anypoint Studio & Platform) for integration with SkillsFutureSG, processing ~2,000 requests daily <br>
                • Utilized SQL to manage data of over 90,000 trainees, while administering the company’s MSSQL database<br>
                • Supported the development of virtualized APIs by creating sample API request/response messages<br>
                • Documented business requirements and ensured alignment with their API implementations
                </p>
            </div>
        </div>
        </br>
        </br>
        <div class="experience" style="display:flex">
            <img class="experience_img" src="/static/img/sncf.jpeg" alt="sncf"/>
            <div class="experience_text">    
                <span class="experience_company">Singapore National Co-operative Federation,</span>
                <span class="experience_role">IT Intern</span></br>
                <span class="experience_time">May 2021 - Jul 2021</span>
                <p class="experience_desc">• Automated sending of weekly deliverables using Microsoft Power Automate, an initiative to reduce manual work<br>
                • Authored a manual for IT project implementation, to be referenced by >70 of the company’s affiliates<br>
                • Performed evaluation and assisted in the eventual selection of IT vendors for the company
                </p>
            </div>
        </div>
        `;
    }
}

// Using History API
const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes = [
        { path: "/", view: About2 },
        { path: "/experience", view: Experience},
        { path: "/projects", view: Projects},
        { path: "/contact", view: Contact}
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    // Make dashboard the default
    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        }
    }

    const view = new match.route.view();
    document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link")) {
            e.preventDefault(); //prevents refreshing of page
            navigateTo(e.target.href);
        }
    })
    router();
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__link_container");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav__link");
navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}