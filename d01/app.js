function greet(callback) {

	const user = {
		firstName: "John",
		lastName: "Wick",
		salutation: "Mr."
	}

	callback(user);

}

function formal(user){
	console.log("Greetings, " + user.salutation + " " + user.lastName);
	console.log(`Greetings, ${user.salutation} ${user.lastName}`);

}


function threat(user){
	console.log("Prepare do die, " + user.salutation + " " + user.lastName);
	console.log(`Prepare do die, ${user.salutation} ${user.lastName}`);

}


greet(formal);
greet(threat)



