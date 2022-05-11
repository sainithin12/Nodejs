var buf1 = new Buffer('Praveen');

var buf2 = new Buffer('Hegde');

var buf3 = Buffer.concat([buf1,buf2]);

console.log(buf3.toString());


node 