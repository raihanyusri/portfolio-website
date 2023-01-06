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