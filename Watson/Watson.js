const chalk = require("chalk");
const clear = require("clear");
const cli = require("cli");
const figlet = require("figlet");

const options = cli.parse();

const {
    actions,
    CREATE,
    MIGRATION,
    RUN,
    WATSON
} = require("./constants");
const { Migration } = require("./Migration");

const KEYS = Object.keys(options);

exports.Watson = {
    init: () => {
        if (
            KEYS.length === 0
        ) {
            this.Watson.instructions()
        } else {
            if (KEYS.indexOf(MIGRATION) !== -1) {
                if (KEYS.indexOf(CREATE) !== -1) {
                    Migration.create(options);
                } else if (KEYS.indexOf(RUN) !== -1) {
                    Migration.run();
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
        Object.keys(actions).forEach((groupName) => {
            console.log(
                chalk.yellow(groupName)
            );
            Object.keys(actions[groupName]).forEach((action) => {
                console.log(
                    chalk
                        .cyan(action),
                    actions[groupName][action]
                );
            });
        });
    }
};