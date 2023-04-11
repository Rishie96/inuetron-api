"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const request = require("supertest");
const API_ENDPOINT = "http://localhost:3000/api";
let userId;
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
(0, globals_1.describe)("[POST] Create a new user", () => {
    (0, globals_1.it)("should create a new user and return 201", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request(API_ENDPOINT).post("/users").send(user);
        (0, globals_1.expect)(response.body.status).toBe(201);
        userId = response.body.payLoad;
    }));
    (0, globals_1.it)("should return 500 for missing fields", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request(API_ENDPOINT).post("/users").send({});
        (0, globals_1.expect)(response.body.status).toBe(500);
    }));
});
(0, globals_1.describe)("[GET] Get the created user by id", () => {
    (0, globals_1.it)("should return the user's data with status 200", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request(API_ENDPOINT).get(`/users/${userId}`);
        (0, globals_1.expect)(response.body.status).toBe(200);
        (0, globals_1.expect)(response.body.payLoad.user_id).toBe(userId);
        (0, globals_1.expect)(response.body.payLoad.first_name).toBe(user.first_name);
        (0, globals_1.expect)(response.body.payLoad.last_name).toBe(user.last_name);
        (0, globals_1.expect)(response.body.payLoad.email_id).toBe(user.email_id);
    }));
    (0, globals_1.it)("should return 404 for invalid user ids", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request(API_ENDPOINT).post("/users/123");
        (0, globals_1.expect)(response.body.status).toBe(404);
    }));
});
(0, globals_1.describe)("[PUT] Update an existing user", () => {
    (0, globals_1.it)("should update an existing user and return 200", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request(API_ENDPOINT)
            .put(`/users/${userId}`)
            .send(newUser);
        const newResponse = yield request(API_ENDPOINT).get(`/users/${userId}`);
        (0, globals_1.expect)(response.body.status).toBe(200);
        (0, globals_1.expect)(newResponse.body.status).toBe(200);
        (0, globals_1.expect)(newResponse.body.payLoad.first_name).toBe(newUser.first_name);
        (0, globals_1.expect)(newResponse.body.payLoad.last_name).toBe(newUser.last_name);
    }));
    (0, globals_1.it)("should return 404 for invalid user ids", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request(API_ENDPOINT).put("/users/123");
        (0, globals_1.expect)(response.body.status).toBe(404);
    }));
});
(0, globals_1.describe)("[DELETE] Get the created user by id", () => {
    (0, globals_1.it)("should delete the user with a specificid and return status 200", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request(API_ENDPOINT).delete(`/users/${userId}`);
        (0, globals_1.expect)(response.body.status).toBe(200);
    }));
    (0, globals_1.it)("should return 404 for deleted user id", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request(API_ENDPOINT).delete(`/users/${userId}`);
        (0, globals_1.expect)(response.body.status).toBe(404);
    }));
});
