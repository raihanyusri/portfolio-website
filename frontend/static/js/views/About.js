import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
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
                    <img id="portrait" src="https://drive.google.com/uc?export=view&id=1_czlBoVy4J27Hr8Gpnu0FN5MuzDq9EJM" alt="portrait" height="385" width="360" style="border-radius:100%; vertical-align: middle; object-fit: contain;">
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