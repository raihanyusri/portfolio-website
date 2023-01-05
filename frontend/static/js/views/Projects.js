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
                <img class="proj_img" src="/static/img/nusociety1.png" /></br>
                <span class="experience_company">NUSociety</span></br>
                <span class="proj_desc">A co-curricular activities (society) portal for university students and staff to use, with features to manage societies events, attendance, announcements, posts and comments. <br><br>Built for IS3106: Enterprise Systems Interface Design
                and Development. (Grade attained: A) </span>
            </div>

            <div class="box">
                <img class="proj_img" src="/static/img/nusociety1.png" /></br>
                <span class="experience_company">CookWhat?</span></br>
                <span class="proj_desc">A web application for inspiring cooks to search for recipes and add them to favourites for future reference, if they are logged in.</span>
            </div>

            </div>
        `;
    }
}