var fs = require("fs");
var obj = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
if(process.argv[2]=='node') obj['engines'] = {"node":"^4.4.5"};
else if(process.argv[2]=='python') obj['engines'] = {"python":"^2.7.6"};
var str = JSON.stringify(obj,null,4);
fs.writeFile('./package.json',str,'utf8');