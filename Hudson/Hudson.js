const chalk = require("chalk");
const fs = require("fs");
const pluralize = require('pluralize');

const { Str } = require("../helpers/Str");

const { MongoClient } = require("../config/database");

exports.Hudson = {
    createCollection: (name, properties) => {
        const schema = new MongoClient.Schema(properties);

        const model = MongoClient.model(Str.ucUpper(name), schema);
        console.log(
            chalk
                .cyan(`Created ${Str.ucUpper(name)} Collection!`)
        );

        return model;
    },
    getMigrations: () => {
        const schema = new MongoClient.Schema({
            name: String,
            created_at: Date,
            updated_at: Date,
        });

        return MongoClient.model("migrations", schema);
    },
    make: (name, properties) => {
        this.Hudson.createCollection(name, properties);

        let attributes = "exports.attributes = {\n";
        const propertyKeys = Object.keys(properties);
        propertyKeys.forEach((property, index) => {
            let type = properties[property];
            if (typeof type === "object") {
                type = type.type;
            }

            let end = index + 1 < propertyKeys.length ?  "," : "";
            attributes = attributes.concat(`\t${property}: ${type.name}${end}\n`);
        });
        attributes = attributes.concat("};\n");

        fs.appendFileSync(`./app/models/${Str.ucUpper(pluralize(name, 1))}.js`,
            'const { Model } = require("../../Hudson/Model");\n' +
            "\n" +
            `exports.name = "${name}";\n` +
            "\n" +
            "/**\n" +
            " * @type Object\n" +
            " */\n" +
            attributes +
            "\n" +
            "/**\n" +
            " * @type Object\n" +
            " */\n" +
            `exports.${Str.ucUpper(pluralize(name, 1))} = {\n` +
            "\tcreate: Model.create,\n" +
            "\tdelete: Model.delete,\n" +
            "\tedit: Model.edit,\n" +
            "\tget: Model.get\n" +
            "};\n" +
            "\n" +
            "module.export = {\n" +
            `\t${Str.ucUpper(pluralize(name, 1))}\n` +
            "};\n"
        );
    }
};