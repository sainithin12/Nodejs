var buf1 = new Buffer('praveen');

var len = buf1.length;

var buf2 = new Buffer(len);


console.log(buf2);

buf1.copy(buf2);

console.log(buf2.toString());

console.log(Buffer.isBuffer(buf2));

console.log(Buffer.compare(buf1,buf2));

