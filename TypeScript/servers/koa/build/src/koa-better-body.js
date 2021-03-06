"use strict";
const Koa = require("koa");
const body = require("koa-better-body");
const fs = require("fs");
const path = require("path");
let app = new Koa();
app.use(body({
    encoding: 'utf-8',
    uploadDir: path.join(__dirname, '../../ServerLogs/tempDir'),
    keepExtensions: true
}));
app.use(function* () {
    console.log(this.request.body);
    console.log(this.request.files);
    console.log(this.request.fields);
    this.request.files.forEach(function (element) {
        let newPath = './ServerLogs/' + element.name;
        fs.rename(element.path, newPath, function (err) {
            if (err) {
                throw err;
            }
            else {
                if (fs.statSync(newPath).size === 0) {
                    console.log("There is a file in ServerLogs/ is empty!");
                }
                else {
                    console.log("successfully moved logfiles into ServerLogs/");
                }
            }
        });
    });
    console.log(this.response); // 404,...
    this.body = this.response; // Interesting magic
    console.log(this.response); //200,......
});
app.listen(3000);
