const express = require("express");
const routes = require("./routes");

const app = express();
const PORT = 3000;

// Statiskt
app.use(express.static("public"));

// Post-hantering
app.use(express.urlencoded({extended: true}))

// Views
app.set("view engine", "ejs");
app.set("views", "views");

// Routes
app.use("/", routes);

// Starta
app.listen(PORT, () => {
  console.log(`Servern körs på :${PORT}`);
});