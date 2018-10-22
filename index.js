const sumFile = 10;
const Path = require('path');
const os = require('os-utils');
const memoryUsed = process.memoryUsage().heapUsed / 1024 / 1024 ;
let spawn = require('child_process').spawn;
let spawnSync = require('child_process').spawnSync;
const fs = require('fs');
const upath = require('upath');
fs.unlinkSync("./consoleWatch.txt");
let consoleWatch = fs.openSync("./consoleWatch.txt", "a");
let focusObj;
let clean = 0;
let dirty = 0;
let times = 0;


gTest = () => {
     spawnSync('node', ['../silverboltai-test-engineer-code-task-d3a40e01e814/index.js',
            '-g', sumFile,
            '-o', 'c:/42'],
        {stdio: [consoleWatch, consoleWatch, consoleWatch]});
    setTimeout(function () {
        console.log('Test end');

        focusObj = listOfObj.filter((obj) => {

            if (obj.func === 'ADDED' || obj.func === 'CHANGED') {
                return obj;
            }
        })
        testingTheApp(focusObj);
        // console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXX' + clean);
        // console.log('YYYYYYYYYYYYYYYYYYYYYYYYYYYYYY' + dirty);

        // console.log(JSON.stringify(checkObj, null , 4)+'\n');
       // console.log(listOfObj);

    }, 10900);

};

let result = {};
wTest = () => {
    let cpW = spawn('node', ['../silverboltai-test-engineer-code-task-d3a40e01e814/index.js', '-w', 'c:/42'], {stdout: [consoleWatch, consoleWatch, result]});
    let recordTest = {};
    let ignoreFirstLine = false;
    cpW.stdout.on('data', function (data) {
counter++;
        if(ignoreFirstLine){


            os.cpuUsage(function (cpuUsage) {
                recordTest.rowData = data.toString();
                recordTest.cpu = cpuUsage;
                recordTest.memory = memoryUsed;
                spliter(recordTest);
            });
        }
        ignoreFirstLine = true;
    });

    setTimeout(function () {
        console.log('End of the Watcher');
        cpW.kill();

    }, 10000);
}
let counter = 0;

let listOfObj = [];

function toObj(splited, cpu , memnory) {debugger;

    let singleObj = {};
    // for (let i = 0; i < splited.length; ++i){
    //
    // }
    singleObj.time = splited[0];
    singleObj.func = splited[1];
    singleObj.fileName = upath.normalize(splited[2]);
    singleObj.extn = splited[3];
    singleObj.cpuProc = cpu;
    singleObj.memoryProc = memnory;

    singleObj.func === 'ADDED' ;

    return listOfObj.push(singleObj);


}

wTest();
setTimeout(function () {
    console.log('generate');
    gTest();
}, 190);


function spliter(recoredData) {
    // console.log(recoredData);
    console.log('Row data splited: ', recoredData.rowData.split(/(?:\.)|(?:::!)|(?:!::)|(?:\n)/));

    toObj(recoredData.rowData.split(/(?:\.)|(?:::!)|(?:!::)|(?:\n)/) , recoredData.cpu , recoredData.memory);
    
    return true;
}


function filterValue(find) {debugger;
    let a = listOfObj.filter((object) => {
        if ((object.func === 'REMOVED' || object.func === 'CLEAN' || object.func === 'ERROR') && object.fileName === find)
                return true;
        return false;

    });
    return a;
}


function testingTheApp(obj) {
    let key;
    // for (key in obj) {
    Object.keys(obj).map((key,index) => {

        let val = obj[index];
        let test = (Path.join(`${val.fileName}.${val.extn}`));
       // console.log('Key: ' , val);
        if (val.extn === 'clean') {
            fs.stat(test, function (err) {
                if (err !== null) {
                    printReportFail(val);
                } else {
                    printReportPass(val);
                    clean++;
                }
            });
        }
        else {
            fs.stat(test, function (err) {
                if (err !== null) {
                    printReportPass(val);
                    dirty++;
                } else {
                    printReportFail(val);
                }
            });
        }

    })

}

let arrTime= [];
function printReportPass(obj) {
    let calcul;
    calcul = filterValue(obj.fileName);
    calcul = calcul.length ? calcul[0] : {};
    times = Time(calcul.time, (obj.time));
    console.log(`pass ${obj.fileName}.${obj.extn} \nmemory: ${obj.memoryProc}mb \nCPU: ${obj.cpuProc} \nTime: ${times}`);
}
function printReportFail(obj) {
    let calcul;
    calcul = filterValue(obj.fileName);
    calcul = calcul.length ? calcul[0] : {};
    times = Time(calcul.time, (obj.time));
    console.log(`pass ${obj.fileName}.${obj.extn} \nmemory: ${obj.memoryProc}mb \nCPU: ${obj.cpuProc} \nTime: ${times}`);
}

function Time(end, start) {debugger
    // console.log(end);
    // console.log(start);
    times = end - start;
   arrTime.push(times);

    // console.log(`array of time ${arrTime}`);
    console.log(`array of time ${counter}`);

return times;
}
