const CREATE = "create";
const DATABASE = "database";
const MIGRATION = "migration";
const WATSON = "Watson";

let actions = [];
actions[`--${DATABASE}`] = {};
actions[`--${DATABASE}`][`--${CREATE}={name}`] = "Creates a new MongoBD database";
actions[`--${MIGRATION}`] = {};
actions[`--${MIGRATION}`][`--${CREATE}={name}`] = "Creates a collection migration from a given name";

module.exports = {
    actions,
    CREATE,
    DATABASE,
    MIGRATION,
    WATSON
};