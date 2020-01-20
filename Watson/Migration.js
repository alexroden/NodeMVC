const async = require('async')
const chalk = require("chalk");
const exec = require("child_process").exec;
const fs = require("fs");
const process = require("process");

const { Hudson } = require("../Hudson/Hudson");
const { Migration } = require("../helpers/Migration");
const { Str } = require("../helpers/Str");

const { CREATE } = require("./constants");

exports.Migration = {
    create: (options) => {
        fs.appendFile(`./database/${Migration.dateTime(new Date())}_Create${Str.ucUpper(options[CREATE])}Collection.js`,
            'const { Hudson } = require("../Hudson/Hudson");\n' +
            "\n" +
            `Hudson.make("${options[CREATE]}", {\n` +
            "\tcreated_at: { type: Date, default: null },\n" +
            "\tupdated_at: { type: Date, default: null },\n" +
            "\tdeleted_at: { type: Date, default: null }\n" +
            "});\n",
            (error) => {
                if (error) throw error;
                console.log(
                    chalk
                        .cyan("Collection Created!")
                );
            }
        );
    },
    run: () => {
        const folder = "./database/";
        fs.readdir(folder, (error, files) => {
            if (error) {
                throw error;
            }

            files.forEach((file) => {
                const migration  = require(`.${folder}${file}`);

                Hudson.make(
                    migration.name,
                    migration.attributes
                );
            });

        });

        console.log(
            chalk
                .cyan("Migration ran!")
        );

        process.exit()
    }
};
