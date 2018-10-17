
const sumFile = 10;
const Path = require('path');
const util = require('util');
const os=require('os-utils');
const memoryUsed = process.memoryUsage().heapUsed / 1024 / 1024;
let spawn=require('child_process').spawn;
const fs = require('fs');
const upath = require('upath');
const cTable = require('console.table');
fs.unlinkSync("./consoleWatch.txt");
let consoleWatch = fs.openSync("./consoleWatch.txt", "a");


gTest= ()=>{
   let cpG = spawn('node', ['../silverboltai-test-engineer-code-task-d3a40e01e814/index.js',
       '-g', sumFile,
       '-o', 'c:/42'],
       {stdio: [consoleWatch, consoleWatch, consoleWatch]});
    setTimeout(function() {
        // console.table(listOfObj,['a','b','c']);
        console.log('Test end');
        console.log(counter);
       //console.log(JSON.stringify(listOfObj));
    }, 10900);

};

let result = {};
wTest =()=>{
let cpW = spawn('node', ['../silverboltai-test-engineer-code-task-d3a40e01e814/index.js', '-w', 'c:/42'], {stdout: [consoleWatch, consoleWatch, result]});
    cpW.stdout.on('data', function(data) {
        os.cpuUsage(function(cpuUsage){
            let processed = [];
            //console.log(`${Date.now()},${Math.round(cpuUsage * 100)/100},${Math.round (memoryUsed * 100)/100}`);
            data+=(cpuUsage.toString()+','+memoryUsed.toString());
        debugger;   processed = spliter(data.toString()) ;
            //spliter(cpuUsage.toString(),memoryUsed.toString()) ;

            // console.log(`${Date.now()} CPUusege: ${Math.round (cpuUsage * 100)/100}% MemoryUsege: ${Math.round (memoryUsed * 100)/100}mb`);
        });
        });

    setTimeout(function() {
    console.log('End of the Watcher');
    cpW.kill();
}, 10000);
}
let counter=0;

let listOfObj = [];
function toObj(arr){

    let singleObj = {};debugger
    for (let i = 0, j=0; i < arr.length ; ++i, j++)
        singleObj.time = arr[0];
    singleObj.func = arr[1];
    singleObj.filePath = upath.normalize(arr[2]);
            singleObj.cpuProc=arr[3];
            singleObj.memoryProc=arr[4];


            singleObj.func=='ADDED' && counter ++;
            console.log(singleObj);

    console.log(singleObj);
    arr = [];
    return listOfObj.push(singleObj);


}

let arrtObjSum = [];
let objCompare = {};

objCompare.time;
objCompare.result;



let addCounter = 0;

// list = toObj();
//
// foreach(obj in list)
// {
//     action = obj.func;
//     time = obj.time;
//     pathToChack = obj.filePath;
//
//
//     switch (action) {
//
//         case 'ADDED':
//             fs.existsSync(pathToChack) ? addCounter++ : null;
//              addCounter++;
//              doWorkTest ();
//             break;
//
//         case 'CHANGED':
//            doWorkTest ();
//
//             break;
// }
//}
// doWorkTest (pathToChack)=>
// {
//           switch (action) {
//         case "DIRTY":
//             let fileExt = Path.extname(pathToChack);
//             if (fileExt === '.dirty'){
//
//             }
//
//             break;
//         // case REMOVED:
//         //
//         // break;
//
//         case "CLEAN":
//
//             break;
//
//         case "ERROR":
//
//             break;
//
//     }
// }




wTest();
setTimeout(function() {
    console.log('generate');
    gTest();
}, 190);


function spliter(strout) {debugger;
    toObj(strout.split(/(?:::!)|(?:!::)|(?:,)|(?:\n)/));
    //console.log(strout)
    console.log(strout.split(/(?:::!)|(?:!::)|(?:,)|(?:\n)/));
    return null;
}



//
// console.log(splitAdress[splitAdress.length - 1]);
// console.log(splitAdress[(splitAdress.length-1) /2]);
// console.log(splitAdress[0]);
//
// let pathToChack = upath.normalize(splitAdress[splitAdress.length - 1]);
//
// if(fs.existsSync(pathToChack)) {
//     console.log("SUKA");
// }
// else (console.log("eshyo bolshe"))
// console.log("splitAdress:"+splitAdress.filter('c:'));
// console.log(splitOper);
