var fruit = ['apple', 'orange', 'banana']

function fruity(fruitinput, vari) {
	var nummer = -1
	for (i = 0; i < vari.length; i++ ){
		if(fruitinput == vari[i]){
			nummer = 1
		} 
	}
	return nummer
}

console.log(fruity('orange', fruit))


var fruits = ['apple', 'orange', 'banana', 'banana']

function fruity(fruitinput, vari) {
	var locatie = []
	for (i = 0; i < vari.length; i++ ){
		if(fruitinput == vari[i]){
			locatie.push(i)
		}
	}
	return locatie
}

console.log(fruity('banana', fruits))

