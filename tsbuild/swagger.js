"use strict";
module.exports = {
    definition: {
        openapi: "3.0.3",
        info: {
            title: "User details manager",
            version: "1.0.0",
        },
        servers: [{ url: "http://localhost:3000" }],
    },
    apis: ["controllers/users/*.ts"],
};
