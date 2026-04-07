## DT207G - backend-baserad webbutveckling

Det här är ett projekt för kursen backend-baserad webbutveckling, VT 2026.

Webbplatsen är publicerad på Render: https://sini2500-dt207g-1.onrender.com

---

För den här uppgiften skulle vi skapa en liten app för att lägga till och ta bort kurser i en databas.

SQLite har använts för databasen, express och ejs för sidrendering.

CSS och html återanvändes från en tidigare uppgift, så minimal tid behövdes för det.

Validering av data görs på serversidan. Dessa situationer har testats:

* Kurskoder måste vara unika
* Alla fält måste anges i formuläret
* Länk till kursplan måste börja med http
* Det finns en array med tillåtna bokstäver för progression (A, B, C)
* Fel visas när man försöker ta bort en kurs som inte finns
* Fel visas om databasen inte finns, eller om sql ger error
* 404-sida visas om man försöker gå till en route som inte finns

Två metoder har använts för att visa meddelanden.

* För startsidan skickas meddelande med i query-parameter eftersom res.redirect() används.
* På ny-sidan skickas de som { error } eftersom res.render() används.

Om det skulle gå riktigt illa används res.send() så ingen sidmall laddas, t.ex om databasen inte finns.

Det största besväret var att hitta rätt syntax för att jobba med databasen i express router.

Det blev tydligt under arbetet att man kan få mycket gjort med några få byggstenar.