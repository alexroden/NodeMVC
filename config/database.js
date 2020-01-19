require("dotenv").config();
const { Obj } = require("../helpers/Obj");

/*
 |-------------------------------------------------
 | Database details.
 |-------------------------------------------------
 */
const DB_HOST = Obj.get(process.env, "DB_HOST");
const DB_NAME = Obj.get(process.env, "DB_NAME");
const DB_PASSWORD = Obj.get(process.env, "DB_PASSWORD");
const DB_PORT = Obj.get(process.env, "DB_PORT", "27017");
const DB_USER = Obj.get(process.env, "DB_USERNAME");

/*
 |-------------------------------------------------
 | Database connection.
 |-------------------------------------------------
 */
exports.MongoClient = require('mongodb').MongoClient;

/*
 |-------------------------------------------------
 | Database url.
 |-------------------------------------------------
 */
exports.url = `mongodb://localhost:${DB_PORT}/${DB_NAME}`;

module.exports = {
    DB_HOST,
    DB_NAME,
    DB_PASSWORD,
    DB_PORT,
    DB_USER
};