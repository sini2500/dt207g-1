const express = require("express");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3");

const app = express();
const PORT = 3000;

// Statiskt
app.use(express.static("public"));

// Views
app.set("view engine", "ejs");
app.set("views", "views");

// Routes
app.use("routes.js");

// Post-hantering
app.use(bodyParser.urlencoded({extended: true}))

// Starta
app.listen(PORT, () => {
  console.log(`Servern körs på :${PORT}`);
});