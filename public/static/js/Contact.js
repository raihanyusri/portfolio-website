import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
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