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
router.get("/radera/:id", (req, res) => {

  // förebered fråga
  const id = req.params.id;
  const sql = "DELETE FROM courses WHERE id = ?";

  // ta bort från databas
  db.run(sql, [id], (err) => {
    if (err) {
      return res.send("Kunde inte radera kursen");
    }

    res.redirect("/");
  });
});

// om, get, en sida om projektet
router.get("/om", (req, res) => {
    res.render("om");
});

// 404, status, sidan finns inte
router.use((req, res) => {
  res.status(404).render("404");
});

module.exports = router;