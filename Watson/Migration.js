const fs = require("fs");


const { Migration } = require("../helpers/Migration");
const { Str } = require("../helpers/Str");

const { CREATE } = require("./constants");

exports.Migration = {
    create: (options) => {
        fs.appendFile(`./database/${Migration.dateTime(new Date())}_Create${Str.ucUpper(options[CREATE])}Collection.js`,
            "const {\n" +
            "\tDB_NAME,\n" +
            "\tMongoClient,\n" +
            "\turl\n" +
            '} = require("../config/database");\n' +
            "\n" +
            "MongoClient.connect(url, (error, db) => {\n" +
            "\tif (error) throw error;\n" +
            "\tlet dbo = db.db(DB_NAME);\n" +
            `\tdbo.createCollection("${options[CREATE]}", (error, res) => {\n` +
            "\t\tif (error) throw error;\n" +
            `\t\tconsole.log("${Str.ucUpper(options[CREATE])} Collection Created!");\n` +
            "\t\tdb.close();\n" +
            "\t});\n" +
            "});\n",
            (error) => {
                if (error) throw error;
                console.log("Collection Created!");
            }
        );
    }
};