import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Raihan Y. - Projects");
    }

    async getHtml() {
        return `
            <h1>Projects</h1>

            <div class="all_proj">
            <div class="box">
                <img class="proj_img" src="/static/img/portfolio.png" /></br>
                <span class="experience_company">Personal Portfolio Website</span></br>
                <span class="proj_desc">The website that you are on right now! Instead of using state of the art technologies like React, I wanted to 
                greater appreciate the language of the web - and built this website with vanilla JavaScript, HTML and CSS.</span></br></br>
                <span class="proj_stack">Tech stack:</span></br>
                <img class="tech_stack" src= "/static/img/js.png" title="JavaScript"/>
                <img class="tech_stack" src= "/static/img/html.png" title="HTML"/>
                <img class="tech_stack" src= "/static/img/css.png" title="CSS"/>
            </div>
            <div class="box">
                <img class="proj_img" src="/static/img/nusociety1.png" /></br>
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
                <img class="proj_img" src="/static/img/cookwhat.png" /></br>
                <span class="experience_company">CookWhat?</span></br>
                <span class="proj_desc">A web application for inspiring cooks to search for recipes and add them to favourites for future reference, 
                if they are logged in.</span></br></br>
                <span class="proj_stack">Tech stack:</span></br>
                <img class="tech_stack" src= "/static/img/react.png" title="React"/>
                <img class="tech_stack" src= "/static/img/js.png" title="JavaScript"/>
                <img class="tech_stack" src= "/static/img/firebase.png" title="Firebase"/>
            </div>

            <div class="box">
                <img class="proj_img" src="/static/img/bt2102.png" /></br>
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