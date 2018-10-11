// // Pizza CLI test: Error testing
// const expect = require('chai').expect;
// const cmd = require('./cmd');
// describe('The pizza CLI', () => {
//     it('should print the correct error', async () => {
//         try {
//           const b =   await cmd.create('node ../silverboltai-test-engineer-code-task-d3a40e01e814/index.js')
//           debugger;
//          const c = await b.execute('-g', '20', '-o', 'c:/42');
//           debugger;
//         } catch(err) {
//             debugger;
//             console.log(err.message);
//             expect(err.trim()).to.equal(
//                 '  Invalid option --sausage'
//             );
//         }
//     });
// });






const sumFile = 12;
const Path = require('path');
const exec = require('child_process').exec;
const generetFiles= `node ../index.js -g ${sumFile} -o c:/42`;
const watch ='node ../index.js -w c:/42/dirty'
const dir1 = Path.join('./clean/');
const cmd = process.platform == 'win32'? 'dir' : 'ls';

const os=require('os-utils');
const memoryUsed = process.memoryUsage().heapUsed / 1024 / 1024;
let now = new Date().getTime();

const fs = require('fs');
const cp = require('child_process');


fs.unlinkSync("./consoleWatch.txt");

let consoleWatch = fs.openSync("./consoleWatch.txt", "a");
const test1 = cp.spawnSync;
let test2 = cp.spawnSync;
process.stdin.setEncoding('utf8');

gTest= ()=>{
    cp.spawn('node', ['../silverboltai-test-engineer-code-task-d3a40e01e814/index.js', '-g', sumFile, '-o', 'c:/42'],{stdio: [consoleWatch, consoleWatch, consoleWatch]});
//(stdout.search(sumFile)>-1)? console.log('Pass') : console.log('Fail');
    os.cpuUsage(function(cpuUsage){
        console.log(`${now} CPU usege: ${Math.round (cpuUsage * 100)/100}%\nMemory Usege: ${Math.round (memoryUsed * 100)/100} mb`);
    });
    //(process.stdout.write('first test end'));
    return;
}

wTest = ()=>{
    cp.spawn('node', ['../silverboltai-test-engineer-code-task-d3a40e01e814/index.js', '-w', 'c:/42'], {stdio: [consoleWatch, consoleWatch, consoleWatch]});
    os.cpuUsage(function(cpuUsage){
        console.log(`${now} CPU usege: ${Math.round (cpuUsage * 100)/100}%\nMemory Usege: ${Math.round (memoryUsed * 100)/100} mb`);
    });

    return;
}


wTest();
gTest();






// let test2 = cp.spawnSync('node', ['../silverboltai-test-engineer-code-task-d3a40e01e814/index.js', '-w', 'c:/42'], {stdio: [consoleWatch, consoleWatch, consoleWatch]});
// os.cpuUsage(function(cpuUsage){
//     console.log(`${now} CPU usege: ${Math.round (cpuUsage * 100)/100}%\nMemory Usege: ${Math.round (memoryUsed * 100)/100} mb`);
// });

const lineReader = require('readline').createInterface({
    input: require('fs').createReadStream("./consoleWatch.txt")
});

lineReader.on('line', function (line) {
    console.log('Line from file:', line);
});
//


// const test1= exec(generetFiles, testCommand);
//const test2=  exec(watch, testCommand);



