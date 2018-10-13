
const sumFile = 12;
const Path = require('path');

const generetFiles= `node ../index.js -g ${sumFile} -o c:/42`;
const watch ='node ../index.js -w c:/42/dirty'
const cmd = process.platform == 'win32'? 'dir' : 'ls';
const util = require('util')
const os=require('os-utils');
const memoryUsed = process.memoryUsage().heapUsed / 1024 / 1024;
//let now = new Date().getTime();
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
        debugger;
        // console.table(listOfObj,['a','b','c']);
        // console.log('Test');
        // console.log('json'+JSON.stringify({listOfObj}));
        cpG.kill();
    }, 10000);

};

let result = {};
wTest =()=>{
let cpW = spawn('node', ['../silverboltai-test-engineer-code-task-d3a40e01e814/index.js', '-w', 'c:/42'], {stdout: [consoleWatch, consoleWatch, result]});
    cpW.stdout.on('data', function(data) {
        // console.log(data.toString());
        dataToObj = spliter(data.toString()) ;
    });
    os.cpuUsage(function(cpuUsage){
        console.log(`${Date.now()} CPU usege: ${Math.round (cpuUsage * 100)/100}%\nMemory Usege: ${Math.round (memoryUsed * 100)/100} mb`);
        setTimeout(function() {
    console.log('End of the Watcher');

    cpW.kill();
}, 9999);

    });
}
let listOfObj = [];
function toObj(arr){
    let singleObj ={};
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


    for (let i = 0, j=0; i < arr.length ; ++i, j++)
        if ( (arr[i] !== undefined) && (arr[i] !== '::!') && (arr[i] !== '!::') ){
            singleObj[j]=arr[i] ;
    }
        else --j;
    console.log(singleObj);
        return listOfObj+=singleObj;
}




wTest();
gTest();

function spliter(strout) {
    let splitAdress = toObj(strout.split(/(::!)|(!::)/));
    // console.log(splitAdress);

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

//var seconds = process.argv[2] || 2;

//wTest.on('exit', () => { console.log('Stopped'); clearTimeout(timeout); });

// let test2 = cp.spawnSync('node', ['../silverboltai-test-engineer-code-task-d3a40e01e814/index.js', '-w', 'c:/42'], {stdio: [consoleWatch, consoleWatch, consoleWatch]});
// os.cpuUsage(function(cpuUsage){
//     console.log(`${now} CPU usege: ${Math.round (cpuUsage * 100)/100}%\nMemory Usege: ${Math.round (memoryUsed * 100)/100} mb`);
// });
//
// const lineReader = require('readline').createInterface({
//     input: require('fs').createReadStream("./consoleWatch.txt")
// });

// lineReader.on('line', function (line) {
//     console.log('Line from file:', line);
// });


// const test1= exec(generetFiles, testCommand);
//const test2=  exec(watch, testCommand);



