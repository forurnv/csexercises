
const fs = require('fs');

const greet = fs.readFileSync(__dirname + '/assets/greet.txt', 'utf8');
console.log(greet);


const greet2 = fs.readFile(__dirname + '/assets/greet.txt', function(err, data) {
	
	console.log(data);

});


console.log("done!");


