import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Posts");
    }

    async getHtml() {
        return `
            <h1>Welcome to posts</h1>

            <p>This is a paragraph in posts</p>
        `;
    }
}