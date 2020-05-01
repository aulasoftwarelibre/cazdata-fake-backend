const faker = require("faker/locale/es");
faker.seed(1);

module.exports = [
  {
    id: "416301fa-d4bb-454f-ae19-a26c6677c62a",
    email: faker.internet.email(),
    displayName: faker.name.findName(),
    photoUrl: "/img/avatar.png",
    isEmailVerified: true,
  },

  {
    id: "19f88807-f87f-4282-aea2-0862c67db2bb",
    email: faker.internet.email(),
    displayName: faker.name.findName(),
    photoUrl: "/img/avatar.png",
    isEmailVerified: true,
  },
];
