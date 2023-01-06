import About from "../views/About.js";
import Contact from "../views/Contact.js";
import Experience from "../views/Experience.js";
import Projects from "../views/Projects.js";

// Using History API
const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes = [
        { path: "/", view: About },
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

    console.log(match.route.view());
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