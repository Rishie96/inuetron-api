"use strict";
const expressjs = require("express");
const cors = require("cors");
const helmet = require("helmet");
const swaggerUI = require("swagger-ui-express");
const swaggerDocs = require("swagger-jsdoc");
const HttpResponse = require("./utils/HttpResponse");
const controllers = require("./controllers");
const swagger = require("./swagger");
const specs = swaggerDocs(swagger);
const app = expressjs();
app.use(cors());
app.use(helmet());
app.use(helmet.frameguard());
app.use(helmet.frameguard());
app.use(expressjs.json());
app.use(helmet({ frameguard: false }));
// Settings the routes
app.use("/api", (req, res, next) => {
    next();
}, controllers);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
// To handle all the undefined routes
app.all("*", (req, res) => {
    res.json(HttpResponse.getNotFoundRequest());
});
app.listen(3000);
