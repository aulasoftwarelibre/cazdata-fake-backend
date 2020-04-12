const faker = require("faker");
const moment = require("moment");

faker.seed(2);

module.exports = () => {
  const data = {
    hunters: [
      {
        id: "1dd8461251b72526541188301bdf3b0769cb78c3",
        email: faker.internet.email(),
        display_name: faker.name.findName(),
        photo_url: faker.image.avatar(),
        is_email_verified: true,
      },
    ],
    journeys: [],
  };

  for (let i = 0; i < 10; i++) {
    const startsAt = moment(faker.date.past());
    const endsAt = moment(startsAt).add(
      60 + faker.random.number(180),
      "minutes"
    );

    data.journeys.push({
      id: faker.random.uuid(),
      title: "Jornada en",
      starts_at: startsAt.toISOString(),
      ends_at: endsAt.toISOString(),
      distance: 2000 + faker.random.number(500) * 10,
      calories: 1000 + faker.random.number(100) * 10,
      hunter: "/api/hunters/1dd8461251b72526541188301bdf3b0769cb78c3",
    });
  }

  return data;
};
