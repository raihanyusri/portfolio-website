const express = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));
app.use(express.static('frontend'));

app.get("/*", (req, resp) => {
    // resp.sendFile(path.resolve(__dirname, "frontend", "index.html"));
    resp.sendFile('index.html', {root: path.join(__dirname, 'frontend')});
});

app.listen(process.env.PORT || 9999, () => console.log("Server running!"));
module.exports = app