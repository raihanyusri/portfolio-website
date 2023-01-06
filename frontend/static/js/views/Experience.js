import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
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