import mysql from "../../utils/db"
import sql from "./sql"

exports.getUserById = async (userId: string) => mysql.query(sql.GET_USER, [userId]);

exports.createUser = async (data: any) => mysql.query(sql.CREATE_USER, [data]);

exports.updateUser = async (data: any, userId: string) =>
  mysql.query(sql.UPDATE_USER, [data, userId]);

exports.deleteUser = async (userId: string) => mysql.query(sql.DELETE_USER, [userId]);
