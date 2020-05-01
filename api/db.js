const animals = require("./lib/animals");
const hunters = require("./lib/hunters");
const journeys = require("./lib/journeys");

module.exports = () => {
  const data = {
    animals,
    hunters,
    journeys,
  };

  return data;
};
