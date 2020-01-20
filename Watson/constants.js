const CREATE = "create";
const MIGRATION = "migration";
const RUN = "run";
const WATSON = "Watson";

let actions = [];
actions[`--${MIGRATION}`] = {};
actions[`--${MIGRATION}`][`--${CREATE}={name}`] = "Creates a collection migration from a given name";
actions[`--${MIGRATION}`][`--${RUN}`] = "Run the migration files";

module.exports = {
    actions,
    CREATE,
    MIGRATION,
    RUN,
    WATSON
};