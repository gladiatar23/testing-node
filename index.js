const sumFile = 10;
const Path = require('path');
const os = require('os-utils');
const memoryUsed = process.memoryUsage().heapUsed / 1024 / 1024 ;
let spawn = require('child_process').spawn;
const fs = require('fs');
const upath = require('upath');
fs.unlinkSync("./consoleWatch.txt");
let consoleWatch = fs.openSync("./consoleWatch.txt", "a");
let focusObj;
let clean = 0;
let dirty = 0;
let times = 0;


gTest = () => {
     spawn('node', ['../silverboltai-test-engineer-code-task-d3a40e01e814/index.js',
            '-g', sumFile,
            '-o', 'c:/42'],
        {stdio: [consoleWatch, consoleWatch, consoleWatch]});
    setTimeout(function () {
        console.log('Test end');

        focusObj = listOfObj.filter((obj) => {

            if (obj.func === 'ADDED' || obj.func === 'CHANGED') {
                return obj;
            }
        });
        testingTheApp(focusObj);
        // console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXX' + clean);
        // console.log('YYYYYYYYYYYYYYYYYYYYYYYYYYYYYY' + dirty);

        // console.log(JSON.stringify(checkObj, null , 4)+'\n');
        console.log(listOfObj);

    }, 10900);

};

let result = {};
wTest = () => {
    let cpW = spawn('node', ['../silverboltai-test-engineer-code-task-d3a40e01e814/index.js', '-w', 'c:/42'], {stdout: [consoleWatch, consoleWatch, result]});
    cpW.stdout.on('data', function (data) {
        os.cpuUsage(function (cpuUsage) {
            data += (cpuUsage + ',' + memoryUsed);
            let processed = [spliter(data.toString())];

        });
    });

    setTimeout(function () {
        console.log('End of the Watcher');
        cpW.kill();

    }, 10000);
}
let counter = 0;

let listOfObj = [];

function toObj(arr) {

    let singleObj = {};
    for (let i = 0; i < arr.length; ++i)
        singleObj.time = arr[0];
    singleObj.func = arr[1];
    singleObj.fileName = upath.normalize(arr[2]);
    singleObj.extn = arr[3];
    singleObj.cpuProc = arr[4];
    singleObj.memoryProc = arr[5];

    singleObj.func === 'ADDED' && counter++;

    return listOfObj.push(singleObj);


}

wTest();
setTimeout(function () {
    console.log('generate');
    gTest();
}, 190);


function spliter(strout) {
    console.log(strout);
    // toObj(strout.split(/(?:::!)|(?:!::)|(?:,)|(clean$)/));
    toObj(strout.split(/(?:\.)|(?:::!)|(?:!::)|(?:,)|(?:\n)/));
    return null;
}


function filterValue(find) {
    let a = listOfObj.filter((object) => {
        if ((object.func === 'REMOVED' || object.func === 'CLEAN' || object.func === 'ERROR') && object.fileName === find)
                return true;
        return false;

    });
    return a;
}


function testingTheApp(obj) {

    for (let i = 0; obj.length > i; i++) {
        let test = (Path.join(`${obj[i].fileName}.${obj[i].extn}`));
        if (obj[i].extn === 'clean') {
            fs.stat(test, function (err) {
                if (err !== null) {
                    printReportFail(obj,i);
                } else {
                    printReportPass(obj,i);
                    clean++;
                }
            });
        }
        else {
            fs.stat(test, function (err) {
                if (err !== null) {
                    printReportPass(obj,i);
                    dirty++;
                } else {
                    printReportFail(obj,i);
                }
            });
        }

    }

}

let arrTime= [];
function printReportPass(obj,i) {
    calcul = filterValue(obj[i].fileName);
    calcul = calcul.length ? calcul[0] : {};
    times = Time(calcul.time, (obj[i].time));
    // console.log(`pass ${obj[i].fileName}.${obj[i].extn} \nmemory: ${obj[i].memoryProc}mb \nCPU: ${obj[i].cpuProc} \nTime: ${times}`);
}
function printReportFail(obj,i) {
    calcul = filterValue(obj[i].fileName);
    calcul = calcul.length ? calcul[0] : {};
    times = Time(calcul.time, (obj[i].time));
    // console.log(`pass ${obj[i].fileName}.${obj[i].extn} \nmemory: ${obj[i].memoryProc}mb \nCPU: ${obj[i].cpuProc} \nTime: ${times}`);
}

function Time(end, start) {
    // console.log(end);
    // console.log(start);
    times = parseInt(end) - parseInt(start)
   arrTime.push(times);

    // console.log(`array of time ${arrTime}`);

return times;
}
