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

class AbstractView {
    constructor() {

    }

    setTitle(title) {
        document.title = title;
    }

    async getHtml() {
        return "";
    }
}

class About extends AbstractView {
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

class Experience extends AbstractView {
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

class Projects extends AbstractView {
    constructor() {
        super();
        this.setTitle("Raihan Y. - Projects");
    }

    async getHtml() {
        return `
            <h1>Projects</h1>

            <div class="all_proj">
            <div class="box">
                <a href="https://github.com/raihanyusri/portfolio-website" target="_blank"> 
                    <img class="proj_img" src="/static/img/portfolio.png" /></br>
                </a></br>
                <span class="experience_company">Personal Portfolio Website</span></br>
                <span class="proj_desc">The website that you are on right now! Instead of using state of the art technologies like React, I wanted to 
                greater appreciate the language of the web - and built this website with vanilla JavaScript, HTML and CSS.</span></br></br>
                <span class="proj_stack">Tech stack:</span></br>
                <img class="tech_stack" src= "/static/img/js.png" title="JavaScript"/>
                <img class="tech_stack" src= "/static/img/html.png" title="HTML"/>
                <img class="tech_stack" src= "/static/img/css.png" title="CSS"/>
            </div>
            <div class="box">
                <a href="https://github.com/lyrador/nusociety" target="_blank"> 
                    <img class="proj_img" src="/static/img/nusociety1.png" /></br>
                </a></br>
                <span class="experience_company">NUSociety</span></br>
                <span class="proj_desc">A co-curricular activities portal for university students to use - with features to manage societies, events, posts, comments and more! 
                Built for IS3106: Enterprise Systems Interface Design and Development. (Grade attained: A) </span></br></br>
                <span class="proj_stack">Tech stack:</span></br>
                <img class="tech_stack" src= "/static/img/angular.png" title="Angular"/>
                <img class="tech_stack" src= "/static/img/ts.png" title="TypeScript"/>
                <img class="tech_stack" src= "/static/img/java.png" title="Java"/>
                <img class="tech_stack" src= "/static/img/jakarta ee.png" title="Jakarta EE"/>
                <img class="tech_stack" style="width:30px" src= "/static/img/jsf.jpeg" title="JSF"/>
            </div>

            </div>

            <div class="all_proj">
            <div class="box">
                <a href="https://github.com/raihanyusri/recipe-searcher" target="_blank"> 
                    <img class="proj_img" src="/static/img/cookwhat2.jpg" />
                </a></br>
                <span class="experience_company">CookWhat?</span></br>
                <span class="proj_desc">A web application for inspiring cooks to search for recipes and add them to favourites for future reference, 
                if they are logged in.</span></br></br>
                <span class="proj_stack">Tech stack:</span></br>
                <img class="tech_stack" src= "/static/img/react.png" title="React"/>
                <img class="tech_stack" src= "/static/img/js.png" title="JavaScript"/>
                <img class="tech_stack" src= "/static/img/firebase.png" title="Firebase"/>
            </div>

            <div class="box">
                <a href="https://github.com/raihanyusri/als" target="_blank"> 
                    <img class="proj_img" src="/static/img/bt2102.png" /></br>
                </a></br>
                <span class="experience_company">A Library System (ALS)</span></br>
                <span class="proj_desc">A desktop-based GUI application to keep records of books and and provide services for library members to borrow, return, and reserve books. 
                Built for BT2102: Data Management and Visualization. (Attained maximum score: 30/30)</span></br></br>
                <span class="proj_stack">Tech stack:</span></br>
                <img class="tech_stack" src= "/static/img/java.png" title="Java"/>
                <img class="tech_stack" src= "/static/img/hibernate.jpeg" title="Hibernate"/>
                <img class="tech_stack" src= "/static/img/mysql.png" title="MySQL"/>
            </div>

            </div>
        `;
    }
}

class Contact extends AbstractView {
    constructor() {
        super();
        this.setTitle("Raihan Y. - Contact");
    }

    async getHtml() {
        return `
            <h1>Contact</h1>
            <h3 style="color:#0a00bf;">Get in touch with me!</h3>
            </br>
            <a class="social" href="https://github.com/raihanyusri" target="_blank">
                <ion-icon name="logo-github"></ion-icon>
            </a>
            <a class="social" href="https://www.linkedin.com/in/raihanyusri/" target="_blank">
                <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a class="social" href="mailto:raihan.yusri@gmail.com?body=Hey!" target="_blank">
                <ion-icon name="mail-outline"></ion-icon>
            </a>
        `;
    }
}