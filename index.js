const toTileCase = require("to-title-case");
const express = require("express");
const characters = require("./characters.json");

const app = express();

// const render = (message) => {
//   const document = `<html>
//   <head>
//     <title>Home</title>
//   </head>

//   <body>
//     <h1>${message}</h1>
//   </body>
// </html>`;

//   return document;
// };

app.get("/test/harry/:arrId", (request, response) => {
  const chaId = request.params.arrId;

  const theCharacter = characters.find((character) => {
    return character.id === parseInt(chaId);
  });

  console.log("did i find him?", theCharacter);

  response.send(theCharacter);
});

// app.get("/test/:name", (request, response) => {
//   const message = `Welcome  ${request.params.name}`;
//   const page = render(message);

//   response.send(page);
// });

const port = 3000;

app.listen(port, () => console.log(`Listening on : ${port}`));
