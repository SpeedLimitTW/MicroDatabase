var fs = require('fs');
var md = require('./lib');


var ms = md('./Database','Test','Users');
var d2 = md('./Database','Test2','Users');

/*ms.insert({'name':'tessst'});
d2.insert([{"test":'testtoo'}]);
ms.insert({'name':'tessst'});
d2.insert([{"test":'testtoo'}]);*/
console.time('timer');
/*ms.find('test',function(row){
	console.log(row);
});*/
ms.findOne({age:16},function(match){
	console.log(match);
});
console.timeEnd('timer');