const characters = require("./characters.json");

const theCharacter = characters.filter((character) => {
  return character.id === "pure-blood";
});
console.log(theCharacter);
