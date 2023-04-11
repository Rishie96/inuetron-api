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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../../utils/db"));
const sql_1 = __importDefault(require("./sql"));
exports.getUserById = (userId) => __awaiter(void 0, void 0, void 0, function* () { return db_1.default.query(sql_1.default.GET_USER, [userId]); });
exports.createUser = (data) => __awaiter(void 0, void 0, void 0, function* () { return db_1.default.query(sql_1.default.CREATE_USER, [data]); });
exports.updateUser = (data, userId) => __awaiter(void 0, void 0, void 0, function* () { return db_1.default.query(sql_1.default.UPDATE_USER, [data, userId]); });
exports.deleteUser = (userId) => __awaiter(void 0, void 0, void 0, function* () { return db_1.default.query(sql_1.default.DELETE_USER, [userId]); });
