require("dotenv").config();
const { Obj } = require("../helpers/Obj");

/*
 |-------------------------------------------------
 | Database details.
 |-------------------------------------------------
 */
const DB_NAME = Obj.get(
    process.env,
    "DB_NAME"
);
const DB_PASSWORD = Obj.get(
    process.env,
    "DB_PASSWORD"
);
const DB_USER = Obj.get(
    process.env,
    "DB_USER"
);
const DB_URI = Obj.get(
    process.env,
    "DB_URI",
    "mongodb://localhost:27017/DB_NAME"
);

/*
 |-------------------------------------------------
 | Database options.
 |-------------------------------------------------
 */
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

/*
 |-------------------------------------------------
 | Database url.
 |-------------------------------------------------
 */
const uri = DB_URI.replace("DB_NAME", DB_NAME)
    .replace("DB_PASSWORD", DB_PASSWORD)
    .replace("DB_USER", DB_USER);

/*
 |-------------------------------------------------
 | Database connection.
 |-------------------------------------------------
 */
const MongoClient = require("mongoose");
MongoClient
    .connect(uri, options);

/*
 |-------------------------------------------------
 | Catch connection errors.
 |-------------------------------------------------
 */
MongoClient
    .connection
    .on(
        "error",
        (error) => console.log(`MongoDB Error: ${error}`)
    );

module.exports = {
    MongoClient
};
