const express = require("express");
const router = express.Router();

const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./db/db.sqlite");

// index, get, visa kurslistan
router.get("/", (req, res) => {

    // förbered fråga
    const sql = "SELECT * FROM courses ORDER BY created_at DESC";

    // hämta från databas
    db.all(sql, (err, data) => {
        if (err) {
            return res.send("Kunde inte hämta data");
        }

        // rendera vy med given data
        res.render("index", { courses: data });
    });

});


// ny, get, formulär för att lägga till kurs


// ny, post, mottagning av skickat formulär


// radera, post, borttagning av kurs med id


// 404, get, sidan finns inte
router.use((req, res) => {
  res.status(404).render("404");
});

module.exports = router;