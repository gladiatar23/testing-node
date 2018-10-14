
const sumFile = 12;
const Path = require('path');

const generetFiles= `node ../index.js -g ${sumFile} -o c:/42`;
const watch ='node ../index.js -w c:/42/dirty'
const cmd = process.platform == 'win32'? 'dir' : 'ls';
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
   const cpG = spawn('node', ['../silverboltai-test-engineer-code-task-d3a40e01e814/index.js', '-g', sumFile, '-o', 'c:/42'],{stdio: [consoleWatch, consoleWatch, consoleWatch]});
    //(stdout.search(sumFile)>-1)? console.log('Pass') : console.log('Fail');
    os.cpuUsage(function(cpuUsage){
        console.log(`${Date.now()} CPU usege: ${Math.round (cpuUsage * 100)/100}%\nMemory Usege: ${Math.round (memoryUsed * 100)/100} mb`);
    });
    setTimeout(function() {
        // console.table(listOfObj,['a','b','c']);
        console.log('Test end');
        console.log('json'+JSON.stringify(listOfObj,null, 4));
        // console.log('util'+ util.inpect(listOfObj , ({breakLength: Infinity}));
        console.log('SUKA\n'+ util.inspect(listOfObj, { compact: true, depth: Infinity, breakLength: Infinity }, { showHidden: true }));
        // listOfObj.items.map(function (item) {
        //     console.log(listOfObj.item.cid);
        // });
        console.log(JSON.stringify(listOfObj));
        cpG.kill();
    }, 30000);

};

let result = {};
wTest =()=>{
let cpW = spawn('node', ['../silverboltai-test-engineer-code-task-d3a40e01e814/index.js', '-w', 'c:/42'], {stdout: [consoleWatch, consoleWatch, result]});
    cpW.stdout.on('data', function(data) {

        dataToObj = spliter(data.toString()) ;
    });
    os.cpuUsage(function(cpuUsage){
        console.log(`${Date.now()} CPU usege: ${Math.round (cpuUsage * 100)/100}%\nMemory Usege: ${Math.round (memoryUsed * 100)/100} mb`);
        setTimeout(function() {
    console.log('End of the Watcher');

    cpW.kill();
}, 19999);

    });
}


let listOfObj = [];
function toObj(arr){

    let singleObj = {};
    //singleObj['line'] = i;
    //singleObj.line = i;
    for (let i = 0, j=0; i < arr.length ; ++i, j++)
        if ( (arr[i] !== undefined) && (arr[i] !== '::!') && (arr[i] !== '!::') ){
            //singleObj[j]=arr[i] ;
            singleObj.filePath = upath.normalize(arr[arr.length - 1]);
            singleObj.time = arr[0];
            singleObj.func = arr[(arr.length-1) /2];
            console.log(singleObj);

        }
        else --j;
    console.log(singleObj);
    return listOfObj.push(singleObj);
    // const category = [arr];
    //
    // category.map(function (arr) {

    //     singleObj['filePath'] =upath.normalize(arr[arr.length - 1]);
    //     singleObj['time'] = arr[0];
    //     singleObj['func'] = arr[(arr.length-1) /2];
    //     console.log(singleObj);
    //
    //     return listOfObj+=singleObj;
    //
    // })

}

// list = toObj();
// foreach(obj in list)
// {
//     action = obj.func;
//     if (action == "CLEAN") {
//         continue;
//     } else if (action == "DIRTY") {
//        doDirtyTest();
//     } else if(action == "SOME"){
//
//     }
// }





wTest();
gTest();

function spliter(strout) {
    let splitAdress = toObj(strout.split(/(::!)|(!::)/));

    // console.log(splitAdress.cid);

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





