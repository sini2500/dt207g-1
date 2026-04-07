const express = require("express");
const router = express.Router();

const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./db/db.sqlite");

// index, get, visa kurslistan

// add, get, formulär för att lägga till kurs

// add, post, mottagning av skickat formulär

// delete, post, borttagning av kurs med id

// 404, get, sidan finns inte

