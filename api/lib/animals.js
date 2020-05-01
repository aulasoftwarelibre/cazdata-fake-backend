const faker = require("faker/locale/es");
faker.seed(1);

const names = [
  "Perdiz",
  "Paloma",
  "Codorniz",
  "Conejo",
  "Liebre",
  "Agachadiza",
  "Anade",
  "Avefría",
  "Cerceta",
  "Estornino",
  "Focha",
  "Gaviota",
  "Grajilla",
  "Pato",
  "Porrón",
  "Tórtola",
  "Urraca",
  "Zorzal",
  "Zorro",
];

const animals = [];

names.forEach((animal) =>
  animals.push({
    id: faker.random.uuid(),
    name: animal,
    isEnabled: faker.random.boolean(),
    type: "minor",
    contentUrl: "/img/animal.png",
  })
);

module.exports = animals;
