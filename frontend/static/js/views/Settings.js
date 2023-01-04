import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Settings");
    }

    async getHtml() {
        return `
            <h1>Welcome to settings</h1>

            <p>This is a paragraph in settings</p>
        `;
    }
}