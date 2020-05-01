const faker = require("faker/locale/es");
const moment = require("moment");

const animals = require("./animals");
const hunters = require("./hunters");

faker.seed(1);
const journeys = [];

for (let i = 0; i < 20; i++) {
  const startsAt = moment(faker.date.past());
  const endsAt = moment(startsAt).add(60 + faker.random.number(180), "minutes");

  journeys.push({
    id: faker.random.uuid(),
    title: `Jornada en ${faker.address.cityPrefix()}`,
    distance: 2000 + faker.random.number(500) * 10,
    startsAt: startsAt.toISOString(),
    endsAt: endsAt.toISOString(),
    calories: 1000 + faker.random.number(100) * 10,
    hunter: `/api/hunters/${hunters[i % 2].id}`,
  });
}

module.exports = journeys;
