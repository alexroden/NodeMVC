const chalk = require("chalk");
const clear = require("clear");
const cli = require("cli");
const figlet = require("figlet");

const options = cli.parse();

const {
    CREATE,
    MIGRATION,
    WATSON
} = require("./constants");
const { Migration } = require("./Migration");

const KEYS = Object.keys(options);

exports.Watson = {
    init: () => {
        if (
            KEYS.length === 0
        ) {
            Watson.instructions()
        } else {
            if (KEYS.indexOf(MIGRATION) !== -1) {
                if (KEYS.indexOf(CREATE) !== -1) {
                    Migration.create(options);
                }
            }
        }
    },
    instructions: () => {
        clear();
        console.log(
            chalk.cyan(
                figlet.textSync(WATSON, {
                    horizontalLayout: "full"
                })
            )
        );
        console.log(
            chalk.yellow(`--${MIGRATION}`)
        );
        console.log(
            chalk.cyan(`--${CREATE}={name}`),
            "Creates a collection migration from a given name"
        );
    }
};