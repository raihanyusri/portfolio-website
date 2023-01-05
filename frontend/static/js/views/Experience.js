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
            <img class="experience_img" src="https://media.licdn.com/dms/image/C560BAQFb7WuG3tyu6Q/company-logo_200_200/0/1629858503038?e=1680739200&v=beta&t=qTnNVt74yE9qtyQVSHSwfjXkCOy3kl3ruIz6EjiWiRw" alt="ryde"/>
            <div class="experience_text">    
                <span class="experience_company">Ryde Technologies,</span>
                <span class="experience_role">Software Engineer Intern</span>
                <span class="experience_time">Jan 2023 - Present</span>
                <p>• Full-stack software engineer, working on improving the Ryde experience for users. More details coming soon!</p>
            </div>
        </div>
        </br>
        </br>
        </br>
        <div class="experience" style="display:flex">
            <img class="experience_img" src="https://media.licdn.com/dms/image/C510BAQFgvSAHB_UGuQ/company-logo_200_200/0/1577928610583?e=1680739200&v=beta&t=yTvBu7UPRa04f91HgXFU1Zddc2mi8cR3M1UcX-pw-cY" alt="lhub"/>
            <div class="experience_text">    
                <span class="experience_company">NTUC LearningHub,</span>
                <span class="experience_role">Software Developer Intern</span>
                <span class="experience_time">May 2022 - Jul 2022</span>
                <p>• Designed and developed RESTful APIs in MuleSoft (Anypoint Studio & Platform) for integration with SkillsFutureSG, processing ~2,000 requests daily <br>
                • Utilized SQL to manage data of over 90,000 trainees, while administering the company’s MSSQL database<br>
                • Supported the development of virtualized APIs by creating sample API request/response messages<br>
                • Documented business requirements and ensured alignment with their API implementations
                </p>
            </div>
        </div>
        </br>
        </br>
        <div class="experience" style="display:flex">
            <img class="experience_img" src="https://sncf.s3.ap-southeast-1.amazonaws.com/public/uploads/assets/logo-sharing.jpg" alt="sncf"/>
            <div class="experience_text">    
                <span class="experience_company">Singapore National Co-operative Federation,</span>
                <span class="experience_role">IT Intern</span>
                <span class="experience_time">May 2021 - Jul 2021</span>
                <p>• Automated sending of weekly deliverables using Microsoft Power Automate, an initiative to reduce manual work<br>
                • Authored a manual for IT project implementation, to be referenced by >70 of the company’s affiliates<br>
                • Performed evaluation and assisted in the eventual selection of IT vendors for the company
                </p>
            </div>
        </div>
        `;
    }
}