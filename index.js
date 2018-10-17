
const sumFile = 10;
const os = require('os-utils');
const memoryUsed = process.memoryUsage().heapUsed / 1024 / 1024;
const spawn = require('child_process').spawn;
const fs = require('fs');
const upath = require('upath');
fs.unlinkSync("./consoleWatch.txt");
let consoleWatch = fs.openSync("./consoleWatch.txt", "a");

gTest = () => {
    let cpG = spawn('node', ['../test-engineer-code-task/index.js', '-g', sumFile, '-o', 'c:/42'], {stdio: [consoleWatch, consoleWatch, consoleWatch]});
    setTimeout(() => {
        console.log('Test end');
        console.log(counter);
    }, 10900);

};

let result = {};
wTest = () => {
    let cpW = spawn('node', ['../test-engineer-code-task/index.js', '-w', 'c:/42'], {stdout: [consoleWatch, consoleWatch, result]});
    cpW.stdout.on('data', data => {
        os.cpuUsage(cpuUsage => {
            data += `${cpuUsage.toString()},${memoryUsed.toString()}`;
            spliter(data.toString());
        });
    });

    setTimeout(() => {
        console.log('End of the Watcher');
        cpW.kill();
    }, 10000);
}
let counter = 0;

let listOfObj = [];
function toObj(arr) {

    const [time, func, filePath, cpuProc, memoryProc] = arr;

    let singleObj = {
        time,
        func,
        filePath: upath.normalize(filePath),
        cpuProc,
        memoryProc
    };

    if (singleObj.func === 'ADDED') {
        counter++;
    }

    arr.length = 0;
    listOfObj.push(singleObj);
}

wTest();

setTimeout(() => {
    console.log('generate');
    gTest();
}, 190);

function spliter(strout) {
    toObj(strout.split(/(?:::!)|(?:!::)|(?:,)|(?:\n)/));
    console.log(strout.split(/(?:::!)|(?:!::)|(?:,)|(?:\n)/));
}
