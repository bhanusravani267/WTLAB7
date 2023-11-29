const express = require("express");
const logger = require("morgan");
const path = require("path");
const server = express();
server.use(express.urlencoded({ extended: true }));
server.use(logger("dev"));

// Routes
server.get("/do_a_random", (req, res) => {
  res.send(`Your number is: ${Math.floor(Math.random() * 100) + 1}`);
});

server.post("/itc505/lab7/", (req, res) => {
  const noun = req.body.noun;
  const adjective = req.body.adjective;
  const verb = req.body.verb;
  const pluralNoun = req.body.pluralNoun;
  const pluralNoun2 = req.body.pluralNoun2;

  const madLib = `In the ${adjective} moonlight, a ${noun} began to ${verb} with ${pluralNoun} and ${pluralNoun2}. The air thickened with a chilling presence as the darkness revealed its secrets, sending shivers down the spines of all who dared to approach.`;

  res.send(
    `<!DOCTYPE html>
    <html lang = "en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Horror Mad Lib</title>
    </head>
    <body>
        <h1>Horror Mad Lib</h1>

        <div id="story">
        ${madLib}
        </div>
         
    </body>
    </html>`
  );
});

// Setup static page serving for all the pages in "public"
const publicServedFilesPath = path.join(__dirname, "public");
server.use(express.static(publicServedFilesPath));

// The server uses port 80 by default unless you start it with the extra
// command line argument 'local' like this:
//       node server.js local
let port = 8080;
if (process.argv[2] === "local") {
  port = 8080;
}

server.listen(port, () => console.log("Ready on localhost!"));
