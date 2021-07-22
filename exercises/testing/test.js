const { findUser } = require("./users");

// write some tests
describe("users", () => {
  test("should ", async () => {
    expect(await findUser(1)).toEqual({
      id: 1,
      createdAt: Date.now() + 1,
      email: "readycoder1@gmail.com",
    });
  });
});
