const { MongoClient } = require("../config/database");

const connect = (modelName, modelSchema) => {
    const schema = new MongoClient.Schema(modelSchema);

    return MongoClient.model(modelName, schema);
};

exports.Model = {
    create: (modelName, modelSchema, values) => {
        const model = connect(modelName, modelSchema);

        const newDocument = new model(
            Object.assign(values, {
                created_at: new Date(),
                updated_at: new Date()
            })
        );

        return newDocument.save((e, result) => {
            if (e) {
                throw e;
            }

            return result;
        });
    },
    delete: (modelName, modelSchema, findValue) => {
        const model = connect(modelName, modelSchema);

        model.deleteOne(findValue, (e) => {
            if (e) {
                throw e;
            }
        });
    },
    edit: (modelName, modelSchema, findValues, values) => {
        const model = connect(modelName, modelSchema);

        return model.updateOne(findValues, values, (e, result) => {
            if (e) {
                throw e;
            }

            return result;
        });
    },
    get: (modelName, modelSchema, findValues) => {
        const model = connect(modelName, modelSchema);

        return model.findOne(findValues, (e, result) => {
            if (e) {
                throw e;
            }

            return result;
        });
    }
};