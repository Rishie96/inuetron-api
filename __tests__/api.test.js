const request = require("supertest");
const API_ENDPOINT = "http://localhost:3000/api";

let userId = null;
const user = {
  first_name: "Tony",
  last_name: "Stark",
  email_id: "tony.stark@gmail.com",
};
const newUser = {
  first_name: "Tony2",
  last_name: "Stark2",
  email_id: "tony.stark@gmail.com",
};

describe("[POST] Create a new user", () => {
  it("should create a new user and return 201", async () => {
    const response = await request(API_ENDPOINT).post("/users").send(user);
    expect(response.body.status).toBe(201);
    userId = response.body.payLoad;
  });
  it("should return 500 for missing fields", async () => {
    const response = await request(API_ENDPOINT).post("/users").send({});
    expect(response.body.status).toBe(500);
  });
});

describe("[GET] Get the created user by id", () => {
  it("should return the user's data with status 200", async () => {
    const response = await request(API_ENDPOINT).get(`/users/${userId}`);
    expect(response.body.status).toBe(200);
    expect(response.body.payLoad.user_id).toBe(userId);
    expect(response.body.payLoad.first_name).toBe(user.first_name);
    expect(response.body.payLoad.last_name).toBe(user.last_name);
    expect(response.body.payLoad.email_id).toBe(user.email_id);
  });
  it("should return 404 for invalid user ids", async () => {
    const response = await request(API_ENDPOINT).post("/users/123");
    expect(response.body.status).toBe(404);
  });
});

describe("[PUT] Update an existing user", () => {
  it("should update an existing user and return 200", async () => {
    const response = await request(API_ENDPOINT)
      .put(`/users/${userId}`)
      .send(newUser);
    const newResponse = await request(API_ENDPOINT).get(`/users/${userId}`);
    expect(response.body.status).toBe(200);
    expect(newResponse.body.status).toBe(200);
    expect(newResponse.body.payLoad.first_name).toBe(newUser.first_name);
    expect(newResponse.body.payLoad.last_name).toBe(newUser.last_name);
  });
  it("should return 404 for invalid user ids", async () => {
    const response = await request(API_ENDPOINT).put("/users/123");
    expect(response.body.status).toBe(404);
  });
});

describe("[DELETE] Get the created user by id", () => {
  it("should delete the user with a specificid and return status 200", async () => {
    const response = await request(API_ENDPOINT).delete(`/users/${userId}`);
    expect(response.body.status).toBe(200);
  });
  it("should return 404 for deleted user id", async () => {
    const response = await request(API_ENDPOINT).delete(`/users/${userId}`);
    expect(response.body.status).toBe(404);
  });
});
