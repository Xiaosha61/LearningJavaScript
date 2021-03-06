"use strict";
const request = require("request");
const fs = require("fs");
const localhostLink = 'http://localhost:3000';
var formData = {
    sutid: "sut1",
    my_fieeld: 'my_value',
    logfiles: [fs.createReadStream('./LocalLogs/file1.json'), fs.createReadStream('./LocalLogs/file2.json')],
};
request.post({
    url: localhostLink,
    formData: formData,
}, function (err, res, body) {
    if (err) {
        return console.error('upload failed:', err);
    }
    console.log('\n==> POST response:');
    console.log('==>resonse\'s body:', body);
    console.log(`==>request.headers['content-type'] = ${res.request.headers['content-type']}`);
});
