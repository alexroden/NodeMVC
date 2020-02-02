const first = require("./tests/example.test");
const properties = Object.getOwnPropertyNames(first);
properties.forEach((method) => {
    first[method]();
});

// const fs = require("fs");
//
// const testsDirectory = "./tests/";
//
// fs.readdir(testsDirectory, (error, files) => {
//     files.forEach((file) => {
//         console.log(fs.statSync(testsDirectory.file));
//     });
// });