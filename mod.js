const os = require("os");
console.log(`The current system is on for ${os.uptime()} seconds `);
const currentos={
    version:os.version(),
    type: os.type(),
    release: os.release(),
    currentmem: os.freemem(),
    totmem: os.totalmem(),

}
console.log(currentos);

//PATH
const path=require("path");
const filepath= path.join('/content','subfolder','test.txt');
const base=path.basename(filepath);
console.log(path.sep);
console.log(filepath);
console.log(base);
const absolute=path.resolve(__dirname, 'content', 'subfolder','test.txt');
console.log(absolute);

//FS moduel
const readfilesync=require('fs');
const writefilesync=require('fs');
const fs=require('fs');
const first=fs.readFileSync('./content/first.txt','utf8');
console.log(first);
const second=fs.writeFileSync('./content/second.txt',"AMOG US");
//async
fs.readFile('./content/first.txt','utf8',(err, res)=>{
    if(err){
        console.log(err);
        console.error(err);
        return;
    }
    const f=res;
    fs.readFile('./content/second.txt','utf8',(req,res)=>{
        if(err){
            console.log(err);
            console.error(err);
            return;
        }
        const s=res;
        fs.writeFile('./content/subfolder/async-read.txt',"What is up my dude here is and ",(err, res)=>{
            if(err){
                console.log(err);
                console.error(err);
                return;
            }
            console.log(res);
        });
    });
});

//testing out installed moduels
//lodash
const lodash=require('lodash');
const arr=[1,[2,[3,[4]]]];
const newarr=lodash.flattenDeep(arr);
console.log(newarr);