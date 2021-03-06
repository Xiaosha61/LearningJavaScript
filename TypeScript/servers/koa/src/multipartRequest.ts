import * as request from 'request';
import * as fs from 'fs';

const localhostLink = 'http://localhost:3000'

var formData = {
    sutid: "sut1",
    my_fieeld: 'my_value',
    logfiles: [
        fs.createReadStream('/Users/sasa/Programming/JavaScript/LearningJavaScript/TypeScript/servers/koa/LocalLogs/file1.json'),
        //fs.createReadStream('/Users/sasa/Programming/JavaScript/LearningJavaScript/TypeScript/servers/koa/LocalLogs/file2.json')
    ]
};

request.post(
    {
        url: localhostLink,
        formData: formData,  // using 'request', it enables the request option to contain formData :)
    },
    function (err, res, body) {
        if (err) {
            return console.error('upload failed:', err);
        }
        console.log('\n==> POST response:');
        console.log('==>resonse\'s body:', body);
        console.log('==>resonse\'s statusMessage:', res.statusMessage);
        console.log('==>resonse\'s statusCode:', res.statusCode);
        console.log(`==>request.headers['content-type'] = ${res.request.headers['content-type']}`);
    }
)
