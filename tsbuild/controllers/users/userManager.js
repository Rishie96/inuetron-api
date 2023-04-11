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
const { v4: UUID } = require("uuid");
const HttpResponse = require("../../utils/HttpResponse");
const userDA = require("./userDA");
const { userCreateValidation, userUpdateValidation } = require("./validation");
exports.createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        yield userCreateValidation(body);
        const user_id = UUID();
        const newUser = Object.assign(Object.assign({}, body), { user_id });
        yield userDA.createUser(newUser);
        return res.json(HttpResponse.getCreated(user_id));
    }
    catch (error) {
        console.log(error);
        return res.json(HttpResponse.getException(error.message));
    }
});
exports.getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const [result = null] = yield userDA.getUserById(userId);
        if (result) {
            return res.json(HttpResponse.getSuccess(result));
        }
        else {
            return res.json(HttpResponse.getNotFoundRequest('User not found'));
        }
    }
    catch (error) {
        console.log(error);
        return res.json(HttpResponse.getException(error.message));
    }
});
exports.updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const { userId } = req.params;
        yield userUpdateValidation(body);
        const [result = null] = yield userDA.getUserById(userId);
        if (result) {
            yield userDA.updateUser(body, userId);
            return res.json(HttpResponse.getUpdated());
        }
        else {
            return res.json(HttpResponse.getNotFoundRequest("User not found"));
        }
    }
    catch (error) {
        console.log(error);
        return res.json(HttpResponse.getException(error.message));
    }
});
exports.deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const [result = null] = yield userDA.getUserById(userId);
        if (result) {
            yield userDA.deleteUser(userId);
            return res.json(HttpResponse.getUpdated());
        }
        else {
            return res.json(HttpResponse.getNotFoundRequest("User not found"));
        }
    }
    catch (error) {
        console.log(error);
        return res.json(HttpResponse.getException(error.message));
    }
});
