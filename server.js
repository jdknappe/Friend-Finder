// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// require("./routing/htmlRoutes")(app);
// require("./routing/apiRoutes")(app);
// Routes
// =============================================================

// Basic route that sends user first to the AJAX page. <<<CURRENTLY INSECURE, ROUTES TO HOME DIRECTORY FOR FUNCTIONALITY>>>
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../Friend-Finder/app/public/home.html"))
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../Friend-Finder/app/public/survey.html"))
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});