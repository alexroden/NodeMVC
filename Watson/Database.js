const chalk = require("chalk");
const fs = require("fs");

const {
    DB_PORT,
    MongoClient,
    url
} = require("../config/database");
const { CREATE } = require("./constants");

exports.Database = {
    create: (options) => {
        MongoClient.connect(url.replace(url
            .substring(
                url.indexOf(DB_PORT) +
                DB_PORT.length + 1
            ), `${options[CREATE]}`),
            {useNewUrlParser: true, useUnifiedTopology: true},
            (error, db) => {

            if (error) throw error;
            fs.readFile(".env", "utf8", (error, data) => {
                if (error) throw error;
                let result = data.replace(/^DB_NAME.*$/m, 'DB_NAME=blah');

                fs.writeFile(".env", result, "utf8", (error) => {
                    if (error) throw error;
                });
            });
            console.log(
                chalk
                    .cyan("Database Created!")
            );
            db.close();
        });
    }
};