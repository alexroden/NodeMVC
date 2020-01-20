const chalk = require("chalk");
const fs = require("fs");
const { Str } = require("../helpers/Str");

const { MongoClient } = require("../config/database");

exports.Hudson = {
    make: (name, properties) => {
        const schema = new MongoClient.Schema(properties);

        MongoClient.model(Str.ucUpper(name), schema);

        let atrributes = "const attributes = {\n";
        const propertyKeys = Object.keys(properties);
        propertyKeys.forEach((property, index) => {
            let type = properties[property];
            if (typeof type === "object") {
                type = type.type;
            }

            let end = index + 1 < propertyKeys.length ?  "," : "";
            atrributes = atrributes.concat(`\t${property}: ${type.name}${end}\n`);
        });
        atrributes = atrributes.concat("};\n");

        fs.appendFile(`./app/models/${Str.ucUpper(name)}.js`,
            'const { Model } = require("../../Hudson/Model");\n' +
            "\n" +
            "/**\n" +
            " * @type Object\n" +
            " */\n" +
            atrributes +
            "\n" +
            "/**\n" +
            " * @type Object\n" +
            " */\n" +
            `exports.${Str.ucUpper(name)} = {\n` +
            "\tcreate: Model.create,\n" +
            "\tdelete: Model.delete,\n" +
            "\tedit: Model.edit,\n" +
            "\tget: Model.get\n" +
            "};\n" +
            "\n" +
            "module.export = {\n" +
            `\t${Str.ucUpper(name)}\n` +
            "};\n",
            (error) => {
                if (error) throw error;
            }
        );
    }
};